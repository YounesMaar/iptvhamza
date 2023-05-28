import { FaTelegramPlane } from "react-icons/fa";
//HOOKS

import { useState } from "react";

const Telegram = () => {
  const [hover, setHover] = useState(false);
  return (
    <div className="fixed transition-all z-[99999999] cursor-pointer rounded-2xl text-4xl p-2 bottom-20 right-4 text-white bg-blue-400">
      <a
        href="https://t.me/iptv72store"
        target="_blank"
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <FaTelegramPlane className="drop-shadow-2xl" />
      </a>
      <p
        className={`absolute bg-blue-400 px-2 py-1 text-center rounded-full -z-10 top-1/3 right-0 ${
          hover ? "right-20 opacity-100" : "opacity-0"
        } text-base hover:transition-all transition-all w-40`}
      >
        Telegram us
      </p>
    </div>
  );
};

export default Telegram;
