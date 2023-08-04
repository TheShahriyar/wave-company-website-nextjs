import FeatureTwo from "@/components/FeatureTwo";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import React from "react";
import {
  FaGlobe,
  FaJs,
  FaReact,
  FaBusinessTime,
  FaCircleRadiation,
  FaFlask,
} from "react-icons/fa6";

const AboutSection = () => {
  return (
    <section className="py-14 lg:py-20">
      <div className="container">
        <SectionTitle title="About us" />
        <div className="flex flex-col-reverse lg:flex-row lg:space-x-4 lg:space-y-0 xl:space-x-8">
          <div className="grid sm:grid-cols-2 gap-4 xl:gap-8 lg:w-1/2">
            <FeatureTwo
              icon={<FaFlask />}
              title="Clean Design"
              desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros."
            />
            <FeatureTwo
              icon={<FaGlobe />}
              title="Browser Compatible"
              desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros."
            />
            <FeatureTwo
              icon={<FaJs />}
              title="TypeScript Added"
              desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros."
            />
            <FeatureTwo
              icon={<FaReact />}
              title="React Next JS"
              desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros."
            />
          </div>
          <div className="lg:w-1/2 mb-4 lg:mb-0">
            <Image
              src="/images/about.jpeg"
              alt="Shahriyar Ahmed"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
