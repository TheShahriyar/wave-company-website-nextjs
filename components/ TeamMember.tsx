import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

type teamTypes = {
  image: string;
  name: string;
  designation?: string;
  fbLink?: string;
  linkedInLink?: string;
  twitterLink?: string;
};

const TeamMember = (props: teamTypes) => {
  const {
    image,
    name,
    designation,
    fbLink = "#",
    twitterLink = "#",
    linkedInLink = "#",
  } = props;

  return (
    <div className="relative group">
      <div>
        <Image
          src={image}
          alt="team member"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="text-center text-white py-8 bg-gradient-to-b from-primary-dark to-primary-light flex flex-col justify-center absolute top-0 left-0 w-full h-full opacity-0 invisible transition-all duration-500 group-hover:opacity-100 group-hover:visible">
        <ul className="flex justify-center space-x-6 text-base">
          <li>
            <Link href={`${fbLink}`} target="_blank">
              <FaFacebookF />
            </Link>
          </li>
          <li>
            <Link href={`${linkedInLink}`} target="_blank">
              <FaLinkedinIn />
            </Link>
          </li>
          <li>
            <Link href={`${twitterLink}`} target="_blank">
              <FaTwitter />
            </Link>
          </li>
        </ul>
        <h4 className="font-bold uppercase text-lg text-white pt-8 pb-3">
          {name}
        </h4>
        <div className="font-bold">{designation}</div>
      </div>
    </div>
  );
};

export default TeamMember;
