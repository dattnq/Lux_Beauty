import { prisma } from "@/lib/prisma";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Promo from "@/components/home/Promo";
import BlogPreview from "@/components/home/BlogPreview";
import Brands from "@/components/home/Brands";

async function getProducts() {
  try {
    const products = await prisma.product.findMany({
      take: 8,
      orderBy: { createdAt: "desc" },
      include: {
        brand: true,
        variants: {
          take: 1,
          include: {
            prices: { take: 1, orderBy: { startDate: "desc" } },
            images: { take: 1, where: { isPrimary: true } },
          },
        },
      },
    });
    return products;
  } catch (error) {
    console.error("Lỗi kết nối DB:", error);
    return [];
  }
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main
      className="pb-5"
      style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}
    >
      {/* 2. Banner quảng cáo */}
      <Hero />

      {/* 3. Danh sách sản phẩm */}
      <FeaturedProducts products={products} />

      <Promo />

      {/* 4.  Blog (Góc làm đẹp) */}
      <BlogPreview />

      {/* 5.  Thương hiệu (Cuối trang tạo uy tín) */}
      <Brands />
    </main>
  );
}
