import Link from "next/link";

type priceType = {
  planName: String;
  price: String;
  text: String;
  buttonText?: String;
  buttonLink?: String;
};

const PriceCard = (props: priceType) => {
  const {
    planName,
    price,
    text,
    buttonText = "Order Now",
    buttonLink = "#",
  } = props;
  return (
    <div className="text-center border border-primary/10">
      <div className="px-8 pt-14 pb-20 bg-primary/10">
        <h3 className="uppercase text-2xl sm:text-3xl font-bold">{planName}</h3>
        <div className="text-xs">Plan Short Descriptions</div>
      </div>
      <div className="px-8 pb-8">
        <div className="bg-white p-6 inline-flex flex-col justify-center items-center shadow rounded-full w-28 h-28 -mt-20">
          <h4 className="font-bold text-primary text-4xl">${price}</h4>
          <div className="text-xs">Per Hour</div>
        </div>
        <p className="mt-8">{text}</p>
        <Link
          href={`${buttonLink}`}
          className="mt-8 bg-transparent inline-block uppercase px-8 py-3 border-[2px] border-primary font-bold text-primary transition-all duration-500 hover:bg-primary hover:text-white"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default PriceCard;
