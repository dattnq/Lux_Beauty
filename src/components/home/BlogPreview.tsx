// src/components/home/BlogPreview.tsx
import Link from "next/link";
import Image from "next/image";

export default function BlogPreview() {
  const posts = [
    {
      id: 1,
      title: "5 Bước Chăm Sóc Da Dầu Mụn",
      img: "https://placehold.co/600x400?text=Skin+Care",
      desc: "Bí quyết giúp làn da luôn khô thoáng và sạch mụn trong mùa hè này...",
      date: "12/10/2023",
    },
    {
      id: 2,
      title: "Xu Hướng Màu Son Năm Nay",
      img: "https://placehold.co/600x400?text=Lipstick",
      desc: "Top những màu son trendy nhất mà bạn không thể bỏ qua...",
      date: "15/10/2023",
    },
    {
      id: 3,
      title: "Review Bộ Dưỡng Ẩm Lux Glow",
      img: "https://placehold.co/600x400?text=Review",
      desc: "Trải nghiệm thực tế sau 2 tuần sử dụng bộ sản phẩm mới nhất...",
      date: "20/10/2023",
    },
  ];

  return (
    <section className="container py-5">
      <div className="d-flex justify-content-between align-items-end mb-4">
        <div>
          <h2 className="fw-bold m-0">Góc Làm Đẹp</h2>
          <p className="text-secondary m-0">Mẹo hay và kiến thức hữu ích</p>
        </div>
        <Link href="/blog" className="btn btn-outline-dark rounded-pill btn-sm">
          Xem tất cả
        </Link>
      </div>

      <div className="row g-4">
        {posts.map((post) => (
          <div key={post.id} className="col-md-4">
            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
              <div className="position-relative" style={{ height: "200px" }}>
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  className="object-fit-cover"
                />
              </div>
              <div className="card-body">
                <small className="text-muted">{post.date}</small>
                <h5 className="card-title fw-bold mt-2 mb-3 text-truncate">
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-decoration-none text-dark stretched-link"
                  >
                    {post.title}
                  </Link>
                </h5>
                <p className="card-text text-secondary small line-clamp-2">
                  {post.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
