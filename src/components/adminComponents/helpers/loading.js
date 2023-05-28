import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <motion.div
      className="w-28 h-28 mx-auto rounded-full border-[15px] border-l-transparent border-black"
      transition={{
        ease: "linear",
        duration: 1,
        repeat: Infinity,
        x: { duration: 1 },
      }}
      animate={{
        x: 0,
        y: 0,
        scale: 1,
        rotate: 360,
      }}
    ></motion.div>
  );
};

export default Loading;
