// hooks
import { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

// images
import usdt from "../assets/usdt.png";

// copying the text
import { CopyToClipboard } from "react-copy-to-clipboard";

// axios
import axios from "axios";
// validate emails
import validator from "validator";

// icons
import { AiFillCopy } from "react-icons/ai";
import { GrValidate } from "react-icons/gr";
import { AiOutlineSound } from "react-icons/ai";

// email-js
import emailjs from "emailjs-com";

const USDTButton = ({ months, price, delay }) => {
  const [clicked, setClicked] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState();
  // server URL
  const server = "https://hamzaiptv72.herokuapp.com";

  const onSend = async () => {
    const isValidEmail = validator.isEmail(email);
    const isVaildEmail = validator.isMobilePhone(phone);
    if (isValidEmail && isVaildEmail) {
      // send to email
      const fullName = `Crypto buyer`;
      const templateParams = {
        from_name: fullName,
        message: `Full Name: ${fullName}
                    Subscription: ${months} Months
                    PRICE: $${price}
                    PAYMENT method: USDT
                    Time: ${new Date()}`,
      };
      // `PAYMENT: COMPLETED`
      emailjs.send(
        "service_uvlm19x",
        "template_cyn9957",
        templateParams,
        "cTxr1XVXPHaM1I-bG"
      );
      emailjs.send(
        "service_g1pj7ws",
        "template_0tbx92r",
        templateParams,
        "t3gaD2_-mPX4WuJls"
      );

      const response = await axios
        .post(`${server}/new-crypto-subscription`, {
          payment_method: "crypto",
          name: "john Doe",
          email,
          months,
          price: price,
          process: "pending",
          phone,
        })
        .then((result) => {
          console.log(result.status);
        })
        .catch((err) => {
          console.error(err);
        });
      setClicked(false);
    } else {
      setError(true);
    }
  };
  return (
    <div className="tether">
      <button
        onClick={() => {
          setClicked(true);
        }}
        className="bg-green-500 text-white w-full rounded-sm py-2 font-bold cursor-pointer my-3"
      >
        USDT Tether
      </button>
      <div
        onClick={() => {
          if (!completed) {
            setClicked(false);
          }
        }}
        className={`overlay-usdt fixed ${
          clicked ? "block z-[9999999]" : "hidden z-10"
        }`}
      ></div>
      <div
        className={`fixed overflow-hidden bg-white rounded-2xl transition-all -translate-x-1/2 left-1/2 ${
          clicked
            ? "w-[full sm:w-[90%] md:w-[70%] lg:w-1/2 opacity-1 z-[9999999] p-8 -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2"
            : "h-0 w-0 opacity-0 top-0 -translate-y-0"
        }`}
      >
        <IoCloseCircleOutline
          onClick={() => {
            if (!completed) {
              setClicked(false);
            }
          }}
          className="ms-auto text-5xl cursor-pointer text-black"
        />
        <div className="text-black">
          {completed ? (
            <div className="proofing">
              <GrValidate className="mx-auto text-8xl" />
              <div className="text-center my-10">
                <p className="font-bold text-lg">Where is My IPTV ?</p>
                <p>
                  Send A screenshot Proof showing the transaction information
                  <span className="text-blue-500 font-bold">
                    {" "}
                    Make Sure to hit completed !!!
                  </span>
                </p>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  type="email"
                  className={`border-2 rounded-2xl px-5 py-1 block mx-auto my-3 transition-all ${
                    error
                      ? " border-red-400 placeholder:text-red-500"
                      : "border-black"
                  } `}
                  placeholder="Enter Your Email"
                />
                <input
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  value={phone}
                  type="numeric"
                  className={`border-2 rounded-2xl px-5 py-1 block mx-auto my-3 transition-all ${
                    error
                      ? " border-red-400 placeholder:text-red-500"
                      : "border-black"
                  } `}
                  placeholder="+21206060606"
                />

                <a
                  href="https://api.whatsapp.com/send/?phone=212623084067&text&type=phone_number&app_absent=0"
                  target="_blank"
                  className="underline hover:text-blue-500 cursor-pointer"
                >
                  +212623-084067
                </a>
              </div>
              <button
                onClick={onSend}
                className="block bg-blue-500 text-white px-4 py-2 font-bold rounded-2xl mx-auto"
              >
                Completed
              </button>
              <button
                onClick={() => {
                  setCompleted(false);
                }}
                className="text-slate-700 font-bold"
              >
                Back
              </button>
            </div>
          ) : (
            <div className="money-sending">
              <div>
                <img src={usdt} className="mx-auto w-16" />
              </div>
              <div className="flex flex-col sm:mx-12 mx-4 my-8 font-bold">
                <span>Price: ${price}</span>
                <span>NetWork: ( BSC Chain ) BEP20</span>
                <span className="pt-4 flex items-center gap-2 uppercase text-center font-bold text-base mx-auto">
                  <AiOutlineSound className="text-8xl" />
                  send usdt to this Tether Wallet bellow and then send proofs
                </span>
              </div>
              <div className="flex justify-center">
                <CopyToClipboard
                  text={"0x01e24800509b93c090876fa19d7312ae7c7166dd"}
                >
                  <button className="flex flex-col sm:flex-row gap-2 items-center border-2 border-purple-950 sm:p-3 py-3 px-1 rounded-lg bg-slate-100 wallet-address cursor-pointer font-bold">
                    <span className="text-sm md:text-lg">
                      0x01e24800509b93c090876fa19d7312ae7c7166dd
                    </span>
                    <AiFillCopy className="text-3xl" />
                  </button>
                </CopyToClipboard>
              </div>
              <button
                onClick={() => {
                  setCompleted(true);
                }}
                className="text-white bg-blue-500 font-bold px-5 py-2 mx-auto rounded-xl mt-10 block"
              >
                Submit
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default USDTButton;
