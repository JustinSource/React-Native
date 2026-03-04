import { ScaColors } from '@/constants/theme';
import { router } from 'expo-router';
import {
    ArrowLeft,
    Award,
    Info,
    Megaphone,
    Star
} from 'lucide-react-native';
import React from 'react';
import {
    Platform,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const NOTIFICATIONS = [
    {
        id: '1',
        title: 'Bạn vừa nhận +50 điểm Impact!',
        description: 'Cảm ơn bạn đã đánh giá sản phẩm Áo thun Organic.',
        time: '2 GIỜ TRƯỚC',
        type: 'points',
        isRead: false,
        category: 'HÔM NAY',
    },
    {
        id: '2',
        title: 'Huy hiệu mới đạt được!',
        description: 'Chúc mừng! Bạn đã trở thành Chuyên gia đánh giá.',
        time: '5 GIỜ TRƯỚC',
        type: 'badge',
        isRead: false,
        category: 'HÔM NAY',
    },
    {
        id: '3',
        title: 'Cập nhật chính sách SCA',
        description: 'Chúng tôi vừa cập nhật điều khoản dịch vụ mới nhất.',
        time: 'HÔM QUA',
        type: 'system',
        isRead: true,
        category: 'TRƯỚC ĐÓ',
    },
    {
        id: '4',
        title: 'Thương hiệu mới: GreenLife',
        description: 'Khám phá các sản phẩm thân thiện môi trường từ GreenLife.',
        time: '2 NGÀY TRƯỚC',
        type: 'promo',
        isRead: true,
        category: 'TRƯỚC ĐÓ',
    },
];

const getNotificationIcon = (type: string) => {
    switch (type) {
        case 'points':
            return <Star size={24} color={ScaColors.primary} fill={ScaColors.primary} />;
        case 'badge':
            return <Award size={24} color={ScaColors.primary} />;
        case 'system':
            return <Info size={24} color="#64748B" />;
        case 'promo':
            return <Megaphone size={24} color="#64748B" />;
        default:
            return <Info size={24} color="#64748B" />;
    }
};

export default function NotificationsScreen() {
    const todayNotifs = NOTIFICATIONS.filter(n => n.category === 'HÔM NAY');
    const earlierNotifs = NOTIFICATIONS.filter(n => n.category === 'TRƯỚC ĐÓ');

    const renderNotificationGroup = (title: string, data: typeof NOTIFICATIONS) => (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>{title}</Text>
            <View style={styles.listContainer}>
                {data.map((item, index) => (
                    <TouchableOpacity
                        key={item.id}
                        style={[
                            styles.notificationItem,
                            item.isRead && styles.notificationItemRead,
                            index < data.length - 1 && styles.borderBottom
                        ]}
                        activeOpacity={0.7}
                    >
                        <View style={styles.contentRow}>
                            <View style={[styles.iconBox, !item.isRead ? styles.iconBoxUnread : styles.iconBoxRead]}>
                                {getNotificationIcon(item.type)}
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.itemTitle}>{item.title}</Text>
                                <Text style={styles.itemDesc}>{item.description}</Text>
                                <Text style={styles.itemTime}>{item.time}</Text>
                            </View>
                            {!item.isRead && <View style={styles.unreadDot} />}
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
                        <ArrowLeft size={24} color="#0F172A" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Thông báo</Text>
                </View>
                <TouchableOpacity>
                    <Text style={styles.markReadText}>Đánh dấu đã đọc</Text>
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {renderNotificationGroup('HÔM NAY', todayNotifs)}
                {renderNotificationGroup('TRƯỚC ĐÓ', earlierNotifs)}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8FAFC', // light background matching design
        paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) : 0,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 16,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#F1F5F9',
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    backBtn: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: -8,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0F172A',
        letterSpacing: -0.5,
    },
    markReadText: {
        fontSize: 14,
        fontWeight: '600',
        color: ScaColors.primary,
    },
    scrollContent: {
        paddingBottom: 40,
    },
    section: {
        marginTop: 24,
    },
    sectionTitle: {
        fontSize: 13,
        fontWeight: '700',
        color: '#64748B',
        letterSpacing: 1,
        marginLeft: 20,
        marginBottom: 8,
    },
    listContainer: {
        backgroundColor: '#fff',
    },
    notificationItem: {
        paddingHorizontal: 20,
        paddingVertical: 16,
    },
    notificationItemRead: {
        opacity: 0.7,
    },
    borderBottom: {
        borderBottomWidth: 1,
        borderBottomColor: '#F1F5F9',
    },
    contentRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 16,
    },
    iconBox: {
        width: 48,
        height: 48,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconBoxUnread: {
        backgroundColor: ScaColors.primary + '1A', // 10% opacity
    },
    iconBoxRead: {
        backgroundColor: '#F1F5F9',
    },
    textContainer: {
        flex: 1,
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#0F172A',
        marginBottom: 4,
        lineHeight: 22,
    },
    itemDesc: {
        fontSize: 14,
        color: '#475569',
        lineHeight: 20,
        marginBottom: 6,
    },
    itemTime: {
        fontSize: 11,
        fontWeight: '600',
        color: '#94A3B8',
        letterSpacing: 0.5,
    },
    unreadDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: ScaColors.primary,
        marginTop: 6,
    },
});
