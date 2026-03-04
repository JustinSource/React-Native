<!-- Tổng quan UX UI.md -->

Chào bạn, đây là tài liệu chi tiết để bạn hiện thực hóa ý tưởng. Mình chia làm 2 phần: **Pitch Deck (để gọi vốn)** và **Specs Consumer App (để làm Beta Demo)**.

---

# 📊 PHẦN 1: NỘI DUNG 10 SLIDES PITCH DECK

Mục tiêu: Thuyết phục nhà đầu tư về **Tầm nhìn**, **Thị trường** và **Khả năng thực thi**.

| Slide | Tiêu đề | Nội dung chính (Key Content) | Gợi ý hình ảnh (Visual) |
|-------|---------|------------------------------|-------------------------|
| **1** | **Title & Vision** | - Tên dự án: **Product Flows** (hoặc tên bạn chọn).<br>- Tagline: *"Minh bạch từ Nhà máy đến Người dùng"*.<br>- Thông tin liên hệ (Tên bạn, Email, Phone). | Logo dự án trên nền trắng/sạch. Hình ảnh minh họa sự kết nối (QR code + Globe). |
| **2** | **The Problem** | - **Greenwashing:** Người dùng không biết sản phẩm thật sự "xanh" hay chỉ là quảng cáo.<br>- **Opaque Supply Chain:** Không rõ nguồn gốc, điều kiện lao động.<br>- **Trust Deficit:** Thương hiệu khó chứng minh đạo đức, người dùng khó tin. | Infographic 3 nỗi đau: Người dùng (ngờ vực), Brand (khó chứng minh), Xã hội (ô nhiễm/bóc lột). |
| **3** | **The Solution** | - **Ecosystem:** Nền tảng xác thực chuỗi cung ứng toàn diện.<br>- **QR Passport:** Scan để xem toàn bộ hành trình sản phẩm.<br>- **Community Rating:** Người dùng đánh giá dựa trên tiêu chí ESG (Môi trường, Xã hội, Quản trị). | Sơ đồ hệ sinh thái đơn giản: Factory → Brand → Consumer → Feedback Loop. |
| **4** | **Product Demo** | - Giới thiệu 3 tính năng cốt lõi của Beta:<br>1. Scan QR.<br>2. Xem Product Passport.<br>3. Đánh giá & Tích điểm Impact. | **Quan trọng:** Chụp màn hình Mockup App (3 màn hình chính) đặt trong khung điện thoại. |
| **5** | **Market Size** | - **TAM:** Thị trường hàng tiêu dùng bền vững toàn cầu (số liệu thống kê).<br>- **SAM:** Thị trường Việt Nam/Đông Nam Á (Dệt may, F&B).<br>- **SOM:** Mục tiêu 3 năm đầu (Số Brand/User). | Biểu đồ vòng tròn hoặc cột tăng trưởng. Số liệu cụ thể (ví dụ: $150 Billion market). |
| **6** | **Business Model** | - **B2B SaaS:** Phí subscription cho Brand/Factory.<br>- **Verification Fee:** Phí kiểm tra/cấp chứng nhận.<br>- **Data Insights:** Bán báo cáo xu hướng (ẩn danh). | Sơ đồ dòng tiền đơn giản. Icon tiền tệ gắn với từng đối tượng. |
| **7** | **Go-to-Market** | - **Phase 1:** Pilot với 5 Brand & 10 Factory tại Việt Nam.<br>- **Phase 2:** Mở rộng sang khu vực ASEAN.<br>- **Partnership:** Hợp tác với tổ chức Audit, NGO, Chính phủ. | Roadmap timeline (6 tháng - 1 năm - 2 năm). Logo đối tác tiềm năng. |
| **8** | **Competition** | - **Đối thủ:** Các app scan mã vạch thông thường, nền tảng ESG riêng lẻ.<br>- **Điểm khác biệt (USP):** Kết hợp B2B (Supply Chain) + B2C (Rating) + Gamification (Impact Points). | Ma trận so sánh (Table): Product Flows vs. Competitors (Tính năng Check ✅). |
| **9** | **The Team** | - **Founder:** Kỹ năng Tech + Vision (Bạn).<br>- **Advisors:** Chuyên gia ngành dệt may, ESG, Luật.<br>- **Plan:** Tuyển dụng CTO, Sales Lead sau vòng gọi vốn. | Ảnh chân dung chuyên nghiệp. Logo trường đại học/công ty cũ nếu có uy tín. |
| **10** | **The Ask** | - **Cần gọi:** $100,000 - $150,000 (Pre-Seed).<br>- **Sử dụng vốn:** 40% Product Dev, 30% Marketing/Pilot, 30% Ops/Legal.<br>- **Milestone:** Đạt 1,000 Users & 10 Brand trong 12 tháng. | Biểu đồ tròn phân bổ ngân sách. Thông tin liên hệ lại ở cuối. |

---

# 📱 PHẦN 2: SPECIFICATIONS CONSUMER APP (BETA DEMO)

Đây là bản mô tả kỹ thuật để bạn (hoặc team dev) biết chính xác cần code những gì cho bản Beta. **Lưu ý: Bản Beta dùng Mock Data (dữ liệu giả), chưa cần Backend thật.**

## 1. Tổng quan UX/UI
*   **Phong cách:** Minimalist, Trustworthy, Eco-friendly.
*   **Màu chủ đạo:** 
    *   Primary: `Emerald Green` (#10B981) - Tượng trưng bền vững.
    *   Secondary: `Deep Blue` (#1E3A8A) - Tượng trưng tin cậy/công nghệ.
    *   Background: `White` & `Light Gray` (#F3F4F6).
*   **Font:** Inter hoặc Roboto (Dễ đọc, hiện đại).
*   **Nền tảng:** React Native (Expo) để build nhanh iOS/Android hoặc Next.js PWA để chạy trên web/mobile web.

## 2. Chi tiết Screens & Features

### Screen 1: Onboarding & Auth (Màn hình chào mừng)
*   **Layout:** 
    *   Logo lớn ở giữa.
    *   3 slide giới thiệu tính năng (Scan, Verify, Impact).
    *   Nút "Get Started" & "Login".
*   **Components:** `PaginationDot`, `ButtonPrimary`, `Illustration`.
*   **Feature:** Đăng nhập bằng Email/Google (Dùng Firebase Auth hoặc Mock Login).
*   **Content:** "Biết nguồn gốc, Chọn bền vững".

### Screen 2: Home Dashboard (Trang chủ)
*   **Layout:** 
    *   Header: Chào user, Hiển thị Level (Ví dụ: "Green Warrior").
    *   Search Bar: Tìm sản phẩm/thương hiệu.
    *   Featured Brands: Carousel logo các brand đối tác.
    *   Recent Scans: Lịch sử scan gần đây.
    *   Floating Action Button (FAB): Nút Scan QR lớn ở giữa dưới.
*   **Components:** `Header`, `SearchInput`, `BrandCard`, `HistoryList`, `FAB`.
*   **Content:** Dữ liệu giả về các brand đang hot, lịch sử scan mẫu.

### Screen 3: QR Scanner (Màn hình quét)
*   **Layout:** 
    *   Full màn hình Camera.
    *   Khung quét (Overlay) ở giữa.
    *   Nút đèn Flash & Gallery (chọn ảnh QR).
    *   Nút "Cancel" ở dưới.
*   **Components:** `CameraView`, `ScanOverlay`, `IconButton`.
*   **Feature:** 
    *   Dùng thư viện `expo-camera` hoặc `react-native-vision-camera`.
    *   Logic: Nếu quét đúng mã mẫu → Chuyển sang Screen 4. Nếu sai → Alert.
*   **Content:** Không có content tĩnh, chỉ là interface camera.

### Screen 4: Product Passport (Chi tiết sản phẩm) - **QUAN TRỌNG NHẤT**
*   **Layout:** 
    *   **Top:** Ảnh sản phẩm lớn + Tên + Overall Score (4.8 ⭐).
    *   **Section 1: Journey:** Timeline dọc (Nguyên liệu → Sản xuất → Vận chuyển → Bán lẻ).
    *   **Section 2: Certificates:** Danh sách chứng nhận (GOTS, Fair Trade) dạng chip/tag.
    *   **Section 3: Impact:** Số liệu (Lượng nước tiết kiệm, CO2 giảm).
    *   **Section 4: Rating:** Biểu đồ radar 5 tiêu chí & Nút "Write Review".
    *   **Sticky Bottom:** Nút "Mua ngay" (Link ngoài) & "Chia sẻ".
*   **Components:** `ProductImage`, `TimelineStep`, `CertBadge`, `RadarChart`, `RatingSummary`, `ButtonGroup`.
*   **Content (Mock Data):** 
    *   Tên: "Áo Thun Organic Cotton".
    *   Journey: "Bông Việt Nam → Nhà máy A → Cảng Sài Gòn → Store HCM".
    *   Score: Chất lượng 5, Bền vững 4, Lao động 5...

### Screen 5: Rating & Review Modal (Cửa sổ đánh giá)
*   **Layout:** 
    *   Popup từ dưới lên (Bottom Sheet).
    *   5 Slider cho 5 tiêu chí (Chất lượng, Minh bạch, Bền vững, Lao động, Cộng đồng).
    *   Ô nhập comment text.
    *   Nút "Submit Review".
*   **Components:** `SliderInput`, `TextArea`, `ButtonSubmit`.
*   **Feature:** Khi submit → Hiển thị animation "Cảm ơn + Cộng điểm Impact".
*   **Content:** Label rõ ràng cho từng slider (Ví dụ: "Nhà máy có đảm bảo an toàn không?").

### Screen 6: User Profile & Impact (Hồ sơ cá nhân)
*   **Layout:** 
    *   Avatar & Name.
    *   Stats: Total Scans, Reviews Written, Impact Points.
    *   Badges Collection: Huy hiệu đã đạt (Newbie, Expert, Ambassador).
    *   Settings: Ngôn ngữ, Đăng xuất.
*   **Components:** `StatCard`, `BadgeGrid`, `SettingList`.
*   **Content:** Số liệu giả lập để user thấy cảm giác thành tựu (Gamification).

## 3. Cấu trúc dữ liệu Mock (JSON Sample)
Để code nhanh, bạn tạo một file `mockData.ts`:

```typescript
export const mockProduct = {
  id: "prod_001",
  name: "Áo Thun Basic Organic",
  brand: "EcoWear Vietnam",
  overallScore: 4.8,
  journey: [
    { step: "Nguyên liệu", location: "Đồng Nai", date: "2023-10-01", status: "verified" },
    { step: "Dệt nhuộm", location: "Bình Dương", date: "2023-10-15", status: "verified" },
    { step: "May mặc", location: "TP.HCM", date: "2023-11-01", status: "verified" },
  ],
  certificates: ["GOTS", "Fair Trade", "Carbon Neutral"],
  ratings: {
    quality: 5,
    transparency: 4.5,
    sustainability: 5,
    labor: 4.8,
    community: 4.2
  },
  impact: {
    waterSaved: "2000 lít",
    co2Reduced: "5 kg"
  }
};
```

## 4. Task Flow cho Developer (Bạn)

Để hoàn thành Beta Demo trong **4 tuần**, hãy chia task như sau:

| Tuần | Nhiệm vụ chính (Key Tasks) | Kết quả mong đợi (Deliverables) |
|------|----------------------------|---------------------------------|
| **1** | **Setup & Design**<br>- Khởi tạo project (Expo/Next.js).<br>- Dựng cấu trúc thư mục.<br>- Thiết kế UI trên Figma (hoặc dùng UI Kit có sẵn như NativeBase/Tamagui).<br>- Chuẩn bị file `mockData.ts`. | - Project chạy được.<br>- Có bộ component cơ bản (Button, Input, Card).<br>- Dữ liệu giả sẵn sàng. |
| **2** | **Core Screens (Home & Scan)**<br>- Code màn hình Home.<br>- Code màn hình Scanner (tích hợp camera).<br>- Logic điều hướng (Navigation). | - App mở lên thấy Home.<br>- Bấm nút Scan mở được Camera.<br>- Quét mã mẫu → Chuyển trang thành công. |
| **3** | **Core Screens (Passport & Rating)**<br>- Code màn hình Product Passport (hiển thị data từ mock).<br>- Code Modal Rating (Slider, Submit).<br>- Logic cộng điểm giả lập (State management). | - Xem được chi tiết sản phẩm đẹp.<br>- Đánh giá được sao.<br>- Thấy thông báo "Thành công". |
| **4** | **Profile & Polish**<br>- Code màn hình Profile.<br>- Tinh chỉnh UX (Animation, Loading state).<br>- Test trên thiết bị thật.<br>- Quay video demo. | - App hoàn chỉnh 6 màn hình.<br>- Không lỗi crash cơ bản.<br>- Video demo 2 phút sẵn sàng gửi Investor. |

## 5. Gợi ý Thư viện (Libraries) nên dùng
*   **Navigation:** `React Navigation` (Standard).
*   **UI Components:** `NativeBase` hoặc `Tamagui` (Tiết kiệm thời code CSS).
*   **Charts:** `react-native-svg-charts` (Cho biểu đồ Radar/Bar).
*   **Camera:** `expo-camera` (Dễ dùng nhất cho Expo).
*   **Icons:** `Lucide-react-native` hoặc `VectorIcons`.
*   **State Management:** `Zustand` (Đơn giản hơn Redux, đủ dùng cho Beta).

---

# 💡 LỜI KHUYÊN KHI THỰC HIỆN

1.  **Đừng cầu toàn Backend:** Nhà đầu tư hiểu đây là Beta. Họ quan tâm **Flow trải nghiệm** có mượt không, **Câu chuyện** có hay không. Dữ liệu giả đẹp còn hơn dữ liệu thật nhưng giao diện xấu.
2.  **Tập trung vào màn hình Product Passport:** Đây là "trái tim" của ứng dụng. Hãy đầu tư nhiều thời gian nhất để màn hình này trông thật chuyên nghiệp, nhiều thông tin nhưng không rối.
3.  **Chuẩn bị kịch bản Demo:** Khi gặp Investor, đừng chỉ đưa điện thoại. Hãy kể chuyện: *"Anh hãy tưởng tượng đang mua chiếc áo này, em quét thử nhé..."* → Dẫn họ đi qua flow Scan → Xem → Đánh giá.
4.  **Backup Plan:** Nếu code React Native gặp khó khăn về build iOS/Android, hãy làm **Next.js Web App** và tối ưu giao diện Mobile. Investor vẫn chấp nhận xem trên Web nếu UX tốt, mà lại dễ deploy hơn.

Bạn đã có trong tay **Nội dung Pitch Deck** và **Bản vẽ kỹ thuật App**. Bước tiếp theo là mở IDE lên và khởi tạo project thôi! Cần mình hỗ trợ code mẫu component nào (ví dụ: Scanner hay Radar Chart) thì cứ báo nhé. 🚀

