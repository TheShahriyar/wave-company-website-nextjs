import Link from "next/link";

type calltoactionType = {
  title: string;
  desc: string;
  linkOneText?: string;
  linkOneLink?: any;
  linkTwoText?: string;
  linkTwoLink?: any;
};

const CallToAction = (props: calltoactionType) => {
  const {
    title,
    desc,
    linkOneText,
    linkOneLink = "#",
    linkTwoText,
    linkTwoLink = "#",
  } = props;
  return (
    <section className="py-14 lg:py-20 bg-gradient-to-r from-primary-dark to-primary-light">
      <div className="container">
        <div className="call-to-action text-center text-white">
          <h2 className="font-bold text-2xl text-white">{title}</h2>
          <p className="pt-8 pb-10 md:w-4/5 mx-auto">{desc}</p>
          <div className="space-x-4 flex justify-center">
            {linkOneText && (
              <Link
                href={linkOneLink}
                className="font-bold bg-transparent border-2 border-white py-3 px-6 uppercase font-asap tracking-wide transition-all duration-500 hover:bg-white hover:text-primary"
              >
                {linkOneText}
              </Link>
            )}

            {linkTwoText && (
              <Link
                href={linkTwoLink}
                className="font-bold bg-transparent border-2 border-white py-3 px-6 uppercase font-asap tracking-wide transition-all duration-500 hover:bg-white hover:text-primary"
              >
                {linkTwoText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
