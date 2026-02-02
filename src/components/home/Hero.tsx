import Link from "next/link";

export default function Hero() {
  return (
    <section className="container py-5">
      <div
        className="p-5 text-center rounded-3"
        style={{ backgroundColor: "#fdf2f8" }}
      >
        <h1 className="display-4 fw-bold text-dark mb-3">
          Đánh thức vẻ đẹp tiềm ẩn
        </h1>
        <p className="lead text-secondary mb-4">
          Bộ sưu tập son môi và dưỡng da cao cấp độc quyền từ Lux Beauty.
        </p>
        <Link
          href="/products"
          className="btn btn-dark rounded-pill px-4 py-2 fw-bold"
        >
          Mua Ngay
        </Link>
      </div>
    </section>
  );
}
