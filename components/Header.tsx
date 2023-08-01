"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const currentRoute = usePathname();
  const [open, setOpen] = useState(false);

  const handleMenuOpen = () => {
    setOpen(!open);
  };
  return (
    <header className="bg-white shadow">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={152}
              height={30}
              priority
            />
          </Link>
          <div
            onClick={handleMenuOpen}
            className="font-bold text-red-500 block lg:hidden"
          >
            M.M
          </div>
          <nav
            className={`flex justify-end absolute top-0 left-0 w-full transition-all duration-500 lg:relative lg:space-x-6 flex-col lg:flex-row ${
              open ? "translate-x-0" : "-translate-x-full"
            } lg:translate-x-0`}
          >
            <div onClick={() => setOpen(false)} className="lg:hidden">
              Close
            </div>
            <Link
              href="/"
              className={`py-6 uppercase text-sm ${
                currentRoute === "/" ? "text-red-500" : ""
              }`}
            >
              Homepage
            </Link>
            <Link
              href="/about"
              className={`py-6 uppercase text-sm ${
                currentRoute === "/about" ? "text-red-500" : ""
              }`}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`py-6 uppercase text-sm ${
                currentRoute === "/services" ? "text-red-500" : ""
              }`}
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className={`py-6 uppercase text-sm ${
                currentRoute === "/portfolio" ? "text-red-500" : ""
              }`}
            >
              Portfolio
            </Link>
            <Link
              href="/blog"
              className={`py-6 uppercase text-sm ${
                currentRoute === "/blog" ? "text-red-500" : ""
              }`}
            >
              Blog
            </Link>
            <div className="relative group cursor-pointer py-6 uppercase text-sm">
              <div>Pages</div>
              <div className="absolute top-10 left-0 bg-black text-white flex flex-col invisible opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                <Link href="/">Page One</Link>
                <Link href="/">Page One</Link>
                <Link href="/">Page One</Link>
                <Link href="/">Page One</Link>
              </div>
            </div>
            <Link
              href="/contact"
              className={`py-6 uppercase text-sm ${
                currentRoute === "/contact" ? "text-red-500" : ""
              }`}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
