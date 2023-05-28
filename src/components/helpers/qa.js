// icons
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
// hooks
import { useState } from "react";
const QA = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="bg-blue-950 my-2 text-white">
      <h1
        onClick={() => {
          setShow(!show);
        }}
        className="cursor-pointer p-5 font-bold flex justify-between items-center"
      >
        {question}{" "}
        <MdKeyboardDoubleArrowDown
          className={`text-2xl transition-all ${
            show ? "rotate-90" : "rotate-0"
          }`}
        />
      </h1>
      <p
        className={`overflow-hidden text-slate-200 transition-all bg-slate-900 ${
          show ? "h-fit p-5" : "h-0 p-0"
        }`}
      >
        {answer}
      </p>
    </div>
  );
};
export default QA;
