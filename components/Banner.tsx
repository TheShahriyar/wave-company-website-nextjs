import Link from "next/link";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type bannerType = {
  bannerImage: StaticImport;
  textAlign?: string;
  subtitle: string;
  titleOne: string;
  titleTwo: string;
  buttonLink?: string;
  buttonText: string;
};

const Banner = (props: bannerType) => {
  const {
    bannerImage,
    textAlign = "left",
    subtitle,
    titleOne,
    titleTwo,
    buttonLink = "#",
    buttonText,
  } = props;
  return (
    <div className="banner-section relative">
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
      <div
        className={`relative z-10 py-32 md:py-40 xl:py-60 text-center md:text-${textAlign}`}
      >
        <div className="container text-white">
          <p className="uppercase font-openSans text-base md:text-lg tracking-wider">
            {subtitle}
          </p>
          <h1 className="uppercase font-openSans text-[28px] md:text-4xl xl:text-[52px] xl:leading-tight text-white font-bold mt-5 md:mt-8 xl:mt-12">
            <span className="text-primary">{titleOne}</span> <br />
            {titleTwo}
          </h1>
          <Link
            href={buttonLink}
            className="inline-block bg-transparent border border-white px-6 md:px-8 lg:px-10 py-2 md:py-3 lg:py-4 uppercase tracking-wider text-sm md:text-base mt-8 md:mt-16 xl:mt-20 transition-all duration-500 hover:bg-primary hover:border-primary"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
