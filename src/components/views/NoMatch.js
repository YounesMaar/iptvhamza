import React from "react";
// icons
import { useNavigate } from "react-router-dom";
import { TbFaceIdError } from "react-icons/tb";
const NoMatch = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[100vh] bg-slate-100 py-28">
      <TbFaceIdError className="text-9xl mx-auto my-5" />
      <h1 className="text-4xl text-center h-52">404 Error: Page Not Found</h1>
      <a
        className="mx-auto underline text-blue-500 block text-center cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        Go to the site
      </a>
    </div>
  );
};

export default NoMatch;
