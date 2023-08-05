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
          <div>
            <h3 className="font-bold text-white text-base mb-8 uppercase">
              About Us
            </h3>
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
          {/* End Footer Column */}
          {/* Start Footer Column */}
          <div>
            <h3 className="font-bold text-white text-base mb-8 uppercase">
              Important Links
            </h3>
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
          {/* End Footer Column */}
          {/* Start Footer Column */}
          <div>
            <h3 className="font-bold text-white text-base mb-8 uppercase">
              Important Links
            </h3>
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
          {/* End Footer Column */}
          {/* Start Footer Column */}
          <div>
            <h3 className="font-bold text-white text-base mb-8 uppercase">
              Subscribe
            </h3>
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
