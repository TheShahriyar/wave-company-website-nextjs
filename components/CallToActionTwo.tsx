import Image from "next/image";
import React from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type propType = {
  bannerImage: string;
  text: string;
};

const CallToActionTwo = (props: propType) => {
  const { bannerImage, text } = props;
  return (
    <section className="relative py-14 lg:py-20">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={bannerImage}
          alt="Shahriyar Ahmed"
          quality={100}
          sizes="100vw"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="container relative">
        <div className="py-6 border-[3px] border-white/5">
          <p className="lg:w-2/3 mx-auto text-center text-primary text-xl sm:text-3xl leading-[1.5] font-bold">
            {text}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToActionTwo;
