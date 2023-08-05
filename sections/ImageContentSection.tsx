import { FaCircleCheck } from "react-icons/fa6";

const ImageContentSection = () => {
  return (
    <section className="relative py-14 lg:py-20 bg-gradient-to-r from-primary-dark to-primary-light">
      <div className="container flex">
        <div className="md:w-1/2">
          <div className="text-section text-white md:mb-8 md:pr-8">
            <h4 className="text-3xl mb-8 text-white uppercase font-bold">
              Why you will
              <br />
              Choose Wave Template
            </h4>
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui
              posuere blandit. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Quisque velit nisi, pretium ut lacinia in,
              elementum id enim.
            </p>
            <ul className="my-5 ml-5">
              <li className="flex gap-x-2 items-center">
                <FaCircleCheck />
                Interdum et malesuada fames ac ante
              </li>
              <li className="flex gap-x-2 items-center">
                <FaCircleCheck />
                Malesuada fames ac ante ipsum
              </li>
              <li className="flex gap-x-2 items-center">
                <FaCircleCheck />
                Nam blandit quam nibh, at fermentum
              </li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              velit nisi, pretium ut lacinia in, elementum id enim.
            </p>
            <a
              href="#"
              className="inline-block bg-white px-8 py-3 mt-8 uppercase font-bold text-primary hover:bg-black transition-all duration-500"
            >
              Know More
            </a>
          </div>
        </div>
        <div className="md:w-1/2 hidden md:block"></div>
      </div>
      <div
        className="w-1/2 absolute right-0 top-0 h-full bg-cover bg-center hidden md:block"
        style={{ backgroundImage: `url(/images/parallax2.jpg)` }}
      ></div>
    </section>
  );
};

export default ImageContentSection;
