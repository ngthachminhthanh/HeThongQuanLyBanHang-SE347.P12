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

---

## 1. Clone Repository

1. Mở terminal và chạy lệnh sau để clone repository về máy:
   ```bash
   git clone <URL của repository>
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

1. Tải và cài đặt **Ngrok** từ trang chủ: [Ngrok](https://ngrok.com).
2. Đăng ký tài khoản và thực hiện xác thực theo hướng dẫn trên trang chủ của Ngrok.
3. Sau khi xác thực thành công, chạy lệnh sau trong terminal:
   ```bash
   ngrok http http://localhost:5000
   ```
4. Lấy đường link trong phần có tiêu đề `Forwarding`. Ví dụ: `https://<ngrok-link>.ngrok.io`.

---

## 6. Thay Thế URL Trong Project

### Thay đường link Ngrok ở các file sau:

1. **File `client/src/components/pages/MyOrders/MyOrders.jsx`**:
   - Tìm dòng 116 và thay đường link hiện có bằng link Ngrok.

2. **File `client/src/components/pages/Order/Order.jsx`**:
   - Tìm dòng 212 và thay đường link hiện có bằng link Ngrok.

3. **File `server/modules/payment/viaZalopay.js`**:
   - Tìm dòng 47 và thay đường link hiện có bằng link Ngrok.

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
