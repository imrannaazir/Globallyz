import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
// eslint-disable-next-line react/prop-types
export default function Faq({ faq }) {
  const { question, ans } = faq || {};
  const [isOpenValue, setIsOpenValue] = useState(false);
  const handleOpen = (value) => {
    if (value === isOpenValue) {
      setIsOpenValue(false);
    } else {
      setIsOpenValue(value);
    }
  };
  return (
    <div className="bg-primary/10 border-primary/10  border-2">
      <h2>
        <button
          onClick={() => handleOpen(1)}
          type="button"
          className="flex items-center justify-between w-full p-5  text-left "
        >
          <span>{question}</span>
          {isOpenValue === 1 ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </h2>
      <div
        className={`${
          isOpenValue === 1 ? "block transition-up" : "hidden"
        } bg-white`}
      >
        <div className="p-5 ">{ans}</div>
      </div>
    </div>
  );
}
