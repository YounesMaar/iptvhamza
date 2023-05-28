import { Link } from "react-scroll";

const JoinNowButton = () => {
  return (
    <Link
      to={"pricing"}
      activeClass="active"
      smooth={true}
      offset={-100}
      spy={true}
      className="px-6 py-2 cursor-pointer rounded-full text-base font-bold bg-blue-600 text-white"
    >
      Join Now
    </Link>
  );
};

export default JoinNowButton;
