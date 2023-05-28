import React from "react";
// router
import { Link, Outlet } from "react-router-dom";
// cookies
import { useCookies } from "react-cookie";
// icons
import {
  AiTwotoneSetting,
  AiOutlineUser,
  AiOutlineDashboard,
} from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
const Nav = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  return (
    <>
      <nav className="bg-white p-5 font-bold shadow-md">
        <div className="container mx-auto flex justify-between items-center flex-col gap-3 sm:flex-row">
          <div>
            <Link className="flex gap-3 items-center" to="">
              <AiOutlineDashboard className="text-2xl" />
              Dashboard
            </Link>
          </div>
          <div className="flex gap-5">
            <Link
              className="all-users flex gap-3 items-center"
              to="all-users/1"
            >
              <FaUsers className="text-2xl" />
              All User{" "}
            </Link>
            <Link className="flex gap-3 items-center" to="find-user">
              <AiOutlineUser className="text-2xl" />
              find User{" "}
            </Link>
            <Link className="flex gap-3 items-center" to="setting">
              {" "}
              <AiTwotoneSetting className="text-2xl" /> setting
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Nav;
