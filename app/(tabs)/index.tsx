import { ScaColors } from '@/constants/theme';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import {
  Bell,
  ChevronRight,
  Compass,
  Leaf,
  QrCode,
  Search,
  SlidersHorizontal,
  Star
} from 'lucide-react-native';
import React, { useState } from 'react';
import {
  FlatList,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

// Mock Data
const QUICK_ACTIONS = [
  { id: 'scan', title: 'Quét QR', icon: QrCode, color: ScaColors.primary, type: 'gradient' },
  { id: 'browse', title: 'Khám phá', icon: Compass, color: '#3B82F6', type: 'solid' },
  { id: 'impact', title: 'Impact', icon: Star, color: '#F59E0B', type: 'solid' },
];

const FEATURED_BRANDS = [
  { id: '1', name: 'EcoWear VN', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIegH_DUudUVTC4xPJaCkQSW0O6ZDCJfj1GmBa7nl3JASqTlcxh7WBLezu_VQFtIZvlbfIDNSOqXeOKqMnjJomU-B2ys1ZJud0o2BKGvCSd5LJqXdtWbp_Gf3j_Fte1K4-t4S3dSaONuz4VLQk9req_Vrn0X1fFLbf2pf-W8QPJCrSrQVmw2jk4DsZ7a2XiVttwyeXuFRTWqgiArDf3PAYLRfw8Vehjzuyqa_brKLlpcWl5Qb_qtZnUqDExs5ssf87YYGmChC5_A4', rating: 4.8 },
  { id: '2', name: 'GreenTex', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPQRJTcQhpg_0vW0vgBgSNn72h26aoRIHqgakL-aXQpmZ5igBK_ZhS7yRwjxLXt11JK8vvZ4CYynoyHi3ivzKA02ANU6vSGOd_XNeslUOmunksZRqBPQQN3sfw0JT4NJEtUSnf2HWRuInkVcpOmZiZ23O8YANAfRqLUf7i6fHO5B-lqLOeEcaHJpJqJvSHSDFtJtN2w_WZPORp4ixCzbz27x3cPka7oOQvEPRQinFUoKOMYzNIVIC9yaN19usvADwrCS3IdVtgXn0', rating: 4.5 },
  { id: '3', name: 'OrganicCo', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIegH_DUudUVTC4xPJaCkQSW0O6ZDCJfj1GmBa7nl3JASqTlcxh7WBLezu_VQFtIZvlbfIDNSOqXeOKqMnjJomU-B2ys1ZJud0o2BKGvCSd5LJqXdtWbp_Gf3j_Fte1K4-t4S3dSaONuz4VLQk9req_Vrn0X1fFLbf2pf-W8QPJCrSrQVmw2jk4DsZ7a2XiVttwyeXuFRTWqgiArDf3PAYLRfw8Vehjzuyqa_brKLlpcWl5Qb_qtZnUqDExs5ssf87YYGmChC5_A4', rating: 4.7 },
];

const TRENDING_PRODUCTS = [
  { id: 'p1', name: 'Áo Thun Organic Cotton Basic', brand: 'EcoWear', rating: 4.8, reviews: 156, price: '299.000₫', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPQRJTcQhpg_0vW0vgBgSNn72h26aoRIHqgakL-aXQpmZ5igBK_ZhS7yRwjxLXt11JK8vvZ4CYynoyHi3ivzKA02ANU6vSGOd_XNeslUOmunksZRqBPQQN3sfw0JT4NJEtUSnf2HWRuInkVcpOmZiZ23O8YANAfRqLUf7i6fHO5B-lqLOeEcaHJpJqJvSHSDFtJtN2w_WZPORp4ixCzbz27x3cPka7oOQvEPRQinFUoKOMYzNIVIC9yaN19usvADwrCS3IdVtgXn0' },
  { id: 'p2', name: 'Túi Vải Canvas Bền Vững', brand: 'GreenTex', rating: 4.5, reviews: 89, price: '150.000₫', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIegH_DUudUVTC4xPJaCkQSW0O6ZDCJfj1GmBa7nl3JASqTlcxh7WBLezu_VQFtIZvlbfIDNSOqXeOKqMnjJomU-B2ys1ZJud0o2BKGvCSd5LJqXdtWbp_Gf3j_Fte1K4-t4S3dSaONuz4VLQk9req_Vrn0X1fFLbf2pf-W8QPJCrSrQVmw2jk4DsZ7a2XiVttwyeXuFRTWqgiArDf3PAYLRfw8Vehjzuyqa_brKLlpcWl5Qb_qtZnUqDExs5ssf87YYGmChC5_A4' },
];

const RECENT_SCANS = [
  { id: 's1', name: 'Organic Cotton T-Shirt', date: '20/03/2024', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPQRJTcQhpg_0vW0vgBgSNn72h26aoRIHqgakL-aXQpmZ5igBK_ZhS7yRwjxLXt11JK8vvZ4CYynoyHi3ivzKA02ANU6vSGOd_XNeslUOmunksZRqBPQQN3sfw0JT4NJEtUSnf2HWRuInkVcpOmZiZ23O8YANAfRqLUf7i6fHO5B-lqLOeEcaHJpJqJvSHSDFtJtN2w_WZPORp4ixCzbz27x3cPka7oOQvEPRQinFUoKOMYzNIVIC9yaN19usvADwrCS3IdVtgXn0' },
  { id: 's2', name: 'Green Coffee Beans', date: '19/03/2024', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIegH_DUudUVTC4xPJaCkQSW0O6ZDCJfj1GmBa7nl3JASqTlcxh7WBLezu_VQFtIZvlbfIDNSOqXeOKqMnjJomU-B2ys1ZJud0o2BKGvCSd5LJqXdtWbp_Gf3j_Fte1K4-t4S3dSaONuz4VLQk9req_Vrn0X1fFLbf2pf-W8QPJCrSrQVmw2jk4DsZ7a2XiVttwyeXuFRTWqgiArDf3PAYLRfw8Vehjzuyqa_brKLlpcWl5Qb_qtZnUqDExs5ssf87YYGmChC5_A4' },
];

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const renderActionCard = (item: typeof QUICK_ACTIONS[0]) => {
    const Icon = item.icon;
    return (
      <TouchableOpacity
        key={item.id}
        style={[styles.actionCard, { backgroundColor: item.color }]}
        onPress={() => item.id === 'scan' ? router.push('/(consumer)/scan' as any) : null}
      >
        <View style={styles.actionIconBox}>
          <Icon color="#fff" size={32} />
        </View>
        <Text style={styles.actionLabel}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  const renderBrandRow = ({ item }: { item: typeof FEATURED_BRANDS[0] }) => (
    <TouchableOpacity style={styles.brandCard}>
      <View style={styles.brandLogoBox}>
        <Image source={{ uri: item.logo }} style={styles.brandLogo} contentFit="contain" />
      </View>
      <Text style={styles.brandName} numberOfLines={1}>{item.name}</Text>
      <View style={styles.brandRatingRow}>
        <Star size={12} color="#F59E0B" fill="#F59E0B" />
        <Text style={styles.brandRatingText}>{item.rating}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollPadding}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greetingText}>Chào Alex 👋</Text>
            <View style={styles.levelBadge}>
              <Leaf size={14} color={ScaColors.primary} fill={ScaColors.primary} />
              <Text style={styles.levelText}>Green Warrior</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.notificationBtn}>
            <Bell color="#111827" size={24} />
            <View style={styles.notifDot} />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Search color="#9CA3AF" size={20} style={styles.searchIcon} />
            <TextInput
              placeholder="Tìm sản phẩm, thương hiệu..."
              placeholderTextColor="#9CA3AF"
              value={searchQuery}
              onChangeText={setSearchQuery}
              style={styles.searchInput}
            />
            <TouchableOpacity>
              <SlidersHorizontal color="#9CA3AF" size={20} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Khám phá nhanh</Text>
          <View style={styles.actionRow}>
            {QUICK_ACTIONS.map(renderActionCard)}
          </View>
        </View>

        {/* Featured Brands */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionTitle}>Thương hiệu nổi bật</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>Xem tất cả →</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={FEATURED_BRANDS}
            renderItem={renderBrandRow}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.brandListContent}
            keyExtractor={(item) => item.id}
            snapToInterval={136} // card width + margin
            decelerationRate="fast"
          />
        </View>

        {/* Trending Products */}
        <View style={[styles.sectionContainer, { marginBottom: 24 }]}>
          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionTitle}>Sản phẩm thịnh hành</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>Xem tất cả</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.productGrid}>
            {TRENDING_PRODUCTS.map((product) => (
              <TouchableOpacity
                key={product.id}
                style={styles.productCard}
                onPress={() => router.push(`/product/${product.id}` as any)}
              >
                <View style={styles.productImageBox}>
                  <Image source={{ uri: product.image }} style={styles.productImage} contentFit="cover" />
                </View>
                <View style={styles.productContent}>
                  <Text style={styles.productName} numberOfLines={2}>{product.name}</Text>
                  <Text style={styles.productBrand}>{product.brand}</Text>
                  <View style={styles.productRatingRow}>
                    <Star size={14} color="#F59E0B" fill="#F59E0B" />
                    <Text style={styles.productRatingText}>{product.rating} ({product.reviews})</Text>
                  </View>
                  <Text style={styles.productPrice}>{product.price}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Recent Scans */}
        <View style={[styles.sectionContainer, { marginBottom: 40 }]}>
          <Text style={styles.sectionTitle}>Lần quét gần đây</Text>
          <View style={styles.recentList}>
            {RECENT_SCANS.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.recentItem}
                onPress={() => router.push(`/product/${item.id}` as any)}
              >
                <Image source={{ uri: item.image }} style={styles.recentThumb} contentFit="cover" />
                <View style={styles.recentInfo}>
                  <Text style={styles.recentName}>{item.name}</Text>
                  <Text style={styles.recentDate}>{item.date}</Text>
                </View>
                <ChevronRight color="#D1D5DB" size={20} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB', // Gray 50
  },
  scrollPadding: {
    paddingBottom: 100, // Increased to clear 80px tab bar
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 10 : 20,
    marginBottom: 24,
    // marginTop: 50,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#111827', // Gray 900
  },
  levelBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginTop: 8,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    gap: 6,
  },
  levelText: {
    fontSize: 14,
    fontWeight: '600',
    color: ScaColors.primary,
  },
  notificationBtn: {
    width: 44,
    height: 44,
    backgroundColor: '#fff',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  notifDot: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 8,
    height: 8,
    backgroundColor: '#EF4444',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#fff',
  },
  searchContainer: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 56,
    borderRadius: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#111827',
  },
  sectionContainer: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937', // Gray 800
    marginBottom: 16,
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: '600',
    color: ScaColors.primary,
  },
  actionRow: {
    flexDirection: 'row',
    gap: 12,
  },
  actionCard: {
    width: 105,
    height: 105,
    borderRadius: 16,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  actionIconBox: {
    marginBottom: 8,
  },
  actionLabel: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
  },
  brandListContent: {
    paddingRight: 24,
  },
  brandCard: {
    width: 120,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    alignItems: 'center',
    marginRight: 16,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  brandLogoBox: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  brandLogo: {
    width: '100%',
    height: '100%',
  },
  brandName: {
    fontSize: 13,
    fontWeight: '600',
    color: '#374151',
    textAlign: 'center',
    marginBottom: 4,
  },
  brandRatingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  brandRatingText: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  productCard: {
    width: '48%', // Approx half
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#F3F4F6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  productImageBox: {
    width: '100%',
    height: 140,
    backgroundColor: '#F3F4F6',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  productContent: {
    padding: 12,
    gap: 4,
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    lineHeight: 20,
  },
  productBrand: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  productRatingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  productRatingText: {
    fontSize: 12,
    color: '#4B5563',
    fontWeight: '500',
  },
  productPrice: {
    fontSize: 15,
    fontWeight: '700',
    color: ScaColors.primary,
    marginTop: 4,
  },
  recentList: {
    gap: 12,
  },
  recentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  recentThumb: {
    width: 48,
    height: 48,
    borderRadius: 8,
  },
  recentInfo: {
    flex: 1,
    marginLeft: 12,
  },
  recentName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
  },
  recentDate: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 2,
  },
});
