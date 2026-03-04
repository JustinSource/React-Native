### bây giờ tôi muốn thêm vài thông tin nữa để cập nhật cho "SCA".
- consumer có thể biết được và thấy thông tin của "Cộng Tác Viên", "Nhà Phân Phối" hoặc "Shop" mà mình dùng ứng dụng để label scan, vì có trường hợp là khách hàng scan rồi thấy có/không certificate của sản phẩm đó, rồi quyết định mua hoặc không. (nếu mua rồi, về nhà bị tình huống nào đó tráo đổi sản phải, rồi về nhà quét thì không có như ban đầu. Nhưng vì lịch sử đã mua và đánh giá và scan đã lưu, nên consumer được bảo vệ.
- Cộng Tác Viên, Nhà Phân Phối, Shop có thể nhập thông tin (Shop, chủ shop, chi nhánh, địa chỉ, người bán, contact) vào sản phẩm, khi consumer scan thì sẽ thấy những thông tin đó. 
- như vậy vừa mình bạch, vừa được bảo vệ, vừa được shop rank/rating, vừa tăng giá trị của sản phẩm.
- tránh gian lận nhà máy và brand dùng app để rank/rating (nếu không mua sản phẩm thì không cho sử dụng các feedback và tính năng khác cho tính bền vững).

- nên cần thêm phần user dành cho Cộng Tác Viên, Shop, Nhà Phân Phối những giao diện quản lý trong app SCA này. 

vậy nên hãy bổ sung và phân tích, cùng viết thêm những phát thào cho những flows, user storie, screens cho app SCA này nhá.

-> có thể phân biệt màu giao diện để cho users (Cộng Tác Viên, Shop, Nhà Phân Phối và Consumer), để dex quản lý.

đây là ý thêm của tôi, nếu có gì cần chỉnh sửa /thêm thì hỗ trợ tôi nhá.

## 📱 NEW SCREENS SPECIFICATIONS
Tổng Quan Screens Mới
Category
Số lượng
Screens
Shop Management
6
Shop Dashboard, Shop Profile, Product Management, Purchase Verification, Sales Analytics, Shop Settings
Distributor Management
3
Distributor Dashboard, Distribution Chain, Transfer Management
Affiliate Management
3
Affiliate Dashboard, Referral Tracking, Commission Withdraw
Consumer Protection
2
Purchase History, Dispute Report
Admin
2
Shop Verification, Fraud Detection
TOTAL
16 screens


## 🔄 SCA - CẬP NHẬT HỆ SINH THÁI MỞ RỘNG
Ý tưởng của bạn xuất sắc! Đây là bước tiến quan trọng biến SCA từ "app tra cứu" thành "hệ sinh thái bảo vệ người tiêu dùng toàn diện". Mình sẽ phân tích và bổ sung đầy đủ:
📊 PHÂN TÍCH CHIẾN LƯỢC
✅ Giá Trị Mới Thêm Vào
Vấn đề
Giải pháp SCA
Lợi ích
Sản phẩm bị tráo đổi
Lịch sử scan + purchase verification
Consumer có bằng chứng mua hàng thật
Không biết mua ở đâu uy tín
Shop/Distributor info + rating
Chọn nơi mua đáng tin cậy
Shop gian lận nguồn gốc
Shop phải khai báo + verify
Minh bạch chuỗi phân phối
Brand tự rating
Only verified purchase can review
Chống fake review
Không có incentive cho Shop
Shop ranking + visibility
Shop tốt được thưởng visibility
🎨 COLOR CODING SYSTEM (Phân biệt User Types)
123456789101112131415161718
👥 USER ROLES & PERMISSIONS (UPDATED)
Matrix Phân Quyền
Feature
Consumer
Shop
Distributor
Affiliate
Brand
Scan QR
✅
✅
✅
✅
✅
View Product Info
✅
✅
✅
✅
✅
View Seller Info
✅
✅
✅
✅
✅
Write Review
✅*
❌
❌
❌
❌
Rate Shop
✅*
❌
❌
❌
❌
Manage Shop Profile
❌
✅
❌
❌
❌
Add Product to Shop
❌
✅
❌
❌
❌
View Sales Analytics
❌
✅
✅
✅
✅
Manage Distribution
❌
❌
✅
❌
✅
Generate QR Codes
❌
❌
❌
❌
✅
Verify Purchase
❌
✅
✅
✅
❌
View Consumer Data
❌
❌
❌
❌
❌
*Only with verified purchase scan




## 📖 USER STORIES
Chia theo Epic để dễ quản lý phát triển.
### Epic 1: Onboarding & Authentication
ID,User Story,Acceptance Criteria,Priority
US-001,Là người dùng mới, tôi muốn đăng ký tài khoản để sử dụng app, - Đăng ký bằng Email/Password hoặc Google, - Nhận email xác thực, - Chuyển hướng vào Home sau khi đăng ký thành công, High
US-002,Là người dùng, tôi muốn đăng nhập để truy cập tài khoản cá nhân, - Đăng nhập bằng Email/Password hoặc Google, - Lưu session (remember me), - Chuyển hướng vào Home sau khi đăng nhập, High
US-003,Là người dùng, tôi muốn xem hướng dẫn khi lần đầu vào app, - Hiển thị 3 slide giới thiệu tính năng, - Có nút "Bỏ qua", - Chỉ hiển thị 1 lần, Medium

### Epic 2: QR Scan & Product Verification
ID,User Story,Acceptance Criteria,Priority
US-004,Là người dùng, tôi muốn quét QR code trên sản phẩm để xem thông tin, - Mở camera từ app, - Nhận diện QR code trong khung, - Tự động chuyển sang Product Passport khi quét thành công, Critical
US-005,Là người dùng, tôi muốn biết sản phẩm có chính hãng không, - Hiển thị trạng thái "Verified" hoặc "Unverified", - Cảnh báo nếu QR không hợp lệ, Critical
US-006,Là người dùng, tôi muốn xem lịch sử quét QR, - Lưu lại 10 sản phẩm quét gần nhất, - Click vào xem lại Product Passport, Medium

### Epic 3: Product Passport & Information
ID,User Story,Acceptance Criteria,Priority
US-007,Là người dùng, tôi muốn xem hành trình sản phẩm từ nguyên liệu đến thành phẩm, - Hiển thị timeline dọc với các mốc, - Mỗi mốc có địa điểm, ngày tháng, trạng thái, Critical
US-008,Là người dùng, tôi muốn xem chứng nhận của sản phẩm, - Hiển thị logo chứng nhận (GOTS, Fair Trade...), - Click vào xem chi tiết chứng nhận, High
US-009,Là người dùng, tôi muốn xem tác động môi trường của sản phẩm, - Hiển thị số liệu: CO2, nước tiết kiệm, chất thải giảm, - So sánh với sản phẩm thông thường, High
US-010,Là người dùng, tôi muốn xem đánh giá tổng quan từ cộng đồng, - Hiển thị overall rating (1-5 sao), - Hiển thị biểu đồ radar 5 tiêu chí, - Số lượng người đánh giá, Critical

### Epic 4: Rating & Review
ID,User Story,Acceptance Criteria,Priority
US-011,Là người dùng, tôi muốn đánh giá sản phẩm theo 5 tiêu chí ESG, - 5 slider cho 5 tiêu chí, - Có thể để comment text, - Submit thành công, Critical
US-012,Là người dùng, tôi muốn chỉ đánh giá khi đã quét QR sản phẩm thật, - Kiểm tra QR scan trong vòng 7 ngày, - Mỗi sản phẩm chỉ được đánh giá 1 lần, High
US-013,Là người dùng, tôi muốn nhận điểm Impact sau khi đánh giá, - Hiển thị animation cộng điểm, - Cập nhật total points trên Profile, Medium
US-014,Là người dùng, tôi muốn xem đánh giá của người khác, - Danh sách review với avatar, name, rating, - Sort theo mới nhất/hữu ích nhất, Medium

### Epic 4: Rating & Review
ID, User Story, Acceptance Criteria, Priority
US-011,Là người dùng, tôi muốn đánh giá sản phẩm theo 5 tiêu chí ESG, - 5 slider cho 5 tiêu chí, - Có thể để comment text, - Submit thành công,  Critical
US-012,Là người dùng, tôi muốn chỉ đánh giá khi đã quét QR sản phẩm thật, - Kiểm tra QR scan trong vòng 7 ngày, - Mỗi sản phẩm chỉ được đánh giá 1 lần, High
US-013,Là người dùng, tôi muốn nhận điểm Impact sau khi đánh giá, - Hiển thị animation cộng điểm, - Cập nhật total points trên Profile, Medium
Medium
US-014, Là người dùng, tôi muốn xem đánh giá của người khác, - Danh sách review với avatar, name, rating, - Sort theo mới nhất/hữu ích nhất, Medium

### Epic 5: Profile & Gamification
ID, User Story, Acceptance Criteria, Priority
US-015,Là người dùng, tôi muốn xem hồ sơ cá nhân và thống kê, - Hiển thị: Total Scans, Reviews, Impact Points, - Level hiện tại (Newbie, Explorer, Ambassador), High
US-016,Là người dùng, tôi muốn xem huy hiệu đã đạt được, - Grid display các badge, - Badge khóa/mở tùy theo điều kiện, Medium
US-017,Là người dùng, tôi muốn chia sẻ sản phẩm lên mạng xã hội, - Generate image với product info + QR, - Share qua WhatsApp, Facebook, Zalo, Low
Low

## 📖 USER STORIES (BỔ SUNG)
Epic 6: Shop/Distributor Management
ID, User Story, Acceptance Criteria, Priority
US-018, Là Shop, tôi muốn đăng ký và xác minh cửa hàng để xuất hiện trên app, - Đăng ký thông tin shop (tên, địa chỉ, contact), - Upload giấy phép kinh doanh, - Chờ admin verify, - Nhận badge "Verified Shop", Critical
US-019, Là Shop, tôi muốn thêm sản phẩm vào cửa hàng để consumer biết có hàng, - Scan QR sản phẩm, - Link sản phẩm với shop, - Cập nhật tồn kho (optional), - Hiển thị "Available at this shop", Critical
US-020, Là Shop, tôi muốn xác nhận mua hàng cho consumer để họ có thể đánh giá, - Scan QR tại quầy thanh toán, - Link purchase với user account, - Generate purchase receipt, - Consumer nhận notification, Critical
US-021, Là Distributor, tôi muốn quản lý chuỗi phân phối sản phẩm, - Xem sản phẩm đang phân phối, - Update vị trí kho, - Transfer sản phẩm cho shop, - Lịch sử distribution, High
US-022, Là Affiliate/CTV, tôi muốn theo dõi hoa hồng từ giới thiệu sản phẩm, - Link affiliate với sản phẩm, - Track scans từ referral, - Tính hoa hồng, - Rút tiền, Medium
US-023, Là Consumer, tôi muốn xem thông tin shop đã mua để biết nơi uy tín, - Hiển thị shop info sau khi scan, - Xem rating shop, - Xem lịch sử mua từ shop đó, Critical
US-024, Là Consumer, tôi muốn được bảo vệ nếu sản phẩm bị tráo đổi, - Lịch sử scan lưu timestamp + location, - Purchase verification từ shop, - Report chức năng nếu có vấn đề, - bằng chứng scan đầu tiên, Critical
US-025, Là Consumer, tôi muốn report shop gian lận, - Form report với bằng chứng, - Upload hình ảnh, - Admin review, - Shop bị penalty nếu vi phạm, High

Epic 7: Anti-Fraud & Verification
ID,User Story,Acceptance Criteria,Priority
US-026, Là hệ thống, tôi muốn chỉ cho phép review khi có verified purchase, - Check scan history có purchase verification, - Check timestamp (trong vòng 30 ngày), - Check location match với shop, - Reject review nếu không đủ điều kiện, Critical
US-027, Là hệ thống, tôi muốn phát hiện scan bất thường để chống gian lận, - Detect multiple scans từ cùng device, - Detect location mismatch, - Detect time pattern bất thường, - Flag cho admin review, High
US-028, Là Consumer, tôi muốn xem lịch sử scan đầy đủ để làm bằng chứng, - Hiển thị tất cả scans với timestamp, - Hiển thị location map, - Hiển thị shop info, - Export làm bằng chứng, High

## 📊 SUMMARY 
Category | Tables | Count
Users & Auth | users, shop_ownership | 2
Business Entities | brands, shops, shop_branches | 3
Products | products, categories, product_shop_link | 3
Supply Chain | product_journey, certificates, distribution_chain, transfers, transfer_items | 5
Reviews & Ratings | reviews, review_votes, shop_reviews | 3
Scans & Verification | scan_events, purchase_verifications | 2
Affiliate | affiliate_tracking, affiliate_events, affiliate_payouts | 3
Gamification | impact_points, badges, user_badges | 3
Support | disputes, dispute_updates, notifications | 3
System | audit_logs, system_settings | 2
TOTAL | 29 tables | 
