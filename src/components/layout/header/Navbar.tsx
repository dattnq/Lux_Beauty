import Link from "next/link";

interface NavbarProps {
  isMenuOpen: boolean;
  closeMenu: () => void;
}

export default function Navbar({ isMenuOpen, closeMenu }: NavbarProps) {
  return (
    <div
      className={`
        ${isMenuOpen ? "d-flex flex-column p-4" : "d-none"} 
        d-lg-flex flex-lg-row align-items-center gap-4
      `}
    >
      <Link
        href="/"
        className="nav-link fw-semibold text-uppercase"
        style={{ fontSize: "1rem", letterSpacing: "1px" }}
        onClick={closeMenu}
      >
        Trang chủ
      </Link>
      <Link
        href="/products"
        className="nav-link fw-semibold text-uppercase"
        style={{ fontSize: "1rem", letterSpacing: "1px" }}
        onClick={closeMenu}
      >
        Sản phẩm
      </Link>
      <Link
        href="/blog"
        className="nav-link fw-semibold text-uppercase"
        style={{ fontSize: "1rem", letterSpacing: "1px" }}
        onClick={closeMenu}
      >
        Blog
      </Link>
    </div>
  );
}
