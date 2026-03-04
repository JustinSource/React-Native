# SCA Project: How-To & Development Guide

Tài liệu này hướng dẫn cách vận hành, phát triển và mở rộng ứng dụng **SCA (Specifications Consumer App)** theo chuẩn chuyên nghiệp Fullstack.

---

## 1. Hướng dẫn Vận hành (Getting Started)

Dự án được xây dựng trên nền tảng **React Native (Expo)** với **Expo Router**.

### Yêu cầu hệ thống
- **Node.js**: Phiên bản 18 trở lên.
- **npm** hoặc **yarn**.
- **Expo Go**: Cài đặt trên điện thoại (iOS/Android) để xem trước.

### Các lệnh cơ bản
- `npm install`: Cài đặt các thư viện phụ thuộc.
- `npx expo start`: Khởi chạy trung tâm điều khiển Expo.
  - Nhấn `a`: Mở trên trình giả lập Android.
  - Nhấn `i`: Mở trên trình giả lập iOS.
  - Nhấn `w`: Mở phiên bản Web.
  - Quét mã QR bằng ứng dụng **Expo Go** để chạy trên điện thoại thật.

---

## 2. Cấu trúc Thư mục (Project Anatomy)

```text
├── app/                # Expo Router (Cấu trúc file là cấu trúc điều hướng)
│   ├── (consumer)/     # Nhóm màn hình cho Người tiêu dùng (Xanh lá)
│   ├── (shop)/         # Nhóm màn hình cho Shop/CTV (Vàng)
│   ├── (brand)/        # Nhóm màn hình cho Nhãn hàng (Tím)
│   ├── (factory)/      # Nhóm màn hình cho Nhà máy (Xanh dương)
│   ├── (auditor)/      # Nhóm màn hình cho Kiểm định viên (Xám)
│   └── _layout.tsx     # Cấu hình điều hướng gốc (Root Navigation)
├── components/         # Các thành phần giao diện dùng chung (Shared UI)
├── constants/          # Biến hằng số, Theme, Màu sắc (theme.ts)
├── DOC/                # Tài liệu dự án (.md)
└── assets/             # Hình ảnh, Fonts, Icons
```

---

## 3. Quy trình Phát triển Chuyên nghiệp (Fullstack Roadmap)

Để đưa SCA từ ý tưởng thành sản phẩm thực tế, hãy tuân theo các bước sau:

### Bước 1: Hoàn thiện Frontend UI (Mobile First)
- Sử dụng `ScaColors` trong `constants/theme.ts` để đồng bộ màu sắc.
- Phát triển các Component UI tùy chỉnh (Button, Card, Scanner Modal).
- Sử dụng `lucide-react-native` hoặc `expo-vector-icons` cho các biểu tượng.

### Bước 2: Tích hợp Logic Scan & Blockchain
- Sử dụng `expo-camera` để hiện thực hóa tính năng quét QR.
- Kết nối với Smart Contract (nếu dùng Blockchain) để xác thực tính duy nhất của mã QR sản phẩm.

### Bước 3: Phát triển Backend API (Fullstack Layer)
- **Công nghệ gợi ý**: Node.js (NestJS) hoặc Python (FastAPI).
- **Database**: 
  - PostgreSQL: Cho dữ liệu quan hệ (User, Products, Orders).
  - MongoDB: Cho dữ liệu log chuỗi cung ứng linh hoạt.
  - Redis: Cho Cache thông tin scan nhanh.
- **Dịch vụ**: Lưu trữ chứng chỉ (PDF) trên AWS S3 hoặc Google Cloud Storage.

### Bước 4: Bảo mật & Chống Gian Lận (Security)
- **JWT Authentication**: Phân quyền rõ ràng (Roles) giữa Consumer, Shop, Brand...
- **Rate Limiting**: Ngăn chặn việc scan ảo hàng loạt.
- **Digital Signatures**: Các bên thứ 3 (Auditor) phải ký số vào chứng chỉ trước khi lên hệ thống.

---

## 4. Gợi ý mở rộng (Expansion Ideas)

1.  **AI Image Recognition**: Ngoài QR, quét trực tiếp nhãn mác để nhận diện sản phẩm.
2.  **Gamification**: Tặng "Eco-Points" cho Consumer khi họ mua sản phẩm bền vững. Shop có thể dùng Point để giảm phí dịch vụ.
3.  **Real-time Tracking**: Tích hợp bản đồ GPS để xem vị trí chính xác của lô hàng trong chuỗi cung ứng.
4.  **Multi-language**: Hỗ trợ xuất khẩu toàn cầu (Việt, Anh, Nhật, Đức).

---

## 5. Tiêu chuẩn Mã nguồn (Best Practices)

- **TypeScript**: Giữ kiểu dữ liệu chặt chẽ để tránh lỗi runtime.
- **Component Driven**: Chia nhỏ giao diện thành các thành phần nhỏ nhất có thể tái sử dụng.
- **Conventional Commits**: Xem hướng dẫn trong [DOC/ChangeLog.md](file:///c:/Users/Vostro%2013%205310/.gemini/antigravity/playground/pulsing-interstellar/DOC/ChangeLog.md).

---

*Chúc bạn thành công trên hành trình xây dựng SCA!*
