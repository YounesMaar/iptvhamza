import React from "react";
// typeEffect
import { TypeAnimation } from "react-type-animation";
// images
import Champion from "./assets/WhatsApp Image 2023-05-12 at 00.13.27.jpeg";
// button
import JoinNowButton from "./helpers/joinNow";
// HOOKS
import { useState, useEffect } from "react";
// motion
import { motion, useDragControls } from "framer-motion";
import { fadeIn } from "./helpers/variants";
const Landing = () => {
  // drag handlers
  const controls = useDragControls();

  const [position, setPosition] = useState(-50000);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((n) => n - 1000);
    }, 10000); // Run every 10 seconds

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, []);
  // startDrag handler
  function startDrag(event) {
    controls.start(event);
  }
  return (
    <div className="section mt-[96px] py-10 box-border" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-evenly mx-auto gap-20 md:gap-0">
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="text-white w-full text-center md:text-start md:w-1/2 items-center md:order-none order-2 flex flex-col mx-auto md:items-start  gap-8"
          >
            <h1 className="text-5xl inline-block font-bold m-0">
              All-In-One Quality IPTV Service
            </h1>
            <h1 className="text-2xl w-5/6 h-12">
              Enjoy your time
              <span className="font-bold w-4/5 text-blue-400">
                <TypeAnimation
                  sequence={[
                    " with excellent image quality up to 4K.",
                    2000,
                    " on any device.",
                    2000,
                    " at anytime and anywhere.",
                    2000,
                    " with over +18,000 channels.",
                    2000,
                    " with +88,000 VOD and uptime 100%.",
                    2000,
                  ]}
                  speed={50}
                  wrapper="span"
                  repeat={Infinity}
                />
              </span>
            </h1>
            <JoinNowButton className="" />
            <div
              className="overflow-hidden relative w-full lg:w-5/6 md:mt-5 h-16"
              onPointerDown={startDrag}
              style={{ touchAction: "none" }}
            >
              <motion.div
                drag="x"
                animate={{ x: position }}
                className="transition-all duration-700 cursor-grab leagues w-[99999px] h-full"
                dragControls={controls}
              ></motion.div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="md:w-1/2 w-5/6 order-1 md:order-none"
          >
            <img
              data-right="50020"
              className="rounded-b-full mx-auto"
              src={Champion}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
