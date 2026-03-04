# 🗄️ DATABASE SCHEMA (BỔ SUNG)
## B. Chi tiết Collections/Tables
### 1. users - Thông tin người dùng
interface User {
  id: string;                    // UUID
  email: string;
  fullName: string;
  avatarUrl?: string;
  phone?: string;
  role: 'consumer' | 'brand' | 'factory' | 'auditor' | 'admin';
  
  // Gamification
  impactPoints: number;          // Tổng điểm tích lũy
  level: 'newbie' | 'explorer' | 'warrior' | 'ambassador';
  badges: string[];              // Array of badge IDs
  
  // Stats
  totalScans: number;
  totalReviews: number;
  
  // Metadata
  createdAt: Date;
  updatedAt: Date;
  lastLoginAt: Date;
  isActive: boolean;
}

### 2. products - Thông tin sản phẩm
interface Product {
  id: string;                    // UUID
  brandId: string;               // Reference to Brands
  categoryId: string;            // Reference to Categories
  
  // Basic Info
  name: string;
  description: string;
  sku: string;                   // Stock Keeping Unit
  qrCode: string;                // Unique QR identifier
  images: string[];              // Array of image URLs
  
  // Pricing
  price: number;
  currency: string;              // VND, USD
  
  // Ratings (Aggregated)
  overallRating: number;         // 1-5, calculated average
  totalReviews: number;
  ratingBreakdown: {
    quality: number;
    transparency: number;
    sustainability: number;
    fairLabor: number;
    community: number;
  };
  
  // Impact Data
  impactMetrics: {
    co2Saved: number;            // kg
    waterSaved: number;          // liters
    wasteReduced: number;        // kg
    fairWagePaid: number;        // USD
  };
  
  // Status
  isVerified: boolean;
  isActive: boolean;
  
  // Metadata
  createdAt: Date;
  updatedAt: Date;
}

### 3. product_journey - Hành trình sản phẩm (Supply Chain)
interface ProductJourney {
  id: string;
  productId: string;
  
  // Stage Info
  stage: 'raw_material' | 'processing' | 'manufacturing' | 'packaging' | 'shipping' | 'retail';
  stageName: string;             // Hiển thị: "Nguyên liệu", "Sản xuất"...
  
  // Location
  facilityName: string;
  facilityId?: string;           // Reference to Factories
  address: string;
  country: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  
  // Timeline
  startDate: Date;
  endDate: Date;
  
  // Verification
  isVerified: boolean;
  verifiedBy?: string;           // Auditor ID
  verificationDate?: Date;
  
  // Documents
  documents: string[];           // URLs to certificates, photos
  
  // Metadata
  order: number;                 // Sequence in timeline
  createdAt: Date;
}

### 4. certificates - Chứng nhận sản phẩm
interface Certificate {
  id: string;
  productId: string;
  
  // Certificate Info
  type: 'GOTS' | 'FairTrade' | 'ISO14001' | 'SA8000' | 'CarbonNeutral' | 'Other';
  name: string;                  // Tên hiển thị
  issuer: string;                // Tổ chức cấp
  certificateNumber: string;
  
  // Validity
  issuedDate: Date;
  expiryDate: Date;
  isValid: boolean;
  
  // Documents
  documentUrl: string;           // PDF/Image URL
  qrVerifyUrl?: string;          // Link để verify với tổ chức cấp
  
  // Metadata
  createdAt: Date;
  updatedAt: Date;
}

### 5. reviews - Đánh giá sản phẩm
interface Review {
  id: string;
  productId: string;
  userId: string;
  brandId: string;               // Denormalized for quick query
  
  // Ratings (1-5)
  overallRating: number;
  criteriaScores: {
    quality: number;
    transparency: number;
    sustainability: number;
    fairLabor: number;
    community: number;
  };
  
  // Content
  comment: string;
  images?: string[];             // User uploaded photos
  
  // Verification
  isVerifiedPurchase: boolean;   // True if scanned QR
  scannedAt?: Date;              // When QR was scanned
  
  // Engagement
  helpfulCount: number;
  notHelpfulCount: number;
  brandReply?: {
    text: string;
    repliedAt: Date;
    repliedBy: string;
  };
  
  // Status
  status: 'pending' | 'published' | 'hidden' | 'flagged';
  flaggedReason?: string;
  
  // Metadata
  createdAt: Date;
  updatedAt: Date;
}

### 6. scan_history - Lịch sử quét QR
interface ScanHistory {
  id: string;
  userId: string;
  productId: string;
  
  // Scan Info
  scannedAt: Date;
  location?: {
    lat: number;
    lng: number;
    address: string;
  };
  deviceInfo: {
    platform: 'ios' | 'android' | 'web';
    deviceId: string;
  };
  
  // Validation
  isValidScan: boolean;
  qrCodeValue: string;
  
  // Metadata
  createdAt: Date;
}

### 7. impact_points - Điểm Impact (Gamification)
interface ImpactPoint {
  id: string;
  userId: string;
  
  // Point Info
  points: number;                // +1, +5, +10...
  action: 'scan' | 'review' | 'share' | 'purchase' | 'referral';
  description: string;
  
  // Reference
  referenceId?: string;          // Product ID, Review ID...
  
  // Metadata
  createdAt: Date;
  expiresAt?: Date;              // Nếu điểm có hạn
}

### 8. badges - Huy hiệu (Gamification)
interface Badge {
  id: string;
  name: string;                  // "Early Adopter", "Green Warrior"
  description: string;
  iconUrl: string;
  
  // Requirements
  requirements: {
    type: 'scan_count' | 'review_count' | 'points_total' | 'streak_days';
    threshold: number;
  };
  
  // Status
  isActive: boolean;
  order: number;                 // Display order
  
  // Metadata
  createdAt: Date;
}

### 9. brands - Thông tin thương hiệu
interface Brand {
  id: string;
  
  // Basic Info
  name: string;
  slug: string;                  // For URL
  logoUrl: string;
  coverImageUrl?: string;
  description: string;
  website: string;
  
  // Ratings (Aggregated from products)
  overallRating: number;
  totalProducts: number;
  totalReviews: number;
  
  // Certifications
  certifications: string[];      // Array of certificate types
  
  // Sustainability Score
  sustainabilityScore: number;   // 0-100
  
  // Contact
  contactEmail: string;
  contactPhone?: string;
  address: string;
  country: string;
  
  // Status
  isVerified: boolean;
  isActive: boolean;
  
  // Metadata
  createdAt: Date;
  updatedAt: Date;
}

### 10. categories - Danh mục sản phẩm
interface Category {
  id: string;
  name: string;
  slug: string;
  parentId?: string;             // For nested categories
  iconUrl?: string;
  isActive: boolean;
  order: number;
}

### 11. notifications - Thông báo
interface Notification {
  id: string;
  userId: string;
  
  // Type
  type: 'scan_success' | 'review_reply' | 'new_badge' | 'system' | 'promotion';
  title: string;
  message: string;
  
  // Data
  data?: any;                    // Extra data
  referenceId?: string;          // Product ID, Review ID...
  
  // Status
  isRead: boolean;
  
  // Metadata
  createdAt: Date;
}

### 12. reports - Báo cáo sản phẩm
interface Report {
  id: string;
  productId: string;
  userId: string;
  
  // Report Info
  reason: 'fake_product' | 'misleading_info' | 'quality_issue' | 'other';
  description: string;
  images?: string[];
  
  // Status
  status: 'pending' | 'investigating' | 'resolved' | 'rejected';
  resolution?: string;
  resolvedAt?: Date;
  
  // Metadata
  createdAt: Date;
}

### 13. wishlist - Danh sách yêu thích
interface Wishlist {
  id: string;
  userId: string;
  productId: string;
  addedAt: Date;
}

### 14. user_stats - Thống kê người dùng (Cache)
interface UserStats {
  userId: string;
  totalScans: number;
  totalReviews: number;
  totalProductsPurchased: number;
  totalImpactPoints: number;
  currentLevel: string;
  badges: string[];
  lastActive: Date;
}

### 15. product_stats - Thống kê sản phẩm (Cache)
interface ProductStats {
  productId: string;
  overallRating: number;
  totalReviews: number;
  totalScans: number;
  totalPurchases: number;
  sustainabilityScore: number;
  lastUpdated: Date;
}

### 16. brand_stats - Thống kê thương hiệu (Cache)
interface BrandStats {
  brandId: string;
  overallRating: number;
  totalProducts: number;
  totalReviews: number;
  totalScans: number;
  sustainabilityScore: number;
  lastUpdated: Date;
}

### 17. audit_logs - Nhật ký kiểm toán (Admin)
interface AuditLog {
  id: string;
  action: string;                // "CREATE_PRODUCT", "UPDATE_USER"
  actorId: string;               // Admin user
  targetId: string;              // Product ID, User ID...
  oldValue?: any;
  newValue?: any;
  timestamp: Date;
}

### 18. app_settings - Cấu hình ứng dụng
interface AppSettings {
  key: string;
  value: string;
  description?: string;
}

### 19. content_pages - Trang nội dung
interface ContentPage {
  id: string;
  slug: string;                  // "about-us", "privacy-policy"
  title: string;
  content: string;               // HTML/Markdown
  isActive: boolean;
  updatedAt: Date;
}

### 20. faq - Câu hỏi thường gặp
interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
  isActive: boolean;
  order: number;
}

### 21. support_tickets - Ticket hỗ trợ
interface SupportTicket {
  id: string;
  userId: string;
  subject: string;
  message: string;
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  createdAt: Date;
  updatedAt: Date;
}

### 22. support_messages - Tin nhắn trong ticket
interface SupportMessage {
  id: string;
  ticketId: string;
  userId: string;
  message: string;
  isInternal: boolean;           // True if admin message
  createdAt: Date;
}

### 23. user_sessions - Phiên người dùng
interface UserSession {
  id: string;
  userId: string;
  token: string;
  deviceInfo: any;
  expiresAt: Date;
  createdAt: Date;
}

### 24. user_devices - Thiết bị người dùng
interface UserDevice {
  id: string;
  userId: string;
  deviceId: string;
  deviceType: 'mobile' | 'desktop' | 'tablet';
  platform: 'ios' | 'android' | 'web';
  lastUsed: Date;
}

### 25. user_activity - Nhật ký hoạt động
interface UserActivity {
  id: string;
  userId: string;
  action: string;                // "VIEW_PRODUCT", "ADD_REVIEW"
  targetId?: string;
  targetType?: string;
  details?: any;
  createdAt: Date;
}

### 26. user_preferences - Tùy chọn người dùng
interface UserPreferences {
  userId: string;
  language: string;              // 'vi', 'en'
  timezone: string;              // 'Asia/Ho_Chi_Minh'
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
  };
  privacy: {
    profileVisible: boolean;
    reviewsPublic: boolean;
  };
}

### 27. user_referrals - Chương trình giới thiệu
interface UserReferral {
  id: string;
  referrerId: string;
  referralCode: string;
  referredUserId?: string;
  rewardedPoints?: number;
  status: 'pending' | 'completed';
  createdAt: Date;
}

### 28. user_achievements - Thành tích người dùng
interface UserAchievement {
  userId: string;
  achievementId: string;
  earnedAt: Date;
}

### 29. user_streaks - Chuỗi hoạt động
interface UserStreak {
  userId: string;
  currentStreak: number;
  longestStreak: number;
  lastActivityDate: Date;
  updatedAt: Date;
}

### 30. user_badges - Huy hiệu người dùng
interface UserBadge {
  userId: string;
  badgeId: string;
  earnedAt: Date;
}

### 31. user_levels - Cấp độ người dùng
interface UserLevel {
  userId: string;
  level: string;
  pointsRequired: number;
  pointsEarned: number;
  updatedAt: Date;
}

### 32. user_reports - Báo cáo người dùng
interface UserReport {
  id: string;
  reporterId: string;
  reportedUserId?: string;
  reportedProductId?: string;
  reason: 'inappropriate_content' | 'spam' | 'harassment' | 'other';
  description: string;
  status: 'pending' | 'investigating' | 'resolved' | 'rejected';
  createdAt: Date;
}

### 33. user_blocks - Chặn người dùng
interface UserBlock {
  id: string;
  blockerId: string;
  blockedId: string;
  createdAt: Date;
}

### 34. user_follows - Theo dõi người dùng
interface UserFollow {
  id: string;
  followerId: string;
  followingId: string;
  createdAt: Date;
}

### 35. user_groups - Nhóm người dùng
interface UserGroup {
  id: string;
  name: string;
  description?: string;
  members: string[];             // Array of user IDs
  createdAt: Date;
}

### 36. user_roles - Vai trò người dùng
interface UserRole {
  id: string;
  name: string;
  permissions: string[];         // Array of permission strings
  createdAt: Date;
}

### 37. user_permissions - Quyền người dùng
interface UserPermission {
  id: string;
  name: string;




