# COMPONENT LIBRARY PROMPTS
## Button Components
Create a button component library
1. Button Primary:
   - Height: 56px (large), 48px (medium), 40px (small)
   - Background: Primary Green (#10B981)
   - Text: White, Bold
   - Radius: 12px
   - Padding: horizontal 24px
   - Shadow: md
   - States:
     * Default: Green bg
     * Hover: Darker Green (#059669)
     * Pressed: Even darker (#047857)
     * Disabled: Gray 300 bg, Gray 500 text, no shadow

2. Button Secondary:
   - Height: 56px
   - Background: White
   - Border: 2px Primary Green
   - Text: Primary Green, Bold
   - Radius: 12px
   - States:
     * Hover: Green 50 bg
     * Pressed: Green 100 bg

3. Button Text:
   - No bg, no border
   - Text: Primary Green, Medium
   - Padding: 8px 16px
   - States:
     * Hover: Underline
     * Pressed: Darker Green

4. Button Icon:
   - Square: 40x40px, 48x48px
   - Circle bg: White or Gray 100
   - Icon: 20x20px, center
   - Radius: full (circle) or 12px (rounded)
   - Shadow: sm

5. Button FAB (Floating Action Button):
   - Size: 56x56px
   - Background: Primary Green
   - Icon: White, 24x24px
   - Radius: full (circle)
   - Shadow: lg
   - Position: Fixed, bottom right or center

## Input Components
Create input component library

1. Text Input:
   - Height: 56px
   - Background: White
   - Border: 1px Gray 300
   - Radius: 12px
   - Padding: 16px
   - Label: Above input, sm, Medium, Gray 700
   - Placeholder: Gray 400
   - Icon: Left (20x20px, Gray 500)
   - States:
     * Default: Gray 300 border
     * Focus: Blue 500 border, shadow Blue 100
     * Error: Error Red border, error message below
     * Disabled: Gray 100 bg, Gray 400 text

2. Password Input:
   - Same as Text Input
   - Eye icon (right) for show/hide
   - Toggle icon on click

3. Search Input:
   - Height: 48px
   - Background: Gray 100 or White
   - Radius: 12px
   - Search icon (left)
   - Clear button (right, X icon)
   - Placeholder: "Tìm kiếm..."

4. Text Area:
   - Min height: 120px
   - Background: Gray 50
   - Border: 1px Gray 200
   - Radius: 12px
   - Padding: 16px
   - Resize: Vertical or fixed
   - Character counter (bottom right)

5. Slider/Rating:
   - Track: Gray 200, height 6px
   - Fill: Primary Green
   - Thumb: 24x24px, White, shadow, Green border
   - Value display above thumb

## Card Components
Create card component library

1. Product Card:
   - Width: 170px (grid), 100% (list)
   - White bg, radius 12px, shadow sm
   - Image: 140x140px, radius 12px top
   - Content padding: 12px
   - Product name: sm, Medium, 2 lines max
   - Brand: xs, Gray 500
   - Rating: xs, with stars
   - Price: sm, Bold, Primary Green
   - Wishlist button (top right, absolute)

2. Brand Card:
   - Size: 120x120px
   - White bg, radius 12px, shadow sm, border Gray 100
   - Logo: 60x60px, center
   - Brand name: xs, Medium, center
   - Rating: xs, below name

3. Review Card:
   - White bg, radius 12px, padding 16px
   - User row (avatar, name, badge, date)
   - Rating stars
   - Comment text
   - Photos (horizontal scroll if multiple)
   - Actions (helpful, not helpful, report)

4. Stat Card:
   - White or colored bg
   - Radius: 16px
   - Padding: 20px
   - Icon (top)
   - Value (large, bold)
   - Label (sm, Gray 600)

5. Badge Card:
   - White bg, radius 12px, padding 12px
   - Badge icon (center, 40x40px)
   - Name (xs, center)
   - Date or lock icon

6. Timeline Card:
   - White bg, radius 12px, padding 12px
   - Shadow sm
   - Stage icon (left or top)
   - Content (stage name, facility, location, date)
   - Verified badge




## Profile Screen
Create a button component library

1. Button Primary:
   - Height: 56px (large), 48px (medium), 40px (small)
   - Background: Primary Green (#10B981)
   - Text: White, Bold
   - Radius: 12px
   - Padding: horizontal 24px
   - Shadow: md
   - States:
     * Default: Green bg
     * Hover: Darker Green (#059669)
     * Pressed: Even darker (#047857)
     * Disabled: Gray 300 bg, Gray 500 text, no shadow

2. Button Secondary:
   - Height: 56px
   - Background: White
   - Border: 2px Primary Green
   - Text: Primary Green, Bold
   - Radius: 12px
   - States:
     * Hover: Green 50 bg
     * Pressed: Green 100 bg

3. Button Text:
   - No bg, no border
   - Text: Primary Green, Medium
   - Padding: 8px 16px
   - States:
     * Hover: Underline
     * Pressed: Darker Green

4. Button Icon:
   - Square: 40x40px, 48x48px
   - Circle bg: White or Gray 100
   - Icon: 20x20px, center
   - Radius: full (circle) or 12px (rounded)
   - Shadow: sm

5. Button FAB (Floating Action Button):
   - Size: 56x56px
   - Background: Primary Green
   - Icon: White, 24x24px
   - Radius: full (circle)
   - Shadow: lg
   - Position: Fixed, bottom right or center





# 📐 DESIGN SYSTEM
## Color Palette
Primary Colors:
- Primary Green: #10B981 (Emerald 500)
- Primary Dark: #059669 (Emerald 600)
- Primary Light: #34D399 (Emerald 400)

Secondary Colors:
- Deep Blue: #1E3A8A (Blue 900)
- Blue Medium: #3B82F6 (Blue 500)
- Blue Light: #93C5FD (Blue 300)

Neutral Colors:
- White: #FFFFFF
- Gray 50: #F9FAFB
- Gray 100: #F3F4F6
- Gray 200: #E5E7EB
- Gray 300: #D1D5DB
- Gray 400: #9CA3AF
- Gray 500: #6B7280
- Gray 600: #4B5563
- Gray 700: #374151
- Gray 800: #1F2937
- Gray 900: #111827

Semantic Colors:
- Success: #10B981
- Warning: #F59E0B
- Error: #EF4444
- Info: #3B82F6

Gradients:
- Primary Gradient: linear-gradient(135deg, #10B981 0%, #059669 100%)
- Hero Gradient: linear-gradient(180deg, #10B981 0%, #FFFFFF 100%)

## Typography
Font Family:
- Primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
- Secondary: 'Roboto', sans-serif

Font Sizes:
- xs: 12px (0.75rem)
- sm: 14px (0.875rem)
- base: 16px (1rem)
- lg: 18px (1.125rem)
- xl: 20px (1.25rem)
- 2xl: 24px (1.5rem)
- 3xl: 30px (1.875rem)
- 4xl: 36px (2.25rem)

Font Weights:
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

Line Heights:
- tight: 1.25
- normal: 1.5
- relaxed: 1.625

## Spacing System
Base: 8px

Scale:
- 0: 0px
- 1: 4px
- 2: 8px
- 3: 12px
- 4: 16px
- 5: 20px
- 6: 24px
- 7: 28px
- 8: 32px
- 9: 40px
- 10: 48px
- 11: 56px
- 12: 64px

## Border Radius
- none: 0px
- sm: 4px
- base: 8px
- md: 12px
- lg: 16px
- xl: 20px
- 2xl: 24px
- full: 9999px

## Shadows
- sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
- base: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)
- md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)
- lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)
- xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)

# 📱 SCREEN SPECIFICATIONS
## Screen 1: Splash Screen
Create a mobile app splash screen for "Product Flows" - a sustainability tracking app

Layout:
- Full screen with centered content
- Background: Primary Gradient (#10B981 to #059669)
- Safe area padding: top 47px, bottom 34px

Elements:
1. Logo (120x120px, centered, white color)
   - Position: Center vertically (40% from top)
   
2. App Name "Product Flows" (3xl, Bold, White)
   - Position: Below logo, margin-top 32px
   - Text align: Center
   
3. Tagline "Minh bạch từ Nhà máy đến Bạn" (base, Medium, White, opacity 90%)
   - Position: Below app name, margin-top 12px
   - Text align: Center
   
4. Version "v1.0.0 Beta" (sm, Regular, White, opacity 70%)
   - Position: Bottom center, margin-bottom 48px

Animations:
- Logo: Fade in (duration 500ms, delay 0ms)
- App Name: Slide up (duration 500ms, delay 200ms)
- Tagline: Fade in (duration 500ms, delay 400ms)
- Auto navigate after 2000ms

Design Style:
- Clean, modern, eco-friendly
- High contrast for readability
- Minimalist approach

## Screen 2: Onboarding (3 Slides)
Create a 3-slide onboarding flow for mobile app

Layout (Each Slide):
- Screen size: 393 x 852px (iPhone 15 Pro)
- Background: White (#FFFFFF)
- Padding: horizontal 24px, top 60px, bottom 100px
- Vertical layout, centered content

Common Elements (All Slides):
1. Skip Button (top right)
   - Text: "Bỏ qua"
   - Color: Gray 600
   - Size: sm, Medium
   
2. Pagination Dots (bottom center, above buttons)
   - Active dot: Primary Green (#10B981), 8px diameter
   - Inactive dot: Gray 300 (#D1D5DB), 8px diameter
   - Spacing: 8px between dots
   
3. Next Button (bottom)
   - Full width, height 56px
   - Background: Primary Green
   - Text: "Tiếp tục" (white, bold)
   - Border radius: 12px
   
4. Last slide button text: "Bắt đầu ngay"

Slide 1 - Scan QR:
- Illustration: 300x300px, centered
  Content: Phone scanning QR code on product
  Style: Modern, flat design, green accents
  
- Title (2xl, Bold, Gray 900): "Quét để xem nguồn gốc"
  Position: Below illustration, margin-top 40px
  Text align: Center
  
- Description (base, Regular, Gray 600): 
  "Quét mã QR trên sản phẩm để xem toàn bộ hành trình từ nhà máy đến tay bạn"
  Position: Below title, margin-top 16px
  Text align: Center
  Line height: 1.5

Slide 2 - Verify:
- Illustration: 300x300px, centered
  Content: Certificate badges and checkmarks
  Style: Modern, flat design, blue and green accents
  
- Title (2xl, Bold, Gray 900): "Chứng nhận bền vững"
  
- Description (base, Regular, Gray 600):
  "Kiểm tra chứng nhận GOTS, Fair Trade, và các tiêu chuẩn bền vững quốc tế"

Slide 3 - Impact:
- Illustration: 300x300px, centered
  Content: User with impact points, gamification elements
  Style: Modern, flat design, vibrant colors
  
- Title (2xl, Bold, Gray 900): "Tích điểm bảo vệ môi trường"
  
- Description (base, Regular, Gray 600):
  "Nhận điểm Impact và huy hiệu khi tham gia đánh giá sản phẩm bền vững"

Navigation:
- Slide 1 → Slide 2 → Slide 3 → Login Screen
- Click Next to advance
- Click Skip to go to Login

## Screen 3: Login Screen
Create a mobile login screen

Layout:
- Screen size: 393 x 852px
- Background: White
- Vertical scroll enabled
- Padding: 24px horizontal

Elements:

1. Logo (80x80px, top center)
   - Position: margin-top 60px
   - Color: Primary Green

2. Title (2xl, Bold, Gray 900): "Chào mừng trở lại!"
   - Position: Below logo, margin-top 32px
   - Text align: Center

3. Subtitle (base, Regular, Gray 600): "Đăng nhập để tiếp tục hành trình bền vững"
   - Position: Below title, margin-top 8px
   - Text align: Center

4. Email Input Field
   - Label: "Email" (sm, Medium, Gray 700)
   - Input: height 56px, border Gray 300, radius 12px
   - Placeholder: "email@example.com" (Gray 400)
   - Icon: Email icon (left, Gray 500)
   - Position: margin-top 40px

5. Password Input Field
   - Label: "Mật khẩu" (sm, Medium, Gray 700)
   - Input: height 56px, border Gray 300, radius 12px
   - Placeholder: "••••••••" (Gray 400)
   - Icon: Lock icon (left)
   - Show/Hide toggle (right)
   - Position: margin-top 20px

6. Forgot Password Link
   - Text: "Quên mật khẩu?" (sm, Medium, Primary Green)
   - Position: Right aligned, margin-top 12px

7. Login Button
   - Full width, height 56px
   - Background: Primary Green
   - Text: "Đăng nhập" (base, Bold, White)
   - Radius: 12px
   - Position: margin-top 32px
   - Shadow: md

8. Divider
   - Text: "Hoặc đăng nhập với" (sm, Regular, Gray 500)
   - Lines: Gray 300 on both sides
   - Position: margin-top 32px

9. Social Login Buttons (2 columns)
   - Google Button: White bg, Gray border, Google icon + "Google"
   - Facebook Button: White bg, Gray border, Facebook icon + "Facebook"
   - Height: 48px each
   - Radius: 12px
   - Position: margin-top 24px

10. Register Link
    - Text: "Chưa có tài khoản? " (Gray 600) + "Đăng ký" (Primary Green, Medium)
    - Position: Bottom center, margin-top 40px, margin-bottom 40px

Validation States:
- Error: Red border (#EF4444), error message below field (sm, Error color)
- Success: Green border (#10B981)
- Focus: Blue border (#3B82F6), shadow

Design Style:
- Clean, professional
- Adequate whitespace
- Clear visual hierarchy

## Screen 4: Register Screen
Create a mobile registration screen

Layout:
- Screen size: 393 x 852px
- Background: White
- Vertical scroll
- Padding: 24px horizontal

Elements:

1. Logo (60x60px, top center)
   - Position: margin-top 40px

2. Title (2xl, Bold, Gray 900): "Tạo tài khoản mới"
   - Position: margin-top 24px
   - Text align: Center

3. Subtitle (base, Regular, Gray 600): "Tham gia cộng đồng tiêu dùng bền vững"
   - Position: margin-top 8px
   - Text align: Center

4. Full Name Input
   - Label: "Họ và tên"
   - Height: 56px
   - Icon: User icon
   - Placeholder: "Nguyễn Văn A"
   - Position: margin-top 32px

5. Email Input
   - Label: "Email"
   - Height: 56px
   - Icon: Email icon
   - Placeholder: "email@example.com"
   - Position: margin-top 20px

6. Password Input
   - Label: "Mật khẩu"
   - Height: 56px
   - Icon: Lock icon
   - Placeholder: "Tối thiểu 6 ký tự"
   - Show/hide toggle
   - Position: margin-top 20px

7. Confirm Password Input
   - Label: "Xác nhận mật khẩu"
   - Height: 56px
   - Icon: Lock icon
   - Placeholder: "Nhập lại mật khẩu"
   - Show/hide toggle
   - Position: margin-top 20px

8. Terms Checkbox
   - Checkbox: 20x20px, Primary Green when checked
   - Text: "Tôi đồng ý với " (Gray 600) + "Điều khoản" (Primary Green) + " và " (Gray 600) + "Chính sách bảo mật" (Primary Green)
   - Size: sm
   - Position: margin-top 24px

9. Register Button
   - Full width, height 56px
   - Background: Primary Green
   - Text: "Đăng ký" (base, Bold, White)
   - Radius: 12px
   - Position: margin-top 32px
   - Shadow: md

10. Login Link
    - Text: "Đã có tài khoản? " (Gray 600) + "Đăng nhập" (Primary Green, Medium)
    - Position: Bottom center, margin-top 32px, margin-bottom 40px

Validation:
- All fields required
- Email format validation
- Password min 6 characters
- Password match validation
- Terms must be checked

## Screen 5: Home Dashboard
Create a mobile home dashboard screen

Layout:
- Screen size: 393 x 852px
- Background: Gray 50 (#F9FAFB)
- Vertical scroll
- Bottom tab navigation
- Safe area padding

Elements:

1. Header Section (White background, padding 16px)
   - Top bar:
     * Greeting: "Chào Alex 👋" (xl, Bold, Gray 900)
     * Level Badge: "🌱 Green Warrior" (sm, Medium, White bg, Primary Green text, pill shape)
     * Position: Left aligned, flex row with space between
     
   - Notification Icon (top right)
     * Bell icon with red dot indicator
     * Size: 24x24px

2. Search Bar (White bg, margin 16px, padding 12px 16px)
   - Height: 48px
   - Background: White
   - Radius: 12px
   - Shadow: sm
   - Icon: Search (Gray 400, left)
   - Placeholder: "Tìm sản phẩm, thương hiệu..." (Gray 400)
   - Filter icon (right, Gray 400)

3. Quick Actions Section (padding horizontal 16px, margin-top 8px)
   - Title: "Khám phá nhanh" (base, Semibold, Gray 800)
   - 3 Cards horizontal (flex row, gap 12px):
     
     Card 1 - Scan QR:
     * Size: 100x100px
     * Background: Primary Gradient
     * Icon: QR Code (White, 32x32px)
     * Label: "Quét QR" (White, sm, Medium)
     * Radius: 16px
     * Shadow: md
     
     Card 2 - Browse:
     * Size: 100x100px
     * Background: Blue 500
     * Icon: Grid/Compass (White, 32x32px)
     * Label: "Khám phá" (White, sm, Medium)
     * Radius: 16px
     
     Card 3 - Impact:
     * Size: 100x100px
     * Background: Amber 500
     * Icon: Leaf/Star (White, 32x32px)
     * Label: "Impact" (White, sm, Medium)
     * Radius: 16px

4. Featured Brands Section (margin-top 24px)
   - Header: 
     * Title: "Thương hiệu nổi bật" (base, Semibold, Gray 800)
     * Link: "Xem tất cả →" (sm, Medium, Primary Green)
     * Flex row, space between
     * Padding horizontal 16px
   
   - Carousel (horizontal scroll, padding 16px, gap 16px):
     * Brand Card (120x120px):
       - Logo (60x60px, center)
       - Brand Name (xs, Medium, Gray 700, center)
       - Rating: "⭐ 4.8" (xs, Gray 500)
       - White bg, radius 12px, shadow sm, border Gray 100

5. Trending Products Section (margin-top 24px)
   - Header: Same as Featured Brands
   - Grid (2 columns, padding horizontal 16px, gap 12px):
     
     Product Card:
     * Width: 170px
     * Image: 140x140px, radius 12px, bg Gray 100
     * Product Name: "Áo Thun Organic..." (sm, Medium, Gray 800, 2 lines max)
     * Brand: "EcoWear" (xs, Regular, Gray 500)
     * Rating: "⭐ 4.8 (156)" (xs, Gray 600)
     * Price: "299.000₫" (sm, Bold, Primary Green)
     * White bg, radius 12px, shadow sm

6. Recent Scans Section (margin-top 24px, margin-bottom 100px)
   - Header: "Lần quét gần đây" (base, Semibold, Gray 800)
   - List (padding horizontal 16px, gap 12px):
     
     Recent Scan Item:
     * Flex row, White bg, radius 12px, padding 12px, shadow sm
     * Thumbnail: 48x48px, radius 8px
     * Content (flex 1, margin-left 12px):
       - Product Name (sm, Medium, Gray 800)
       - Date: "20/03/2024" (xs, Gray 500)
     * Icon: Chevron right (Gray 400)

7. Bottom Tab Navigation (Fixed bottom)
   - Height: 80px (including safe area)
   - Background: White
   - Shadow: lg (top)
   - 5 Tabs (flex row, equal width):
     
     Tab 1 - Home (Active):
     * Icon: Home (Primary Green, 24x24px)
     * Label: "Trang chủ" (Primary Green, xs, Medium)
     
     Tab 2 - Search:
     * Icon: Search (Gray 400)
     * Label: "Tìm kiếm" (Gray 500, xs)
     
     Tab 3 - Scan (FAB):
     * Icon: QR Code (White, 32x32px)
     * Circle bg: Primary Green, 56x56px, radius full
     * Position: Center, -20px top margin, shadow lg
     
     Tab 4 - Profile:
     * Icon: User (Gray 400)
     * Label: "Cá nhân" (Gray 500, xs)
     
     Tab 5 - More:
     * Icon: Menu (Gray 400)
     * Label: "Thêm" (Gray 500, xs)

Colors:
- Background: Gray 50
- Cards: White
- Text Primary: Gray 900
- Text Secondary: Gray 600
- Accent: Primary Green

Spacing:
- Section gap: 24px
- Card gap: 12px
- Padding: 16px

## Screen 6: Product Passport (MAIN SCREEN)
Create a detailed product passport screen - THE MOST IMPORTANT SCREEN

Layout:
- Screen size: 393 x 852px
- Background: White
- Vertical scroll
- Sticky bottom actions
- Safe area padding

Elements:

1. Top Navigation (Absolute, z-index 10)
   - Back Button (top left, 16px from top)
     * Circle bg White, shadow md, 40x40px
     * Icon: Arrow left (Gray 700)
   
   - Share Button (top right, 16px from top)
     * Circle bg White, shadow md, 40x40px
     * Icon: Share (Gray 700)
   
   - Verified Badge (top center, below status bar)
     * Pill shape, Primary Green bg
     * Icon: Check circle (White)
     * Text: "Đã xác thực" (White, sm, Medium)

2. Product Image Carousel (height 320px)
   - Full width
   - Image: 100% width, height 320px, object-fit cover
   - Dots indicator (bottom center)
     * Active: White, 8px
     * Inactive: White 50% opacity, 8px
   - Wishlist button (top right of image)
     * Heart icon, White bg, shadow, 40x40px

3. Product Info Card (White bg, margin-top -40px, radius 24px top corners)
   - Padding: 24px
   
   a) Product Header:
      * Product Name: "Áo Thun Basic Organic Cotton" (xl, Bold, Gray 900)
      * Brand: "EcoWear Vietnam" (sm, Medium, Primary Green)
      * Flex row with space between
      
   b) Price & Rating Row (margin-top 12px):
      * Price: "299.000₫" (2xl, Bold, Primary Green)
      * Overall Rating: 
        - Stars: "⭐⭐⭐⭐⭐" (base)
        - Text: "4.8 (156 đánh giá)" (sm, Gray 600)
      * Flex row, space between

4. Verification Status Card (margin-top 20px)
   - Background: Green 50 (#ECFDF5)
   - Border: 1px Green 200
   - Padding: 16px
   - Radius: 12px
   - Flex row:
     * Icon: Shield check (Primary Green, 24x24px)
     * Content (margin-left 12px):
       - Title: "Sản phẩm chính hãng" (sm, Semibold, Gray 900)
       - Subtitle: "Đã được xác minh bởi Product Flows" (xs, Gray 600)

5. Journey Timeline Section (margin-top 28px)
   - Title: "Hành trình sản phẩm" (base, Semibold, Gray 900)
   
   - Timeline (vertical line with nodes):
     * Line: 2px, Gray 200, full height
     
     Node 1 - Raw Material:
     * Circle: 40x40px, Primary Green bg, White icon (Leaf)
     * Content card (White bg, shadow sm, radius 12px, padding 12px, margin-left 16px):
       - Stage: "🌱 Nguyên liệu" (sm, Semibold, Gray 900)
       - Facility: "Organic Cotton Farm" (xs, Gray 600)
       - Location: "📍 Đồng Nai, Việt Nam" (xs, Gray 500)
       - Date: "15/01/2024 - 15/02/2024" (xs, Gray 500)
       - Verified badge (Green check, xs)
     
     Node 2 - Manufacturing:
     * Circle: 40x40px, Primary Green bg, White icon (Factory)
     * Content card (same styling)
       - Stage: "🏭 Sản xuất"
       - Facility: "EcoFactory Vietnam"
       - Location: "📍 Bình Dương, Việt Nam"
       - Date: "20/02/2024 - 10/03/2024"
     
     Node 3 - Retail:
     * Circle: 40x40px, Blue 500 bg, White icon (Store)
     * Content card
       - Stage: "🏪 Bán lẻ"
       - Facility: "EcoWear Store HCM"
       - Location: "📍 Quận 1, TP.HCM"
       - Date: "15/03/2024 - Nay"

6. Certificates Section (margin-top 28px)
   - Title: "Chứng nhận" (base, Semibold, Gray 900)
   
   - Certificate Badges (flex row, wrap, gap 12px):
     
     Badge 1 - GOTS:
     * Width: 140px, height 60px
     * White bg, border Gray 200, radius 12px
     * Padding: 12px
     * Icon: GOTS logo (or placeholder, 32x32px)
     * Text: "GOTS Certified" (xs, Semibold, Gray 800)
     * Subtext: "Organic Textile" (xs, Gray 500)
     
     Badge 2 - Fair Trade:
     * Same styling
     * Text: "Fair Trade"
     * Subtext: "Ethical Production"
     
     Badge 3 - Carbon Neutral:
     * Same styling
     * Text: "Carbon Neutral"
     * Subtext: "Climate Friendly"

7. Impact Metrics Section (margin-top 28px)
   - Title: "Tác động môi trường" (base, Semibold, Gray 900)
   
   - Metrics Grid (3 columns, gap 12px):
     
     Metric Card 1:
     * Background: Blue 50 (#EFF6FF)
     * Padding: 16px 12px
     * Radius: 12px
     * Icon: 💧 (24x24px, center)
     * Value: "2000L" (lg, Bold, Blue 700, center)
     * Label: "Nước tiết kiệm" (xs, Gray 600, center)
     * Comparison: "vs áo thường" (xs, Gray 400, center)
     
     Metric Card 2:
     * Background: Green 50
     * Icon: 🌍
     * Value: "5.2kg"
     * Label: "CO₂ giảm"
     
     Metric Card 3:
     * Background: Amber 50
     * Icon: ♻️
     * Value: "0.8kg"
     * Label: "Chất thải giảm"

8. Ratings Breakdown Section (margin-top 28px)
   - Title: "Đánh giá chi tiết" (base, Semibold, Gray 900)
   
   - Radar Chart or Bar Chart:
     * Height: 200px
     * 5 Criteria with scores:
       1. Chất lượng: 4.9/5 ⭐⭐⭐⭐⭐
       2. Minh bạch: 4.7/5 ⭐⭐⭐⭐⭐
       3. Bền vững: 5.0/5 ⭐⭐⭐⭐⭐
       4. Lao động: 4.8/5 ⭐⭐⭐⭐⭐
       5. Cộng đồng: 4.5/5 ⭐⭐⭐⭐
     
   - Visual: Horizontal bars or radar chart
     * Bar: Gray 200 background, Primary Green fill
     * Score text on right

9. Review Summary (margin-top 28px)
   - Flex row, space between:
     * Title: "Đánh giá từ cộng đồng" (base, Semibold, Gray 900)
     * Link: "Xem tất cả →" (sm, Medium, Primary Green)
   
   - Review Preview Card (margin-top 12px):
     * White bg, border Gray 100, radius 12px, padding 16px
     * User row:
       - Avatar: 32x32px, radius full
       - Name: "Alex N." (sm, Medium, Gray 800)
       - Badge: "🌱 Warrior" (xs, Primary Green bg)
       - Date: "20/03" (xs, Gray 500)
     * Rating: ⭐⭐⭐⭐⭐ (margin-top 8px)
     * Comment: "Sản phẩm rất chất lượng, thích việc brand minh bạch..." (sm, Gray 600, 2 lines)
     * Verified: "✅ Đã xác thực" (xs, Green 600)

10. Sticky Bottom Actions (Fixed bottom, above tab bar)
    - Background: White
    - Padding: 16px
    - Shadow: lg (top)
    - Flex row, gap 12px:
      
      Button 1 - Write Review:
      * Flex: 2
      * Height: 56px
      * Background: Primary Green
      * Text: "Viết đánh giá" (base, Bold, White)
      * Icon: Star (left)
      * Radius: 12px
      
      Button 2 - Share:
      * Flex: 1
      * Height: 56px
      * Background: Gray 100
      * Icon: Share (Gray 700, center)
      * Radius: 12px
      
      Button 3 - Buy:
      * Flex: 1
      * Height: 56px
      * Background: Gray 900
      * Icon: Shopping bag (White, center)
      * Radius: 12px

Spacing:
- Section margin: 28px
- Card padding: 16-24px
- Element gap: 12px

Colors:
- Primary: Green #10B981
- Background: White
- Text: Gray 900, 600, 500
- Accents: Blue, Amber for metrics

This is the most detailed and important screen - make it visually stunning and information-rich!

## Screen 7: QR Scanner Screen
Create a QR scanner screen

Layout:
- Screen size: 393 x 852px
- Full screen camera feed
- Overlay UI elements
- Safe area padding

Elements:

1. Background:
   - Camera preview (full screen)
   - Dark overlay (opacity 60%, black)

2. Top Navigation:
   - Back/Close Button (top left, 16px from top)
     * Circle bg White 20%, 44x44px
     * Icon: X or Arrow down (White)
   
   - Flash Toggle (top right, 16px from top)
     * Circle bg White 20%, 44x44px
     * Icon: Flash/Flash off (White)
     * State indicator

3. Center Scan Area:
   - Scan Frame (center of screen)
     * Size: 280x280px
     * Corner brackets:
       - 4 corners, 40px length, 4px width
       - Color: Primary Green (#10B981)
       - Animated pulse effect
     
   - Scan Line Animation:
     * Horizontal line, 2px height
     * Color: Primary Green
     * Animation: Move from top to bottom continuously (2s loop)
     * Glow effect
   
   - Center Text (below frame):
     * "Đặt mã QR trong khung để quét" (sm, Medium, White)
     * Background: Black 50% opacity, padding 8px 16px, radius 20px
     * Position: 20px below frame

4. Bottom Controls:
   - Gallery Button (bottom left, 40px from bottom)
     * Circle bg White 20%, 56x56px
     * Icon: Image/Gallery (White, 24x24px)
     * Label: "Thư viện" (White, xs, below icon)
   
   - Cancel Button (bottom center, 40px from bottom)
     * Text: "Hủy" (White, base, Medium)
     * Background: White 20%, padding 12px 32px, radius 20px
   
   - Help Button (bottom right, 40px from bottom)
     * Circle bg White 20%, 56x56px
     * Icon: Help/Info (White, 24x24px)
     * Label: "Hỗ trợ" (White, xs, below icon)

5. Success State (Modal overlay):
   - Background: White
   - Radius: 24px top corners
   - Padding: 32px
   - Animation: Slide up from bottom
   
   Content:
   * Success Icon: Check circle (Primary Green, 64x64px, center)
   * Title: "Đang xác thực..." (xl, Bold, Gray 900, center)
   * Subtitle: "Kiểm tra thông tin sản phẩm" (sm, Gray 600, center)
   * Loading spinner (Primary Green)

6. Error State (Modal/Toast):
   - Background: White
   - Radius: 12px
   - Padding: 16px 24px
   - Shadow: lg
   
   Content:
   * Icon: X circle (Error Red, 24x24px)
   * Text: "Mã QR không hợp lệ" (sm, Medium, Gray 900)
   * Subtext: "Vui lòng quét lại mã QR trên sản phẩm" (xs, Gray 600)
   * Position: Top center or bottom sheet

Animations:
- Corner brackets: Pulse (opacity 100% → 60%, 1.5s loop)
- Scan line: Move top to bottom (2s ease-in-out, infinite)
- Success modal: Slide up (300ms ease-out)
- Error toast: Slide down from top (300ms)

Permissions:
- Show permission request modal if camera not granted
- Icon: Camera (Gray 700, 48x48px)
- Title: "Cần quyền truy cập camera"
- Text: "Để quét mã QR sản phẩm"
- Button: "Cho phép" (Primary Green)

Design Style:
- Dark overlay for focus on scan area
- High contrast for visibility
- Clear visual feedback
- Minimal UI to avoid distraction

## Screen 8: Rating Modal (Bottom Sheet)
Create a rating modal as bottom sheet

Layout:
- Modal type: Bottom sheet
- Height: 85% of screen (720px)
- Background: White
- Radius: 24px top corners
- Safe area padding

Elements:

1. Drag Handle (top center)
   - Width: 40px, height 4px
   - Background: Gray 300
   - Radius: 2px
   - Margin: 16px auto

2. Modal Header (padding horizontal 24px)
   - Title: "Đánh giá sản phẩm này" (xl, Bold, Gray 900)
   - Product Info (flex row, margin-top 8px):
     * Thumbnail: 48x48px, radius 8px
     * Product Name: "Áo Thun Basic..." (sm, Medium, Gray 800, margin-left 12px)
     * Verified badge (Green check)

3. Points Reward Banner (margin-top 20px, margin horizontal 24px)
   - Background: Amber 50 (#FFFBEB)
   - Border: 1px Amber 200
   - Padding: 12px 16px
   - Radius: 12px
   - Flex row:
     * Icon: 🎁 or ⭐ (24x24px)
     * Text: "+5 Impact Points khi gửi đánh giá" (sm, Medium, Amber 700)

4. Overall Rating Section (margin-top 28px, padding horizontal 24px)
   - Label: "Đánh giá tổng quan" (sm, Semibold, Gray 700)
   - Star Rating Input (margin-top 12px):
     * 5 Stars, 40x40px each
     * Gap: 8px
     * States: Empty (Gray 300), Filled (Amber 400), Hover (Amber 500)
     * Interactive: Tap to select
     * Size: Large, prominent

5. Criteria Ratings Section (margin-top 28px, padding horizontal 24px)
   - Label: "Đánh giá chi tiết" (sm, Semibold, Gray 700)
   
   - 5 Criteria Sliders (margin-top 16px, gap 20px):
     
     Slider 1 - Quality:
     * Icon: 🏆 (20x20px)
     * Label: "Chất lượng sản phẩm" (sm, Medium, Gray 800)
     * Sublabel: "Độ bền, chất liệu, hoàn thiện" (xs, Gray 500)
     * Slider:
       - Track: 100% width, height 6px, Gray 200 bg, radius 3px
       - Fill: Primary Green, dynamic width
       - Thumb: 24x24px, White bg, Primary Green border, shadow, radius full
       - Value: 1-5 displayed above thumb
     * Star indicators below (5 small stars)
     
     Slider 2 - Transparency:
     * Icon: 🔍
     * Label: "Độ minh bạch thông tin"
     * Same slider styling
     
     Slider 3 - Sustainability:
     * Icon: 🌱
     * Label: "Tính bền vững môi trường"
     
     Slider 4 - Fair Labor:
     * Icon: 🤝
     * Label: "Điều kiện lao động"
     
     Slider 5 - Community:
     * Icon: ❤️
     * Label: "Đóng góp cộng đồng"

6. Comment Section (margin-top 28px, padding horizontal 24px)
   - Label: "Chia sẻ trải nghiệm của bạn" (sm, Semibold, Gray 700)
   - TextArea (margin-top 12px):
     * Height: 120px
     * Background: Gray 50
     * Border: 1px Gray 200
     * Radius: 12px
     * Padding: 16px
     * Placeholder: "Sản phẩm này như thế nào? Điều gì làm bạn ấn tượng..." (Gray 400)
     * Font: base, Gray 700
     * Character counter (bottom right): "0/500" (xs, Gray 400)

7. Photo Upload Section (margin-top 20px, padding horizontal 24px)
   - Label: "Thêm ảnh (tùy chọn)" (sm, Semibold, Gray 700)
   - Upload Button (margin-top 12px):
     * Height: 100px
     * Border: 2px dashed Gray 300
     * Radius: 12px
     * Background: Gray 50
     * Content (center):
       - Icon: Camera or Plus (Gray 400, 32x32px)
       - Text: "Thêm ảnh chụp sản phẩm" (sm, Gray 600)
   
   - Photo Preview (if uploaded, horizontal scroll):
     * Thumbnail: 80x80px, radius 8px
     * Remove button (top right, X icon)

8. Action Buttons (margin-top 32px, padding horizontal 24px, padding-bottom 40px)
   - Submit Button:
     * Full width, height 56px
     * Background: Primary Green
     * Text: "Gửi đánh giá (+5 điểm)" (base, Bold, White)
     * Radius: 12px
     * Shadow: md
     * Disabled state: Gray 300 bg, Gray 500 text
   
   - Cancel Button:
     * Full width, height 48px
     * Background: Transparent
     * Text: "Để sau" (sm, Medium, Gray 600)
     * Margin-top: 12px

9. Success State (After submission):
   - Full screen overlay or modal
   - Background: White
   - Content (center):
     * Animation: Confetti or Success checkmark (Lottie)
     * Icon: Check circle (Primary Green, 80x80px)
     * Title: "Cảm ơn bạn!" (2xl, Bold, Gray 900)
     * Text: "Đánh giá của bạn đã được gửi" (base, Gray 600)
     * Points: "+5 Impact Points" (lg, Bold, Amber 500)
     * Button: "Tiếp tục mua sắm" (Primary Green, margin-top 32px)

Validation:
- Overall rating required
- At least 1 criteria rated
- Comment min 10 characters (recommended, not required)
- Show error messages below fields if invalid

Animations:
- Modal: Slide up from bottom (300ms ease-out)
- Sliders: Smooth thumb movement
- Stars: Scale animation on tap
- Success: Confetti burst + scale in

Design Style:
- Clean, friendly
- Encouraging tone
- Clear visual feedback
- Gamification elements prominent

## Screen 9: Profile Screen
Create a user profile screen

Layout:
- Screen size: 393 x 852px
- Background: Gray 50
- Vertical scroll
- Bottom tab navigation

Elements:

1. Header Section (White bg, padding 24px)
   - Back button (top left, only if navigated from other screen)
   
   - Profile Card (centered):
     * Avatar Container (relative, center):
       - Avatar: 100x100px, radius full, border 4px White, shadow lg
       - Edit Icon: Circle bg Primary Green, 32x32px, position bottom right
       - Camera icon (White, 16x16px)
     
     * Name: "Alex Nguyen" (xl, Bold, Gray 900, margin-top 16px, center)
     
     * Level Badge (center, margin-top 8px):
       - Pill shape, Primary Green bg
       - Icon: 🌱
       - Text: "Green Warrior - Level 3" (White, sm, Medium)
       - Padding: 8px 16px
       - Radius: 20px
     
     * Progress Bar (margin-top 16px, max-width 280px):
       - Track: Gray 200, height 8px, radius 4px
       - Fill: Primary Green, 60% width
       - Text below: "60% đến Level 4 (Ambassador)" (xs, Gray 600, center)

2. Stats Section (margin-top 24px, padding horizontal 24px)
   - Stats Cards (3 columns, gap 12px):
     
     Card 1 - Scans:
     * White bg, radius 16px, padding 20px 16px, shadow sm
     * Icon: 📱 (24x24px, center, margin-bottom 8px)
     * Value: "25" (2xl, Bold, Gray 900, center)
     * Label: "Lần quét" (sm, Gray 600, center)
     
     Card 2 - Reviews:
     * Same styling
     * Icon: ✍️
     * Value: "8"
     * Label: "Đánh giá"
     
     Card 3 - Points:
     * Background: Primary Green (instead of White)
     * Icon: ⭐ (White)
     * Value: "150" (White)
     * Label: "Impact Points" (White, opacity 90%)

3. Badges Preview Section (margin-top 28px, padding horizontal 24px)
   - Header (flex row, space between):
     * Title: "Huy hiệu đã đạt" (base, Semibold, Gray 900)
     * Link: "Xem tất cả →" (sm, Medium, Primary Green)
   
   - Badges Grid (margin-top 16px, 4 columns, gap 12px):
     
     Badge Item:
     * Container: White bg, radius 12px, padding 12px, shadow sm
     * Badge Icon: 40x40px, center
     * Name: "Early Adopter" (xs, Medium, Gray 800, center, 2 lines)
     * Date: "15/01" (xs, Gray 500, center)
     
     Show 4 badges, "+3 more" indicator

4. Menu Section (margin-top 28px, margin-bottom 100px)
   - Menu Groups (White bg, radius 16px, shadow sm):
     
     Group 1 - Account:
     * Title: "Tài khoản" (xs, Semibold, Gray 500, padding 16px 20px 8px)
     
     Menu Items (padding 16px 20px, border-bottom Gray 100):
     * Item 1:
       - Icon: 👤 (20x20px, Gray 600)
       - Label: "Chỉnh sửa hồ sơ" (sm, Medium, Gray 800, margin-left 12px)
       - Chevron right (Gray 400, margin-left auto)
     
     * Item 2:
       - Icon: 🔑
       - Label: "Đổi mật khẩu"
       - Chevron
     
     * Item 3:
       - Icon: 🔔
       - Label: "Thông báo"
       - Toggle switch (right, Primary Green)
     
     Group 2 - App:
     * Title: "Ứng dụng"
     
     Menu Items:
     * Item 4:
       - Icon: 🌐
       - Label: "Ngôn ngữ"
       - Value: "Tiếng Việt" (Gray 500, margin-left auto)
       - Chevron
     
     * Item 5:
       - Icon: 🌙
       - Label: "Chế độ tối"
       - Toggle (Gray, off)
     
     * Item 6:
       - Icon: 🗑️
       - Label: "Xóa bộ nhớ cache"
       - Value: "24 MB" (Gray 500)
     
     Group 3 - Legal:
     * Title: "Pháp lý"
     
     Menu Items:
     * Item 7:
       - Icon: 📄
       - Label: "Điều khoản sử dụng"
       - Chevron
     
     * Item 8:
       - Icon: 🔒
       - Label: "Chính sách bảo mật"
       - Chevron
     
     Group 4 - Support:
     * Title: "Hỗ trợ"
     
     Menu Items:
     * Item 9:
       - Icon: 📧
       - Label: "Liên hệ hỗ trợ"
       - Chevron
     
     * Item 10:
       - Icon: ❓
       - Label: "Câu hỏi thường gặp"
       - Chevron
     
     * Item 11:
       - Icon: ⭐
       - Label: "Đánh giá ứng dụng"
       - Chevron

5. App Version & Logout (padding 24px, margin-bottom 40px)
   - Version: "Version 1.0.0 (Beta)" (xs, Gray 400, center)
   
   - Logout Button (margin-top 16px):
     * Full width, height 56px
     * Background: White
     * Border: 1px Error Red
     * Text: "Đăng xuất" (sm, Bold, Error Red)
     * Icon: 🚪 (left, Error Red)
     * Radius: 12px

6. Bottom Tab Navigation (same as Home)

Colors:
- Background: Gray 50
- Cards: White
- Primary: Green #10B981
- Text: Gray 900, 600, 500

Design Style:
- Clean, organized
- Clear visual hierarchy
- Easy navigation
- Personal touch with avatar and stats

## Screen 10: Search Screen
Create a mobile search screen

Layout:
- Screen size: 393 x 852px
- Background: White
- Vertical scroll
- Sticky search bar at top

Elements:

1. Header Section (White bg, sticky top, z-index 10)
   - Back Button (top left, 16px from top)
     * Icon: Arrow left (Gray 700, 24x24px)
     * Text: "Quay lại" (sm, Gray 700, optional)
   
   - Search Bar Container (margin 16px):
     * Background: Gray 100
     * Height: 48px
     * Radius: 12px
     * Padding: 0 16px
     * Flex row, align center
     
     Search Input:
     * Icon: Search (Gray 400, 20x20px, left)
     * Input field: flex 1, height 100%
     * Placeholder: "Tìm sản phẩm, thương hiệu..." (Gray 500)
     * No border, bg transparent
     * Clear button (X icon, Gray 400, right, shows when typing)
     
     Filter Button (right, margin-left 12px):
     * Icon: Sliders/Filter (Gray 600, 20x20px)
     * Badge: Red dot if filters active

2. Recent Searches Section (if no search query)
   - Header (flex row, space between, padding horizontal 20px):
     * Title: "Tìm kiếm gần đây" (base, Semibold, Gray 900)
     * Clear All: "Xóa tất cả" (sm, Primary Green, Medium)
   
   - Search Tags (padding 20px, flex wrap, gap 12px):
     * Tag: "áo thun" (Gray 700 bg, padding 8px 16px, radius 20px, sm)
     * Tag: "cà phê organic"
     * Tag: "dầu gội"
     * Tag: "túi vải"
     * Each tag has X icon (right, Gray 500)
   
   - Empty State (if no recent searches):
     * Icon: Search (Gray 300, 64x64px, center)
     * Text: "Chưa có lịch sử tìm kiếm" (base, Gray 600, center)

3. Categories Section (if no search query)
   - Title: "Danh mục phổ biến" (base, Semibold, Gray 900, padding horizontal 20px, margin-top 24px)
   
   - Category Grid (padding horizontal 20px, margin-top 16px, 2 columns, gap 12px):
     
     Category Card:
     * Height: 100px
     * Background: Gradient (varies by category)
     * Radius: 16px
     * Padding: 16px
     * Flex column, space between
     
     Card 1 - Fashion:
     * Background: linear-gradient(135deg, #F472B6 0%, #EC4899 100%)
     * Icon: 👕 (32x32px)
     * Label: "Thời trang" (White, base, Bold)
     * Count: "1,234 sản phẩm" (White, xs, opacity 90%)
     
     Card 2 - Food & Beverage:
     * Background: linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)
     * Icon: ☕
     * Label: "Thực phẩm & Đồ uống"
     
     Card 3 - Beauty:
     * Background: linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%)
     * Icon: 💄
     * Label: "Mỹ phẩm"
     
     Card 4 - Home:
     * Background: linear-gradient(135deg, #34D399 0%, #10B981 100%)
     * Icon: 🏠
     * Label: "Gia dụng"

4. Search Results Section (when searching)
   - Results Count (padding horizontal 20px, margin-top 16px):
     * Text: "156 kết quả cho 'áo thun'" (sm, Gray 600)
   
   - Filter Tabs (horizontal scroll, padding horizontal 20px, gap 12px, margin-top 12px):
     * Tab: "Tất cả" (Primary Green bg, White text, active)
     * Tab: "Sản phẩm" (Gray 100 bg, Gray 700 text)
     * Tab: "Thương hiệu" (Gray 100 bg)
     * Tab: "Đã xác thực" (Gray 100 bg, Green icon)
     * Each tab: padding 8px 16px, radius 20px, sm, Medium
   
   - Sort Dropdown (right aligned, padding horizontal 20px, margin-top 12px):
     * Text: "Mới nhất ▼" (sm, Gray 600)
     * Icon: Chevron down
   
   - Results List (padding horizontal 20px, gap 12px, margin-bottom 100px):
     
     Product Result Item:
     * Flex row, White bg, radius 12px, shadow sm, overflow hidden
     * Thumbnail: 100x100px, bg Gray 100
     * Content (flex 1, padding 12px):
       - Product Name: "Áo Thun Organic Cotton Basic" (sm, Semibold, Gray 900, 2 lines)
       - Brand: "EcoWear Vietnam" (xs, Gray 500)
       - Rating: "⭐ 4.8 (156)" (xs, Gray 600)
       - Verified badge: "✅ Đã xác thực" (xs, Green 600)
       - Price: "299.000₫" (sm, Bold, Primary Green)
     * Wishlist button (top right, absolute, heart icon)
     
     Brand Result Item:
     * Similar layout but with brand info
     * Logo instead of product image
     * Brand name, rating, product count

5. Empty State (no results found)
   - Icon: Search with X (Gray 300, 80x80px, center, margin-top 100px)
   - Title: "Không tìm thấy kết quả" (base, Semibold, Gray 900, center)
   - Text: "Thử tìm với từ khóa khác hoặc danh mục khác" (sm, Gray 600, center, margin-top 8px)
   - Button: "Xóa bộ lọc" (Primary Green, margin-top 24px)

6. Filter Modal (when filter button clicked)
   - Bottom sheet modal
   - Title: "Bộ lọc" (xl, Bold, padding 24px)
   
   - Filter Sections (scrollable, padding horizontal 24px):
     
     Section 1 - Category:
     * Title: "Danh mục" (sm, Semibold, Gray 800)
     * Checkboxes: Thời trang, F&B, Mỹ phẩm, Gia dụng
     
     Section 2 - Rating:
     * Title: "Đánh giá"
     * Star filters: 5★ trở lên, 4★ trở lên, etc.
     
     Section 3 - Certification:
     * Title: "Chứng nhận"
     * Checkboxes: GOTS, Fair Trade, Carbon Neutral, Organic
     
     Section 4 - Price Range:
     * Title: "Khoảng giá"
     * Slider: Min-Max (0 - 2.000.000₫)
   
   - Action Buttons (padding 24px, sticky bottom):
     * Reset: "Xóa bộ lọc" (Gray 600, flex 1)
     * Apply: "Áp dụng (156)" (Primary Green bg, flex 2)

States:
- Default: Show recent searches + categories
- Typing: Show search results or "no results"
- Loading: Skeleton loaders for results
- Error: Error message with retry button

Animations:
- Search results: Fade in
- Filter modal: Slide up from bottom
- Tags: Scale on tap

## Screen 11: Review List Screen
Create a review list screen

Layout:
- Screen size: 393 x 852px
- Background: White
- Vertical scroll
- Sticky header

Elements:

1. Header Section (White bg, sticky top, shadow sm)
   - Back Button (top left, 16px from top)
     * Icon: Arrow left (Gray 700)
   
   - Product Info (center, padding vertical 16px):
     * Product Name: "Áo Thun Organic..." (sm, Semibold, Gray 900, max-width 250px, truncate)
     * Back to product link (xs, Primary Green, margin-top 4px)

2. Rating Summary Card (padding 24px, bg Gray 50, margin-bottom 1px)
   - Flex row:
     
     Left Side (overall rating):
     * Big Rating: "4.8" (5xl, Bold, Gray 900)
     * Stars: "⭐⭐⭐⭐⭐" (xl, margin-top 4px)
     * Total: "156 đánh giá" (sm, Gray 600, margin-top 4px)
     * Verified: "142 đã xác thực" (xs, Green 600, margin-top 4px)
     
     Right Side (distribution, flex 1, margin-left 32px):
     * Bar 1: "5★" (xs, Gray 600, width 32px) 
       Track: Gray 200, height 8px, radius 4px, flex 1
       Fill: Primary Green, width 77% (120 reviews)
       Count: "120" (xs, Gray 600, width 32px, right)
     
     * Bar 2: "4★" + track (16%) + "25"
     * Bar 3: "3★" + track (5%) + "8"
     * Bar 4: "2★" + track (1%) + "2"
     * Bar 5: "1★" + track (1%) + "1"

3. Filter & Sort Section (padding horizontal 20px, margin-top 20px)
   - Flex row, gap 12px:
     
     Filter Tabs (horizontal scroll, flex 1):
     * Tab: "Tất cả" (Primary Green text, Bold, active state)
     * Tab: "5★" (Gray 600)
     * Tab: "4★" (Gray 600)
     * Tab: "3★" (Gray 600)
     * Tab: "Có ảnh" (Gray 600)
     * Tab: "Đã xác thực" (Gray 600, Green icon)
     * Each tab: padding 8px 0, sm, Medium, border-bottom 2px (transparent or Primary Green)
     
     Sort Dropdown:
     * Text: "Mới nhất ▼" (sm, Gray 700, Medium)
     * Icon: Chevron down (Gray 500)

4. Reviews List (padding horizontal 20px, gap 20px, margin-bottom 100px)
   
   Review Card 1 (with photos):
   - White bg, radius 16px, padding 20px, shadow sm
   
   - User Header (flex row):
     * Avatar: 40x40px, radius full
     * Name: "Alex Nguyen" (sm, Semibold, Gray 900, margin-left 12px)
     * Level Badge: "🌱 Warrior" (xs, Primary Green bg, White text, padding 4px 8px, radius 12px)
     * Spacer (flex 1)
     * Date: "20/03/2024" (xs, Gray 500)
     * More menu: Icon 3 dots (Gray 400)
   
   - Rating (margin-top 12px):
     * Stars: "⭐⭐⭐⭐⭐" (base)
     * Verified: "✅ Đã xác thực" (xs, Green 600, margin-left 12px)
   
   - Criteria Scores (margin-top 12px, flex wrap, gap 8px):
     * Chip: "Chất lượng 5.0" (xs, Gray 700 bg Gray 100, padding 4px 8px, radius 8px)
     * Chip: "Bền vững 5.0"
     * Chip: "Minh bạch 4.5"
   
   - Comment (margin-top 12px):
     * Text: "Sản phẩm rất chất lượng, chất vải mềm mát, form dáng đẹp. Mình rất thích việc brand minh bạch về nguồn gốc và điều kiện sản xuất. Sẽ ủng hộ thêm!" (sm, Gray 700, line-height 1.5)
   
   - Photos (margin-top 16px, horizontal scroll, gap 8px):
     * Photo 1: 100x100px, radius 8px, object-fit cover
     * Photo 2: 100x100px, radius 8px
     * Photo 3: 100x100px, radius 8px
     * "+2" indicator if more photos
   
   - Actions (margin-top 16px, flex row, gap 24px):
     * Helpful: "👍 Hữu ích (24)" (xs, Gray 600)
     * Not Helpful: "👎 (2)" (xs, Gray 600)
     * Reply: "💬 Phản hồi" (xs, Gray 600)
     * Report: "🚩 Báo cáo" (xs, Gray 600)
   
   - Brand Reply (margin-top 16px, padding-top 16px, border-top Gray 100):
     * Badge: "EcoWear Vietnam" (xs, Primary Green, Medium)
     * Text: "Cảm ơn bạn đã đánh giá! Chúng mình rất vui vì bạn hài lòng với sản phẩm..." (sm, Gray 600, margin-top 8px)
     * Date: "21/03/2024" (xs, Gray 500)

   Review Card 2 (without photos):
   - Same structure but no photos section
   - Shorter comment
   
   Review Card 3 (critical review):
   - Same structure
   - Rating: 3 stars
   - Comment mentions issues
   - Brand reply with solution

5. Load More / Pagination
   - Loading State:
     * Skeleton cards (3 cards with gray shimmer)
   
   - Load More Button:
     * Text: "Xem thêm đánh giá" (sm, Primary Green, Medium)
     * Full width, padding 16px
     * Border-top Gray 200
   
   - End of List:
     * Icon: Check circle (Green, 32x32px, center)
     * Text: "Bạn đã xem hết đánh giá" (sm, Gray 600, center)

6. Write Review FAB (Fixed bottom right)
   - Circle: 56x56px
   - Background: Primary Green
   - Icon: Pen or Star (White, 24x24px)
   - Shadow: lg
   - Position: bottom 100px, right 20px
   - Label: "Viết đánh giá" (optional, White, xs, below icon)

7. Empty State (no reviews yet)
   - Icon: Message bubble (Gray 300, 80x80px, center, margin-top 100px)
   - Title: "Chưa có đánh giá nào" (base, Semibold, Gray 900, center)
   - Text: "Hãy là người đầu tiên đánh giá sản phẩm này" (sm, Gray 600, center, margin-top 8px)
   - Button: "Viết đánh giá ngay" (Primary Green, margin-top 24px)

8. Review Detail Modal (when clicking review)
   - Full screen modal or new page
   - All review details expanded
   - All photos in gallery view
   - All criteria scores displayed
   - All replies shown

Filters:
- By rating (5★, 4★, etc.)
- By verified purchase
- By photos
- By keywords

Sort Options:
- Mới nhất
- Cũ nhất
- Điểm cao nhất
- Điểm thấp nhất
- Hữu ích nhất

States:
- Loading: Skeleton screens
- Empty: No reviews message
- Error: Retry button
- Filtered: Show active filters

Design Style:
- Clean, readable
- Easy to scan
- Trust indicators prominent
- Community-focused

## Screen 12: Impact Points History Screen
Create an impact points history screen

Layout:
- Screen size: 393 x 852px
- Background: Gray 50
- Vertical scroll
- Sticky header

Elements:

1. Header Section (Primary Gradient bg, padding 24px, radius 0 0 24px 24px)
   - Back Button (top left)
     * Icon: Arrow left (White)
   
   - Title: "Impact Points" (xl, Bold, White, center, margin-top 16px)
   
   - Total Points Card (White bg, radius 16px, padding 24px, margin-top 24px, shadow lg):
     * Icon: ⭐ or Trophy (48x48px, center, Amber 500)
     * Label: "Tổng điểm của bạn" (sm, Gray 600, center, margin-top 12px)
     * Points: "150" (4xl, Bold, Gray 900, center, margin-top 4px)
     * Level: "🌱 Green Warrior - Level 3" (sm, Medium, Primary Green bg, White text, pill shape, padding 6px 16px, radius 20px, center, margin-top 12px)

2. Level Progress Section (padding horizontal 24px, margin-top 24px)
   - White bg, radius 16px, padding 20px, shadow sm
   
   - Header (flex row, space between):
     * Title: "Tiến độ lên cấp" (base, Semibold, Gray 900)
     * Progress: "60%" (sm, Bold, Primary Green)
   
   - Progress Bar (margin-top 12px):
     * Track: Gray 200, height 12px, radius 6px
     * Fill: Primary Gradient, 60% width, radius 6px
     * Animated fill
   
   - Level Info (margin-top 12px, flex row, space between):
     * Current: "Level 3\n150/250 điểm" (xs, Gray 600)
     * Next: "Level 4\n250 điểm" (xs, Gray 600, text-align right)
   
   - Next Level Rewards (margin-top 16px, padding-top 16px, border-top Gray 100):
     * Title: "Phần thưởng tiếp theo:" (xs, Semibold, Gray 700)
     * Rewards (flex wrap, gap 8px, margin-top 8px):
       - Badge: "🏆 Ambassador Badge" (xs, Gray 700 bg Gray 100, padding 4px 8px, radius 8px)
       - Badge: "🎁 Voucher 50k" (same styling)
       - Badge: "⭐ Priority Support" (same styling)

3. Points Breakdown Section (padding horizontal 24px, margin-top 24px)
   - White bg, radius 16px, padding 20px, shadow sm
   
   - Title: "Điểm theo hoạt động" (base, Semibold, Gray 900)
   
   - Breakdown List (margin-top 16px, gap 16px):
     
     Item 1 - Scans:
     * Flex row, align center
     * Icon: 📱 (24x24px, bg Blue 50, padding 8px, radius 8px)
     * Content (flex 1, margin-left 12px):
       - Label: "Quét QR" (sm, Medium, Gray 800)
       - Count: "25 lần" (xs, Gray 500)
     * Points: "+25" (sm, Bold, Blue 600)
     
     Item 2 - Reviews:
     * Icon: ✍️ (bg Green 50)
     * Label: "Đánh giá"
     * Count: "8 bài"
     * Points: "+40" (Green 600)
     
     Item 3 - Helpful Votes:
     * Icon: 👍 (bg Amber 50)
     * Label: "Được vote hữu ích"
     * Count: "12 lượt"
     * Points: "+120" (Amber 600)
     
     Item 4 - Shares:
     * Icon: 📤 (bg Purple 50)
     * Label: "Chia sẻ"
     * Count: "5 lần"
     * Points: "+10" (Purple 600)
     
     Item 5 - Streak:
     * Icon: 🔥 (bg Red 50)
     * Label: "Chuỗi ngày"
     * Count: "7 ngày"
     * Points: "+21" (Red 600)
   
   - Total Row (margin-top 16px, padding-top 16px, border-top Gray 200):
     * Label: "Tổng cộng" (sm, Semibold, Gray 900)
     * Points: "+216" (base, Bold, Primary Green)

4. History Timeline Section (padding horizontal 24px, margin-top 24px, margin-bottom 100px)
   - White bg, radius 16px, padding 20px, shadow sm
   
   - Header (flex row, space between):
     * Title: "Lịch sử điểm" (base, Semibold, Gray 900)
     * Filter: "Tháng này ▼" (xs, Gray 600)
   
   - Filter Tabs (horizontal scroll, margin-top 16px, gap 12px):
     * Tab: "Tất cả" (Primary Green text, Bold, active)
     * Tab: "Quét QR" (Gray 600)
     * Tab: "Đánh giá" (Gray 600)
     * Tab: "Chia sẻ" (Gray 600)
     * Tab: "Khác" (Gray 600)
   
   - Timeline List (margin-top 16px, gap 16px):
     
     Date Group Header:
     * Text: "Hôm nay" (xs, Semibold, Gray 600, margin-bottom 12px)
     * Or: "20 Tháng 3, 2024"
     
     History Item 1:
     * Flex row, align center
     * Icon: ✍️ (20x20px, bg Green 100, padding 8px, radius 8px)
     * Content (flex 1, margin-left 12px):
       - Title: "Đánh giá sản phẩm" (sm, Medium, Gray 800)
       - Subtitle: "Áo Thun Organic Cotton" (xs, Gray 500)
       - Time: "10:30" (xs, Gray 400)
     * Points: "+5" (sm, Bold, Green 600)
     
     History Item 2:
     * Icon: 📱 (bg Blue 100)
     * Title: "Quét QR code"
     * Subtitle: "Cà Phê Fair Trade"
     * Time: "09:15"
     * Points: "+1" (Blue 600)
     
     History Item 3:
     * Icon: 👍 (bg Amber 100)
     * Title: "Review được vote hữu ích"
     * Subtitle: "3 lượt vote"
     * Time: "Hôm qua"
     * Points: "+30" (Amber 600)
     
     History Item 4:
     * Icon: 🔥 (bg Red 100)
     * Title: "Chuỗi ngày 7 ngày"
     * Subtitle: "Daily streak bonus"
     * Time: "18/03"
     * Points: "+21" (Red 600)
   
   - Load More (margin-top 20px, center):
     * Text: "Xem thêm" (sm, Primary Green, Medium)

5. Redeem Section (optional, for future feature)
   - White bg, radius 16px, padding 20px, shadow sm, margin-top 24px
   - Background: Gradient (Amber to Orange)
   - Title: "Đổi điểm lấy quà" (base, Bold, White)
   - Text: "Sắp ra mắt!" (sm, White, opacity 90%)
   - Button: "Thông báo cho tôi" (White bg, Amber text, margin-top 12px)

6. Empty State (no history)
   - Icon: History clock (Gray 300, 80x80px, center, margin-top 100px)
   - Title: "Chưa có lịch sử điểm" (base, Semibold, Gray 900, center)
   - Text: "Bắt đầu quét QR và đánh giá để tích điểm!" (sm, Gray 600, center)
   - Button: "Quét QR ngay" (Primary Green, margin-top 24px)

Animations:
- Points counter: Count up animation
- Progress bar: Fill animation
- List items: Slide in from bottom
- Confetti on level up

Colors:
- Background: Gray 50
- Cards: White
- Primary: Green #10B981
- Points: Color-coded by activity type

Design Style:
- Gamification-focused
- Motivating and encouraging
- Clear progress visualization
- Easy to track activities

## Screen 13: Badges Collection Screen
Create a badges collection screen

Layout:
- Screen size: 393 x 852px
- Background: Gray 50
- Vertical scroll
- Sticky header

Elements:

1. Header Section (White bg, sticky top, shadow sm)
   - Back Button (top left, 16px from top)
     * Icon: Arrow left (Gray 700, 24x24px)
   
   - Title: "Bộ sưu tập huy hiệu" (xl, Bold, Gray 900, center, padding vertical 16px)

2. Stats Overview Card (padding 24px, margin-bottom 1px)
   - White bg, radius 16px, padding 24px, shadow sm
   
   - Progress Circle (center):
     * Circle: 120x120px
     * Background: Gray 100
     * Progress ring: Primary Green, stroke 8px, 25% (5/20 badges)
     * Center content:
       - Number: "5" (3xl, Bold, Gray 900)
       - Text: "/20" (lg, Gray 500)
   
   - Text below: "Huy hiệu đã mở khóa" (sm, Gray 600, center, margin-top 12px)
   
   - Next Badge Preview (margin-top 20px, padding-top 20px, border-top Gray 100):
     * Text: "Sắp đạt được:" (xs, Semibold, Gray 600)
     * Badge preview (flex row, align center, margin-top 8px):
       - Icon: 🏆 (32x32px)
       - Name: "Ambassador" (sm, Medium, Gray 800, margin-left 12px)
       - Progress: "60%" (xs, Primary Green, margin-left auto)

3. Filter Tabs (padding horizontal 20px, margin-top 20px)
   - Horizontal scroll, gap 12px
   
   - Tab 1 - All:
     * Text: "Tất cả (20)" (sm, Medium, Primary Green bg, White text, padding 8px 16px, radius 20px)
   
   - Tab 2 - Earned:
     * Text: "Đã đạt (5)" (sm, Medium, Gray 700 bg Gray 100, padding 8px 16px, radius 20px)
   
   - Tab 3 - Locked:
     * Text: "Chưa mở (15)" (sm, Medium, Gray 700 bg Gray 100, padding 8px 16px, radius 20px)
   
   - Tab 4 - By Category:
     * Text: "Danh mục ▼" (sm, Medium, Gray 700 bg Gray 100, padding 8px 16px, radius 20px)

4. Badges Grid (padding horizontal 20px, margin-top 20px, margin-bottom 100px)
   - 2 columns, gap 16px
   
   Earned Badge Card 1 - Early Adopter:
   - White bg, radius 16px, padding 20px, shadow sm
   - Border: 2px Amber 400 (special badge)
   
   - Badge Icon (center):
     * Icon: 🏅 or Custom (64x64px)
     * Glow effect (Amber shadow)
   
   - Badge Name: "Early Adopter" (base, Bold, Gray 900, center, margin-top 12px)
   
   - Description: "Người dùng đầu tiên tham gia Product Flows" (xs, Gray 600, center, margin-top 4px, 2 lines)
   
   - Earned Date (center, margin-top 12px):
     * Icon: Check circle (Green, 16x16px)
     * Text: "Đạt ngày 15/01/2024" (xs, Green 600, margin-left 4px)
   
   - Rarity (top right, absolute):
     * Badge: "Hiếm" (xs, Amber bg, White text, padding 4px 8px, radius 8px)
   
   - Tap to view details

   Earned Badge Card 2 - Green Warrior:
   - White bg, radius 16px, padding 20px, shadow sm
   - Border: 2px Primary Green
   
   - Icon: 🌱 (64x64px)
   - Name: "Green Warrior"
   - Description: "Đạt 100 Impact Points"
   - Earned: "20/02/2024"
   - Rarity: "Phổ biến" (Green bg)

   Earned Badge Card 3 - Scan Master:
   - Icon: 📱
   - Name: "Scan Master"
   - Description: "Quét 50 sản phẩm"
   - Earned: "10/03/2024"

   Locked Badge Card 1 - Ambassador:
   - White bg, radius 16px, padding 20px, shadow sm
   - Opacity: 60%
   - Border: 2px dashed Gray 300
   
   - Badge Icon (center):
     * Icon: 👑 (64x64px, Gray 400)
     * Lock overlay (top right, Gray 400)
   
   - Name: "Ambassador" (base, Bold, Gray 500, center)
   
   - Description: "Đạt 500 Impact Points" (xs, Gray 400, center)
   
   - Progress (margin-top 12px):
     * Bar: Gray 200, height 6px, radius 3px
     * Fill: Gray 400, 60% width (300/500 points)
     * Text: "300/500 điểm (60%)" (xs, Gray 500, margin-top 8px, center)
   
   - Locked badge (center, margin-top 12px):
     * Icon: 🔒 (16x16px, Gray 400)
     * Text: "Chưa mở khóa" (xs, Gray 400)

   Locked Badge Card 2 - Review Expert:
   - Icon: ✍️
   - Name: "Review Expert"
   - Description: "Viết 50 đánh giá"
   - Progress: "8/50 (16%)"

   Locked Badge Card 3 - Eco Champion:
   - Icon: 🌍
   - Name: "Eco Champion"
   - Description: "Đánh giá 100 sản phẩm bền vững"
   - Progress: "0/100 (0%)"

5. Badge Detail Modal (when tapping badge)
   - Full screen modal or bottom sheet
   - Background: White
   - Radius: 24px top corners
   
   - Handle (top center, 40x4px, Gray 300, radius 2px)
   
   - Content (padding 24px):
     * Badge Icon (center, 100x100px)
     * Name (2xl, Bold, Gray 900, center, margin-top 16px)
     * Description (base, Gray 600, center, margin-top 8px)
     
     If earned:
     * Earned date with checkmark
     * Share button
     * Related badges
     
     If locked:
     * Requirements list
     * Progress bar
     * Tips to earn

6. Categories Section (optional)
   - Title: "Danh mục huy hiệu" (base, Semibold, Gray 900, padding horizontal 20px, margin-top 28px)
   
   - Category Cards (horizontal scroll, padding horizontal 20px, gap 12px):
     
     Category 1 - Beginner:
     * Width: 140px, height 100px
     * Background: Green gradient
     * Icon: 🌱
     * Name: "Người mới"
     * Count: "3/5 huy hiệu"
     
     Category 2 - Expert:
     * Background: Blue gradient
     * Icon: 🏆
     * Name: "Chuyên gia"
     * Count: "1/8 huy hiệu"
     
     Category 3 - Special:
     * Background: Amber gradient
     * Icon: ⭐
     * Name: "Đặc biệt"
     * Count: "1/7 huy hiệu"

7. Empty State (no badges yet)
   - Icon: Trophy (Gray 300, 80x80px, center, margin-top 100px)
   - Title: "Chưa có huy hiệu nào" (base, Semibold, Gray 900, center)
   - Text: "Tham gia các hoạt động để nhận huy hiệu!" (sm, Gray 600, center)
   - Button: "Bắt đầu ngay" (Primary Green, margin-top 24px)

Badge Categories:
- Beginner (5 badges)
- Scanner (5 badges)
- Reviewer (5 badges)
- Influencer (3 badges)
- Special (2 badges)

Badge Types:
- Common (Gray/Green border)
- Rare (Blue border)
- Epic (Purple border)
- Legendary (Amber border, glow effect)

Animations:
- Earned badges: Shine/glow effect
- Locked badges: Subtle pulse
- Progress: Smooth fill animation
- Modal: Slide up from bottom

Design Style:
- Collectible feel
- Gamification-focused
- Rewarding and motivating
- Clear progression

## Screen 14: Settings Screen
Create a settings screen

Layout:
- Screen size: 393 x 852px
- Background: Gray 50
- Vertical scroll
- Sticky header

Elements:

1. Header Section (White bg, sticky top, shadow sm)
   - Back Button (top left, 16px from top)
     * Icon: Arrow left (Gray 700, 24x24px)
   
   - Title: "Cài đặt" (xl, Bold, Gray 900, center, padding vertical 16px)

2. Profile Summary Card (padding 24px, margin-bottom 1px)
   - White bg, radius 16px, padding 20px, shadow sm
   
   - Flex row, align center:
     * Avatar: 60x60px, radius full
     * Content (flex 1, margin-left 16px):
       - Name: "Alex Nguyen" (base, Semibold, Gray 900)
       - Email: "alex@example.com" (sm, Gray 600)
       - Level: "🌱 Green Warrior" (xs, Primary Green bg, White text, padding 4px 8px, radius 12px, margin-top 8px, inline)
     * Edit button: Icon pencil (Gray 400, 20x20px)

3. Settings Groups (padding horizontal 20px, margin-top 24px, margin-bottom 100px)

   Group 1 - Account (White bg, radius 16px, shadow sm):
   - Section Header:
     * Title: "Tài khoản" (xs, Semibold, Gray 500, padding 16px 20px 8px)
   
   - Menu Items:
     
     Item 1 - Edit Profile:
     * Flex row, align center, padding 16px 20px
     * Icon: 👤 (20x20px, bg Blue 50, padding 8px, radius 8px, Blue 600)
     * Label: "Chỉnh sửa hồ sơ" (sm, Medium, Gray 800, margin-left 12px)
     * Spacer (flex 1)
     * Chevron: (Gray 400, 20x20px)
     * Border-bottom: 1px Gray 100
     
     Item 2 - Change Password:
     * Icon: 🔑 (bg Purple 50, Purple 600)
     * Label: "Đổi mật khẩu"
     * Chevron
     * Border-bottom
     
     Item 3 - Notifications:
     * Icon: 🔔 (bg Amber 50, Amber 600)
     * Label: "Thông báo"
     * Toggle: (Primary Green, on) - margin-left auto
     * Border-bottom
     
     Item 4 - Email Preferences:
     * Icon: 📧 (bg Green 50, Green 600)
     * Label: "Tùy chọn email"
     * Chevron

   Group 2 - App Settings (White bg, radius 16px, shadow sm, margin-top 20px):
   - Section Header: "Ứng dụng"
   
   - Menu Items:
     
     Item 5 - Language:
     * Icon: 🌐 (bg Blue 50, Blue 600)
     * Label: "Ngôn ngữ"
     * Value: "Tiếng Việt" (sm, Gray 500, margin-right 12px)
     * Chevron
     
     Item 6 - Dark Mode:
     * Icon: 🌙 (bg Gray 200, Gray 700)
     * Label: "Chế độ tối"
     * Toggle: (Gray 300, off)
     
     Item 7 - Cache:
     * Icon: 🗑️ (bg Red 50, Red 600)
     * Label: "Bộ nhớ cache"
     * Value: "24 MB" (sm, Gray 500, margin-right 12px)
     * Chevron
     
     Item 8 - Data Usage:
     * Icon: 📊 (bg Green 50, Green 600)
     * Label: "Sử dụng dữ liệu"
     * Chevron
     * Border-bottom
     
     Item 9 - Storage:
     * Icon: 💾 (bg Purple 50, Purple 600)
     * Label: "Dung lượng lưu trữ"
     * Value: "156 MB" (sm, Gray 500)
     * Chevron

   Group 3 - Privacy & Security (White bg, radius 16px, shadow sm, margin-top 20px):
   - Section Header: "Quyền riêng tư"
   
   - Menu Items:
     
     Item 10 - Privacy Policy:
     * Icon: 🔒 (bg Blue 50, Blue 600)
     * Label: "Chính sách bảo mật"
     * Chevron
     * Border-bottom
     
     Item 11 - Terms of Service:
     * Icon: 📄 (bg Green 50, Green 600)
     * Label: "Điều khoản dịch vụ"
     * Chevron
     * Border-bottom
     
     Item 12 - Data Export:
     * Icon: 📥 (bg Amber 50, Amber 600)
     * Label: "Xuất dữ liệu cá nhân"
     * Chevron
     
     Item 13 - Delete Account:
     * Icon: 🗑️ (bg Red 50, Red 600)
     * Label: "Xóa tài khoản"
     * Chevron

   Group 4 - Support (White bg, radius 16px, shadow sm, margin-top 20px):
   - Section Header: "Hỗ trợ"
   
   - Menu Items:
     
     Item 14 - Help Center:
     * Icon: ❓ (bg Blue 50, Blue 600)
     * Label: "Trung tâm trợ giúp"
     * Chevron
     * Border-bottom
     
     Item 15 - Contact Us:
     * Icon: 📧 (bg Green 50, Green 600)
     * Label: "Liên hệ hỗ trợ"
     * Chevron
     * Border-bottom
     
     Item 16 - FAQ:
     * Icon: 💡 (bg Amber 50, Amber 600)
     * Label: "Câu hỏi thường gặp"
     * Chevron
     * Border-bottom
     
     Item 17 - Rate App:
     * Icon: ⭐ (bg Yellow 50, Yellow 600)
     * Label: "Đánh giá ứng dụng"
     * Chevron

   Group 5 - About (White bg, radius 16px, shadow sm, margin-top 20px):
   - Section Header: "Giới thiệu"
   
   - Menu Items:
     
     Item 18 - About App:
     * Icon: ℹ️ (bg Blue 50, Blue 600)
     * Label: "Về Product Flows"
     * Chevron
     
     Item 19 - Version:
     * Icon: 📱 (bg Gray 100, Gray 600)
     * Label: "Phiên bản"
     * Value: "1.0.0 (Beta)" (sm, Gray 500, margin-right 12px)
     
     Item 20 - Licenses:
     * Icon: 📜 (bg Purple 50, Purple 600)
     * Label: "Giấy phép mã nguồn"
     * Chevron

4. Logout Section (padding horizontal 20px, margin-top 32px, margin-bottom 40px)
   - White bg, radius 16px, shadow sm, overflow hidden
   
   - Logout Button:
     * Flex row, align center, padding 20px
     * Icon: 🚪 (20x20px, bg Red 50, padding 8px, radius 8px, Error Red)
     * Label: "Đăng xuất" (sm, Bold, Error Red, margin-left 12px)
     * No chevron, full width clickable

5. App Version Footer (center, padding-bottom 24px)
   - Text: "Version 1.0.0 (Beta)" (xs, Gray 400)
   - Text: "© 2024 Product Flows" (xs, Gray 400, margin-top 4px)

6. Modals

   Language Selector Modal:
   - Bottom sheet
   - Title: "Chọn ngôn ngữ"
   - Options:
     * Tiếng Việt (selected, checkmark)
     * English
     * 中文
     * 日本語
   - Save button

   Notification Settings Modal:
   - List of toggles:
     * Push notifications
     * Email notifications
     * Product updates
     * Review reminders
     * Promotional offers

   Cache Clear Confirmation:
   - Title: "Xóa bộ nhớ cache?"
   - Text: "Điều này sẽ xóa dữ liệu tạm nhưng không ảnh hưởng đến tài khoản của bạn"
   - Buttons: "Hủy" (Gray), "Xóa" (Error Red)

States:
- Toggle on/off states
- Loading states for actions
- Success toast notifications

Animations:
- Toggle switch: Smooth slide
- Modal: Slide up from bottom
- Page transitions: Slide right

Design Style:
- Clean, organized
- Clear grouping
- Easy to navigate
- Professional

## Screen 15: Shop Dashboard
Create a Shop Dashboard screen for SCA app

User Type: Shop/Retailer
Color Theme: Blue (#3B82F6)

Layout:
- Screen size: 393 x 852px
- Background: Gray 50
- Vertical scroll
- Bottom tab navigation (Shop-specific)

Elements:

1. Header Section (Blue gradient bg, padding 24px)
   - Shop Name: "EcoWear Store HCM" (xl, Bold, White)
   - Verification Badge: "✅ Verified Shop" (White bg, Blue text, pill shape)
   - Notification Icon (top right, White)

2. Stats Overview (White cards, margin-top -40px, padding horizontal 24px)
   - 4 Stats Cards (2x2 grid, gap 12px):
     
     Card 1 - Today's Scans:
     * Icon: 📱 (Blue 500)
     * Value: "45" (2xl, Bold, Gray 900)
     * Label: "Lượt scan hôm nay" (xs, Gray 600)
     * Trend: "+12% vs yesterday" (xs, Green 600)
     
     Card 2 - Verified Purchases:
     * Icon: ✅
     * Value: "28"
     * Label: "Mua hàng xác nhận"
     
     Card 3 - Shop Rating:
     * Icon: ⭐
     * Value: "4.7"
     * Label: "Đánh giá shop"
     
     Card 4 - Total Products:
     * Icon: 📦
     * Value: "156"
     * Label: "Sản phẩm trong shop"

3. Quick Actions (padding horizontal 24px, margin-top 24px)
   - Title: "Thao tác nhanh" (base, Semibold, Gray 900)
   
   - Action Buttons (flex row, gap 12px, margin-top 12px):
     * Button 1: "Xác nhận mua hàng" (Blue bg, White, icon: ✅)
     * Button 2: "Thêm sản phẩm" (White bg, Blue border, icon: ➕)
     * Button 3: "Xem báo cáo" (White bg, Blue border, icon: 📊)

4. Recent Scans List (padding horizontal 24px, margin-top 24px)
   - Header (flex row, space between):
     * Title: "Lượt scan gần đây" (base, Semibold, Gray 900)
     * Link: "Xem tất cả →" (sm, Blue 600)
   
   - Scan Items (White bg, radius 12px, padding 16px, shadow sm, gap 12px):
     
     Item 1:
     * Product Thumbnail: 48x48px
     * Product Name: "Áo Thun Organic..." (sm, Medium, Gray 800)
     * Time: "10:30 AM" (xs, Gray 500)
     * Status: "Chưa xác nhận" (Orange badge)
     * Action Button: "Xác nhận" (Blue, small)
     
     Item 2:
     * Same structure
     * Status: "Đã xác nhận" (Green badge)

5. Pending Verifications (padding horizontal 24px, margin-top 24px)
   - Alert Card (Orange 50 bg, border Orange 200, radius 12px, padding 16px):
     * Icon: ⚠️ (Orange 600)
     * Title: "5 đơn cần xác nhận" (sm, Semibold, Orange 800)
     * Text: "Khách hàng đang chờ xác nhận mua hàng" (xs, Orange 700)
     * Button: "Xử lý ngay" (Orange 600, margin-top 12px)

6. Bottom Tab Navigation (Shop-specific)
   - 5 Tabs: Dashboard, Products, Verifications, Analytics, Settings
   - Active: Dashboard (Blue)
   - FAB: "Scan QR" (Blue, center, 56x56px)

Colors:
- Primary: Blue #3B82F6
- Background: Gray 50
- Cards: White
- Text: Gray 900, 600, 500

## Screen 16: Purchase Verification Screen
Create a Purchase Verification screen for Shop users

User Type: Shop/Retailer
Color Theme: Blue (#3B82F6)

Purpose: Shop confirms consumer purchase so they can review

Layout:
- Screen size: 393 x 852px
- Background: White
- Vertical scroll

Elements:

1. Header (White bg, sticky top, shadow sm)
   - Back Button (top left)
   - Title: "Xác nhận mua hàng" (xl, Bold, Gray 900, center)

2. Scan QR Section (padding 24px)
   - Instruction Card (Blue 50 bg, radius 12px, padding 20px, text-align center):
     * Icon: 📱 (Blue 500, 48x48px)
     * Title: "Quét QR sản phẩm" (base, Semibold, Gray 900)
     * Text: "Quét mã QR trên sản phẩm để xác nhận mua hàng cho khách" (sm, Gray 600)
   
   - Scan Button (margin-top 20px):
     * Full width, height 56px
     * Background: Blue 600
     * Text: "Mở Camera Quét" (base, Bold, White)
     * Icon: Camera (left)

3. Manual Entry Option (padding horizontal 24px, margin-top 24px)
   - Divider: "Hoặc nhập thủ công" (sm, Gray 500, center)
   
   - Form (margin-top 20px):
     * Product Code Input (height 56px, label: "Mã sản phẩm")
     * Customer Phone Input (height 56px, label: "SĐT khách hàng")
     * Quantity Input (height 56px, label: "Số lượng", default: 1)
     * Price Input (height 56px, label: "Giá bán")
     * Receipt Photo Upload (dashed border, camera icon)
   
   - Submit Button (margin-top 24px):
     * Full width, height 56px
     * Background: Blue 600
     * Text: "Xác nhận mua hàng" (base, Bold, White)

4. Pending Verifications List (padding horizontal 24px, margin-top 32px)
   - Title: "Chờ xác nhận" (base, Semibold, Gray 900)
   
   - Verification Cards (White bg, border Gray 200, radius 12px, padding 16px, gap 16px):
     
     Card 1:
     * Customer: "Anh Tuấn - 090xxx123" (sm, Medium, Gray 800)
     * Product: "Áo Thun Organic Cotton" (sm, Gray 600)
     * Time: "10:30 AM - Hôm nay" (xs, Gray 500)
     * Amount: "299.000₫" (sm, Bold, Blue 600)
     * Actions (flex row, gap 8px, margin-top 12px):
       - Button: "Xác nhận" (Blue, flex 1)
       - Button: "Từ chối" (Gray, flex 1)

5. Verification History (padding horizontal 24px, margin-top 32px, margin-bottom 100px)
   - Title: "Lịch sử xác nhận" (base, Semibold, Gray 900)
   
   - Filter Tabs (horizontal scroll, gap 12px, margin-top 12px):
     * "Hôm nay" (Blue bg, White text)
     * "Tuần này" (Gray 100 bg)
     * "Tháng này" (Gray 100 bg)
   
   - History Items (simpler cards, gray border)

6. Success Modal (after verification)
   - Background: White
   - Icon: ✅ (Green, 64x64px, center)
   - Title: "Đã xác nhận!" (xl, Bold, Gray 900)
   - Text: "Khách hàng có thể đánh giá sản phẩm và shop" (sm, Gray 600)
   - Points: "Khách nhận +5 Impact Points" (sm, Blue 600)
   - Button: "Tiếp tục" (Blue, margin-top 24px)

Fraud Prevention:
- Check if product was already verified
- Check location match with shop
- Check timestamp (within 24 hours of consumer scan)
- Limit verifications per day (detect abuse)

## Screen 17: Shop Profile Management
Create a Shop Profile Management screen

User Type: Shop/Retailer
Color Theme: Blue (#3B82F6)

Layout:
- Screen size: 393 x 852px
- Background: Gray 50
- Vertical scroll

Elements:

1. Header (White bg, sticky top)
   - Back Button
   - Title: "Hồ sơ cửa hàng" (xl, Bold, center)
   - Save Button (top right, Blue text)

2. Shop Cover Photo (full width, height 200px)
   - Image placeholder (Gray 200 bg)
   - Edit button (bottom right, camera icon, White bg)
   - Overlay text: "Ảnh bìa cửa hàng" (White, center)

3. Shop Logo (center, -50px margin-top)
   - Circle: 100x100px, White bg, shadow lg
   - Logo placeholder (Gray 300)
   - Edit icon (overlay)

4. Basic Info Section (White bg, radius 16px, padding 24px, margin-top 24px)
   - Form Fields:
     * Shop Name (input, required)
     * Business License Number (input, required for verification)
     * Tax Code (input, optional)
     * Description (textarea, max 500 chars)
     * Category (dropdown: Fashion, F&B, Beauty, Home, etc.)
   
5. Contact Information (White bg, radius 16px, padding 24px, margin-top 20px)
   - Form Fields:
     * Phone (input, required)
     * Email (input, required)
     * Website (input, optional)
     * Facebook/Zalo (input, optional)

6. Location (White bg, radius 16px, padding 24px, margin-top 20px)
   - Address Input (required)
   - City/District Dropdown
   - Map Preview (height 200px, Gray 200 bg)
   - "Chọn trên bản đồ" button
   - Coordinates display (lat, lng)

7. Branches Management (White bg, radius 16px, padding 24px, margin-top 20px)
   - Header (flex row, space between):
     * Title: "Chi nhánh" (base, Semibold)
     * Add Button: "+ Thêm" (Blue)
   
   - Branch List (gap 12px):
     * Branch Card: Name, Address, Phone, Toggle (active/inactive)

8. Business Hours (White bg, radius 16px, padding 24px, margin-top 20px)
   - Days of week (Mon-Sun)
   - Open/Close time pickers for each day
   - "24/7" toggle

9. Certifications (White bg, radius 16px, padding 24px, margin-top 20px)
   - Title: "Chứng nhận" (base, Semibold)
   - Upload buttons for certificates
   - Display uploaded certificates with verify status

10. Verification Status Card (margin-top 24px, padding 24px)
    - If verified: Green bg, "✅ Đã xác minh" badge
    - If pending: Yellow bg, "⏳ Đang chờ xét duyệt" + estimated time
    - If rejected: Red bg, "❌ Từ chối" + reason + appeal button

11. Action Buttons (sticky bottom, padding 24px)
    - Cancel: "Hủy" (Gray, flex 1)
    - Save: "Lưu thay đổi" (Blue, flex 2)

Validation:
- Required fields marked with *
- Phone format validation
- Email format validation
- Business license number format
- Address autocomplete

## Screen 18: Product Management (Shop)
Create a Shop Product Management screen

User Type: Shop/Retailer
Color Theme: Blue (#3B82F6)

Purpose: Manage which products are available at this shop

Layout:
- Screen size: 393 x 852px
- Background: Gray 50
- Vertical scroll

Elements:

1. Header (White bg, sticky top)
   - Back Button
   - Title: "Sản phẩm tại shop" (xl, Bold, center)
   - Add Button (top right, Blue icon)

2. Search & Filter (padding 16px)
   - Search Bar (height 48px, Gray 100 bg)
   - Filter Button (right)

3. Stats Bar (padding horizontal 20px, margin-top 8px)
   - Total Products: "156 sản phẩm" (sm, Gray 600)
   - Available: "142 còn hàng" (Green)
   - Out of Stock: "14 hết hàng" (Red)

4. Add Product Section (padding horizontal 20px, margin-top 20px)
   - Button: "➕ Thêm sản phẩm mới" (Blue bg, White, full width, height 56px)
   
   - Add Methods (margin-top 16px):
     * Option 1: "Quét QR sản phẩm" (icon: camera)
     * Option 2: "Tìm từ danh mục" (icon: search)
     * Option 3: "Nhập mã SKU" (icon: keyboard)

5. Product List (padding horizontal 20px, margin-top 20px)
   - Product Cards (White bg, radius 12px, padding 16px, shadow sm, gap 12px):
     
     Card 1:
     * Flex row
     * Thumbnail: 80x80px, radius 8px
     * Content (flex 1, margin-left 12px):
       - Product Name: "Áo Thun Organic Cotton" (sm, Semibold, Gray 900)
       - SKU: "ECO-TSHIRT-001" (xs, Gray 500)
       - Price: "299.000₫" (sm, Bold, Blue 600)
       - Stock: "25 sản phẩm" (xs, Green 600)
     * Toggle: Available/Unavailable (right)
     * More menu: 3 dots (Gray 400)

6. Bulk Actions (floating when items selected)
   - Background: Blue 600
   - Selected count: "5 sản phẩm đã chọn"
   - Actions: "Cập nhật giá", "Cập nhật tồn", "Xóa"

7. Empty State (if no products)
   - Icon: 📦 (Gray 300, 80x80px)
   - Title: "Chưa có sản phẩm nào" (base, Semibold)
   - Text: "Thêm sản phẩm để khách hàng biết shop có hàng" (sm, Gray 600)
   - Button: "Thêm sản phẩm đầu tiên" (Blue)

8. Product Detail Modal (when tapping product)
   - Bottom sheet
   - Product info
   - Edit price
   - Edit stock quantity
   - Upload more photos
   - Set availability schedule

## Screen 19: Shop Sales Analytics
Create a Shop Sales Analytics screen

User Type: Shop/Retailer
Color Theme: Blue (#3B82F6)

Layout:
- Screen size: 393 x 852px
- Background: Gray 50
- Vertical scroll

Elements:

1. Header (White bg, sticky top)
   - Back Button
   - Title: "Báo cáo bán hàng" (xl, Bold, center)
   - Export Button (top right, icon: download)

2. Date Range Selector (padding horizontal 20px, margin-top 16px)
   - Flex row, gap 12px:
     * "Hôm nay" (Blue bg, White)
     * "7 ngày" (Gray 100)
     * "30 ngày" (Gray 100)
     * "Tùy chọn" (Gray 100)

3. Key Metrics (padding horizontal 20px, margin-top 20px)
   - 4 Cards (2x2 grid):
     
     Card 1 - Total Scans:
     * Value: "1,234"
     * Label: "Lượt scan"
     * Trend: "+15%" (Green)
     
     Card 2 - Verified Purchases:
     * Value: "456"
     * Label: "Đơn xác nhận"
     * Trend: "+22%"
     
     Card 3 - Revenue:
     * Value: "125.5M₫"
     * Label: "Doanh thu"
     * Trend: "+18%"
     
     Card 4 - Avg Rating:
     * Value: "4.7⭐"
     * Label: "Đánh giá"
     * Trend: "+0.2"

4. Charts Section (padding horizontal 20px, margin-top 24px)
   - Chart 1 - Scans Over Time:
     * Title: "Lượt scan theo ngày"
     * Type: Line chart
     * Height: 200px
     * X-axis: Dates
     * Y-axis: Scan count
     
   - Chart 2 - Top Products:
     * Title: "Sản phẩm bán chạy"
     * Type: Bar chart (horizontal)
     * Top 5 products with scan/purchase count
     
   - Chart 3 - Peak Hours:
     * Title: "Giờ cao điểm"
     * Type: Heat map or bar chart
     * Shows busiest hours

5. Customer Insights (White bg, radius 16px, padding 20px, margin-top 24px)
   - Title: "Khách hàng" (base, Semibold)
   
   - Stats:
     * New Customers: "234 (51%)"
     * Returning Customers: "222 (49%)"
     * Avg Purchase Value: "275.000₫"
     * Customer Satisfaction: "4.7/5"

6. Shop Rating Breakdown (White bg, radius 16px, padding 20px, margin-top 20px)
   - Title: "Đánh giá shop"
   
   - Criteria Scores (5 rows):
     * Service: 4.8 ⭐⭐⭐⭐⭐
     * Authenticity: 4.9 ⭐⭐⭐⭐⭐
     * Price: 4.5 ⭐⭐⭐⭐
     * Location: 4.6 ⭐⭐⭐⭐
     * Cleanliness: 4.7 ⭐⭐⭐⭐

7. Recent Reviews (White bg, radius 16px, padding 20px, margin-top 20px, margin-bottom 100px)
   - Header: "Đánh giá gần đây" + "Xem tất cả →"
   - Review previews (3 items)

Colors:
- Primary: Blue #3B82F6
- Charts: Blue gradient, Green for positive trends
- Background: Gray 50

## Screen 20: Shop Settings
Create a Shop Settings screen

User Type: Shop/Retailer
Color Theme: Blue (#3B82F6)

Similar to Consumer Settings but with shop-specific options:

Additional Settings:
- Shop Hours Management
- Auto-verification settings (on/off)
- Notification preferences (new scan, new review, etc.)
- Staff management (add/remove staff accounts)
- Commission rate for affiliates
- Payment methods accepted
- Return/Refund policy
- Shop suspension/deactivation

Danger Zone:
- Delete shop account (red button)
- Transfer ownership

## Screen 21: Distributor Dashboard
Create a Distributor Dashboard screen

User Type: Distributor
Color Theme: Purple (#8B5CF6)

Similar to Shop Dashboard but with distribution metrics:

Key Metrics:
- Products in Distribution: "2,345"
- Warehouses: "5"
- Active Shops: "45"
- Transfer Pending: "12"

Quick Actions:
- Transfer Products
- Add Warehouse
- View Distribution Chain
- Generate Reports

Recent Transfers List:
- Product name
- From → To
- Status (In Transit, Delivered, etc.)
- Date

Colors:
- Primary: Purple #8B5CF6
- Rest similar to Shop Dashboard

## Screen 22: Distribution Chain Management
Create a Distribution Chain Management screen

User Type: Distributor
Color Theme: Purple (#8B5CF6)

Purpose: Track and manage product distribution flow

Layout:
- Visual timeline of distribution chain
- Factory → Distributor → Warehouse → Shop
- Each node shows:
  * Location
  * Date received
  * Date shipped
  * Quantity
  * Status

Features:
- Add new node to chain
- Update shipment status
- Upload shipping documents
- Track in-transit products
- View distribution map

Elements:
- Interactive map view
- Timeline view
- Search by product/SKU
- Filter by status
- Export distribution report

## Screen 23: Transfer Management
Create a Transfer Management screen

User Type: Distributor
Color Theme: Purple (#8B5CF6)

Purpose: Manage product transfers between locations

Features:
- Create new transfer order
- Select products (from inventory)
- Select destination (warehouse/shop)
- Set quantity
- Schedule pickup/delivery
- Upload shipping documents
- Track transfer status
- Confirm receipt

UI:
- Transfer list (pending, in-transit, completed)
- Transfer detail view
- QR code for transfer verification
- Signature capture on delivery

## Screen 24: Affiliate Dashboard
Create an Affiliate Dashboard screen

User Type: Affiliate/CTV
Color Theme: Orange (#F97316)

Key Metrics:
- Total Referrals: "234"
- Total Scans: "1,567"
- Total Purchases: "89"
- Commission Earned: "12.5M₫"
- Pending Withdrawal: "3.2M₫"

Quick Actions:
- Generate Referral Link
- View Products
- Withdraw Commission
- Download Marketing Materials

Recent Activity:
- User scanned via your link
- User made purchase
- Commission earned

Top Performing Products:
- Product name
- Scans
- Conversions
- Commission

Colors:
- Primary: Orange #F97316

## Screen 25: Referral Tracking
Create a Referral Tracking screen

User Type: Affiliate/CTV
Color Theme: Orange (#F97316)

Features:
- Referral code display (large, copyable)
- Referral link (QR code + URL)
- Share buttons (Social media, messaging)
- Performance by channel
- Conversion funnel visualization
- Downloadable marketing assets

Stats:
- Clicks by source
- Scans by product
- Conversion rate
- Earnings by product

## Screen 26: Commission Withdrawal
Create a Commission Withdraw screen

User Type: Affiliate/CTV
Color Theme: Orange (#F97316)

Features:
- Available balance display
- Withdrawal history
- Add bank account
- Withdrawal form (amount, bank)
- Minimum withdrawal amount
- Processing time info
- Tax information

Withdrawal Methods:
- Bank transfer
- E-wallet (Momo, ZaloPay)
- Cash pickup

## Screen 27: Purchase History & Protection
Create a Purchase History & Protection screen

User Type: Consumer
Color Theme: Green (#10B981)

Purpose: Show verified purchases for consumer protection

Layout:
- Screen size: 393 x 852px
- Background: Gray 50
- Vertical scroll

Elements:

1. Header (White bg, sticky top)
   - Back Button
   - Title: "Lịch sử mua hàng" (xl, Bold, center)

2. Protection Status Card (padding 20px, margin 20px)
   - Background: Green 50
   - Border: Green 200
   - Icon: 🛡️ (Green 600, 48x48px)
   - Title: "Bạn được bảo vệ" (base, Bold, Green 800)
   - Text: "Tất cả mua hàng đã xác minh được lưu làm bằng chứng" (sm, Green 700)
   - Stats: "28 đơn đã xác minh" (sm, Green 600)

3. Purchase List (padding horizontal 20px, gap 16px)
   
   Purchase Card 1 (Verified):
   - White bg, radius 12px, padding 16px, shadow sm
   - Border-left: 4px Green 500 (verified indicator)
   
   - Header (flex row):
     * Shop Name: "EcoWear Store HCM" (sm, Semibold, Gray 900)
     * Verification Badge: "✅ Đã xác minh" (Green badge, xs)
     * Date: "20/03/2024" (xs, Gray 500)
   
   - Product Info (flex row, margin-top 12px):
     * Thumbnail: 60x60px
     * Product Name: "Áo Thun Organic Cotton" (sm, Medium, Gray 800)
     * Quantity: "x1" (xs, Gray 500)
     * Price: "299.000₫" (sm, Bold, Green 600)
   
   - Scan Info (margin-top 12px, Gray 50 bg, radius 8px, padding 12px):
     * First Scan: "20/03/2024 10:30" (xs, Gray 600)
     * Location: "Quận 1, TP.HCM" (xs, Gray 600)
     * Verified By: "Shop đã xác nhận" (xs, Green 600)
   
   - Actions (margin-top 12px, flex row, gap 8px):
     * Button: "Xem chi tiết" (Gray outline, flex 1)
     * Button: "Đánh giá" (Green, flex 1)
     * Button: "Bằng chứng" (Blue outline, flex 1)

   Purchase Card 2 (Not Verified):
   - Same structure
   - Border-left: 4px Orange 500
   - Badge: "⏳ Chưa xác minh" (Orange)
   - Warning: "Shop chưa xác nhận mua hàng" (xs, Orange 700)
   - Action: "Yêu cầu xác nhận" (Orange button)

4. Protection Features Section (padding horizontal 20px, margin-top 24px)
   - Title: "Quyền lợi bảo vệ" (base, Semibold)
   
   - Feature Cards (White bg, radius 12px, padding 16px, gap 12px):
     * Feature 1: "📋 Bằng chứng mua hàng" - Lưu lịch sử scan
     * Feature 2: "🛡️ Bảo vệ tráo đổi" - Timestamp + location
     * Feature 3: "⚖️ Hỗ trợ tranh chấp" - Report & dispute
     * Feature 4: "💰 Hoàn tiền đảm bảo" - Nếu sản phẩm giả

5. Report Issue Button (sticky bottom, padding 20px)
   - Full width, height 56px
   - Background: Error Red
   - Text: "🚩 Báo cáo vấn đề" (base, Bold, White)
   - Icon: Flag (left)

6. Empty State (if no purchases)
   - Icon: 🛍️ (Gray 300, 80x80px)
   - Title: "Chưa có mua hàng nào" (base, Semibold)
   - Text: "Quét QR và yêu cầu shop xác nhận để được bảo vệ" (sm, Gray 600)
   - Button: "Quét QR ngay" (Green)

Evidence Export:
- Generate PDF with all scan history
- Include timestamps, locations, shop info
- QR code for verification
- Shareable with authorities if needed

## Screen 28: Dispute Report Screen
Create a Dispute Report screen

User Type: Consumer
Color Theme: Green (#10B981) with Red for urgent

Purpose: Report product issues or shop fraud

Layout:
- Screen size: 393 x 852px
- Background: White
- Vertical scroll

Elements:

1. Header (White bg, sticky top)
   - Back Button
   - Title: "Báo cáo vấn đề" (xl, Bold, center)

2. Warning Banner (top, Red 50 bg, border Red 200)
   - Icon: ⚠️ (Red 600)
   - Title: "Báo cáo nghiêm trọng" (sm, Semibold, Red 800)
   - Text: "Thông tin sẽ được xem xét bởi admin và có thể dẫn đến khóa shop" (xs, Red 700)

3. Select Purchase (padding 20px)
   - Label: "Chọn đơn hàng" (sm, Semibold, Gray 800)
   - Dropdown/Search: List of verified purchases
   - Show: Product, Shop, Date, Verification status

4. Issue Type (padding 20px)
   - Label: "Loại vấn đề" (sm, Semibold, Gray 800)
   
   - Options (radio buttons, vertical list):
     * "Sản phẩm bị tráo đổi" (icon: 🔄)
     * "Sản phẩm giả/nhái" (icon: ❌)
     * "Shop từ chối bảo hành" (icon: 🛡️)
     * "Thông tin không chính xác" (icon: 📋)
     * "Scan QR không hoạt động" (icon: 📱)
     * "Khác" (icon: ❓)

5. Description (padding 20px)
   - Label: "Mô tả chi tiết" (sm, Semibold, Gray 800)
   - Textarea: height 150px
   - Placeholder: "Mô tả vấn đề bạn gặp phải..."
   - Character counter: "0/1000"

6. Evidence Upload (padding 20px)
   - Label: "Bằng chứng" (sm, Semibold, Gray 800)
   
   - Upload Options (grid, 2 columns):
     * Photo 1: "Ảnh sản phẩm" (dashed border, camera icon)
     * Photo 2: "Ảnh QR code" (dashed border)
     * Photo 3: "Ảnh hóa đơn" (dashed border)
     * Photo 4: "Ảnh khác" (dashed border)
   
   - Scan History (auto-included):
     * "Lịch sử scan sẽ được đính kèm tự động" (xs, Gray 600)
     * Show: First scan timestamp, location

7. Contact Info (padding 20px)
   - Phone (pre-filled from profile)
   - Email (pre-filled)
   - Preferred contact method (radio: Phone/Email)

8. Anonymous Option (padding horizontal 20px)
   - Checkbox: "Báo cáo ẩn danh" (sm, Gray 700)
   - Note: "Shop sẽ không biết ai báo cáo" (xs, Gray 500)

9. Submit Section (padding 20px, sticky bottom)
   - Terms Checkbox: "Tôi xác nhận thông tin là chính xác" (required)
   
   - Buttons:
     * Cancel: "Hủy" (Gray, flex 1)
     * Submit: "Gửi báo cáo" (Red, flex 2)

10. Success State (after submission)
    - Icon: ✅ (Green, 64x64px)
    - Title: "Đã gửi báo cáo" (xl, Bold)
    - Text: "Admin sẽ xem xét trong vòng 3-5 ngày làm việc" (sm, Gray 600)
    - Case Number: "Mã: DSP-2024-001" (sm, Bold, Blue)
    - Button: "Theo dõi trạng thái" (Blue)
    - Button: "Quay lại" (Gray)

Process:
1. User submits report
2. Admin reviews (3-5 days)
3. Shop notified (if not anonymous)
4. Investigation
5. Resolution (warning, suspension, or close case)
6. User notified of outcome


# COMPLETE CHECKLIST
## Design System
Colors defined (Primary, Secondary, Neutral, Semantic)
Typography scale (sizes, weights, line heights)
Spacing system (8pt grid)
Border radius values
Shadow definitions
Icon library selected
## Screens to Design
Splash Screen
Onboarding (3 slides)
Login Screen
Register Screen
Home Dashboard
Search Screen
QR Scanner Screen
Product Passport (Main)
Rating Modal (Bottom Sheet)
Review List Screen
Profile Screen
Impact Points Screen
Badges Collection Screen
Settings Screen
## Components to Create
Buttons (Primary, Secondary, Text, Icon, FAB)
Inputs (Text, Password, Search, TextArea, Slider)
Cards (Product, Brand, Review, Stat, Badge, Timeline)
Navigation (Bottom Tab, Top Bar, Back Button)
Feedback (Loading, Empty State, Error, Success)
Display (Avatar, Badge, Rating Stars, Progress Bar)
Media (Image Carousel, Photo Gallery)
## Prototyping
Create navigation links between screens
Add interactions (tap, hover, scroll)
Define transitions (slide, fade, modal)
Test flow on mobile preview
Create clickable prototype
## Export & Handoff
Export assets (@1x, @2x, @3x)
Generate design specs
Create style guide documentation
Organize Figma layers and frames
Add developer notes

# ✅ COMPLETE SCREEN CHECKLIST
## Authentication (4 screens)
Screen 1: Splash Screen
Screen 2: Onboarding (3 slides)
Screen 3: Login Screen
Screen 4: Register Screen

## Main Navigation (5 screens)
Screen 5: Home Dashboard
Screen 6: Search Screen (✓ BỔ SUNG)
Screen 7: QR Scanner Screen
Screen 8: Product Passport (MAIN)
Screen 9: Profile Screen

## Rating & Review (2 screens)
Screen 10: Rating Modal (Bottom Sheet)
Screen 11: Review List Screen (✓ BỔ SUNG)

## Gamification (2 screens)
Screen 12: Impact Points History (✓ BỔ SUNG)
Screen 13: Badges Collection (✓ BỔ SUNG)

## Settings (1 screen)
Screen 14: Settings Screen (✓ BỔ SUNG)

## 🏪 SHOP MANAGEMENT SCREENS (6 Screens)
Screen 15: Shop Dashboard
Screen 16: Product Management
Screen 17: Order Management
Screen 18: Shop Analytics
Screen 19: Shop Settings
Screen 20: Shop Profile

## 📦 DISTRIBUTOR MANAGEMENT (3 Screens)
Screen 21: Distributor Dashboard
Screen 22: Distributor Analytics
Screen 23: Distributor Settings

## 🤝 AFFILIATE MANAGEMENT (3 Screens)
Screen 24: Affiliate Dashboard
Screen 25: Referral Tracking
Screen 26: Commission Withdrawal

## 🛡️ CONSUMER PROTECTION (2 Screens)
Screen 27: Purchase History & Protection
Screen 28: Dispute Report Screen

## COMPLETE TASK CHECKLIST FOR FIGMA
### Phase 1: Design System (Days 1-2)
Create Color Styles (Primary, Secondary, Neutral, Semantic)
Create Text Styles (Headings, Body, Captions)
Create Effect Styles (Shadows, Blurs)
Create Grid & Layout settings (8pt grid)
Create Icon library (or select icon set)
### Phase 2: Core Components (Days 3-4)
Button Components (Primary, Secondary, Text, Icon, FAB)
Input Components (Text, Password, Search, TextArea)
Card Components (Product, Brand, Review, Stat, Badge)
Navigation Components (Bottom Tab, Top Bar, Back Button)
Feedback Components (Loading, Empty State, Error, Success)
Display Components (Avatar, Badge, Rating Stars, Progress Bar, Timeline)
### Phase 3: Screen Design (Days 5-10)
Week 1:
Screen 1: Splash Screen
Screen 2: Onboarding (3 slides)
Screen 3: Login Screen
Screen 4: Register Screen
Screen 5: Home Dashboard
Screen 6: Search Screen
Screen 7: QR Scanner Screen
Week 2:
Screen 8: Product Passport (Spend extra time here!)
Screen 9: Profile Screen
Screen 10: Rating Modal
Screen 11: Review List Screen
Screen 12: Impact Points History
Screen 13: Badges Collection
Screen 14: Settings Screen
### Phase 4: Prototyping (Days 11-12)
Create navigation links between all screens
Add interactions (tap, hover, scroll)
Define transitions (slide, fade, modal, push)
Create component states (active, disabled, loading)
Test prototype on mobile preview
Fix any broken links or flows
### Phase 5: Polish & Handoff (Days 13-14)
Review all screens for consistency
Check accessibility (contrast, touch targets)
Export all assets (@1x, @2x, @3x)
Create design documentation
Organize Figma pages and layers
Add developer notes and annotations
Generate shareable prototype link

# 🎯 QUICK START PROMPT
Design a mobile app called "Product Flows" - a sustainability tracking platform

Style:
- Modern, clean, eco-friendly
- Primary color: Emerald Green (#10B981)
- Font: Inter
- Mobile-first design (393x852px iPhone 15 Pro)
- 8pt grid system

Key Screens (in order):
1. Splash Screen with logo and gradient background
2. Onboarding (3 slides explaining Scan, Verify, Impact)
3. Login/Register screens
4. Home Dashboard with stats, brands, products
5. Product Passport (detailed product info with timeline, certificates, impact metrics)
6. QR Scanner with camera overlay
7. Rating Modal (bottom sheet with 5 criteria sliders)
8. Profile with gamification (points, badges, stats)

Features to highlight:
- QR scanning for product verification
- Supply chain transparency timeline
- Environmental impact metrics
- Community ratings and reviews
- Gamification with points and badges

Make it visually stunning, user-friendly, and professional. Focus on the Product Passport screen as the main feature.