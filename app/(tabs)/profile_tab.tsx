import { ScaColors } from '@/constants/theme';
import { router } from 'expo-router';
import {
    Bell,
    ChevronRight,
    Globe,
    LogOut,
    Settings,
    ShieldCheck,
    User
} from 'lucide-react-native';
import React from 'react';
import {
    Dimensions,
    Platform,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const { width } = Dimensions.get('window');

// Mock 7-day activity data (impact bar chart)
const ACTIVITY_DATA = [18, 30, 22, 45, 38, 55, 70]; // arbitrary scale
const MAX_BAR = Math.max(...ACTIVITY_DATA);
const DAY_LABELS = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];

const BADGES = [
    { id: 'newbie', name: 'Newbie', icon: '🏆', color: '#F59E0B', bg: '#FFFBEB', progress: 1.0 },
    { id: 'eco', name: 'Eco Expert', icon: '🔷', color: '#3B82F6', bg: '#EFF6FF', progress: 0.75 },
    { id: 'ambassador', name: 'Sustainability Ambassador', icon: '💜', color: '#8B5CF6', bg: '#F5F3FF', progress: 0.12 },
];

const MENU_ITEMS = [
    { id: 'edit', title: 'Chỉnh sửa hồ sơ', icon: User, color: '#374151', showArrow: true },
    { id: 'lang', title: 'Ngôn ngữ', icon: Globe, color: '#374151', value: 'Tiếng Việt', showArrow: false },
    { id: 'notif', title: 'Cài đặt thông báo', icon: Bell, color: '#374151', showArrow: true },
    { id: 'logout', title: 'Đăng xuất', icon: LogOut, color: '#EF4444', showArrow: false, danger: true },
];

// Simple bar chart implementation
const ActivityBarChart = () => {
    const barWidth = (width - 80) / ACTIVITY_DATA.length;
    const chartHeight = 80;

    return (
        <View style={styles.chartContainer}>
            <View style={styles.barsRow}>
                {ACTIVITY_DATA.map((val, i) => {
                    const isHighest = val === MAX_BAR;
                    const barH = chartHeight * (val / MAX_BAR);
                    return (
                        <View key={i} style={[styles.barWrapper, { width: barWidth - 6 }]}>
                            <View
                                style={[
                                    styles.bar,
                                    {
                                        height: barH,
                                        backgroundColor: isHighest ? ScaColors.primary : ScaColors.primary + '44',
                                        borderRadius: 6,
                                    }
                                ]}
                            />
                            <Text style={styles.barLabel}>{DAY_LABELS[i]}</Text>
                        </View>
                    );
                })}
            </View>
        </View>
    );
};

// Badge progress row
const BadgeRow = ({ badge }: { badge: typeof BADGES[0] }) => (
    <View style={styles.badgeRow}>
        <View style={[styles.badgeIconBox, { backgroundColor: badge.bg }]}>
            <Text style={styles.badgeIcon}>{badge.icon}</Text>
        </View>
        <View style={styles.badgeInfo}>
            <View style={styles.badgeNameRow}>
                <Text style={styles.badgeName}>{badge.name}</Text>
                <Text style={[styles.badgePercent, { color: badge.color }]}>{Math.round(badge.progress * 100)}%</Text>
            </View>
            <View style={styles.progressTrack}>
                <View
                    style={[
                        styles.progressFill,
                        { width: `${badge.progress * 100}%`, backgroundColor: badge.color }
                    ]}
                />
            </View>
        </View>
    </View>
);

export default function ProfileScreen() {
    const handleLogout = () => {
        router.replace('/login');
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

                {/* Top Header Row */}
                <View style={styles.topHeader}>
                    <TouchableOpacity style={styles.settingsBtn} onPress={() => router.back()}>
                        <Settings size={22} color="#374151" />
                    </TouchableOpacity>
                    <Text style={styles.topTitle}>Hồ sơ cá nhân</Text>
                    <View style={{ width: 40 }} />
                </View>

                {/* Avatar & Name section */}
                <View style={styles.avatarSection}>
                    <View style={styles.avatarWrapper}>
                        <View style={styles.avatarCircle}>
                            <Text style={styles.avatarEmoji}>🧑‍💼</Text>
                        </View>
                        <View style={styles.editDot}>
                            <Text style={{ fontSize: 9, color: '#fff' }}>✏</Text>
                        </View>
                    </View>
                    <Text style={styles.userName}>Nguyễn Văn A</Text>
                    <View style={styles.levelBadge}>
                        <ShieldCheck size={12} color={ScaColors.primary} />
                        <Text style={styles.levelText}>Green Warrior</Text>
                    </View>
                    <Text style={styles.memberSince}>Thành viên từ tháng 1, 2023</Text>
                </View>

                {/* Stats Row */}
                <View style={styles.statsRow}>
                    {[
                        { value: '128', label: 'TOTAL SCANS' },
                        { value: '45', label: 'REVIEWS' },
                        { value: '2.4k', label: 'POINTS' },
                    ].map((s, i) => (
                        <View key={i} style={[styles.statItem, i < 2 && styles.statBorder]}>
                            <Text style={styles.statValue}>{s.value}</Text>
                            <Text style={styles.statLabel}>{s.label}</Text>
                        </View>
                    ))}
                </View>

                {/* Impact Stats Chart */}
                <View style={styles.section}>
                    <View style={styles.sectionHeaderRow}>
                        <Text style={styles.sectionTitle}>Thống kê tác động</Text>
                        <Text style={styles.sectionSub}>7 ngày qua</Text>
                    </View>
                    <ActivityBarChart />
                </View>

                {/* Badges Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Danh hiệu & Huy hiệu</Text>
                    <View style={styles.badgesList}>
                        {BADGES.map(b => <BadgeRow key={b.id} badge={b} />)}
                    </View>
                </View>

                {/* Menu Settings */}
                <View style={styles.section}>
                    {MENU_ITEMS.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <TouchableOpacity
                                key={item.id}
                                style={[styles.menuItem, i < MENU_ITEMS.length - 1 && styles.menuItemBorder]}
                                onPress={item.id === 'logout' ? handleLogout : undefined}
                            >
                                <Icon size={18} color={item.color} />
                                <Text style={[styles.menuTitle, item.danger && { color: item.color }]}>{item.title}</Text>
                                <View style={{ flex: 1 }} />
                                {item.value && <Text style={styles.menuValue}>{item.value}</Text>}
                                {item.showArrow && <ChevronRight size={18} color="#D1D5DB" />}
                            </TouchableOpacity>
                        );
                    })}
                </View>

                <Text style={styles.versionText}>SCA v1.1.0 (Beta)</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent: {
        paddingBottom: 60,
    },
    topHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 10 : 16,
        marginBottom: 8,
    },
    topTitle: {
        fontSize: 17,
        fontWeight: '800',
        color: '#111827',
    },
    settingsBtn: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarSection: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    avatarWrapper: {
        position: 'relative',
        marginBottom: 14,
    },
    avatarCircle: {
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: '#ECFDF5',
        borderWidth: 3,
        borderColor: ScaColors.primary + '66',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarEmoji: {
        fontSize: 44,
    },
    editDot: {
        position: 'absolute',
        bottom: 2,
        right: 2,
        width: 22,
        height: 22,
        borderRadius: 11,
        backgroundColor: ScaColors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#fff',
    },
    userName: {
        fontSize: 22,
        fontWeight: '800',
        color: '#111827',
        marginBottom: 6,
    },
    levelBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        backgroundColor: '#ECFDF5',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 16,
        marginBottom: 6,
    },
    levelText: {
        fontSize: 13,
        fontWeight: '700',
        color: ScaColors.primary,
    },
    memberSince: {
        fontSize: 13,
        color: '#9CA3AF',
    },
    statsRow: {
        flexDirection: 'row',
        marginHorizontal: 20,
        backgroundColor: '#F9FAFB',
        borderRadius: 16,
        paddingVertical: 16,
        borderWidth: 1,
        borderColor: '#F3F4F6',
        marginBottom: 24,
    },
    statItem: {
        flex: 1,
        alignItems: 'center',
    },
    statBorder: {
        borderRightWidth: 1,
        borderRightColor: '#E5E7EB',
    },
    statValue: {
        fontSize: 22,
        fontWeight: '800',
        color: ScaColors.primary,
    },
    statLabel: {
        fontSize: 10,
        color: '#6B7280',
        fontWeight: '700',
        marginTop: 4,
        letterSpacing: 0.5,
    },
    section: {
        marginHorizontal: 20,
        marginBottom: 24,
    },
    sectionHeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 14,
    },
    sectionTitle: {
        fontSize: 17,
        fontWeight: '800',
        color: '#111827',
    },
    sectionSub: {
        fontSize: 13,
        color: '#6B7280',
    },
    chartContainer: {
        backgroundColor: '#F9FAFB',
        borderRadius: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: '#F3F4F6',
    },
    barsRow: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        height: 100,
    },
    barWrapper: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: '100%',
        gap: 6,
    },
    bar: {
        width: '100%',
    },
    barLabel: {
        fontSize: 11,
        color: '#9CA3AF',
        fontWeight: '600',
    },
    badgesList: {
        backgroundColor: '#F9FAFB',
        borderRadius: 16,
        padding: 16,
        gap: 16,
        borderWidth: 1,
        borderColor: '#F3F4F6',
    },
    badgeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14,
    },
    badgeIconBox: {
        width: 44,
        height: 44,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeIcon: {
        fontSize: 22,
    },
    badgeInfo: {
        flex: 1,
    },
    badgeNameRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6,
    },
    badgeName: {
        fontSize: 14,
        fontWeight: '700',
        color: '#111827',
    },
    badgePercent: {
        fontSize: 14,
        fontWeight: '800',
    },
    progressTrack: {
        height: 6,
        backgroundColor: '#E5E7EB',
        borderRadius: 3,
        overflow: 'hidden',
    },
    progressFill: {
        height: '100%',
        borderRadius: 3,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        gap: 14,
    },
    menuItemBorder: {
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
    },
    menuTitle: {
        fontSize: 15,
        fontWeight: '600',
        color: '#374151',
    },
    menuValue: {
        fontSize: 14,
        color: '#9CA3AF',
        marginRight: 4,
    },
    versionText: {
        textAlign: 'center',
        fontSize: 12,
        color: '#D1D5DB',
        marginTop: 8,
    },
});
