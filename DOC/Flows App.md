graph TD
    A[Splash] --> B{First Time?}
    B -->|Yes| C[Onboarding]
    B -->|No| D{Logged In?}
    C --> E[Login]
    D -->|No| E
    D -->|Yes| F[Home]
    E --> F
    
    F --> G[Search]
    F --> H[Scan]
    F --> I[Profile]
    
    H --> J[Product Passport]
    G --> J
    J --> K[Rating Modal]
    J --> L[Review List]
    
    I --> M[Impact Points]
    I --> N[Badges]
    I --> O[Settings]
    
    K --> P[Success Animation]
    P --> F
    
    style F fill:#10B981,color:#fff
    style J fill:#1E3A8A,color:#fff
    style K fill:#F59E0B,color:#fff

## 📐 TỔNG QUAN KIẾN TRÚC DATABASE
erDiagram
    USERS ||--o{ PRODUCTS : "creates/views"
    USERS ||--o{ REVIEWS : "writes"
    USERS ||--o{ SCAN_EVENTS : "performs"
    USERS ||--o{ PURCHASE_VERIFICATIONS : "makes"
    USERS ||--o{ SHOP_OWNERSHIP : "owns"
    USERS ||--o{ AFFILIATE_TRACKING : "participates"
    
    BRANDS ||--o{ PRODUCTS : "owns"
    BRANDS ||--o{ SHOPS : "supplies"
    
    SHOPS ||--o{ PRODUCTS : "sells"
    SHOPS ||--o{ PURCHASE_VERIFICATIONS : "verifies"
    SHOPS ||--o{ SHOP_REVIEWS : "receives"
    
    PRODUCTS ||--o{ PRODUCT_JOURNEY : "has"
    PRODUCTS ||--o{ CERTIFICATES : "holds"
    PRODUCTS ||--o{ REVIEWS : "receives"
    
    DISTRIBUTORS ||--o{ DISTRIBUTION_CHAIN : "manages"
    DISTRIBUTORS ||--o{ TRANSFERS : "creates"
    
    PRODUCTS ||--o{ TRANSFERS : "transfers"
    
    SHOP_OWNERSHIP }|--|| SHOPS : "links"
    SHOP_OWNERSHIP }|--|| USERS : "links"

# 🔗 KẾT NỐI VỚI HỆ SINH THÁI LỚN
graph LR
    Consumer[Người dùng đánh giá] --> Data[Analytics Dashboard]
    Data --> Brand[Brand: Cải thiện sản phẩm/CSKH]
    Data --> Factory[Factory: Điều chỉnh quy trình nếu bị phàn nàn]
    Data --> Auditor[Auditor: Focus vào điểm yếu khi đi audit]
    Data --> Sourcing[Giúp Brand khác chọn supplier uy tín]
    
    Brand --> Reward[Brand thưởng voucher cho reviewer]
    Reward --> Consumer[Tăng loyalty người dùng]

