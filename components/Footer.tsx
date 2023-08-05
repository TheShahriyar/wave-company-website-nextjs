import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <section className="py-14 lg:py-20 relative bg-[#333]">
        <div className="container grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Start Footer Column */}
          <div className="footer-menu-col">
            <input
              className="absolute opacity-0 accordion-input"
              id="footer-item-one"
              type="checkbox"
              name="accordion-footer-item"
            />
            <label
              htmlFor="footer-item-one"
              className="footer-title text-white cursor-pointer"
            >
              <h4 className="font-bold text-white text-base uppercase">
                About us
              </h4>
              <svg
                className="footer-plus-icon"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7812 6.46879H0.71875C0.322 6.46879 0 6.14679 0 5.74999C0 5.35319 0.322 5.03119 0.71875 5.03119H10.7812C11.178 5.03119 11.5 5.35319 11.5 5.74999C11.5 6.14679 11.178 6.46879 10.7812 6.46879Z"
                  fill="white"
                ></path>
                <path
                  className="active_minus"
                  d="M6.46885 0.71875V10.7812C6.46885 11.178 6.14685 11.5 5.75005 11.5C5.35325 11.5 5.03125 11.178 5.03125 10.7812V0.71875C5.03125 0.322 5.35325 0 5.75005 0C6.14685 0 6.46885 0.322 6.46885 0.71875Z"
                  fill="white"
                ></path>
              </svg>
            </label>
            <div className="footer-content">
              <p className="mb-6 text=[#999]">
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                sem. Nulla consequat massa quis enim.
              </p>
              <ul className="flex space-x-2">
                <li className="bg-primary p-2 rounded-full text-black">
                  <Link href="#">
                    <FaFacebookF />
                  </Link>
                </li>
                <li className="bg-primary p-2 rounded-full text-black">
                  <Link href="#">
                    <FaTwitter />
                  </Link>
                </li>
                <li className="bg-primary p-2 rounded-full text-black">
                  <Link href="#">
                    <FaLinkedinIn />
                  </Link>
                </li>
                <li className="bg-primary p-2 rounded-full text-black">
                  <Link href="#">
                    <FaYoutube />
                  </Link>
                </li>
                <li className="bg-primary p-2 rounded-full text-black">
                  <Link href="#">
                    <FaInstagram />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* End Footer Column */}
          {/* Start Footer Column */}
          <div className="footer-menu-col">
            <input
              className="absolute opacity-0 accordion-input"
              id="footer-item-two"
              type="checkbox"
              name="accordion-footer-item"
            />
            <label
              htmlFor="footer-item-two"
              className="footer-title text-white cursor-pointer"
            >
              <h4 className="font-bold text-white text-base uppercase">
                Important Links
              </h4>
              <svg
                className="footer-plus-icon"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7812 6.46879H0.71875C0.322 6.46879 0 6.14679 0 5.74999C0 5.35319 0.322 5.03119 0.71875 5.03119H10.7812C11.178 5.03119 11.5 5.35319 11.5 5.74999C11.5 6.14679 11.178 6.46879 10.7812 6.46879Z"
                  fill="white"
                ></path>
                <path
                  className="active_minus"
                  d="M6.46885 0.71875V10.7812C6.46885 11.178 6.14685 11.5 5.75005 11.5C5.35325 11.5 5.03125 11.178 5.03125 10.7812V0.71875C5.03125 0.322 5.35325 0 5.75005 0C6.14685 0 6.46885 0.322 6.46885 0.71875Z"
                  fill="white"
                ></path>
              </svg>
            </label>
            <div className="footer-content">
              <ul className="space-y-1">
                <li>
                  <Link href="#" className="hover:text-primary">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Career
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* End Footer Column */}
          {/* Start Footer Column */}
          <div className="footer-menu-col">
            <input
              className="absolute opacity-0 accordion-input"
              id="footer-item-three"
              type="checkbox"
              name="accordion-footer-item"
            />
            <label
              htmlFor="footer-item-three"
              className="footer-title text-white cursor-pointer"
            >
              <h4 className="font-bold text-white text-base uppercase">
                Important Links
              </h4>
              <svg
                className="footer-plus-icon"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7812 6.46879H0.71875C0.322 6.46879 0 6.14679 0 5.74999C0 5.35319 0.322 5.03119 0.71875 5.03119H10.7812C11.178 5.03119 11.5 5.35319 11.5 5.74999C11.5 6.14679 11.178 6.46879 10.7812 6.46879Z"
                  fill="white"
                ></path>
                <path
                  className="active_minus"
                  d="M6.46885 0.71875V10.7812C6.46885 11.178 6.14685 11.5 5.75005 11.5C5.35325 11.5 5.03125 11.178 5.03125 10.7812V0.71875C5.03125 0.322 5.35325 0 5.75005 0C6.14685 0 6.46885 0.322 6.46885 0.71875Z"
                  fill="white"
                ></path>
              </svg>
            </label>
            <div className="footer-content">
              <ul className="space-y-1">
                <li>
                  <Link href="#" className="hover:text-primary">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Career
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* End Footer Column */}
          {/* Start Footer Column */}
          <div className="footer-menu-col">
            <input
              className="absolute opacity-0 accordion-input"
              id="footer-item-four"
              type="checkbox"
              name="accordion-footer-item"
            />
            <label
              htmlFor="footer-item-four"
              className="footer-title text-white cursor-pointer"
            >
              <h4 className="font-bold text-white text-base uppercase">
                Subscribe
              </h4>
              <svg
                className="footer-plus-icon"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7812 6.46879H0.71875C0.322 6.46879 0 6.14679 0 5.74999C0 5.35319 0.322 5.03119 0.71875 5.03119H10.7812C11.178 5.03119 11.5 5.35319 11.5 5.74999C11.5 6.14679 11.178 6.46879 10.7812 6.46879Z"
                  fill="white"
                ></path>
                <path
                  className="active_minus"
                  d="M6.46885 0.71875V10.7812C6.46885 11.178 6.14685 11.5 5.75005 11.5C5.35325 11.5 5.03125 11.178 5.03125 10.7812V0.71875C5.03125 0.322 5.35325 0 5.75005 0C6.14685 0 6.46885 0.322 6.46885 0.71875Z"
                  fill="white"
                ></path>
              </svg>
            </label>
            <div className="footer-content">
              <p>
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                sem. Nulla consequat massa quis enim.
              </p>
              <div className="flex mt-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-2/3 xl:w-3/4 border border-text px-4 py-2 bg-transparent placeholder:text-xs focus-visible:outline-0"
                />
                <button
                  type="submit"
                  className="w-1/3 xl:w-1/4 bg-primary px-4 py-3 text-white"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
          {/* End Footer Column */}
        </div>
      </section>
      <section className="bg-[#222] py-6 text-center text-xs">
        <p>
          © Copyright {year}. Designed & Developed by{" "}
          <Link
            href="https://github.com/TheShahriyar"
            target="_blank"
            className="text-primary font-bold"
          >
            TheShahriyar
          </Link>
        </p>
      </section>
    </>
  );
};

export default Footer;
