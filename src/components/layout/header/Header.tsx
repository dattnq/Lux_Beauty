"use client";

import { useState } from "react";
import Link from "next/link";
import Brand from "./Brand";
import Navbar from "./Navbar";
import UserMenu from "./UserMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top py-3 opacity-70 ">
      <div className="container-fluid px-lg-5 d-flex align-items-center justify-content-between">
        {/* NHÓM 1: LOGO VÀ NÚT BẬT/TẮT MENU (BÊN TRÁI) */}
        <div className="d-flex align-items-center">
          <button
            className="navbar-toggler border-0 p-0 me-2 d-lg-none"
            type="button"
            onClick={toggleMenu}
          >
            <i
              className={`bi ${isMenuOpen ? "bi-x-lg" : "bi-list"} fs-2 text-dark`}
            ></i>
          </button>
          <Brand />
        </div>

        {/* NHÓM 2: NAVBAR NẰM GIỮA (LÊN CÙNG HÀNG) */}
        <div className="flex-grow-1 d-none d-lg-flex justify-content-center">
          <Navbar isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
        </div>

        {/* NHÓM 3: TÌM KIẾM CỐ ĐỊNH & ICONS SÁT PHẢI */}
        <div className="d-flex align-items-center gap-2 gap-lg-3">
          {/* THANH TÌM KIẾM HIỂN THỊ LUÔN (Chỉ hiện rõ trên Desktop để tránh chật mobile) */}
          <div
            className="d-none d-md-flex align-items-center bg-light rounded-pill px-4  py-2 border"
            style={{ maxWidth: "300px" }}
          >
            <i className="bi bi-search text-secondary me-2"></i>
            <input
              type="text"
              className="form-control border-0 bg-transparent shadow-none p-0"
              placeholder="Tìm kiếm..."
              style={{ fontSize: "1rem", width: "200px" }}
            />
          </div>

          {/* Icon Search cho Mobile (vì màn hình nhỏ không đủ chỗ hiện ô input) */}
          <button className="btn btn-link text-dark p-1 d-md-none">
            <i className="bi bi-search fs-5"></i>
          </button>

          <Link
            href="/cart"
            className="btn btn-light rounded-circle border-0 text-secondary position-relative"
          >
            <i className="bi bi-cart3 fs-4"></i>
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style={{ fontSize: "0.6rem" }}
            >
              0
            </span>
          </Link>

          <div
            className="vr d-none d-lg-block mx-1 opacity-25"
            style={{ height: "24px" }}
          ></div>

          <UserMenu />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`d-lg-none w-100 ${isMenuOpen ? "d-block" : "d-none"}`}>
        <Navbar isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
      </div>
    </nav>
  );
}
