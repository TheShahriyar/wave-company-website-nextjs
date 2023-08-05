import PriceCard from "@/components/PriceCard";
import SectionTitle from "@/components/SectionTitle";
import React from "react";

const PriceSection = () => {
  return (
    <section className="py-14 lg:py-20 relative">
      <div className="container">
        <SectionTitle title="Service Price" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-8">
          <PriceCard
            planName="basic"
            price="10"
            text="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim."
          />
          <PriceCard
            planName="business"
            price="20"
            text="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim."
          />
          <PriceCard
            planName="professional"
            price="30"
            text="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim."
          />
          <PriceCard
            planName="Custom"
            price="50"
            text="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim."
          />
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
