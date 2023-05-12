import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function FAQs() {
  const [isOpenValue, setIsOpenValue] = useState(false);
  const handleOpen = (value) => {
    if (value === isOpenValue) {
      setIsOpenValue(false);
    } else {
      setIsOpenValue(value);
    }
  };
  return (
    <div className="max-w-screen-xl  mx-auto p-4">
      <h1 className="text-[2rem] text-center text-gray-700 font-semibold mb-10">
        Digital Marketing Services FAQs
      </h1>
      <div className="flex flex-col gap-2">
        {/* faq 1 */}
        <div className="bg-primary/10 border-primary/10  border-2">
          <h2>
            <button
              onClick={() => handleOpen(1)}
              type="button"
              className="flex items-center justify-between w-full p-5  text-left "
            >
              <span>What is Flowbite?</span>
              {isOpenValue === 1 ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
          </h2>
          <div
            className={`${
              isOpenValue === 1 ? "block transition-up" : "hidden"
            } bg-white`}
          >
            <div className="p-5 ">
              <p className="mb-2 ">
                Flowbite is an open-source library of interactive components
                built on top of Tailwind CSS including buttons, dropdowns,
                modals, navbars, and more.
              </p>
              <p className="">Check out this guide to learn how to</p>
            </div>
          </div>
        </div>
        {/* faq 2 */}
        <div className="bg-primary/10 border-primary/10  border-2">
          <h2>
            <button
              onClick={() => handleOpen(2)}
              type="button"
              className="flex items-center justify-between w-full p-5  text-left "
            >
              <span>What is Flowbite?</span>
              {isOpenValue === 2 ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
          </h2>
          <div
            className={`${
              isOpenValue === 2 ? "block transition-up" : "hidden"
            } bg-white`}
          >
            <div className="p-5 ">
              <p className="mb-2 ">
                Flowbite is an open-source library of interactive components
                built on top of Tailwind CSS including buttons, dropdowns,
                modals, navbars, and more.
              </p>
              <p className="">Check out this guide to learn how to</p>
            </div>
          </div>
        </div>

        {/* faq 3 */}
        <div className="bg-primary/10 border-primary/10  border-2">
          <h2>
            <button
              onClick={() => handleOpen(3)}
              type="button"
              className="flex items-center justify-between w-full p-5  text-left "
            >
              <span>What is Flowbite?</span>
              {isOpenValue === 3 ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
          </h2>
          <div
            className={`${
              isOpenValue === 3 ? "block transition-up" : "hidden"
            } bg-white`}
          >
            <div className="p-5 ">
              <p className="mb-2 ">
                Flowbite is an open-source library of interactive components
                built on top of Tailwind CSS including buttons, dropdowns,
                modals, navbars, and more.
              </p>
              <p className="">Check out this guide to learn how to</p>
            </div>
          </div>
        </div>

        {/* faq 4 */}
        <div className="bg-primary/10 border-primary/10  border-2">
          <h2>
            <button
              onClick={() => handleOpen(4)}
              type="button"
              className="flex items-center justify-between w-full p-5  text-left "
            >
              <span>What is Flowbite?</span>
              {isOpenValue === 4 ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
          </h2>
          <div
            className={`${
              isOpenValue === 4 ? "block transition-up" : "hidden"
            } bg-white`}
          >
            <div className="p-5 ">
              <p className="mb-2 ">
                Flowbite is an open-source library of interactive components
                built on top of Tailwind CSS including buttons, dropdowns,
                modals, navbars, and more.
              </p>
              <p className="">Check out this guide to learn how to</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
