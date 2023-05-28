import React from "react";
import { Link } from "react-scroll";
// HOOKS
// Logo
import WhiteLogo from "./assets/LOGO.png";
import { useState } from "react";
// icons
import { FaBars } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";

import JoinNowButton from "./helpers/joinNow";
const NavBAr = () => {
  const [visible, setVisible] = useState(false);
  return (
    <nav className=" bg-black text-white fixed z-[9999999] w-full top-0">
      <div className="container flex items-center justify-between mx-auto text-lg py-5 border-box">
        <div>
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            offset={-100}
            spy={true}
            className="cursor-pointer"
          >
            <img src={WhiteLogo} className="w-14" />
          </Link>
        </div>
        <div>
          <ul className="lg:flex gap-7 items-center hidden ">
            <Link
              to="home"
              activeClass="active"
              smooth={true}
              offset={-100}
              spy={true}
              className="cursor-pointer"
            >
              Home
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              offset={-100}
              spy={true}
              className="cursor-pointer"
              to="pricing"
            >
              Pricing
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              offset={-200}
              spy={true}
              className="cursor-pointer"
              to="contact-us"
            >
              Contact US
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              offset={-100}
              spy={true}
              className="cursor-pointer"
              to="faq"
            >
              FAQ
            </Link>
            <JoinNowButton />
          </ul>
          <ul className="lg:hidden gap-7 block relative ">
            {visible ? (
              <IoCloseCircleOutline
                onClick={() => setVisible(false)}
                className="cursor-pointer text-3xl"
              />
            ) : (
              <FaBars
                onClick={() => setVisible(true)}
                className="cursor-pointer text-3xl"
              />
            )}
            <div
              className={`absolute z-50 bg-black transition-all overflow-hidden  ${
                visible ? "w-96 right-0" : "w-0 right-0"
              } text-right flex flex-col`}
            >
              <Link
                onClick={() => setVisible(false)}
                to="home"
                activeClass="active"
                smooth={true}
                offset={-100}
                spy={true}
                className="py-3 px-4 hover:bg-blue-950 before:duration-300 before:transition-all before:hover:w-full  before:w-0 before:h-[1px] relative before:right-0 before:bg-white before:bottom-0 before:absolute transition-all cursor-pointer"
              >
                Home
              </Link>
              <Link
                onClick={() => setVisible(false)}
                activeClass="active"
                smooth={true}
                offset={-100}
                spy={true}
                className="py-3 px-4 hover:bg-blue-950 before:duration-300 before:transition-all before:hover:w-full  before:w-0 before:h-[1px] relative before:right-0 before:bg-white before:bottom-0 before:absolute transition-all cursor-pointer"
                to="pricing"
              >
                Pricing
              </Link>
              <Link
                onClick={() => setVisible(false)}
                activeClass="active"
                smooth={true}
                offset={-100}
                spy={true}
                className="py-3 px-4 hover:bg-blue-950 before:duration-300 before:transition-all before:hover:w-full  before:w-0 before:h-[1px] relative before:right-0 before:bg-white before:bottom-0 before:absolute transition-all cursor-pointer"
                to="contact-us"
              >
                Contact US
              </Link>
              <Link
                onClick={() => setVisible(false)}
                activeClass="active"
                smooth={true}
                offset={-100}
                spy={true}
                className="py-3 px-4 hover:bg-blue-950 before:duration-300 before:transition-all before:hover:w-full  before:w-0 before:h-[1px] relative before:right-0 before:bg-white before:bottom-0 before:absolute transition-all cursor-pointer"
                to="faq"
              >
                FAQ
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBAr;
