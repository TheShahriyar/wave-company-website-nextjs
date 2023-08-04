import Banner from "@/components/Banner";
import bannerImage from "../../public/images/slider-1.jpg";
import FeatureSection from "@/sections/FeatureSection";
import CallToAction from "@/components/CallToAction";
import AboutSection from "@/sections/AboutSection";
import ImageContentSection from "@/sections/ImageContentSection";

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

      <CallToAction
        title="POWERFUL, RESPONSIVE &amp; RETINA READY TEMPLATE"
        desc="Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
            turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere
            a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam
            porttitor mauris sit amet orci. Aenean dignissim pellentesque felis."
        linkOneText="view project"
        linkTwoText="our services"
      />
      <AboutSection />
      <ImageContentSection />
    </>
  );
};

export default Homepage;
