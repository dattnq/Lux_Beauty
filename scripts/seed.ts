// scripts/seed.ts
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Đang khởi tạo dữ liệu mẫu...");

  // 1. Tạo Danh mục (Categories)
  const skincare = await prisma.category.create({
    data: { name: "Chăm sóc da" },
  });

  const makeup = await prisma.category.create({
    data: { name: "Trang điểm" },
  });

  // 2. Tạo Thương hiệu (Brands)
  const brandLux = await prisma.brand.create({
    data: {
      name: "Lux Beauty Premium",
      description: "Thương hiệu mỹ phẩm cao cấp độc quyền.",
      logoUrl: "/images/brands/lux-logo.png",
    },
  });

  // 3. Tạo Màu & Size
  const colorRed = await prisma.productColor.create({
    data: { name: "Đỏ Ruby", code: "#E0115F" },
  });
  const colorPink = await prisma.productColor.create({
    data: { name: "Hồng Đất", code: "#CC8899" },
  });

  const size50ml = await prisma.productSize.create({
    data: { name: "50ml", unit: "ml" },
  });
  const sizeFull = await prisma.productSize.create({
    data: { name: "Full Size", unit: "cây" },
  });

  // 4. Tạo Sản phẩm 1: Son môi (Có màu, không size)
  const lipstick = await prisma.product.create({
    data: {
      name: "Son Lì Lux Velvet",
      description: "Son kem lì mịn mượt, không gây khô môi.",
      categoryId: makeup.id,
      brandId: brandLux.id,
      variants: {
        create: [
          {
            sku: "SON-LUX-RED",
            colorId: colorRed.id,
            sizeId: sizeFull.id,
            prices: {
              create: { price: 350000 }, // Giá 350k
            },
            inventory: {
              create: { stockQuantity: 100 },
            },
            images: {
              create: {
                imageUrl:
                  "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=2000&auto=format&fit=crop",
                isPrimary: true,
              },
            },
          },
          {
            sku: "SON-LUX-PINK",
            colorId: colorPink.id,
            sizeId: sizeFull.id,
            prices: {
              create: { price: 350000 },
            },
            inventory: {
              create: { stockQuantity: 50 },
            },
            images: {
              create: {
                imageUrl:
                  "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=2000&auto=format&fit=crop",
                isPrimary: true,
              },
            },
          },
        ],
      },
    },
  });

  // 5. Tạo Sản phẩm 2: Kem dưỡng (Không màu, có size)
  const cream = await prisma.product.create({
    data: {
      name: "Kem Dưỡng Ẩm Lux Glow",
      description: "Cấp ẩm sâu, giúp da căng bóng.",
      categoryId: skincare.id,
      brandId: brandLux.id,
      variants: {
        create: {
          sku: "KEM-LUX-50",
          sizeId: size50ml.id,
          prices: {
            create: { price: 890000 },
          },
          inventory: {
            create: { stockQuantity: 200 },
          },
          images: {
            create: {
              imageUrl:
                "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1887&auto=format&fit=crop",
              isPrimary: true,
            },
          },
        },
      },
    },
  });

  console.log("✅ Đã tạo xong dữ liệu mẫu!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
