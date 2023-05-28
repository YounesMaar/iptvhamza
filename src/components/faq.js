//helpers
import QA from "./helpers/qa";
// icons
import { BsWhatsapp } from "react-icons/bs";

const Faq = () => {
  return (
    <div id="faq" className="faq">
      <div className="container mx-auto">
        <h1 className="text-4xl text-white font-bold mb-16 text-center">
          Frequently Asked Questions (FAQ)
        </h1>
        <div className="QA">
          <QA
            question={"Available payment methods?"}
            answer={"Paypal Credit Card Crypto"}
          />
          <QA
            question={"Which devices can be used for IPTV?"}
            answer={[
              `Our IPTV services are accessible via all smart TV devices 
            (Samsung, Sony, LG...), all Android devices (phones), 
            Apple TV, iPhone, Google Chromecast, MAG box in the STB emulator app
             and FireStick.`,
            ]}
          />
          <QA
            question={"Recommended internet speed?"}
            answer={[
              `If your download speed is not less than 
            30 mbps, then everything will work smoothly in 
            the highest quality. If you are not sure, ask for
             1 day trial to test the quality first.`,
            ]}
          />
          <QA
            question={"Which countries are present?"}
            answer={[
              `Netherlands Belgium France UK Germany Switzerland Austria Poland Spain Malta Portugal Italy USA Canada Australia New Zealand Arabic India Pakistan Iran Turkey Azerbaycan Kurdistan Africa Afghanistan Armenia Exyu Slovenia Albania Greece Latino Brazil Caribbean Suriname Sweden Denmark Norway Finland Czech Bulgaria Romania Hungary Russia Georgia/Kazakh Ukraine Lithuania Latvia Estonia China/HK Malaysia Philippines Indonesia Korea Thailand Taiwan Vietnam
            `,
            ]}
          />
          <QA
            answer={[
              "You may install your account on multiple devices, but keep in mind that it works on 1 at a time.",
            ]}
            question={"How many connections at once?"}
          />
        </div>
        <div className="text-white w-full flex flex-col md:flex-row justify-between items-center gap-10 bg-blue-950 md:rounded-2xl my-24 py-16 px-10">
          <div className="flex gap-10 flex-col md:flex-row">
            <BsWhatsapp className="text-7xl mx-auto" />
            <div>
              <h1 className="text-5xl font-bold mb-5">Online Support </h1>
              <p>You still have a question? Send a message </p>
            </div>
          </div>
          <a
            href="https://api.whatsapp.com/send/?phone=212623084067&text&type=phone_number&app_absent=0"
            target="_blank"
            id="contact-us"
            className="bg-blue-600 py-2 px-10 rounded-full font-bold"
          >
            Whatsapp US
          </a>
        </div>
      </div>
    </div>
  );
};

export default Faq;
