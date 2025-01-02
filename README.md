<p align="center">
  <img src="https://camo.githubusercontent.com/ba961592d9ec200f6bd6385ec152ca58bf6bbb978b118e965482429a1575b19d/68747470733a2f2f692e696d6775722e636f6d2f576d4d6e5352742e706e67" alt="SE347.P12" width="400">
</p>
<h1 align="center">SE347.P12 - Công nghệ Web và ứng dụng</h1>

### Giới thiệu môn học
- **Tên môn học**: Công nghệ Web và ứng dụng
- **Mã môn học**: SE347
- **Mã lớp**: SE347.P12
- **Năm học**: HK1 (2024-2025)
- **Giảng viên**: Nguyễn Tấn Toàn

### Giới thiệu nhóm
- **Thông tin thành viên**:
  | Họ và Tên                  | MSSV      | Email                       |
  |----------------------------|-----------|-----------------------------|
  | Nguyễn Thạch Minh Thanh   | 21522601  | 21522601@gm.uit.edu.vn      |
  | Nguyễn Trần Quang Sang    | 21522545  | 21522545@gm.uit.edu.vn      |
  | Nguyễn Khắc Thắng         | 21521431  | 21521431@gm.uit.edu.vn      |
  | Nguyễn Đặng Thanh Huy     | 21522149  | 21522149@gm.uit.edu.vn      |
  | Lê Trung Kiên             | 21520308  | 21520308@gm.uit.edu.vn      |

### Giới thiệu dự án

- **Tên dự án**: Website quản lý bán hàng trực tuyến - MERN Shop
- **Mục tiêu**:  
  Website MERN Shop cung cấp tới người dùng nơi để mua sắm trang phục và những phụ kiện trực tuyến, an toàn với giao diện thân thiện và dễ sử dụng.  
  Hệ thống được thiết kế dành cho người quản lý và khách hàng. Với khách hàng thì cung cấp đầy đủ các chức năng tìm kiếm, quản lý giỏ hàng, đặt hàng với các phương thức thanh toán khác nhau. Với người quản lý thì có các chức năng quản lý toàn bộ hoạt động trong website, bao gồm quản lý đơn hàng, sản phẩm và báo cáo thống kê.

---

# Mô tả chức năng chính
## Đối với khách hàng
### 1. Xác thực (Authentication)
- Đăng ký tài khoản, đăng nhập cho người dùng.

### 2. Tìm kiếm, phân loại sản phẩm
- Tìm kiếm các sản phẩm có trong website bằng thanh nhập liệu tìm kiếm hoặc thông qua danh mục sản phẩm.
  
### 3. Quản lý giỏ hàng
- Thêm mới, cập nhật và xóa sản phẩm có trong giỏ hàng.

### 3. Đặt hàng
- Điền các thông tin cá nhân để đặt hàng với địa chỉ được lựa chọn linh hoạt.
- Thanh toán đơn hàng với các phương thức thanh toán khác nhau.

### 4. Theo dõi đơn hàng
- Theo dõi trạng thái của các đơn hàng đã đặt.
- Có thể hủy đơn nếu có nhu cầu (đối với đơn hàng chưa thanh toán).

## Đối với người quản lý
### 1. Xác thực (Authentication)
- Đăng nhập cho quản lý.

### 2. Xuất báo cáo thống kê
- Quản lý có thể kết xuất file theo định dạng tùy nhu cầu (hệ thống hiện hỗ trợ định dạng file .csv và .json).
  
### 3. Quản lý đơn hàng
- Theo dõi tất cả đơn hàng mà khách hàng đã đặt.
- Xác nhận và thay đổi trạng thái đơn hàng.

### 4. Quản lý sản phẩm
- Thêm sản phẩm mới/Cập nhật/Xóa thông tin của các sản phẩm trong website.
- Tìm kiếm sản phẩm.

### 4. Truy vấn thông tin khách hàng
- Xem hoạt động và các thông tin về khách hàng đã có tài khoản tại website.

## Công nghệ sử dụng
<div align="center">
  <img src="https://pbs.twimg.com/profile_images/1785867863191932928/EpOqfO6d_400x400.png" alt="SE347.P12" width="100">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s" alt="SE347.P12" width="100">
  <img src="https://i0.wp.com/phocode.com/wp-content/uploads/2016/09/nodejsLogo.png?fit=300%2C300&ssl=1" alt="SE347.P12" width="100">
  <img src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png" alt="SE347.P12" width="100">
  <img src="https://149860134.v2.pressablecdn.com/wp-content/uploads/mongo.png" alt="SE347.P12" width="100">
</div>

---

# Hướng dẫn cài đặt và chạy dự án local
## 1. Clone Repository

1. Mở terminal và chạy lệnh sau để clone repository về máy:
   ```bash
   git clone https://github.com/ngthachminhthanh/HeThongQuanLyBanHang-SE347.P12.git
   ```
2. Sau khi clone thành công, truy cập vào thư mục vừa được tải về.

---

## 2. Cài Đặt Dependencies

### Truy cập từng thư mục và cài đặt thư viện

- Di chuyển vào thư mục `client` và chạy lệnh:
  ```bash
  cd client
  npm install
  ```
- Di chuyển vào thư mục `server` và chạy lệnh:
  ```bash
  cd server
  npm install
  ```

---

## 3. Tạo File `.env` ở Backend

1. Trong thư mục `server`, tạo file `.env`.
2. Sao chép và dán nội dung sau vào file `.env`:
   ```env
   JWT_SECRET='2138u8sdf90sdf34h!@!@EASd921'
   PORT=5000
   MONGODB_URI='mongodb+srv://ngthachminhthanh:mPGHS0bIAzX7x4Ag@mernshop.pqlnr.mongodb.net/mydb?retryWrites=true&w=majority&appName=MernShop'
   app_id=2554
   key1='sdngKKJmqEMzvh5QQcdD2A9XBSKUNaYn'
   key2='trMrHtvjo6myautxDUiAcYsVtaeQ8nhf'
   endpoint='https://sb-openapi.zalopay.vn/v2/create'
   ```

---

## 4. Chạy Project

### 4.1 Khởi động Server
Trong thư mục `server`, chạy lệnh:
   ```bash
   npm start
   ```

### 4.2 Khởi động Client
Trong thư mục `client`, chạy lệnh:
   ```bash
   npm run dev
   ```

---

## 5. Cấu Hình Ngrok

1. Đăng ký tài khoản từ trang chủ: [Ngrok](https://ngrok.com).
2. Tải và cài đặt **Ngrok**, thực hiện xác thực theo hướng dẫn tại https://dashboard.ngrok.com/get-started/setup/windows của Ngrok.
3. Sau khi xác thực thành công, chạy lệnh sau trong terminal:
   ```bash
   ngrok http http://localhost:5000
   ```
4. Lấy đường link trong phần có tiêu đề `Forwarding`. Ví dụ: `https://3e5e-2402-800-6f2c-82c3-99e7-8a0a-ec7b-16d4.ngrok-free.app`.

---

## 6. Thay Thế URL Trong Project

### Thay đường link Ngrok ở các file sau:

1. **File `client/src/components/pages/MyOrders/MyOrders.jsx`**:
   - Tìm dòng 116 và thay đường link hiện có bằng link Ngrok.

2. **File `client/src/components/pages/Order/Order.jsx`**:
   - Tìm dòng 212 và thay đường link hiện có bằng link Ngrok.

3. **File `server/modules/payment/viaZalopay.js`**:
   - Tìm dòng 47 và 120 thay đường link hiện có bằng link Ngrok.

---

## 7. Truy Cập Project

1. Mở trình duyệt và truy cập vào địa chỉ:
   ```
   http://localhost:5173
   ```

2. Tài khoản admin mặc định để truy cập trang quản trị:
   - **Email**: `admin@gmail.com`
   - **Mật khẩu**: `admin`

---

## Lưu Ý
- Đảm bảo mọi thư viện đã được cài đặt thành công trước khi chạy project.
- Luôn kiểm tra file `.env` để chắc chắn rằng thông tin được cung cấp chính xác.
- Mỗi khi đường link Ngrok thay đổi, cần cập nhật lại trong các file liên quan.
