import React from "react";

// icons
import { AiOutlineUser } from "react-icons/ai";
import { FiDollarSign } from "react-icons/fi";
// motion
import { motion } from "framer-motion";
import { fadeIn } from "./helpers/variants";
// countup
import CountUp from "react-countup";
// router
import { useNavigate } from "react-router-dom";
// axios
import axios from "axios";
// HOOKS
import { useState, useEffect } from "react";
// cookies
import { useCookies } from "react-cookie";
const Interface = () => {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState(0);
  const [welth, setWelth] = useState(0);
  const serverURL = "https://hamzaiptv72.herokuapp.com";
  // get cookies
  const [cookie, _] = useCookies(["access_token"]);
  // navigate
  const navigate = useNavigate();

  useEffect(() => {
    // handlers
    async function getFiveUsers() {
      // fetching data
      let result = await axios
        .get(`${serverURL}/get-five-users`, {
          headers: { authorization: cookie.access_token },
        })
        .then((result) => {
          setData(result.data.users);
        })
        .catch((err) => {
          console.log(err);
          navigate(`/admin`);
        });
    }
    async function getNumberOfUsers() {
      let result = await axios
        .get(`${serverURL}/get-all-users-count`, {
          headers: { authorization: cookie.access_token },
        })
        .then((result) => {
          setUsers(result.data.countUsers);
        })
        .catch((err) => {
          console.log(err);
          navigate(`/admin`);
        });
    }
    async function getWealth() {
      let response = await axios
        .get(`${serverURL}/get-all-money`, {
          headers: { authorization: cookie.access_token },
        })
        .then((result) => {
          let amount = result.data.amount;
          if (amount.length > 0) {
            console.log(amount);
            setWelth(amount[0].totalQuantity);
          } else {
            setWelth(0);
          }
        })
        .catch((err) => {
          console.log(err);
          navigate(`/admin`);
        });
    }
    getNumberOfUsers();
    getFiveUsers();
    getWealth();
    console.log(welth);
    return;
  }, []);
  return (
    <div cuserslassName="interface container mx-auto">
      <div className="text-center text-6xl font-bold my-10">
        <h1>Welcome Mr. Hamza</h1>
        <p className="text-base mt-5">
          here's what's happening in Your application
        </p>
      </div>
      <div className="flex flex-col md:flex-row my-24 gap-10 container mx-auto justify-between">
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="bg-red-400 flex rounded-xl shadow-2xl justify-center gap-5 text-center md:w-[400px] text-white py-10 px-3 text-6xl font-bold"
        >
          <CountUp start={0} end={users} duration={3} />
          <AiOutlineUser />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="bg-blue-400 flex rounded-xl shadow-2xl justify-center gap-5 text-center md:w-[400px] text-white py-10 px-3 text-6xl font-bold"
        >
          <CountUp start={0} end={welth} duration={3} />
          <FiDollarSign />
        </motion.div>
      </div>
      <div className="shadow-2xl container mx-auto">
        <table className="table-fixed w-full bg-white rounded-xl rounded-tl-none rounded-tr-none">
          <thead className="">
            <tr className="h-14">
              <th>Date</th>
              <th>Country</th>
              <th>Status</th>
              <th>Payment Method</th>
              <th>Price</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {data.map((result, i) => {
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
                    <a href={`dashboard/find-user/${result._id}`}>
                      {formattedDate}
                    </a>
                  </td>
                  <td>
                    <a href={`dashboard/find-user/${result._id}`}>
                      {result.country || "unkown"}
                    </a>
                  </td>
                  <td>
                    <a href={`dashboard/find-user/${result._id}`}>
                      {result.process}
                    </a>
                  </td>
                  <td className="text-blue-800">
                    <a href={`dashboard/find-user/${result._id}`}>
                      {result.payment_method}
                    </a>
                  </td>
                  <td className="text-green-800 font-bold">
                    <a href={`dashboard/find-user/${result._id}`}>
                      ${result.price}
                    </a>
                  </td>
                  <td>
                    <a href={`find-user/${result._id}`}>
                      {result.phone || "-- -- --"}
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Interface;
