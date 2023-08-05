import Link from "next/link";
import React from "react";

const CallToActionThree = ({ text }: any) => {
  return (
    <section className="py-10 bg-gradient-to-r from-primary-light to-primary-dark">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-20">
          <h3 className="font-bold uppercase text-lg text-white">{text}</h3>
          <Link
            href="/contact"
            className="border-2 border-white px-10 py-3 uppercase font-bold text-white transition-all duration-500 hover:bg-white hover:text-primary"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToActionThree;
