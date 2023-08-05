import Image from "next/image";

type testimonialType = {
  image: string;
  name: string;
  text: string;
  designation?: string;
};

const Testimonial = (props: testimonialType) => {
  const { image, text, name, designation } = props;
  return (
    <div className="px-4 py-8 border-[2px] border-[#f7f7f7] text-center flex flex-col items-center">
      <Image
        src={image}
        alt="testimonial author"
        width={100}
        height={100}
        className="rounded-full mb-8"
      />
      <p className="italic">{text}</p>
      <div className="mt-8">
        <h4 className="font-bold uppercase text-primary">{name}</h4>
        <div>{designation}</div>
      </div>
    </div>
  );
};

export default Testimonial;
