// icons
import { BsTv } from "react-icons/bs";
import { FcApproval } from "react-icons/fc";
// motion
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
// axios
import axios from "axios";
// helpers
import USDTButton from "./usdtButton";
// email sending
import emailjs from "emailjs-com";
// Paypal buttons
import { PayPalButtons } from "@paypal/react-paypal-js";

export default function Price({ months, price, delay }) {
  // paypal payment
  const server = "https://hamzaiptv72.herokuapp.com/";
  const createOrder = (data) => {
    // Order is created on the server and the order id is returned
    return fetch(`${server}server/create-paypal-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // use the "body" param to optionally pass additional order information
      // like product skus and quantities
      body: JSON.stringify({
        product: {
          description: `IPTV: ${months} Months Subscription`,
          cost: price,
        },
      }),
    })
      .then((response) => response.json())
      .then((order) => order.id)
      .catch((err) => {
        console.log(err);
      });
  };
  const onApprove = (data) => {
    // Order is captured on the server and the response is returned to the browser
    return fetch(`${server}server/capture-paypal-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderID: data.orderID,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        const templateParams = {
          from_name: "paypal",
          message: `Full Name: 'paypal'
                    Subscription: ${months} Months
                    PRICE: $${price}
                    REGION: ${result.captureData.payer.address.country_code}
                    PAYER ID: ${result.captureData.payer.payer_id} 
                    PAYMENT method: PAYPAL
                    `,
        };
        // `PAYMENT: COMPLETED`
        emailjs
          .send(
            "service_g1pj7ws",
            "template_0tbx92r",
            templateParams,
            "t3gaD2_-mPX4WuJls"
          )
          .then(
            (response) => {
              console.log("SUCCESS!", response.status, response.text);
            },
            (err) => {
              console.log("FAILED...", err);
            }
          );
        return result;
      })
      .then((result) => {
        const fullName = `${result.captureData.payer.name.given_name} ${result.captureData.payer.name.surname}`;
        const templateParams = {
          from_name: fullName,
          message: `Full Name: ${fullName}
                    EMAIL: ${result.captureData.payer.email_address}
                    Subscription: ${months} Months
                    PRICE: $${price}
                    REGION: ${result.captureData.payer.address.country_code}
                    PAYER ID: ${result.captureData.payer.payer_id} 
                    PAYMENT method: PAYPAL
                    `,
        };
        // `PAYMENT: COMPLETED`
        emailjs.send(
          "service_uvlm19x",
          "template_cyn9957",
          templateParams,
          "cTxr1XVXPHaM1I-bG"
        );
        return result.captureData;
      })
      .then(async (result) => {
        console.log(result);
        const response = await axios
          .post(`${server}new-paypal-subscription`, {
            data: result,
            months,
            price,
          })
          .then((result) => {
            console.log(result);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <motion.div
      variants={fadeIn("left", delay)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.5 }}
      className="text-white w-full md:w-1/2 lg:w-[25%] shadow-3xl"
    >
      <div className="m-5 lg:m-1 p-10 border-purple-800 border-[3px] rounded-3xl">
        <h1 className="text-2xl font-light text-center">
          {months} {months > 1 ? "Months" : "Month"}
        </h1>
        <h1 className="text-6xl mt-10 text-center font-bold">${price}</h1>
        <h1 className="text-lg my-5 mb-10 text-center  font-bold">
          (+1 Month Free)
        </h1>
        <span className="flex itmes-center gap-4 my-3">
          <FcApproval className="inline-block text-md" />
          <span className="inline-block text-md">4K/FHD/HD/SD</span>
        </span>
        <span className="flex itmes-center gap-4 my-3">
          <FcApproval className="inline-block text-md" />
          <span className="inline-block text-md">+11.000 Channels</span>
        </span>
        <span className="flex itmes-center gap-4 my-3">
          <FcApproval className="inline-block text-md" />
          <span className="inline-block text-md">+100.000 Vod</span>
        </span>
        <span className="flex itmes-center gap-4 my-3">
          <FcApproval className="inline-block text-md" />
          <span className="inline-block text-md">Watch Channels</span>
        </span>
        <span className="flex itmes-center gap-4 my-3">
          <FcApproval className="inline-block text-md lg:text-2xl" />
          <span className="inline-block tmdt-lg">
            7 days money back guarantee
          </span>
        </span>
        <USDTButton months={months} price={price} delay={delay} />
        <PayPalButtons
          createOrder={(data, actions) => createOrder(data, actions)}
          onApprove={(data, actions) => onApprove(data, actions)}
        />
        <p className="text-center mt-10">Ready within 10-30 mins </p>
      </div>
    </motion.div>
  );
}
