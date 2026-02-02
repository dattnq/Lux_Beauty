import Image from "next/image";

export default function Brands() {
  const brands = [
    "L'Oreal",
    "Maybelline",
    "MAC",
    "Estee Lauder",
    "Innisfree",
    "Laneige",
  ];

  return (
    <section className="container py-5">
      <h4 className="text-center fw-bold mb-4 text-secondary text-uppercase spacing-2">
        Thương hiệu đồng hành
      </h4>
      <div className="d-flex flex-wrap justify-content-center align-items-center gap-5 opacity-75">
        {brands.map((brand, index) => (
          <div key={index} className="grayscale-hover">
            {/* Dùng ảnh giả lập logo */}
            <Image
              src={`https://placehold.co/120x60?text=${brand}`}
              alt={brand}
              width={120}
              height={60}
              className="object-fit-contain"
              style={{ filter: "grayscale(100%)", transition: "all 0.3s" }}
              // Mẹo nhỏ: Thêm style để khi hover thì mất grayscale (cần CSS tùy chỉnh hoặc viết inline style vào thẻ cha)
            />
          </div>
        ))}
      </div>
    </section>
  );
}
