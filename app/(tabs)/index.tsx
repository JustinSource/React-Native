import { ScaColors } from '@/constants/theme';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import {
  Bell,
  CheckCircle2,
  Compass,
  LayoutGrid,
  Leaf,
  List,
  QrCode,
  Search,
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
  { id: 'scan-1', name: 'Áo thun Organic Cotton', brand: 'EcoWear', rating: '4.8/5', date: '10:30, 15/10/2023', verified: true, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPQRJTcQhpg_0vW0vgBgSNn72h26aoRIHqgakL-aXQpmZ5igBK_ZhS7yRwjxLXt11JK8vvZ4CYynoyHi3ivzKA02ANU6vSGOd_XNeslUOmunksZRqBPQQN3sfw0JT4NJEtUSnf2HWRuInkVcpOmZiZ23O8YANAfRqLUf7i6fHO5B-lqLOeEcaHJpJqJvSHSDFtJtN2w_WZPORp4ixCzbz27x3cPka7oOQvEPRQinFUoKOMYzNIVIC9yaN19usvADwrCS3IdVtgXn0' },
  { id: 'scan-2', name: 'Giày chạy bộ Recycled', brand: 'GreenSteps', rating: '4.5/5', date: '08:15, 14/10/2023', verified: true, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIegH_DUudUVTC4xPJaCkQSW0O6ZDCJfj1GmBa7nl3JASqTlcxh7WBLezu_VQFtIZvlbfIDNSOqXeOKqMnjJomU-B2ys1ZJud0o2BKGvCSd5LJqXdtWbp_Gf3j_Fte1K4-t4S3dSaONuz4VLQk9req_Vrn0X1fFLbf2pf-W8QPJCrSrQVmw2jk4DsZ7a2XiVttwyeXuFRTWqgiArDf3PAYLRfw8Vehjzuyqa_brKLlpcWl5Qb_qtZnUqDExs5ssf87YYGmChC5_A4' },
  { id: 'scan-3', name: 'Ly sứ Ceramic Bamboo', brand: 'EarthCare', rating: '3.2/5', date: '09:20, 10/10/2023', verified: false, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPQRJTcQhpg_0vW0vgBgSNn72h26aoRIHqgakL-aXQpmZ5igBK_ZhS7yRwjxLXt11JK8vvZ4CYynoyHi3ivzKA02ANU6vSGOd_XNeslUOmunksZRqBPQQN3sfw0JT4NJEtUSnf2HWRuInkVcpOmZiZ23O8YANAfRqLUf7i6fHO5B-lqLOeEcaHJpJqJvSHSDFtJtN2w_WZPORp4ixCzbz27x3cPka7oOQvEPRQinFUoKOMYzNIVIC9yaN19usvADwrCS3IdVtgXn0' },
];

const SCAN_FILTERS = ['Hôm nay', 'Tuần này', 'Tháng này', '4*+'];

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [scanSearchQuery, setScanSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('Hôm nay');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [showSearch, setShowSearch] = useState(false);
  const [showScanSearch, setShowScanSearch] = useState(false);

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
      {/* Fixed Header Card */}
      <View style={styles.headerCard}>
        {/* Top Addon: Logo & Actions */}
        <View style={styles.headerTopAddon}>
          <View style={styles.headerLogoBox}>
            <View style={styles.logoIconHeader}>
              <Leaf color="#fff" size={16} fill="#fff" />
            </View>
            <Text style={styles.logoTextHeader}>SCA</Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 12 }}>
            <TouchableOpacity style={styles.notificationBtnTop} onPress={() => setShowSearch(!showSearch)}>
              <Search color="#111827" size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.notificationBtnTop} onPress={() => router.push('/(consumer)/notifications' as any)}>
              <Bell color="#111827" size={20} />
              <View style={styles.notifDotActive} />
            </TouchableOpacity>
          </View>
        </View>

        {/* User Info Row */}
        <View style={styles.headerTopRow}>
          <View style={styles.headerLeftInfo}>
            <View style={styles.avatarCircle}>
              <Image source={{ uri: 'https://i.pravatar.cc/150?img=11' }} style={{ width: '100%', height: '100%', borderRadius: 24 }} contentFit="cover" />
            </View>
            <View>
              <Text style={styles.greetingSubText}>Xin chào,</Text>
              <Text style={styles.greetingNameText}>Alex!</Text>
            </View>
          </View>

          <View style={styles.headerRightInfo}>
            <View style={styles.levelBadgeOutline}>
              <Text style={styles.levelTextOutline}>GREEN WARRIOR</Text>
            </View>
            <View style={styles.pointsRow}>
              <Leaf size={12} color={ScaColors.primary} fill={ScaColors.primary} />
              <Text style={styles.pointsText}>2,450 pts</Text>
            </View>
          </View>
        </View>

        {/* Search Bar inside Header (Toggleable) */}
        {showSearch && (
          <View style={styles.searchBarWrapper}>
            <Search color="#9CA3AF" size={20} style={{ marginLeft: 16, marginRight: 8 }} />
            <TextInput
              placeholder="Tìm kiếm sản phẩm hoặc thương hiệu."
              placeholderTextColor="#9CA3AF"
              value={searchQuery}
              onChangeText={setSearchQuery}
              style={styles.searchInputUnified}
              autoFocus
            />
          </View>
        )}
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollPadding}>

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
          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionTitle}>Lần quét gần đây</Text>
            <View style={{ flexDirection: 'row', gap: 8 }}>
              <TouchableOpacity onPress={() => setShowScanSearch(!showScanSearch)} style={styles.viewToggleBtn}>
                <Search size={20} color="#6B7280" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setViewMode(viewMode === 'list' ? 'grid' : 'list')} style={styles.viewToggleBtn}>
                {viewMode === 'list' ? <LayoutGrid size={20} color="#6B7280" /> : <List size={20} color="#6B7280" />}
              </TouchableOpacity>
            </View>
          </View>

          {/* Internal Search for Scans (Toggleable) */}
          {showScanSearch && (
            <View style={styles.scanSearchWrapper}>
              <Search color="#9CA3AF" size={18} style={{ marginLeft: 16, marginRight: 8 }} />
              <TextInput
                placeholder="Tìm kiếm sản phẩm đã quét..."
                placeholderTextColor="#9CA3AF"
                value={scanSearchQuery}
                onChangeText={setScanSearchQuery}
                style={styles.scanSearchInput}
                autoFocus
              />
            </View>
          )}

          {/* Filter Pills */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterPillsScroll}>
            {SCAN_FILTERS.map((filter, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.filterPill, activeFilter === filter && styles.filterPillActive]}
                onPress={() => setActiveFilter(filter)}
              >
                <Text style={[styles.filterPillText, activeFilter === filter && styles.filterPillTextActive]}>{filter}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Scans List / Grid */}
          <View style={viewMode === 'list' ? styles.recentListVertical : styles.recentGrid}>
            {RECENT_SCANS.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={viewMode === 'list' ? styles.scanCardList : styles.scanCardGrid}
                onPress={() => router.push(`/product/${item.id}` as any)}
              >
                <View style={styles.scanCardImageWrap}>
                  <Image source={{ uri: item.image }} style={styles.scanCardImage} contentFit="cover" />
                </View>

                {viewMode === 'list' && (
                  <View style={styles.scanCardInfoList}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <Text style={styles.scanCardName} numberOfLines={1}>{item.name}</Text>
                      {item.verified && (
                        <View style={styles.checkIconTopRight}>
                          <CheckCircle2 size={16} color="#10B981" />
                        </View>
                      )}
                    </View>
                    <Text style={styles.scanCardBrand}>{item.brand} • <Text style={{ color: ScaColors.primary }}>{item.rating}</Text></Text>

                    <View style={styles.scanCardBottomList}>
                      <Text style={styles.scanCardDate}>{item.date}</Text>
                      {item.verified ? (
                        <View style={styles.verifiedBadge}>
                          <Text style={styles.verifiedBadgeText}>ĐÃ XÁC MINH</Text>
                        </View>
                      ) : (
                        <View style={styles.unverifiedBadge}>
                          <Text style={styles.unverifiedBadgeText}>CHƯA XÁC MINH</Text>
                        </View>
                      )}
                    </View>
                  </View>
                )}

                {viewMode === 'grid' && (
                  <View style={styles.scanCardInfoGrid}>
                    <Text style={styles.scanCardName} numberOfLines={2}>{item.name}</Text>
                    <Text style={styles.scanCardBrand}>{item.brand}</Text>
                    {item.verified && (
                      <View style={[styles.verifiedBadge, { alignSelf: 'flex-start', marginTop: 4 }]}>
                        <Text style={styles.verifiedBadgeText}>ĐÃ XÁC MINH</Text>
                      </View>
                    )}
                  </View>
                )}
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
    backgroundColor: '#F3F4F6', // Blue-ish gray background behind the card
  },
  headerCard: {
    backgroundColor: '#fff',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 10 : 20,
    paddingBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 4,
    zIndex: 10,
  },
  headerTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  headerTopAddon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  headerLogoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  logoIconHeader: {
    width: 28,
    height: 28,
    backgroundColor: ScaColors.primary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoTextHeader: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1E3A8A', // Dark blue text
  },
  notificationBtnTop: {
    width: 36,
    height: 36,
    backgroundColor: '#F3F4F6',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerLeftInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatarCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: '#A7F3D0', // light green border
  },
  greetingSubText: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 2,
  },
  greetingNameText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111827',
  },
  notifDotActive: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    backgroundColor: '#EF4444',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#fff',
  },
  headerRightInfo: {
    alignItems: 'flex-end',
  },
  levelBadgeOutline: {
    backgroundColor: '#ECFDF5',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D1FAE5',
    marginBottom: 4,
  },
  levelTextOutline: {
    fontSize: 11,
    fontWeight: '800',
    color: ScaColors.primary,
    letterSpacing: 0.5,
  },
  pointsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  pointsText: {
    fontSize: 14,
    fontWeight: '700',
    color: ScaColors.primary,
  },
  searchBarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    height: 54,
  },
  searchInputUnified: {
    flex: 1,
    fontSize: 15,
    color: '#111827',
    height: '100%',
  },
  scrollPadding: {
    paddingTop: 24,
    paddingBottom: 120, // Increased to clear 80px tab bar + fab
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

  // === Filter Tabs ===
  filterPillsScroll: {
    paddingBottom: 16,
    gap: 10,
  },
  filterPill: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  filterPillActive: {
    backgroundColor: ScaColors.primary,
    borderColor: ScaColors.primary,
  },
  filterPillText: {
    fontSize: 14,
    color: '#4B5563',
    fontWeight: '600',
  },
  filterPillTextActive: {
    color: '#fff',
  },

  viewToggleBtn: {
    padding: 8,
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
  },

  scanSearchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    height: 46,
    marginBottom: 16,
  },
  scanSearchInput: {
    flex: 1,
    fontSize: 14,
    color: '#111827',
    height: '100%',
  },

  // === Recent Scans New Layout ===
  recentListVertical: {
    gap: 12,
  },
  recentGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  scanCardList: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 2,
  },
  scanCardGrid: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 2,
  },
  scanCardImageWrap: {
    width: 64,
    height: 64,
    borderRadius: 10,
    backgroundColor: '#F3F4F6',
    marginRight: 12,
    overflow: 'hidden',
  },
  scanCardImage: {
    width: '100%',
    height: '100%',
  },
  scanCardInfoList: {
    flex: 1,
    justifyContent: 'center',
  },
  scanCardInfoGrid: {
    marginTop: 12,
    alignItems: 'center',
  },
  scanCardName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
    flex: 1,
  },
  checkIconTopRight: {
    marginLeft: 8,
  },
  scanCardBrand: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 8,
  },
  scanCardBottomList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scanCardDate: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  verifiedBadge: {
    backgroundColor: '#ECFDF5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  verifiedBadgeText: {
    color: '#10B981',
    fontSize: 10,
    fontWeight: '800',
  },
  unverifiedBadge: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  unverifiedBadgeText: {
    color: '#9CA3AF',
    fontSize: 10,
    fontWeight: '800',
  },
});
