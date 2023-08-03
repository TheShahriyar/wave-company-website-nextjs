import Banner from "@/components/Banner";
import bannerImage from "../../public/images/slider-1.jpg";
import FeatureSection from "@/sections/FeatureSection";

const Homepage = () => {
  return (
    <>
      {/* Start banner Section */}
      <Banner
        bannerImage={bannerImage}
        subtitle="We know what is best for you"
        titleOne="Wave is fully perfect"
        titleTwo="Company & agency"
        buttonText="Read more"
      />
      {/* End Banner Section */}

      {/* Start Feature Section */}
      <FeatureSection />
      {/* End Feature Section */}
    </>
  );
};

export default Homepage;
