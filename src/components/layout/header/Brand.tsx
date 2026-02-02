import Link from "next/link";

export default function Brand() {
  return (
    <Link
      href="/"
      className="navbar-brand fw-bold fs-2"
      style={{
        color: "var(--lux-pink)",
        fontFamily: "'Playfair Display', serif",
        letterSpacing: "2px",
      }}
    >
      LUX BEAUTY
    </Link>
  );
}
