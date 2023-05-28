import React from "react";

import axios from "react";
const Setting = () => {
  return (
    <div className="bg-white container mx-auto rounded-xl shadow-2xl">
      <div>
        <form className="flex flex-col gap-5 my-10 p-10 justify-center items-center">
          <input
            type="text"
            name="username"
            id="username"
            className="cursor-not-allowed border-2 border-black p-2 rounded-lg w-1/2"
            placeholder="UserName"
            value="Hamza"
            disabled
          />
          <input
            type="email"
            className="cursor-not-allowed border-2 border-black p-2 rounded-lg w-1/2"
            placeholder="Email"
            value="7amzalevrai@gmail.com"
            disabled
            name="email"
            id="email"
          />
          <input
            type="password"
            className="cursor-not-allowed border-2 border-black p-2 rounded-lg w-1/2"
            placeholder="Password"
            value="default"
            disabled
            name="password"
            id="password"
          />
          <button className="text-white bg-black p-2 rounded-2xl px-10">
            Change
          </button>
        </form>
      </div>
    </div>
  );
};

export default Setting;
