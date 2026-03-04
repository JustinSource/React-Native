# SCA Development ChangeLog

Tất cả các thay đổi quan trọng đối với dự án SCA sẽ được ghi lại trong tệp này.

## [1.1.1] - 2026-03-03 (Hotfix)

### Fixed
- Sửa lỗi import rỗng trong `product/[id].tsx` gây crash app khi mở màn hình Product Passport.

### Changed
- **Luồng người dùng Consumer (Product Passport):**
  - Consumer scan sản phẩm → xem thông tin sản phẩm (đọc-only).
  - Nhấn **"Verified Purchase"** để xác nhận đã mua tại cửa hàng → nhận +50 Impact Points.
  - Chỉ sau khi xác nhận mua hàng mới **mở khoá** tính năng Đánh giá & Tích điểm.
  - Tab Reviews hiển thị trạng thái khoá (Lock icon) khi chưa mua, hiển thị nút đánh giá sau khi mua.
  - Thêm `PurchaseConfirmModal` (bottom sheet) xác nhận hành động và giải thích lợi ích.

---

## [1.1.0] - 2026-03-03

### Added
- **Product Passport (Screen 8):**
  - Thêm tab `Certification` mới hiển thị các chứng nhận quốc tế (GOTS, Fair Trade, Circular Design, Carbon Neutral).
  - Cập nhật tab `Journey` với icon từng giai đoạn, subtitle và description dạng badge.
  - Nâng cấp tab `Impact` với biểu đồ ngũ giác (Radar/Pentagon) hiển thị điểm bền vững (Quality, Transparency, Sustainability, Labor, Community).
  - Thêm thẻ thông tin nguồn gốc mua hàng (`purchasedFrom`, `purchasedDate`) cho mục đích kiểm tra tính bền vững.
  - Cải thiện Hero Section với overlay info (category badge, tên sản phẩm, rating) ngay trên ảnh sản phẩm.
- **Review Modal (Screenshot 2):**
  - Tạo `ReviewModal` component dạng bottom sheet với 5 tiêu chí đánh giá có thanh trượt (slider).
  - Tiêu chí: Chất lượng, Minh bạch, Bền vững, Lao động, Cộng đồng.
  - Thêm ô nhập nhận xét văn bản và nút "Gửi đánh giá".
- **Profile Screen (Screen 9) - Thiết kế lại:**
  - Header dọc với avatar tròn, tên, huy hiệu "Green Warrior", và ngày tham gia.
  - Hàng thống kê (Total Scans: 128, Reviews: 45, Points: 2.4k).
  - Biểu đồ cột "Thống kê tác động" 7 ngày.
  - Phần "Danh hiệu & Huy hiệu" với thanh tiến trình (Newbie 100%, Eco Expert 75%, Sustainability Ambassador 12%).
  - Menu cài đặt phẳng: Chỉnh sửa hồ sơ, Ngôn ngữ, Cài đặt thông báo, Đăng xuất.

### Changed
- Tab bar height tăng lên 95px để chứa nhãn rõ hơn (thay đổi bởi người dùng).
- Nút Scan FAB điều chỉnh marginTop và kích thước (60x60px).

---

## [1.0.0] - 2026-03-02

### Changed
- Đổi tên dự án từ "pulsing-interstellar" thành "SCA" để dễ nhớ và chuyên nghiệp hơn.

### Added
- Khởi tạo dự án React Native với Expo Router.
- Thiết lập cấu trúc thư mục `DOC` cho tài liệu dự án.
- Thêm bản đề xuất hệ sinh thái `sca_proposal.md`.
- Cấu hình hệ màu sắc `ScaColors` trong `constants/theme.ts`.
- Tạo file `task.md` để theo dõi tiến độ công việc ngay trong dự án.
- Tạo các màn hình placeholder cho từng đối tượng (Consumer, Shop, Brand, Factory, Auditor) với màu sắc đặc trưng.
- Thêm file `How To & Guide.md` hướng dẫn vận hành và phát triển Fullstack chuyên nghiệp.
- Cập nhật quy tắc `Versioning` và `Git Commit Structure`.

---

## Guide: Versioning & Git Commit Structure

### 1. Quy tắc Đánh số Phiên bản (Versioning)
Sử dụng **Semantic Versioning (SemVer)**: `MAJOR.MINOR.PATCH`
- **MAJOR**: Thay đổi lớn, phá vỡ tính tương thích cũ (breaking changes).
- **MINOR**: Thêm tính năng mới nhưng vẫn tương thích ngược.
- **PATCH**: Sửa lỗi (bug fixes) và tối ưu hóa nhỏ.

### 2. Quy tắc Commit Git (Conventional Commits)
Cấu trúc: `<type>(<scope>): <description>`

**Các loại (Types):**
- `feat`: Tính năng mới.
- `fix`: Sửa lỗi.
- `docs`: Cập nhật tài liệu.
- `style`: Thay đổi định dạng code (không ảnh hưởng logic).
- `refactor`: Tái cấu trúc code (không sửa lỗi hay thêm tính năng).
- `perf`: Tối ưu hiệu năng.
- `test`: Thêm hoặc sửa bài kiểm tra.
- `chore`: Cập nhật build, package, v.v.

**Ví dụ:**
- `feat(ui): add consumer scan screen placeholder`
- `docs(changelog): add git commit guide`
- `fix(theme): correct syntax error in theme.ts`
