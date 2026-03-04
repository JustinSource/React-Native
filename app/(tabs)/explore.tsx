import { ScaColors } from '@/constants/theme';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import {
  Search,
  SlidersHorizontal,
  Star,
  X
} from 'lucide-react-native';
import React, { useState } from 'react';
import {
  Dimensions,
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

const { width } = Dimensions.get('window');

const CATEGORIES = ['Tất cả', 'Quần áo', 'Thực phẩm', 'Điện tử', 'Gia dụng', 'Mỹ phẩm'];

const MOCK_RESULTS = [
  { id: 'p1', name: 'Áo Thun Organic Cotton', brand: 'EcoWear', rating: 4.8, reviews: 156, price: '299.000₫', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPQRJTcQhpg_0vW0vgBgSNn72h26aoRIHqgakL-aXQpmZ5igBK_ZhS7yRwjxLXt11JK8vvZ4CYynoyHi3ivzKA02ANU6vSGOd_XNeslUOmunksZRqBPQQN3sfw0JT4NJEtUSnf2HWRuInkVcpOmZiZ23O8YANAfRqLUf7i6fHO5B-lqLOeEcaHJpJqJvSHSDFtJtN2w_WZPORp4ixCzbz27x3cPka7oOQvEPRQinFUoKOMYzNIVIC9yaN19usvADwrCS3IdVtgXn0', score: 92 },
  { id: 'p2', name: 'Túi Vải Canvas Bền Vững', brand: 'GreenTex', rating: 4.5, reviews: 89, price: '150.000₫', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIegH_DUudUVTC4xPJaCkQSW0O6ZDCJfj1GmBa7nl3JASqTlcxh7WBLezu_VQFtIZvlbfIDNSOqXeOKqMnjJomU-B2ys1ZJud0o2BKGvCSd5LJqXdtWbp_Gf3j_Fte1K4-t4S3dSaONuz4VLQk9req_Vrn0X1fFLbf2pf-W8QPJCrSrQVmw2jk4DsZ7a2XiVttwyeXuFRTWqgiArDf3PAYLRfw8Vehjzuyqa_brKLlpcWl5Qb_qtZnUqDExs5ssf87YYGmChC5_A4', score: 85 },
  { id: 'p3', name: 'Giày Sneaker Recycled', brand: 'NatureFit', rating: 4.7, reviews: 230, price: '1.200.000₫', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPQRJTcQhpg_0vW0vgBgSNn72h26aoRIHqgakL-aXQpmZ5igBK_ZhS7yRwjxLXt11JK8vvZ4CYynoyHi3ivzKA02ANU6vSGOd_XNeslUOmunksZRqBPQQN3sfw0JT4NJEtUSnf2HWRuInkVcpOmZiZ23O8YANAfRqLUf7i6fHO5B-lqLOeEcaHJpJqJvSHSDFtJtN2w_WZPORp4ixCzbz27x3cPka7oOQvEPRQinFUoKOMYzNIVIC9yaN19usvADwrCS3IdVtgXn0', score: 88 },
  { id: 'p4', name: 'Bình Nước Thép Không Gỉ', brand: 'EcoLife', rating: 4.9, reviews: 45, price: '350.000₫', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIegH_DUudUVTC4xPJaCkQSW0O6ZDCJfj1GmBa7nl3JASqTlcxh7WBLezu_VQFtIZvlbfIDNSOqXeOKqMnjJomU-B2ys1ZJud0o2BKGvCSd5LJqXdtWbp_Gf3j_Fte1K4-t4S3dSaONuz4VLQk9req_Vrn0X1fFLbf2pf-W8QPJCrSrQVmw2jk4DsZ7a2XiVttwyeXuFRTWqgiArDf3PAYLRfw8Vehjzuyqa_brKLlpcWl5Qb_qtZnUqDExs5ssf87YYGmChC5_A4', score: 95 },
];

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');

  const renderProduct = ({ item }: { item: typeof MOCK_RESULTS[0] }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => router.push(`/product/${item.id}` as any)}
    >
      <View style={styles.productImageBox}>
        <Image source={{ uri: item.image }} style={styles.productImage} contentFit="cover" />
        <View style={styles.scoreBadge}>
          <Text style={styles.scoreText}>{item.score}</Text>
        </View>
      </View>
      <View style={styles.productContent}>
        <Text style={styles.productName} numberOfLines={2}>{item.name}</Text>
        <Text style={styles.productBrand}>{item.brand}</Text>
        <View style={styles.ratingRow}>
          <Star size={12} color="#F59E0B" fill="#F59E0B" />
          <Text style={styles.ratingText}>{item.rating} ({item.reviews})</Text>
        </View>
        <Text style={styles.productPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header / Search Bar */}
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <Search color="#9CA3AF" size={20} />
          <TextInput
            placeholder="Tìm kiếm sản phẩm bền vững..."
            placeholderTextColor="#9CA3AF"
            value={searchQuery}
            onChangeText={setSearchQuery}
            style={styles.searchInput}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <X color="#9CA3AF" size={20} />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity style={styles.filterBtn}>
          <SlidersHorizontal color={ScaColors.primary} size={24} />
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <View style={styles.categoriesContainer}>
        <FlatList
          data={CATEGORIES}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryList}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setSelectedCategory(item)}
              style={[
                styles.categoryChip,
                selectedCategory === item && styles.categoryChipActive
              ]}
            >
              <Text style={[
                styles.categoryText,
                selectedCategory === item && styles.categoryTextActive
              ]}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Results Grid */}
      <FlatList
        data={MOCK_RESULTS}
        renderItem={renderProduct}
        numColumns={2}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.resultsGrid}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <Text style={styles.resultsTitle}>Kết quả tìm thấy ({MOCK_RESULTS.length})</Text>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 10 : 20,
    paddingBottom: 16,
    gap: 12,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 52,
    borderRadius: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    gap: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#111827',
  },
  filterBtn: {
    width: 52,
    height: 52,
    backgroundColor: '#fff',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  categoriesContainer: {
    marginBottom: 8,
  },
  categoryList: {
    paddingHorizontal: 24,
    paddingBottom: 16,
    gap: 8,
  },
  categoryChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  categoryChipActive: {
    backgroundColor: ScaColors.primary,
    borderColor: ScaColors.primary,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
  },
  categoryTextActive: {
    color: '#fff',
  },
  resultsGrid: {
    paddingHorizontal: 18,
    paddingBottom: 100,
  },
  resultsTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#374151',
    marginHorizontal: 6,
    marginBottom: 16,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  productCard: {
    width: (width - 60) / 2,
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#F3F4F6',
    marginHorizontal: 6,
  },
  productImageBox: {
    width: '100%',
    height: 150,
    backgroundColor: '#F3F4F6',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  scoreBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(16, 185, 129, 0.9)',
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '800',
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
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    fontSize: 12,
    color: '#6B7280',
  },
  productPrice: {
    fontSize: 15,
    fontWeight: '700',
    color: ScaColors.primary,
    marginTop: 4,
  },
});
