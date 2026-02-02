import Link from "next/link";
import Image from "next/image";

export default function UserMenu() {
  const isLoggedIn = true;

  if (!isLoggedIn) {
    return (
      <div className="d-flex gap-2">
        <Link
          href="/login"
          className="btn btn-sm btn-outline-dark rounded-pill px-3"
        >
          Đăng nhập
        </Link>
      </div>
    );
  }

  return (
    <div className="dropdown">
      <button
        className="btn p-0 border-0 d-flex align-items-center"
        type="button"
        data-bs-toggle="dropdown"
      >
        <div
          className="rounded-circle overflow-hidden border"
          style={{ width: "35px", height: "35px" }}
        >
          <Image
            src="/images/user-avatar.jpg"
            alt="User"
            width={35}
            height={35}
            className="w-100 h-100"
            style={{ objectFit: "cover" }}
          />
        </div>
      </button>
      <ul className="dropdown-menu dropdown-menu-end shadow border-0">
        <li>
          <Link className="dropdown-item py-2" href="/profile">
            Tài khoản
          </Link>
        </li>
        <li>
          <Link className="dropdown-item py-2" href="/orders">
            Đơn mua
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <button className="dropdown-item py-2 text-danger">Đăng xuất</button>
        </li>
      </ul>
    </div>
  );
}
