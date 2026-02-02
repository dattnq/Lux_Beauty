import Link from "next/link";
import Image from "next/image";

interface FeaturedProductsProps {
  products: any[]; // Bạn có thể thay any bằng kiểu Product chuẩn từ Prisma
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  const formatPrice = (price: any) => {
    return price ? Number(price).toLocaleString("vi-VN") : "Liên hệ";
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold m-0 text-dark">Sản phẩm mới</h3>
        <Link
          href="/products"
          className="text-decoration-none fw-bold"
          style={{ color: "var(--primary-color, #db2777)" }}
        >
          Xem tất cả →
        </Link>
      </div>

      <div className="row g-4">
        {products.map((product) => {
          const variant = product.variants[0];
          const price = variant?.prices[0]?.price;
          const image =
            variant?.images[0]?.imageUrl ||
            "https://placehold.co/300x300?text=No+Image";

          return (
            <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div
                className="card h-100 border-0 shadow-sm product-card"
                style={{ borderRadius: "12px", overflow: "hidden" }}
              >
                <div
                  className="position-relative overflow-hidden"
                  style={{ height: "260px" }}
                >
                  <Image
                    src={image}
                    alt={product.name}
                    fill
                    className="object-fit-cover"
                  />
                  <span className="position-absolute top-0 start-0 m-2 badge bg-light text-dark shadow-sm">
                    {product.brand?.name}
                  </span>
                </div>

                <div className="card-body">
                  <h5
                    className="card-title text-truncate fw-bold fs-6 mb-1"
                    title={product.name}
                  >
                    {product.name}
                  </h5>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span
                      className="fw-bold fs-5"
                      style={{ color: "var(--primary-color, #db2777)" }}
                    >
                      {formatPrice(price)} đ
                    </span>
                    <button
                      className="btn btn-dark rounded-circle btn-sm d-flex justify-content-center align-items-center"
                      style={{ width: 32, height: 32 }}
                    >
                      <i className="bi bi-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {products.length === 0 && (
        <div className="text-center py-5">
          <p className="text-muted">Chưa có sản phẩm nào...</p>
        </div>
      )}
    </div>
  );
}
