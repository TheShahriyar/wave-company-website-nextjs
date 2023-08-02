"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { HiAdjustments, HiX } from "react-icons/hi";

const Header = () => {
  const currentRoute = usePathname();
  const [open, setOpen] = useState(false);

  const handleMenuOpen = () => {
    setOpen(!open);
  };
  return (
    <header className="bg-white shadow">
      <div className="container">
        <div className="flex justify-between items-center py-2 md:py-4 lg:py-0">
          <Link href="/" className="w-[120px] md:w-auto">
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
            className="font-bold text-red-500 block lg:hidden [&_svg]:text-2xl md:[&_svg]:text-3xl"
          >
            <HiAdjustments />
          </div>
          <nav
            className={`flex lg:justify-end absolute top-0 left-0 w-4/5 lg:w-full transition-all duration-500 lg:relative lg:space-x-6 flex-col lg:flex-row h-full lg:h-auto bg-primary lg:bg-white text-white lg:text-black p-8 lg:p-0 ${
              open ? "translate-x-0" : "-translate-x-full"
            } lg:translate-x-0`}
          >
            <div
              onClick={() => setOpen(false)}
              className="lg:hidden text-3xl md:text-5xl"
            >
              <HiX />
            </div>
            <Link
              href="/"
              className={`py-2 md:py-6 uppercase text-xl lg:text-sm ${
                currentRoute === "/" ? "text-primary" : ""
              }`}
            >
              Homepage
            </Link>
            <Link
              href="/about"
              className={`py-2 md:py-6 uppercase text-xl lg:text-sm ${
                currentRoute === "/about" ? "text-primary" : ""
              }`}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`py-2 md:py-6 uppercase text-xl lg:text-sm ${
                currentRoute === "/services" ? "text-primary" : ""
              }`}
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className={`py-2 md:py-6 uppercase text-xl lg:text-sm ${
                currentRoute === "/portfolio" ? "text-primary" : ""
              }`}
            >
              Portfolio
            </Link>
            <Link
              href="/blog"
              className={`py-2 md:py-6 uppercase text-xl lg:text-sm ${
                currentRoute === "/blog" ? "text-primary" : ""
              }`}
            >
              Blog
            </Link>
            <div className="relative group cursor-pointer py-2 md:py-6 uppercase text-xl lg:text-sm">
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
              className={`py-2 md:py-6 uppercase text-xl lg:text-sm ${
                currentRoute === "/contact" ? "text-primary" : ""
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
