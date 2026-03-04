# 🌐 RESTFUL API ENDPOINTS
## Danh sách API endpoint chuẩn REST cho tương lai. Beta có thể mock các endpoint này.
### A. Authentication & Users
Method, Endpoint, Description, Auth Required
POST, /api/v1/auth/register, Đăng ký tài khoản mới, No
POST, /api/v1/auth/login, Đăng nhập, No
POST, /api/v1/auth/logout, Đăng xuất, Yes
POST, /api/v1/auth/refresh, Refresh token, No
GET, /api/v1/users/me, Lấy thông tin user hiện tại, Yes
PUT, /api/v1/users/me, Cập nhật thông tin user, Yes
GET, /api/v1/users/me/stats, Lấy thống kê user (scans, reviews, points), Yes
GET, /api/v1/users/me/badges, Lấy danh sách huy hiệu đã đạt, Yes
GET,/api/v1/users/me,Lấy thông tin user hiện tại,Yes,
PUT,/api/v1/users/me,Cập nhật thông tin user,Yes,
GET,
/api/v1/users/me/stats,
Lấy thống kê user (scans, reviews, points),
Yes,
GET,
/api/v1/users/me/badges,
Lấy danh sách huy hiệu đã đạt,
Yes,
### B. Products & Scan
Method
Endpoint
Description
Auth Required
GET
/api/v1/products
Danh sách sản phẩm (có filter, sort, pagination)
No
GET
/api/v1/products/:id
Chi tiết sản phẩm
No
GET
/api/v1/products/:id/journey
Hành trình sản phẩm
No
GET
/api/v1/products/:id/certificates
Chứng nhận sản phẩm
No
POST
/api/v1/products/scan
Xác thực QR code và trả về product info
No
GET
/api/v1/products/:id/reviews
Danh sách review của sản phẩm
No
GET
/api/v1/products/search
Tìm kiếm sản phẩm (query params: q, category, brand)
No
### C. Reviews & Ratings
Method
Endpoint
Description
Auth Required
POST
/api/v1/reviews
Tạo review mới
Yes
GET
/api/v1/reviews/:id
Chi tiết review
No
PUT
/api/v1/reviews/:id
Cập nhật review (của chính mình)
Yes
DELETE
/api/v1/reviews/:id
Xóa review (của chính mình)
Yes
POST
/api/v1/reviews/:id/helpful
Vote review hữu ích
Yes
POST
/api/v1/reviews/:id/not-helpful
Vote review không hữu ích
Yes
GET
/api/v1/users/me/reviews
Danh sách review của user hiện tại
Yes
### D. Brands
Method
Endpoint
Description
Auth Required
GET
/api/v1/brands
Danh sách thương hiệu
No
GET
/api/v1/brands/:id
Chi tiết thương hiệu
No
GET
/api/v1/brands/:id/products
Sản phẩm của thương hiệu
No
GET
/api/v1/brands/:id/ratings
Thống kê rating của thương hiệu
No
GET
/api/v1/brands/top
Top thương hiệu theo rating
No
### E. Gamification (Impact Points & Badges)
Method
Endpoint
Description
Auth Required
GET
/api/v1/impact/points
Lịch sử điểm impact của user
Yes
GET
/api/v1/impact/leaderboard
Bảng xếp hạng user theo points
No
GET
/api/v1/badges
Danh sách tất cả huy hiệu
No
GET
/api/v1/badges/available
Huy hiệu user có thể đạt được
Yes
POST
/api/v1/impact/claim
Claim điểm từ action (scan, review...)
Yes
### F. Categories & Discovery
Method
Endpoint
Description
Auth Required
GET
/api/v1/categories
Danh mục sản phẩm
No
GET
/api/v1/categories/:id/products
Sản phẩm theo danh mục
No
GET
/api/v1/discovery/featured
Sản phẩm nổi bật
No
GET
/api/v1/discovery/trending
Sản phẩm đang trend
No
### G. Scan History
Method
Endpoint
Description
Auth Required
GET
/api/v1/scans
Lịch sử quét của user
Yes
GET
/api/v1/scans/:id
Chi tiết lần quét
Yes
DELETE
/api/v1/scans/:id
Xóa lịch sử quét
Yes
### H. Notifications
Method
Endpoint
Description
Auth Required
GET
/api/v1/notifications
Danh sách thông báo
Yes
GET
/api/v1/notifications/:id
Chi tiết thông báo
Yes
PUT
/api/v1/notifications/:id/read
Đánh dấu đã đọc
Yes
PUT
/api/v1/notifications/read-all
Đánh dấu tất cả đã đọc
Yes
### I. Reports & Moderation
Method
Endpoint
Description
Auth Required
POST
/api/v1/reports
Báo cáo sản phẩm/review
Yes
GET
/api/v1/reports/my
Báo cáo của tôi
Yes
GET
/api/v1/admin/reports
Danh sách báo cáo (admin)
Admin
PUT
/api/v1/admin/reports/:id/resolve
Giải quyết báo cáo
Admin
### J. Wishlist
Method
Endpoint
Description
Auth Required
POST
/api/v1/wishlist/add
Thêm vào wishlist
Yes
GET
/api/v1/wishlist
Danh sách wishlist
Yes
DELETE
/api/v1/wishlist/remove
Xóa khỏi wishlist
Yes
### K. User Stats
Method
Endpoint
Description
Auth Required
GET
/api/v1/users/me/stats
Thống kê user
Yes
GET
/api/v1/users/me/stats/weekly
Thống kê tuần
Yes
GET
/api/v1/users/me/stats/monthly
Thống kê tháng
Yes
### L. Product Stats
Method
Endpoint
Description
Auth Required
GET
/api/v1/products/:id/stats
Thống kê sản phẩm
No
GET
/api/v1/products/:id/stats/daily
Thống kê ngày
No
GET
/api/v1/products/:id/stats/weekly
Thống kê tuần
No
### M. Brand Stats
Method
Endpoint
Description
Auth Required
GET
/api/v1/brands/:id/stats
Thống kê thương hiệu
No
GET
/api/v1/brands/:id/stats/daily
Thống kê ngày
No
GET
/api/v1/brands/:id/stats/weekly
Thống kê tuần
No
### N. Audit Logs (Admin)
Method
Endpoint
Description
Auth Required
GET
/api/v1/admin/audit-logs
Danh sách audit logs
Admin
GET
/api/v1/admin/audit-logs/:id
Chi tiết audit log
Admin
### O. App Settings
Method
Endpoint
Description
Auth Required
GET
/api/v1/settings
Cấu hình app
No
GET
/api/v1/settings/public
Cấu hình public
No
### P. Content Pages
Method
Endpoint
Description
Auth Required
GET
/api/v1/pages/:slug
Trang nội dung
No
### Q. FAQs
Method
Endpoint
Description
Auth Required
GET
/api/v1/faqs
Danh sách câu hỏi thường gặp
No
### R. Support Tickets
Method
Endpoint
Description
Auth Required
POST
/api/v1/support/tickets
Tạo ticket
Yes
GET
/api/v1/support/tickets
Danh sách ticket của user
Yes
GET
/api/v1/support/tickets/:id
Chi tiết ticket
Yes
PUT
/api/v1/support/tickets/:id
Cập nhật ticket
Yes
### S. Support Messages
Method
Endpoint
Description
Auth Required
POST
/api/v1/support/tickets/:id/messages
Gửi tin nhắn
Yes
GET
/api/v1/support/tickets/:id/messages
Danh sách tin nhắn
Yes
### T. User Sessions
Method
Endpoint
Description
Auth Required
GET
/api/v1/users/me/sessions
Danh sách session
Yes
DELETE
/api/v1/users/me/sessions/:id
Xóa session
Yes
### U. User Devices
Method
Endpoint
Description
Auth Required
GET
/api/v1/users/me/devices
Danh sách thiết bị
Yes
DELETE
/api/v1/users/me/devices/:id
Xóa thiết bị
Yes
### V. User Activity
Method
Endpoint
Description
Auth Required
GET
/api/v1/users/me/activity
Lịch sử hoạt động
Yes
### W. User Preferences
Method
Endpoint
Description
Auth Required
GET
/api/v1/users/me/preferences
Cấu hình user
Yes
PUT
/api/v1/users/me/preferences
Cập nhật cấu hình
Yes
### X. User Referrals
Method
Endpoint
Description
Auth Required
POST
/api/v1/referrals/generate
Tạo mã giới thiệu
Yes
GET
/api/v1/referrals/me
Thông tin giới thiệu
Yes
GET
/api/v1/referrals/me/history
Lịch sử giới thiệu
Yes
### Y. User Achievements
Method
Endpoint
Description
Auth Required
GET
/api/v1/users/me/achievements
Danh sách thành tựu
Yes
### Z. User Streaks
Method
Endpoint
Description
Auth Required
GET
/api/v1/users/me/streaks
Chuỗi hoạt động
Yes
### AA. User Badges
Method
Endpoint
Description
Auth Required
GET
/api/v1/users/me/badges
Danh sách huy hiệu
Yes
### AB. User Level
Method
Endpoint
Description
Auth Required
GET
/api/v1/users/me/level
Cấp độ user
Yes
### AC. User Report
Method
Endpoint
Description
Auth Required
POST
/api/v1/users/me/reports
Báo cáo user
Yes
GET
/api/v1/users/me/reports
Danh sách báo cáo
Yes
### AD. User Block
Method
Endpoint
Description
Auth Required
POST
/api/v1/users/me/blocks
Chặn user
Yes
GET
/api/v1/users/me/blocks
Danh sách chặn
Yes
DELETE
/api/v1/users/me/blocks/:id
Bỏ chặn
Yes
### AE. User Follow
Method
Endpoint
Description
Auth Required
POST
/api/v1/users/me/follows
Theo dõi user
Yes
GET
/api/v1/users/me/follows
Danh sách theo dõi
Yes
DELETE
/api/v1/users/me/follows/:id
Bỏ theo dõi
Yes
### AF. User Group
Method
Endpoint
Description
Auth Required
POST
/api/v1/users/me/groups
Tham gia nhóm
Yes
GET
/api/v1/users/me/groups
Danh sách nhóm
Yes
DELETE
/api/v1/users/me/groups/:id
Rời nhóm
Yes
### AG. User Role
Method
Endpoint
Description
Auth Required
GET
/api/v1/users/me/roles
Vai trò user
Yes
### AH. User Permission
Method
Endpoint
Description
Auth Required
GET
/api/v1/users/me/permissions
Quyền user

## gọi ý:
### 1. Authentication
### 2. User Management
### 3. Product Management
### 4. Review Management
### 5. Scan Management
### 6. Impact Management
### 7. Badge Management
### 8. Brand Management
### 9. Category Management
### 10. Notification Management
### 11. Report Management
### 12. Wishlist Management
### 13. User Stats Management
### 14. Product Stats Management
### 15. Brand Stats Management
### 16. Audit Log Management
### 17. App Settings Management
### 18. Content Page Management
### 19. FAQ Management
### 20. Support Ticket Management
### 21. Support Message Management
### 22. User Session Management
### 23. User Device Management
### 24. User Activity Management
### 25. User Preferences Management
### 26. User Referral Management
### 27. User Achievement Management
### 28. User Streak Management
### 29. User Badge Management
### 30. User Level Management
### 31. User Report Management
### 32. User Block Management
### 33. User Follow Management
### 34. User Group Management
### 35. User Role Management
### 36. User Permission Management