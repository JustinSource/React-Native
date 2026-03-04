import { ScaColors } from '@/constants/theme';
import { Image } from 'expo-image';
import { router, useLocalSearchParams } from 'expo-router';
import {
    ArrowLeft,
    Award,
    CheckCircle2,
    Droplets,
    Factory,
    Heart,
    Leaf,
    Lock,
    MapPin,
    MessageSquare,
    Package,
    Recycle,
    ShieldCheck,
    Star,
    Truck,
    Wind,
    X
} from 'lucide-react-native';
import React, { useState } from 'react';
import {
    Alert,
    Dimensions,
    Modal,
    Platform,
    SafeAreaView,
    ScrollView,
    Share,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import Svg, { Circle, Line, Polygon } from 'react-native-svg';

const { width } = Dimensions.get('window');

// === MOCK DATA ===
const MOCK_PRODUCT = {
    id: 'SCA-123456',
    name: 'Organic Cotton T-Shirt',
    brand: 'EcoWear Co.',
    price: '299.000₫',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPQRJTcQhpg_0vW0vgBgSNn72h26aoRIHqgakL-aXQpmZ5igBK_ZhS7yRwjxLXt11JK8vvZ4CYynoyHi3ivzKA02ANU6vSGOd_XNeslUOmunksZRqBPQQN3sfw0JT4NJEtUSnf2HWRuInkVcpOmZiZ23O8YANAfRqLUf7i6fHO5B-lqLOeEcaHJpJqJvSHSDFtJtN2w_WZPORp4ixCzbz27x3cPka7oOQvEPRQinFUoKOMYzNIVIC9yaN19usvADwrCS3IdVtgXn0',
    ecoScore: 92,
    rating: 4.8,
    reviewCount: 124,
    category: 'ECO-FRIENDLY',
    // These come from purchase record (null if not yet purchased)
    hasPurchase: false,
    purchasedFrom: null as string | null,
    purchasedDate: null as string | null,
    sustainabilityScores: { quality: 4, transparency: 5, sustainability: 3, labor: 4, community: 2 },
    timeline: [
        { title: 'Raw Materials', subtitle: 'Organic Cotton Farms, India', description: '100% Traceable', Icon: Leaf, completed: true },
        { title: 'Production', subtitle: 'Solar Powered Factory, Portugal', description: 'Fair Labor Certified', Icon: Factory, completed: true },
        { title: 'Transport', subtitle: 'Low Emission Ocean Freight', description: 'Carbon Neutral Shipping', Icon: Truck, completed: true },
        { title: 'Retail', subtitle: 'Local Distribution, Berlin', description: 'Sold at SCA Flagship', Icon: Package, completed: true },
    ],
    certifications: [
        { name: 'GOTS Organic', Icon: Leaf, color: '#10B981', bg: '#ECFDF5' },
        { name: 'Fair Trade', Icon: ShieldCheck, color: '#3B82F6', bg: '#EFF6FF' },
        { name: 'Circular Design', Icon: Recycle, color: '#8B5CF6', bg: '#F5F3FF' },
        { name: 'Carbon Neutral', Icon: Wind, color: '#6B7280', bg: '#F9FAFB' },
    ],
    reviews: [
        { user: 'Minh T.', rating: 5, date: '10/03/2024', comment: 'Chất lượng tuyệt vời, đúng như mô tả. Vải cotton rất mềm và thoáng.', avatar: '🧑' },
        { user: 'Lan P.', rating: 4, date: '05/03/2024', comment: 'Sản phẩm bền vững thực sự. Rất hài lòng với thương hiệu này.', avatar: '👩' },
    ],
    impact: { water: '2,450L', co2: '3.2kg' },
};

// === RADAR CHART ===
const RadarChart = ({ scores }: { scores: typeof MOCK_PRODUCT.sustainabilityScores }) => {
    const size = 160;
    const center = size / 2;
    const maxRadius = center - 20;
    const axes = [
        { label: 'QUALITY', value: scores.quality },
        { label: 'SUSTAIN', value: scores.sustainability },
        { label: 'LABOR', value: scores.labor },
        { label: 'COMMUNITY', value: scores.community },
        { label: 'TRANSPARENCY', value: scores.transparency },
    ];
    const total = axes.length;
    const getPoint = (index: number, radius: number) => {
        const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
        return { x: center + radius * Math.cos(angle), y: center + radius * Math.sin(angle) };
    };
    const gridPoints = (frac: number) =>
        axes.map((_, i) => getPoint(i, maxRadius * frac)).map(p => `${p.x},${p.y}`).join(' ');
    const dataPoints = axes.map((ax, i) => getPoint(i, maxRadius * (ax.value / 5)));
    const dataPolygon = dataPoints.map(p => `${p.x},${p.y}`).join(' ');
    return (
        <View style={{ width: size + 80, height: size + 60, alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <Svg width={size} height={size}>
                {[0.2, 0.4, 0.6, 0.8, 1.0].map((frac, i) => (
                    <Polygon key={i} points={gridPoints(frac)} fill="none" stroke="#E5E7EB" strokeWidth="1" />
                ))}
                {axes.map((_, i) => {
                    const p = getPoint(i, maxRadius);
                    return <Line key={i} x1={center} y1={center} x2={p.x} y2={p.y} stroke="#E5E7EB" strokeWidth="1" />;
                })}
                <Polygon points={dataPolygon} fill={ScaColors.primary + '33'} stroke={ScaColors.primary} strokeWidth="2" />
                {dataPoints.map((p, i) => (
                    <Circle key={i} cx={p.x} cy={p.y} r="4" fill={ScaColors.primary} />
                ))}
            </Svg>
            {axes.map((ax, i) => {
                const p = getPoint(i, maxRadius + 18);
                return (
                    <Text key={i} style={{ position: 'absolute', left: (size / 2 + 40) + p.x - center - 28, top: (size / 2 + 30) + p.y - center - 8, fontSize: 9, fontWeight: '700' as const, color: '#6B7280', width: 56, textAlign: 'center' as const }}>
                        {ax.label}
                    </Text>
                );
            })}
        </View>
    );
};

// === REVIEW MODAL ===
const ReviewModal = ({ visible, onClose }: { visible: boolean; onClose: () => void }) => {
    const [ratings, setRatings] = useState({ quality: 4, transparency: 5, sustainability: 3, labor: 4, community: 2 });
    const [comment, setComment] = useState('');
    const criteria = [
        { key: 'quality' as const, label: 'Chất lượng', desc: 'Nhà máy có đảm bảo an toàn không?' },
        { key: 'transparency' as const, label: 'Minh bạch', desc: 'Thông tin nguồn gốc rõ ràng?' },
        { key: 'sustainability' as const, label: 'Bền vững', desc: 'Quy trình sản xuất thân thiện môi trường?' },
        { key: 'labor' as const, label: 'Lao động', desc: 'Điều kiện làm việc cho nhân viên?' },
        { key: 'community' as const, label: 'Cộng đồng', desc: 'Đóng góp cho phát triển địa phương?' },
    ];
    return (
        <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose}>
            <View style={styles.modalOverlay}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalHandle} />
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalTitle}>Đánh giá & Nhận xét</Text>
                        <TouchableOpacity onPress={onClose} style={styles.modalClose}>
                            <X size={20} color="#64748B" />
                        </TouchableOpacity>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {criteria.map(crit => {
                            const val = ratings[crit.key];
                            return (
                                <View key={crit.key} style={styles.criterionRow}>
                                    <View style={styles.criterionHeader}>
                                        <View>
                                            <Text style={styles.criterionLabel}>{crit.label}</Text>
                                            <Text style={styles.criterionDesc}>{crit.desc}</Text>
                                        </View>
                                        <Text style={styles.criterionScore}>{val}/5</Text>
                                    </View>
                                    <View style={styles.sliderWrapper}>
                                        <View style={styles.sliderTrack}>
                                            <View style={[styles.sliderFill, { width: `${(val / 5) * 100}%` as any }]} />
                                            <View style={[styles.sliderThumb, { left: `${(val / 5) * 100}%` as any }]} />
                                        </View>
                                        <View style={styles.sliderInvisibleTouchArea}>
                                            {[1, 2, 3, 4, 5].map(n => (
                                                <TouchableOpacity key={n} style={{ flex: 1, height: '100%' }} onPress={() => setRatings(r => ({ ...r, [crit.key]: n }))} />
                                            ))}
                                        </View>
                                    </View>
                                </View>
                            );
                        })}
                        <View style={styles.commentSection}>
                            <Text style={styles.commentLabel}>Nhận xét của bạn</Text>
                            <TextInput style={styles.commentInput} placeholder="Chia sẻ thêm về trải nghiệm hoặc góp ý của bạn..." placeholderTextColor="#9CA3AF" multiline numberOfLines={4} value={comment} onChangeText={setComment} textAlignVertical="top" />
                        </View>
                        <TouchableOpacity style={styles.submitBtn} onPress={onClose}>
                            <Text style={styles.submitBtnText}>Gửi đánh giá</Text>
                        </TouchableOpacity>
                        <View style={{ height: 30 }} />
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
};

// === VERIFIED PURCHASE MODAL ===
const PurchaseConfirmModal = ({ visible, onClose, onConfirm }: { visible: boolean; onClose: () => void; onConfirm: () => void }) => (
    <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose}>
        <View style={styles.modalOverlay}>
            <View style={[styles.modalContainer, { paddingBottom: 32 }]}>
                <View style={styles.modalHandle} />
                <View style={{ alignItems: 'center', paddingVertical: 16 }}>
                    <View style={{ width: 64, height: 64, borderRadius: 32, backgroundColor: '#ECFDF5', justifyContent: 'center', alignItems: 'center', marginBottom: 16 }}>
                        <ShieldCheck size={32} color={ScaColors.primary} />
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: '800', color: '#111827', marginBottom: 8 }}>Xác nhận đã mua hàng</Text>
                    <Text style={{ fontSize: 14, color: '#6B7280', textAlign: 'center', lineHeight: 20, paddingHorizontal: 16 }}>
                        Bạn xác nhận đã mua sản phẩm này. Sau khi xác nhận, bạn sẽ được {'\n'}
                        <Text style={{ color: ScaColors.primary, fontWeight: '700' }}>tích điểm</Text> và có thể{' '}
                        <Text style={{ color: ScaColors.primary, fontWeight: '700' }}>đánh giá sản phẩm</Text> để bảo vệ môi trường.
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', gap: 12, marginTop: 16, paddingHorizontal: 8 }}>
                    <TouchableOpacity style={[styles.purchaseActionBtn, { backgroundColor: '#F3F4F6', flex: 1 }]} onPress={onClose}>
                        <Text style={{ fontWeight: '700', color: '#374151', fontSize: 15 }}>Huỷ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.purchaseActionBtn, { backgroundColor: ScaColors.primary, flex: 1.5 }]} onPress={onConfirm}>
                        <ShieldCheck size={18} color="#fff" />
                        <Text style={{ fontWeight: '700', color: '#fff', fontSize: 15 }}>Xác nhận mua hàng</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
);

// === MAIN SCREEN ===
export default function ProductPassportScreen() {
    const { id } = useLocalSearchParams();
    const [activeTab, setActiveTab] = useState('Journey');
    const [isFavorite, setIsFavorite] = useState(false);
    const [showReviewModal, setShowReviewModal] = useState(false);
    const [showPurchaseModal, setShowPurchaseModal] = useState(false);
    const [isPurchased, setIsPurchased] = useState(MOCK_PRODUCT.hasPurchase);
    const [purchaseInfo, setPurchaseInfo] = useState({
        from: MOCK_PRODUCT.purchasedFrom,
        date: MOCK_PRODUCT.purchasedDate,
    });

    const TABS = ['Journey', 'Impact', 'Reviews', 'Certification'];

    const handleConfirmPurchase = () => {
        setShowPurchaseModal(false);
        setIsPurchased(true);
        setPurchaseInfo({ from: 'SCA Flagship Store, Berlin', date: new Date().toLocaleDateString('vi-VN') });
        Alert.alert('🎉 Xác nhận thành công!', 'Bạn đã nhận +50 Impact Points. Hãy chia sẻ đánh giá để bảo vệ môi trường!');
    };

    const handleShare = async () => {
        await Share.share({ message: `Tôi vừa kiểm tra sản phẩm bền vững: ${MOCK_PRODUCT.name} - Eco Score: ${MOCK_PRODUCT.ecoScore}/100 🌿 #SCA #SustainableConsumer` });
    };

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>

                {/* === HERO IMAGE === */}
                <View style={styles.heroContainer}>
                    <Image source={{ uri: MOCK_PRODUCT.image }} style={styles.heroImage} contentFit="cover" />
                    <View style={styles.heroGradient} />
                    <SafeAreaView style={styles.headerActions}>
                        <TouchableOpacity style={styles.iconBtn} onPress={() => router.back()}>
                            <ArrowLeft color="#111827" size={22} />
                        </TouchableOpacity>
                        <View style={styles.headerRight}>
                            <TouchableOpacity style={styles.iconBtn} onPress={() => setIsFavorite(!isFavorite)}>
                                <Heart color={isFavorite ? '#EF4444' : '#111827'} size={22} fill={isFavorite ? '#EF4444' : 'transparent'} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconBtn} onPress={handleShare}>
                                <ShieldCheck color="#111827" size={22} />
                            </TouchableOpacity>
                        </View>
                    </SafeAreaView>
                    <View style={styles.heroInfoOverlay}>
                        <View style={styles.categoryBadge}>
                            <Text style={styles.categoryBadgeText}>{MOCK_PRODUCT.category}</Text>
                        </View>
                        <Text style={styles.heroProductName}>{MOCK_PRODUCT.name}</Text>
                        <View style={styles.heroRatingRow}>
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={13} color="#F59E0B" fill="#F59E0B" />)}
                            <Text style={styles.heroRatingText}>{MOCK_PRODUCT.rating} ({MOCK_PRODUCT.reviewCount} reviews)</Text>
                        </View>
                    </View>
                </View>

                {/* === BADGES ROW === */}
                <View style={styles.badgeRow}>
                    <View style={styles.verifiedBadge}>
                        <ShieldCheck color={ScaColors.primary} size={15} />
                        <Text style={styles.verifiedText}>Verified Passport</Text>
                    </View>
                    <View style={styles.ecoScoreBadge}>
                        <Leaf size={13} color={ScaColors.primary} fill={ScaColors.primary} />
                        <Text style={styles.ecoScoreText}>Eco Score: {MOCK_PRODUCT.ecoScore}</Text>
                    </View>
                </View>

                {/* === PURCHASE STATUS CARD === */}
                {isPurchased ? (
                    <View style={styles.purchasedCard}>
                        <CheckCircle2 size={20} color={ScaColors.primary} />
                        <View style={{ flex: 1 }}>
                            <Text style={styles.purchasedTitle}>Đã mua tại: <Text style={{ color: ScaColors.primary }}>{purchaseInfo.from}</Text></Text>
                            <Text style={styles.purchasedDate}>Ngày mua: {purchaseInfo.date}</Text>
                        </View>
                        <View style={styles.pointsBadge}>
                            <Text style={styles.pointsText}>+50 pts</Text>
                        </View>
                    </View>
                ) : (
                    <TouchableOpacity style={styles.verifyPurchaseCard} onPress={() => setShowPurchaseModal(true)}>
                        <View style={styles.verifyPurchaseLeft}>
                            <ShieldCheck size={22} color={ScaColors.primary} />
                            <View>
                                <Text style={styles.verifyPurchaseTitle}>Verified Purchase</Text>
                                <Text style={styles.verifyPurchaseSubtitle}>Xác nhận mua để tích điểm & đánh giá</Text>
                            </View>
                        </View>
                        <View style={styles.verifyArrow}>
                            <Text style={{ color: ScaColors.primary, fontWeight: '700', fontSize: 18 }}>›</Text>
                        </View>
                    </TouchableOpacity>
                )}

                {/* === TABS === */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 16 }} contentContainerStyle={styles.tabsContainer}>
                    {TABS.map(tab => (
                        <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)} style={[styles.tabBtn, activeTab === tab && styles.tabBtnActive]}>
                            <Text style={[styles.tabBtnText, activeTab === tab && styles.tabBtnTextActive]}>{tab}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                <View style={styles.tabContent}>

                    {/* === JOURNEY === */}
                    {activeTab === 'Journey' && (
                        <View>
                            <Text style={styles.tabSectionTitle}>Product Journey</Text>
                            {MOCK_PRODUCT.timeline.map((item, index) => {
                                const Icon = item.Icon;
                                return (
                                    <View key={index} style={styles.timelineItem}>
                                        <View style={styles.timelineLeft}>
                                            <View style={[styles.timelineNode, item.completed && styles.timelineNodeActive]}>
                                                <Icon size={14} color={item.completed ? '#fff' : '#9CA3AF'} />
                                            </View>
                                            {index < MOCK_PRODUCT.timeline.length - 1 && (
                                                <View style={[styles.timelineLink, item.completed && styles.timelineLinkActive]} />
                                            )}
                                        </View>
                                        <View style={styles.timelineRight}>
                                            <Text style={styles.timelineTitle}>{item.title}</Text>
                                            <View style={styles.timelineLocationRow}>
                                                <MapPin size={12} color="#6B7280" />
                                                <Text style={styles.timelineSubtitle}>{item.subtitle}</Text>
                                            </View>
                                            <View style={styles.timelineDescBadge}>
                                                <CheckCircle2 size={11} color={ScaColors.primary} />
                                                <Text style={styles.timelineDescText}>{item.description}</Text>
                                            </View>
                                        </View>
                                    </View>
                                );
                            })}
                        </View>
                    )}

                    {/* === IMPACT === */}
                    {activeTab === 'Impact' && (
                        <View>
                            <Text style={styles.tabSectionTitle}>Environmental Impact</Text>
                            <View style={styles.impactGrid}>
                                <View style={styles.impactCard}>
                                    <Droplets size={22} color="#3B82F6" />
                                    <Text style={styles.impactValue}>{MOCK_PRODUCT.impact.water}</Text>
                                    <Text style={styles.impactLabel}>WATER SAVED</Text>
                                </View>
                                <View style={styles.impactCard}>
                                    <Wind size={22} color={ScaColors.primary} />
                                    <Text style={styles.impactValue}>{MOCK_PRODUCT.impact.co2}</Text>
                                    <Text style={styles.impactLabel}>CO2 REDUCED</Text>
                                </View>
                            </View>
                            <Text style={[styles.tabSectionTitle, { marginTop: 24 }]}>Sustainability Performance</Text>
                            <View style={styles.radarContainer}>
                                <RadarChart scores={MOCK_PRODUCT.sustainabilityScores} />
                                <Text style={styles.radarRankText}>Overall Rank: Top 5% of Industry</Text>
                            </View>
                        </View>
                    )}

                    {/* === REVIEWS (locked until purchased) === */}
                    {activeTab === 'Reviews' && (
                        <View>
                            <View style={styles.reviewSummary}>
                                <Text style={styles.overallRating}>{MOCK_PRODUCT.rating}</Text>
                                <View>
                                    <View style={styles.starsRow}>
                                        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={15} color="#F59E0B" fill="#F59E0B" />)}
                                    </View>
                                    <Text style={styles.reviewCount}>{MOCK_PRODUCT.reviewCount} đánh giá</Text>
                                </View>
                            </View>

                            {isPurchased ? (
                                <TouchableOpacity style={styles.writeReviewBtn} onPress={() => setShowReviewModal(true)}>
                                    <MessageSquare size={18} color={ScaColors.primary} />
                                    <Text style={styles.writeReviewText}>Viết đánh giá của bạn (+10 pts)</Text>
                                </TouchableOpacity>
                            ) : (
                                <View style={styles.reviewLockedCard}>
                                    <Lock size={20} color="#9CA3AF" />
                                    <View style={{ flex: 1 }}>
                                        <Text style={styles.reviewLockedTitle}>Cần xác nhận mua hàng</Text>
                                        <Text style={styles.reviewLockedSubtitle}>Nhấn "Verified Purchase" để mở khoá tính năng đánh giá và tích điểm.</Text>
                                    </View>
                                </View>
                            )}

                            <View style={{ gap: 12, marginTop: 16 }}>
                                {MOCK_PRODUCT.reviews.map((r, i) => (
                                    <View key={i} style={styles.reviewCard}>
                                        <View style={styles.reviewCardHeader}>
                                            <Text style={{ fontSize: 26 }}>{r.avatar}</Text>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.reviewUser}>{r.user}</Text>
                                                <View style={styles.starsRow}>
                                                    {[1, 2, 3, 4, 5].map(j => (
                                                        <Star key={j} size={11} color="#F59E0B" fill={j <= r.rating ? '#F59E0B' : 'transparent'} />
                                                    ))}
                                                </View>
                                            </View>
                                            <Text style={styles.reviewDate}>{r.date}</Text>
                                        </View>
                                        <Text style={styles.reviewComment}>{r.comment}</Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                    )}

                    {/* === CERTIFICATION === */}
                    {activeTab === 'Certification' && (
                        <View>
                            <Text style={styles.tabSectionTitle}>Certifications</Text>
                            <Text style={styles.certSubtitle}>Sản phẩm đã được xác minh và chứng nhận bởi các tổ chức quốc tế.</Text>
                            {MOCK_PRODUCT.certifications.map((cert, i) => {
                                const Icon = cert.Icon;
                                return (
                                    <View key={i} style={styles.certCard}>
                                        <View style={[styles.certIconBox, { backgroundColor: cert.bg }]}>
                                            <Icon size={22} color={cert.color} />
                                        </View>
                                        <View style={styles.certInfo}>
                                            <Text style={styles.certName}>{cert.name}</Text>
                                            <Text style={styles.certVerified}>Đã xác minh ✓</Text>
                                        </View>
                                        <View style={[styles.certBadge, { backgroundColor: cert.bg }]}>
                                            <Text style={[styles.certBadgeText, { color: cert.color }]}>Hợp lệ</Text>
                                        </View>
                                    </View>
                                );
                            })}
                            <View style={styles.certFooterCard}>
                                <Award size={20} color="#F59E0B" />
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.certFooterTitle}>SCA Verified Score</Text>
                                    <Text style={styles.certFooterDesc}>Sản phẩm đạt {MOCK_PRODUCT.ecoScore}/100 điểm bền vững theo tiêu chuẩn SCA.</Text>
                                </View>
                            </View>
                        </View>
                    )}
                </View>
            </ScrollView>

            {/* === MODALS === */}
            <ReviewModal visible={showReviewModal} onClose={() => setShowReviewModal(false)} />
            <PurchaseConfirmModal
                visible={showPurchaseModal}
                onClose={() => setShowPurchaseModal(false)}
                onConfirm={handleConfirmPurchase}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FFFFFF' },
    heroContainer: { width, height: width * 0.85, position: 'relative' },
    heroImage: { width: '100%', height: '100%' },
    heroGradient: { position: 'absolute', bottom: 0, left: 0, right: 0, height: '60%', backgroundColor: 'rgba(0,0,0,0.38)' },
    headerActions: {
        position: 'absolute', top: 0, left: 0, right: 0, flexDirection: 'row',
        justifyContent: 'space-between', paddingHorizontal: 20,
        paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 10 : 10,
    },
    headerRight: { flexDirection: 'row', gap: 10 },
    iconBtn: { width: 42, height: 42, backgroundColor: 'rgba(255,255,255,0.92)', borderRadius: 21, justifyContent: 'center', alignItems: 'center' },
    heroInfoOverlay: { position: 'absolute', bottom: 0, left: 0, right: 0, paddingHorizontal: 20, paddingBottom: 18, paddingTop: 40 },
    categoryBadge: { alignSelf: 'flex-start', backgroundColor: ScaColors.primary, paddingHorizontal: 10, paddingVertical: 3, borderRadius: 6, marginBottom: 8 },
    categoryBadgeText: { color: '#fff', fontSize: 10, fontWeight: '700', letterSpacing: 0.8 },
    heroProductName: { fontSize: 24, fontWeight: '800', color: '#fff', marginBottom: 8 },
    heroRatingRow: { flexDirection: 'row', alignItems: 'center', gap: 3 },
    heroRatingText: { color: '#fff', fontSize: 13, fontWeight: '600', marginLeft: 4 },
    badgeRow: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#F3F4F6' },
    verifiedBadge: { flexDirection: 'row', alignItems: 'center', gap: 5, backgroundColor: '#ECFDF5', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, borderWidth: 1, borderColor: ScaColors.primary + '44' },
    verifiedText: { color: ScaColors.primary, fontWeight: '700', fontSize: 13 },
    ecoScoreBadge: { flexDirection: 'row', alignItems: 'center', gap: 5, backgroundColor: '#ECFDF5', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20 },
    ecoScoreText: { fontSize: 13, fontWeight: '700', color: '#059669' },
    purchasedCard: { flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, marginTop: 14, backgroundColor: '#ECFDF5', borderRadius: 14, padding: 14, gap: 12, borderWidth: 1, borderColor: ScaColors.primary + '44' },
    purchasedTitle: { fontSize: 13, fontWeight: '700', color: '#111827' },
    purchasedDate: { fontSize: 12, color: '#6B7280', marginTop: 2 },
    pointsBadge: { backgroundColor: ScaColors.primary, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10 },
    pointsText: { color: '#fff', fontSize: 12, fontWeight: '700' },
    verifyPurchaseCard: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 14, backgroundColor: '#F9FAFB', borderRadius: 14, padding: 16, borderWidth: 1.5, borderColor: ScaColors.primary + '88', borderStyle: 'dashed' },
    verifyPurchaseLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
    verifyPurchaseTitle: { fontSize: 14, fontWeight: '800', color: ScaColors.primary },
    verifyPurchaseSubtitle: { fontSize: 12, color: '#6B7280', marginTop: 2 },
    verifyArrow: { width: 32, height: 32, borderRadius: 16, backgroundColor: ScaColors.primary + '22', justifyContent: 'center', alignItems: 'center' },
    tabsContainer: { paddingHorizontal: 20, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#F3F4F6' },
    tabBtn: { paddingVertical: 12, marginRight: 24, borderBottomWidth: 2.5, borderBottomColor: 'transparent' },
    tabBtnActive: { borderBottomColor: ScaColors.primary },
    tabBtnText: { fontSize: 14, fontWeight: '600', color: '#9CA3AF' },
    tabBtnTextActive: { color: ScaColors.primary },
    tabContent: { paddingHorizontal: 20, paddingTop: 20 },
    tabSectionTitle: { fontSize: 18, fontWeight: '800', color: '#111827', marginBottom: 16 },
    timelineItem: { flexDirection: 'row' },
    timelineLeft: { width: 36, alignItems: 'center' },
    timelineNode: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#F3F4F6', justifyContent: 'center', alignItems: 'center', zIndex: 1 },
    timelineNodeActive: { backgroundColor: ScaColors.primary },
    timelineLink: { width: 2, flex: 1, backgroundColor: '#E5E7EB', marginVertical: 4, minHeight: 28 },
    timelineLinkActive: { backgroundColor: ScaColors.primary + '55' },
    timelineRight: { flex: 1, paddingLeft: 14, paddingBottom: 26 },
    timelineTitle: { fontSize: 15, fontWeight: '700', color: '#111827', marginBottom: 3 },
    timelineLocationRow: { flexDirection: 'row', alignItems: 'center', gap: 3, marginBottom: 5 },
    timelineSubtitle: { fontSize: 13, color: '#6B7280' },
    timelineDescBadge: { flexDirection: 'row', alignItems: 'center', gap: 4 },
    timelineDescText: { fontSize: 13, color: ScaColors.primary, fontWeight: '600' },
    impactGrid: { flexDirection: 'row', gap: 12 },
    impactCard: { flex: 1, backgroundColor: '#F9FAFB', padding: 20, borderRadius: 16, alignItems: 'center', gap: 8, borderWidth: 1, borderColor: '#F3F4F6' },
    impactValue: { fontSize: 22, fontWeight: '800', color: '#111827' },
    impactLabel: { fontSize: 11, color: '#6B7280', fontWeight: '700', letterSpacing: 0.4 },
    radarContainer: { alignItems: 'center', backgroundColor: '#F9FAFB', borderRadius: 20, padding: 16, borderWidth: 1, borderColor: '#F3F4F6' },
    radarRankText: { fontSize: 12, color: '#9CA3AF', fontStyle: 'italic', marginTop: 6, textAlign: 'center' },
    reviewSummary: { flexDirection: 'row', alignItems: 'center', gap: 16, backgroundColor: '#F9FAFB', padding: 18, borderRadius: 16, marginBottom: 14 },
    overallRating: { fontSize: 42, fontWeight: '800', color: '#111827' },
    starsRow: { flexDirection: 'row', gap: 2, marginBottom: 4 },
    reviewCount: { fontSize: 13, color: '#6B7280' },
    writeReviewBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, paddingVertical: 14, borderRadius: 14, borderWidth: 1.5, borderColor: ScaColors.primary, marginBottom: 4 },
    writeReviewText: { color: ScaColors.primary, fontSize: 15, fontWeight: '700' },
    reviewLockedCard: { flexDirection: 'row', alignItems: 'center', gap: 12, backgroundColor: '#F9FAFB', borderRadius: 14, padding: 16, borderWidth: 1, borderColor: '#E5E7EB', marginBottom: 4 },
    reviewLockedTitle: { fontSize: 14, fontWeight: '700', color: '#374151', marginBottom: 3 },
    reviewLockedSubtitle: { fontSize: 12, color: '#9CA3AF', lineHeight: 16 },
    reviewCard: { backgroundColor: '#F9FAFB', borderRadius: 14, padding: 14, gap: 10 },
    reviewCardHeader: { flexDirection: 'row', alignItems: 'center', gap: 10 },
    reviewUser: { fontSize: 14, fontWeight: '700', color: '#111827' },
    reviewDate: { fontSize: 12, color: '#9CA3AF' },
    reviewComment: { fontSize: 14, color: '#4B5563', lineHeight: 20 },
    certSubtitle: { fontSize: 13, color: '#6B7280', marginBottom: 18, lineHeight: 20, marginTop: -8 },
    certCard: { flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: '#fff', borderRadius: 16, borderWidth: 1, borderColor: '#F3F4F6', marginBottom: 12, gap: 14 },
    certIconBox: { width: 46, height: 46, borderRadius: 13, justifyContent: 'center', alignItems: 'center' },
    certInfo: { flex: 1 },
    certName: { fontSize: 15, fontWeight: '700', color: '#111827' },
    certVerified: { fontSize: 12, color: '#6B7280', marginTop: 2 },
    certBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 },
    certBadgeText: { fontSize: 12, fontWeight: '700' },
    certFooterCard: { flexDirection: 'row', alignItems: 'center', gap: 14, backgroundColor: '#FFFBEB', borderRadius: 16, padding: 16, marginTop: 4, borderWidth: 1, borderColor: '#FDE68A' },
    certFooterTitle: { fontSize: 14, fontWeight: '700', color: '#92400E', marginBottom: 2 },
    certFooterDesc: { fontSize: 13, color: '#78350F', lineHeight: 18 },
    modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
    modalContainer: { backgroundColor: '#fff', borderTopLeftRadius: 32, borderTopRightRadius: 32, paddingHorizontal: 24, paddingTop: 12, paddingBottom: 24, maxHeight: '90%' },
    modalHandle: { width: 48, height: 6, backgroundColor: '#E2E8F0', borderRadius: 3, alignSelf: 'center', marginBottom: 20 },
    modalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 },
    modalTitle: { fontSize: 24, fontWeight: '700', color: '#0F172A' },
    modalClose: { width: 36, height: 36, borderRadius: 18, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' },
    criterionRow: { marginBottom: 24 },
    criterionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 12 },
    criterionLabel: { fontSize: 16, fontWeight: '600', color: '#0F172A' },
    criterionDesc: { fontSize: 14, color: '#64748B', marginTop: 2 },
    criterionScore: { fontSize: 16, fontWeight: '700', color: ScaColors.primary },
    sliderWrapper: { position: 'relative', height: 24, justifyContent: 'center' },
    sliderTrack: { height: 8, backgroundColor: ScaColors.primary + '1A', borderRadius: 4, width: '100%', position: 'relative' },
    sliderFill: { position: 'absolute', top: 0, left: 0, height: '100%', backgroundColor: ScaColors.primary, borderRadius: 4 },
    sliderThumb: { position: 'absolute', top: '50%', width: 20, height: 20, borderRadius: 10, backgroundColor: '#fff', borderWidth: 2, borderColor: ScaColors.primary, transform: [{ translateY: -10 }, { translateX: -10 }], shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 3, elevation: 2 },
    sliderInvisibleTouchArea: { position: 'absolute', top: -10, bottom: -10, left: 0, right: 0, flexDirection: 'row' },
    commentSection: { marginTop: 4, marginBottom: 24 },
    commentLabel: { fontSize: 16, fontWeight: '600', color: '#0F172A', marginBottom: 10 },
    commentInput: { backgroundColor: '#fff', borderRadius: 12, padding: 16, fontSize: 15, color: '#334155', minHeight: 120, borderWidth: 1, borderColor: '#E2E8F0' },
    submitBtn: { backgroundColor: ScaColors.primary, paddingVertical: 16, borderRadius: 12, alignItems: 'center', shadowColor: ScaColors.primary, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 8, elevation: 4 },
    submitBtnText: { color: '#fff', fontSize: 16, fontWeight: '700' },

    purchaseActionBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, paddingVertical: 16, borderRadius: 14 },
});
