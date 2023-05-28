//icons
import { AiFillAlert } from "react-icons/ai";
import { FaMoneyCheck } from "react-icons/fa";
import { BsTv } from "react-icons/bs";

// motions
import { motion } from "framer-motion";
import { fadeIn } from "./helpers/variants";
const AboutIPTV = () => {
  return (
    <div className="my-24">
      <div className="container mx-auto text-white">
        <div className="flex flex-col lg:flex-row mx-auto border-[0.5px] border-white rounded-md">
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="w-full text-center border-b-[0.5px] lg:border-r-[0.5px] lg:border-white p-6"
          >
            <span>
              <AiFillAlert className="text-5xl mx-auto mb-5" />
            </span>
            <h1 className="text-2xl font-bold text-center">
              Channels from 115 countries worldwide
            </h1>
            <p className="my-5">
              You can watch TV channels from around the world (Netherlands /
              Belgium / Germany / UK / Spain / Portugal / Poland / Italy /
              Israel / Ex-Yu / Hindi / Arabic / Turkey…)
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
              <FaMoneyCheck className="text-5xl mx-auto mb-5" />
            </span>
            <h1 className="text-2xl font-bold text-center">
              High Quality 4K/FHD/HD/SD
            </h1>
            <p className="my-5">
              We offer all image qualities to view our iptv service everywhere,
              regardless of your network speed on: Mobile / TV / Android box /
              PC …
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
              7 days money back guarantee
            </h1>
            <p className="my-5">
              Within 7 days of your purchase you have the option to cancel our
              IPTV subscription if you are not satisfied. Then you will receive
              a full refund from us.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default AboutIPTV;
