//icons
import { BsShopWindow } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { BsTv } from "react-icons/bs";

// motions
import { motion } from "framer-motion";
import { fadeIn } from "./helpers/variants";

// components
import JoinNowButton from "./helpers/joinNow";

const Work = () => {
  return (
    <div className="my-24">
      <div className="container mx-auto text-white">
        <h1 className="text-6xl text-white font-bold mb-16 text-center">
          How does it work?
        </h1>
        <div className="flex flex-col lg:flex-row mx-auto border-[0.5px] border-white rounded-md">
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="w-full text-center border-b-[0.5px] lg:border-r-[0.5px] lg:border-white p-6"
          >
            <span>
              <BsShopWindow className="text-5xl mx-auto mb-5" />
            </span>
            <h1 className="text-2xl font-bold text-center">
              1. Place your order
            </h1>
            <p className="my-5">
              Place your order by choosing your preferred subscription period :
              1, 3, 6 or 12 months.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="w-full text-center border-b-[0.5px] lg:border-r-[0.5px] lg:border-white p-6"
          >
            <span>
              <BiUserCircle className="text-5xl mx-auto mb-5" />
            </span>
            <h1 className="text-2xl font-bold text-center">
              2. Get your account
            </h1>
            <p className="my-5">
              This process can take 15 to 30 minutes.Please check your inbox and
              your spam folder. To speed up the process, please
              <a
                href="https://api.whatsapp.com/send/?phone=212623084067&text&type=phone_number&app_absent=0"
                target="_blank"
                className="text-purple-600"
              >
                {" "}
                contact us via Whatsapp.
              </a>
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="w-full text-center  p-6"
          >
            <span>
              <BsTv className="text-5xl mx-auto mb-5" />
            </span>
            <h1 className="text-2xl font-bold text-center">
              3. Enjoy your IPTV service!
            </h1>
            <p className="my-5">Enjoy all channels, films and series now!</p>
            <JoinNowButton />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Work;
