import React from "react";
import { useState } from "react";
// router
import { Link, useNavigate } from "react-router-dom";
// cookies
import { useCookies } from "react-cookie";
// axios
import axios from "axios";

const Authentificator = () => {
  // data
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // sending message wether the password or the username is correct or wrong
  const [status, setStatus] = useState(null);

  // setcookies
  const [_, setCookies] = useCookies(["access_token"]);

  // useNavigate Hook
  const navigate = useNavigate();

  // server urls
  const serverURL = "https://hamzaiptv72.herokuapp.com";

  // onChecking
  // admin password
  // Hamzalevrai4+
  const onCheck = async () => {
    try {
      const response = await axios.post(`${serverURL}/login`, {
        username,
        password,
      });
      console.log(response);
      if (response.data.status) {
        setCookies("access_token", response.data.token);
        console.log(response.data.token);
        setStatus(response.data.status);
        window.localStorage.setItem("userId", response.data.userId);
        navigate("dashboard");
      } else {
        setStatus(response.data.status);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="text-black h-[100vh] flex justify-center items-center">
      <div className="mx-auto border-4 rounded-2xl border-black">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onCheck();
          }}
          className="flex w-96 flex-col justify-cetner p-10"
        >
          {status || status === null ? (
            ""
          ) : (
            <span className="text-red-500 text-center font-bold">
              The username or the password wrong, try again!!
            </span>
          )}
          <input
            className="rounded-2xl font-base text-xl border-2 my-5 border-slate-500 py-3 px-5"
            placeholder="username"
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            className="rounded-2xl font-base text-xl border-2 my-5 border-slate-500 py-3 px-5"
            placeholder="password"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            type="submit"
            value="Login"
            className="bg-slate-800 py-2 text-white cursor-pointer rounded-2xl"
          />
          <Link
            to="forget"
            className="underline text-blue-500 hover:text-black mt-5"
          >
            Forget the Password?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Authentificator;
