This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
project's structure. 

lux-beauty/
│
├── prisma/                         # 🗄️ Database (Prisma)
│   ├── schema.prisma
│   └── migrations/
│
├── scripts/                        # Seed / script phụ
│   └── seed.ts
│
├── src/
│   │
│   ├── app/                        # 🚦 App Router
│   │   │
│   │   ├── (public)/               # 🌍 CUSTOMER (không hiện trên URL)
│   │   │   ├── page.tsx            # /
│   │   │   ├── products/
│   │   │   │   ├── page.tsx        # /products
│   │   │   │   └── [slug]/page.tsx # /products/abc
│   │   │   │
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/page.tsx
│   │   │   │
│   │   │   ├── cart/page.tsx
│   │   │   ├── wishlist/page.tsx
│   │   │   └── profile/page.tsx
│   │   │
│   │   ├── (auth)/                 # 🔐 AUTH
│   │   │   ├── login/page.tsx
│   │   │   └── register/page.tsx
│   │   │
│   │   ├── admin/                  # 🔴 ADMIN (có URL /admin)
│   │   │   ├── layout.tsx          # Layout riêng cho admin
│   │   │   ├── page.tsx            # /admin (Dashboard)
│   │   │   │
│   │   │   ├── products/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── create/page.tsx
│   │   │   │   └── edit/[id]/page.tsx
│   │   │   │
│   │   │   ├── orders/page.tsx
│   │   │   ├── users/page.tsx
│   │   │   ├── categories/page.tsx
│   │   │   └── brands/page.tsx
│   │   │
│   │   ├── api/                    # ⚙️ BACKEND (Route Handlers)
│   │   │   ├── auth/
│   │   │   │   ├── login/route.ts
│   │   │   │   └── register/route.ts
│   │   │   │
│   │   │   ├── public/             # API cho khách
│   │   │   │   ├── products/route.ts
│   │   │   │   └── blog/route.ts
│   │   │   │
│   │   │   ├── admin/              # API cho admin
│   │   │   │   ├── products/route.ts
│   │   │   │   ├── orders/route.ts
│   │   │   │   └── users/route.ts
│   │   │   │
│   │   │   └── cart/route.ts
│   │   │
│   │   ├── layout.tsx              # Layout gốc (Header/Footer)
│   │   ├── globals.css
│   │   └── middleware.ts           # Chặn quyền admin
│   │
│   ├── components/                 # 🧩 UI Components
│   │   ├── common/                 # Dùng chung
│   │   │   ├── Button.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── Input.tsx
│   │   │
│   │   ├── layout/                 # Layout UI
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navbar.tsx
│   │   │
│   │   ├── product/                # UI product (customer)
│   │   │   ├── ProductCard.tsx
│   │   │   ├── VariantPicker.tsx
│   │   │   └── ProductGallery.tsx
│   │   │
│   │   ├── blog/
│   │   │   ├── BlogCard.tsx
│   │   │   └── BlogList.tsx
│   │   │
│   │   └── admin/                  # 🔴 UI admin
│   │       ├── AdminSidebar.tsx
│   │       ├── AdminTable.tsx
│   │       └── AdminForm.tsx
│   │
│   ├── lib/                        # 🧠 Logic server
│   │   ├── prisma.ts               # Prisma Client
│   │   ├── auth.ts
│   │   └── utils.ts
│   │
│   ├── services/                   # 🌐 Gọi API
│   │   ├── public/
│   │   │   └── product.service.ts
│   │   └── admin/
│   │       └── product.service.ts
│   │
│   ├── hooks/                      # 🎣 Custom hooks
│   │   └── useAuth.ts
│   │
│   ├── types/                      # 📦 TypeScript types
│   │   ├── product.ts
│   │   └── user.ts
│   │
│   └── constants/                  # 🔒 Hằng số
│       └── routes.ts
│
├── .env
├── package.json
├── tsconfig.json
└── next.config.js

