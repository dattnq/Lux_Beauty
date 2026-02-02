import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-auto w-100">
      <div className="container-fluid px-5">
        <div className="row g-4">
          {/* Cột 1: Thông tin thương hiệu */}
          <div className="col-lg-4 col-md-6">
            <h5
              className="fw-bold text-uppercase mb-3"
              style={{ color: "var(--primary-color, #db2777)" }}
            >
              Lux Beauty
            </h5>
            <p className="text-secondary small">
              Đánh thức vẻ đẹp tiềm ẩn của bạn với bộ sưu tập mỹ phẩm cao cấp
              được tuyển chọn kỹ lưỡng.
            </p>
            <div className="d-flex gap-3 mt-3">
              <i className="bi bi-facebook fs-5 cursor-pointer"></i>
              <i className="bi bi-instagram fs-5 cursor-pointer"></i>
              <i className="bi bi-tiktok fs-5 cursor-pointer"></i>
            </div>
          </div>

          {/* Cột 2: Liên kết nhanh */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-3">Mua sắm</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small text-secondary">
              <li>
                <Link
                  href="/products"
                  className="text-decoration-none text-secondary hover-white"
                >
                  Sản phẩm mới
                </Link>
              </li>
              <li>
                <Link
                  href="/best-seller"
                  className="text-decoration-none text-secondary hover-white"
                >
                  Bán chạy
                </Link>
              </li>
              <li>
                <Link
                  href="/skincare"
                  className="text-decoration-none text-secondary hover-white"
                >
                  Chăm sóc da
                </Link>
              </li>
              <li>
                <Link
                  href="/makeup"
                  className="text-decoration-none text-secondary hover-white"
                >
                  Trang điểm
                </Link>
              </li>
            </ul>
          </div>

          {/* Cột 3: Hỗ trợ */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-3">Hỗ trợ</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small text-secondary">
              <li>
                <Link
                  href="/about"
                  className="text-decoration-none text-secondary hover-white"
                >
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-decoration-none text-secondary hover-white"
                >
                  Liên hệ
                </Link>
              </li>
              <li>
                <Link
                  href="/policy"
                  className="text-decoration-none text-secondary hover-white"
                >
                  Chính sách đổi trả
                </Link>
              </li>
            </ul>
          </div>

          {/* Cột 4: Đăng ký nhận tin */}
          <div className="col-lg-4 col-md-6">
            <h6 className="fw-bold mb-3">Nhận tin khuyến mãi</h6>
            <p className="small text-secondary">
              Đăng ký để nhận voucher giảm giá 20% cho đơn hàng đầu tiên.
            </p>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Email của bạn..."
                aria-label="Email"
              />
              <button
                className="btn btn-primary"
                type="button"
                style={{
                  backgroundColor: "var(--primary-color, #db2777)",
                  border: "none",
                }}
              >
                Gửi
              </button>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4 opacity-25" />

        <div className="text-center text-secondary small">
          © 2026 Lux Beauty. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
