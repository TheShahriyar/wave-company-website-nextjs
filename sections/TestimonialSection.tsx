import SectionTitle from "@/components/SectionTitle";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

const TestimonialSection = () => {
  return (
    <section className="py-14 lg:py-20 relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/images/pattern1.jpg"
          alt="Testimonial BG"
          quality={100}
          width={0}
          height={0}
          sizes="100vw"
          fill
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>
      <div className="container relative">
        <SectionTitle title="Our client's Feedback" />
        <div className="grid md:grid-cols-3 gap-4 lg:gap-8">
          <Testimonial
            image="/images/testi1.jpeg"
            name="Jane Doe"
            designation="CEO, Amazon.com"
            text="Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi."
          />
          <Testimonial
            image="/images/testi2.jpeg"
            name="John Doe"
            designation="CEO, Amazon.com"
            text="Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi."
          />
          <Testimonial
            image="/images/testi1.jpeg"
            name="Jane Doe"
            designation="CEO, Amazon.com"
            text="Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi."
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
