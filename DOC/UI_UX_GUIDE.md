# Hướng dẫn Chỉnh sửa UI/UX trong React Native (SCA Project)

Dự án này sử dụng React Native với giao diện được tùy chỉnh qua `StyleSheet`. Dưới đây là các kiến thức cơ bản để bạn có thể tự mình điều chỉnh giao diện.

## 1. Hệ thống Styles (`StyleSheet`)
Tất cả các thành phần (View, Text, Image) đều được điều khiển qua biến `styles` ở cuối file. 
- **Cách dùng**: `<View style={styles.container}>`
- **Chỉnh sửa**: Tìm đến phần `const styles = StyleSheet.create({ ... })` để thay đổi thuộc tính.

## 2. Flexbox - Nguyên tắc dàn trang
React Native sử dụng Flexbox để sắp xếp vị trí:
- `flex: 1`: Chiếm toàn bộ không gian còn trống.
- `flexDirection`: `'column'` (mặc định - xếp dọc), `'row'` (xếp ngang).
- `justifyContent`: Căn lề theo trục chính (ví dụ: `'center'`, `'flex-start'`, `'space-between'`).
- `alignItems`: Căn lề theo trục phụ (ví dụ: `'center'` để căn giữa theo chiều ngang khi đang xếp dọc).

## 3. Khoảng cách (Spacing)
- `padding`: Khoảng cách **bên trong** component.
- `margin`: Khoảng cách **bên ngoài** component.
- `gap`: Khoảng cách giữa các phần tử con (chỉ hoạt động trong View có `gap`).
- **Mẹo**: Nếu bạn muốn thu hẹp khoảng cách giữa các phần, hãy giảm các giá trị `marginBottom` hoặc `paddingTop`.

## 4. Kích thước tương thích (Dimensions)
Chúng ta lấy kích thước màn hình bằng:
```javascript
const { width, height } = Dimensions.get('window');
```
Bạn có thể dùng tỉ lệ phần trăm dựa trên `height` (ví dụ: `height * 0.5`) để UI tự động thay đổi theo các dòng điện thoại khác nhau.

## 5. Làm thế nào để tạo Hình Tròn?
Trong React Native, để biến một khối `View` hoặc `Image` thành hình tròn hoàn hảo, bạn cần tuân theo công thức:
1. **Dài = Rộng** (Tạo thành hình vuông). Ví dụ: `width: 300, height: 300`.
2. **borderRadius = Một nửa chiều rộng**. Ví dụ: `borderRadius: 150`.

```javascript
circleContainer: {
    width: 200,
    height: 200,
    borderRadius: 100, // 200 chia 2
}
```

## 6. Xử lý Tai thỏ / Thanh trạng thái (Header)
Với các dòng điện thoại có "tai thỏ", chúng ta sử dụng `Platform.OS` để bù thêm khoảng trống:
```javascript
paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
```

---
> [!TIP]
> **Cách thử nghiệm nhanh**: 
> Thay đổi giá trị của một thuộc tính (ví dụ: `backgroundColor: 'red'`) để biết chính xác component đó là phần nào trên màn hình trước khi chỉnh sửa chi tiết.
