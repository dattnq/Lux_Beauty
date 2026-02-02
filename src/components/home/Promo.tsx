import Link from "next/link";
import Image from "next/image";

export default function Promo() {
  return (
    <section className="container py-5">
      <div className="row align-items-center bg-light rounded-4 overflow-hidden shadow-sm">
        {/* Cột hình ảnh */}
        <div
          className="col-md-6 p-0 position-relative"
          style={{ minHeight: "350px" }}
        >
          <Image
            src="https://placehold.co/800x600/db2777/white?text=Summer+Sale"
            alt="Promo"
            fill
            className="object-fit-cover"
          />
        </div>

        {/* Cột nội dung */}
        <div className="col-md-6 p-5 text-center text-md-start">
          <span className="badge bg-danger mb-2 px-3 py-2">
            Khuyến mãi có hạn
          </span>
          <h2 className="display-5 fw-bold mb-3">
            Giảm tới 50% Bộ Sưu Tập Mùa Hè
          </h2>
          <p className="lead text-secondary mb-4">
            Săn ngay các deal hời nhất cho kem chống nắng và son dưỡng. Chương
            trình chỉ áp dụng đến hết tháng này.
          </p>
          <div className="d-flex gap-3 justify-content-center justify-content-md-start">
            <Link
              href="/products"
              className="btn btn-dark rounded-pill px-4 py-2"
            >
              Mua Ngay
            </Link>
            <Link
              href="/blog"
              className="btn btn-outline-dark rounded-pill px-4 py-2"
            >
              Xem chi tiết
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
