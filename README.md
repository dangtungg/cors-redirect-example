# Ví dụ với frontend sử dụng JavaScript và backend sử dụng Spring Boot để minh họa vấn đề CORS 

## Để chạy và kiểm tra ví dụ này

1. Chạy ứng dụng Spring Boot (mặc định sẽ chạy trên [http://localhost:8088](http://localhost:8088)).
2. Chạy frontend HTML trên một web server khác (ví dụ: sử dụng **Live Server** extension trong VS Code, thường chạy trên [http://localhost:5500](http://localhost:5500)).
3. Mở trình duyệt và truy cập trang HTML.
4. Nhấn nút "Fetch Data" và quan sát kết quả.

Khi bạn nhấn nút, frontend sẽ gửi request đến `/api/redirect`. Spring Boot sẽ trả về một `302` redirect đến `/api/data`. Trình duyệt sẽ tự động theo dõi redirect này và nhận được dữ liệu từ `/api/data`.

## Một số điểm cần lưu ý

1. CORS đã được cấu hình đúng cách trên backend để cho phép request từ frontend domain.
2. Trình duyệt tự động xử lý redirect, vì vậy bạn sẽ nhận được dữ liệu cuối cùng mà không cần xử lý redirect một cách rõ ràng trong code frontend.
3. Nếu bạn muốn kiểm soát quá trình redirect, bạn có thể sử dụng redirect: `manual` trong options của `fetch()`.
4. Nếu muốn kiểm tra lỗi CORS khi không được cấu hình đúng cách, thì có thể comment các annatation `@CrossOrigin` trong code backend của từng method `redirect()` và `getData()`, hoặc comment cả hai methods. Sau đó trên trình duyệt bật Console và Network để quan sát lỗi.
