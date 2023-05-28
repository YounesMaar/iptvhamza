import React from "react";

// search HOOK
import { useSearchParams } from "react-router-dom";
// icons
import { BiSearchAlt } from "react-icons/bi";
import { TbRefreshAlert } from "react-icons/tb";
import { BiUserCircle } from "react-icons/bi";
// params
import { useParams, useNavigate } from "react-router-dom";

// react HOOKS
import { useState, useEffect } from "react";
// cookies
import { useCookies } from "react-cookie";
// axios
import axios from "axios";
// helpers
import Loading from "./helpers/loading";
const FindUser = () => {
  const [cookie, _] = useCookies();

  const [details, setDetails] = useState([]);
  // searchParams
  const [searchParams, setSearchParams] = useSearchParams();
  // navigation
  const navigate = useNavigate();
  // params
  const params = useParams();
  const id = params.id;
  // server URL
  const serverURL = "https://hamzaiptv72.herokuapp.com";
  // handlers
  async function fetchOneUserById() {
    if (id) {
      const response = await axios.get(`${serverURL}/get-one-user-byid/${id}`, {
        headers: { authorization: cookie.access_token },
      });
      if (response.data.data.length >= 1 && response.status === 200) {
        setDetails(response.data.data[0]);
      } else {
        setDetails([]);
      }
    }
  }

  // useEffect
  async function fetchOneByEmail() {
    if (searchParams) {
      const response = await axios.get(
        `${serverURL}/get-one-user-byemail/${searchParams.get("search")}`,
        {
          headers: { authorization: cookie.access_token },
        }
      );
      console.log(response);
      if (response.data.data.length >= 1 && response.status === 200) {
        setDetails(response.data.data[0]);
      } else {
        setDetails([]);
      }
    }
  }
  useEffect(() => {
    if (searchParams.size > 0) {
      fetchOneByEmail();
    } else {
      fetchOneUserById();
    }
  }, []);

  async function successTransaction() {
    try {
      const response = await axios
        .put(
          `${serverURL}/update/status/${details._id}`,
          {
            success: true,
          },
          {
            headers: { authorization: cookie.access_token },
          }
        )
        .then((result) => {
          window.location.reload();
        });
    } catch (err) {
      console.log(err);
    }
  }
  async function faildTransaction() {
    try {
      const response = await axios
        .put(
          `${serverURL}/update/status/${details._id}`,
          {
            success: false,
          },
          {
            headers: { authorization: cookie.access_token },
          }
        )
        .then((result) => {
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
          navigate(`/admin`);
        });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="information">
      <div className="flex justify-center">
        <form className="mt-10">
          <label htmlFor="search" className="mx-auto relative">
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Find User By Email"
              onChange={(e) => {
                setSearchParams({ search: e.target.value });
              }}
              className="block shadow-2xl mx-auto border-black border-2 rounded-xl my-5 px-5 py-2 md:w-full outline-none"
            />
            <button className="absolute top-[30px] text-2xl right-[15px]">
              <BiSearchAlt />
            </button>
          </label>
        </form>
      </div>
      {details.length !== 0 ? (
        <div className="user-details">
          <div className="bg-neutral-50 mt-8 border-black border-2 pt-20 rounded-3xl container mx-auto px-28 text-center flex flex-col md:flex-row gap-10 items-center">
            <BiUserCircle className="text-9xl" />
            <div className="text-xl font-bold items-start mx-auto flex flex-col gap-5">
              <span>
                ID: <span className="font-normal">{details._id}</span>
              </span>
              <span>
                Email: <span className="font-normal">{details.email}</span>
              </span>
              <span>
                Price:{" "}
                <span className="font-normal text-green-800">
                  ${details.price}
                </span>
              </span>
              <span>
                Payment Method:{" "}
                <span className="font-normal text-blue-500">
                  {details.payment_method}
                </span>
              </span>
              <span>
                Process:{" "}
                <span
                  className={`font-normal ${
                    details.process === "pending"
                      ? "text-yellow-400"
                      : details.process === "success"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {details.process}
                </span>
              </span>
              {details.phone ? <span>Phone: {details.phone}</span> : ""}
              <div className="flex gap-5 flex-end w-full my-10">
                <button
                  onClick={() => {
                    successTransaction();
                  }}
                  className="bg-green-700 text-base text-white px-5 py-2 rounded-xl"
                >
                  Completed
                </button>
                <button
                  onClick={() => {
                    faildTransaction();
                  }}
                  className="bg-red-700 text-base text-white px-5 py-2 rounded-xl"
                >
                  Not Completed
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : details.length === 0 ? (
        <div className="No-user">
          <div className=" bg-neutral-50 mt-8 border-black border-2 py-20 rounded-3xl container mx-auto p-10 text-center">
            <TbRefreshAlert className="text-8xl mx-auto" />
            <span className="text-4xl font-bold block mx-auto my-10">
              No Data Found !
            </span>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default FindUser;
