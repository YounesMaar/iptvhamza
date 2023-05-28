import React from "react";

// icons
import {
  FaUsers,
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
} from "react-icons/fa";
import { useCookies } from "react-cookie";
// HOOks
import { useState, useEffect } from "react";
// axios
import axios from "axios";
// params && Link
import { useParams, useNavigate, redirect } from "react-router-dom";
// starting our project
const AllUsers = () => {
  const serverURL = "https://hamzaiptv72.herokuapp.com";
  const [data, setData] = useState([]);
  // cookies
  const [cookie, _] = useCookies();
  // navigate
  const navigate = useNavigate();
  // get the section
  const params = useParams();
  const section = params.section;
  //
  const [page, setPage] = useState(section);
  // handlers
  async function getThenUsers(category) {
    // fetching data
    let response = await axios
      .get(`${serverURL}/get-ten-users/${category}`, {
        headers: { authorization: cookie.access_token },
      })
      .then((response) => {
        setData(response.data.data);
      })
      .catch((err) => {
        console.log(err);
        navigate(`/admin`);
      });
  }

  useEffect(() => {
    // call functions
    getThenUsers(section);

    return;
  }, []);
  return (
    <div>
      <h1 className="text-4xl my-10 font-bold flex gap-4 justify-center items-center">
        <FaUsers /> Customers From The Database
      </h1>
      <div className="shadow-2xl mt-24 mx-auto">
        <table className="table-fixed w-full bg-white rounded-xl rounded-tl-none rounded-tr-none">
          <thead className="">
            <tr className="h-14">
              <th>Date</th>
              <th colSpan="2" className="text-center">
                Email
              </th>
              <th>Status</th>
              <th>Payment Method</th>
              <th>Price</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((result, i) => {
                const dateString = `${result.createdAt}`;
                const date = new Date(dateString);

                const day = String(date.getDate()).padStart(2, "0");
                const month = String(date.getMonth() + 1).padStart(2, "0"); // months are zero-based
                const year = date.getFullYear();

                const formattedDate = `${day}-${month}-${year}`;
                return (
                  <tr
                    key={i}
                    className="hover:bg-slate-100 cursor-pointer text-center rounded-xl transition-all h-14"
                  >
                    <td>
                      <a href={`/admin/dashboard/find-user/${result._id}`}>
                        {formattedDate}
                      </a>
                    </td>
                    <td colSpan="2">
                      <a href={`/admin/dashboard/find-user/${result._id}`}>
                        {result.email}
                      </a>
                    </td>
                    <td>
                      <a
                        className={`${
                          result.process === "success"
                            ? "text-green-800 font-bold"
                            : result.process === "faild"
                            ? "text-red-500 font-bold"
                            : ""
                        }`}
                        href={`/admin/dashboard/find-user/${result._id}`}
                      >
                        {result.process}
                      </a>
                    </td>
                    <td className="text-blue-800">
                      <a href={`/admin/dashboard/find-user/${result._id}`}>
                        {result.payment_method}
                      </a>
                    </td>
                    <td className="text-green-800 font-bold">
                      <a>${result.price}</a>
                    </td>
                    <td>
                      <a href={`/admin/dashboard/find-user/${result._id}`}>
                        {result.phone || "-- -- --"}
                      </a>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr className="h-28 text-center">
                <td colSpan="7" className="mx-auto font-bold text-4xl">
                  No Data Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center text-3xl gap-5 my-5">
        <div
          className="cursor-pointer"
          onClick={() => {
            let back = parseInt(page) - 1;
            if (back >= 1) {
              setPage(back);
            }
          }}
        >
          <a href={`/admin/dashboard/all-users/${page}`} replace={true}>
            <FaArrowAltCircleLeft />
          </a>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            let Next = parseInt(page) + 1;
            setPage(Next);
          }}
        >
          <a href={`/admin/dashboard/all-users/${page}`} replace={true}>
            <FaArrowAltCircleRight />
          </a>
        </div>
      </div>
      <p className="text-center">
        Page :<span className="font-bold"> {page}</span>
      </p>
    </div>
  );
};

export default AllUsers;
