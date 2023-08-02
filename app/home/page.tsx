import Banner from "@/components/Banner";
import bannerImage from "../../public/images/slider-1.jpg";

const Homepage = () => {
  return (
    <>
      <Banner
        bannerImage={bannerImage}
        subtitle="We know what is best for you"
        titleOne="Wave is fully perfect"
        titleTwo="Company & agency"
        buttonText="Read more"
      />
    </>
  );
};

export default Homepage;
