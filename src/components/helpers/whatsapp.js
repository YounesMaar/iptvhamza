import { BsWhatsapp } from "react-icons/bs";
//HOOKS

import { useState } from "react";

const Whatsapp = () => {
  const [hover, setHover] = useState(false);
  return (
    <div className="fixed transition-all z-[99999999] cursor-pointer rounded-2xl text-4xl p-2 bottom-4 right-4 text-white bg-green-500">
      <a
        href="https://api.whatsapp.com/send/?phone=212623084067&text&type=phone_number&app_absent=0"
        target="_blank"
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <BsWhatsapp className="drop-shadow-2xl" />
      </a>
      <p
        className={`absolute bg-green-500 px-2 py-1 text-center rounded-full -z-10 top-1/4 right-0 ${
          hover ? "right-20 opacity-100" : "opacity-0"
        } text-base hover:transition-all transition-all w-40`}
      >
        WhatsApp us
      </p>
    </div>
  );
};

export default Whatsapp;
