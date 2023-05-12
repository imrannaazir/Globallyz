import { BsGraphUpArrow } from "react-icons/bs";
import { GiDelighted } from "react-icons/gi";
import { VscGraph, VscGraphLeft } from "react-icons/vsc";
import { MdOutlineManageAccounts } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="max-w-screen-xl  mx-auto p-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-20 gap-5 ">
      {/* card 1 */}
      <Link
        to="/marketing-service"
        className="px-10 shadow-lg max-w-[400px] rounded-sm relative group hover:bg-gradient-to-tr from-primary to-blue-400  transition duration-500 "
      >
        <BsGraphUpArrow className="absolute right-5 top-5 text-[80px] text-primary/40 group-hover:text-white group-hover:transition-up" />
        <div className="my-20">
          <div className="mb-9">
            <h1 className="text-2xl  relative mb-3 text-primary group-hover:text-white group-hover:transition-up">
              Marketing
            </h1>
            <div className="h-[2px] w-[50px] -bottom-4 left-0 bg-primary group-hover:bg-white group-hover:transition-up"></div>
          </div>
          <p className="font-medium text-gray-400 group-hover:text-white group-hover:transition-down">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
        </div>
      </Link>
      {/* card 2 */}

      <div className="px-10 shadow-lg max-w-[400px] rounded-sm relative group hover:bg-gradient-to-tr from-primary to-blue-400  transition duration-500 ">
        <VscGraphLeft className="absolute right-5 top-5 text-[80px] text-primary/40 group-hover:text-white group-hover:transition-up" />
        <div className="my-20">
          <div className="mb-9">
            <h1 className="text-2xl  relative mb-3 text-primary group-hover:text-white group-hover:transition-up">
              Presales
            </h1>
            <div className="h-[2px] w-[50px] -bottom-4 left-0 bg-primary group-hover:bg-white group-hover:transition-up"></div>
          </div>
          <p className="font-medium text-gray-400 group-hover:text-white group-hover:transition-down">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
        </div>
      </div>

      {/* card 3 */}
      <div className="px-10 shadow-lg max-w-[400px] rounded-sm relative group hover:bg-gradient-to-tr from-primary to-blue-400  transition duration-500 ">
        <VscGraph className="absolute right-5 top-5 text-[80px] text-primary/40 group-hover:text-white group-hover:transition-up" />
        <div className="my-20">
          <div className="mb-9">
            <h1 className="text-2xl  relative mb-3 text-primary group-hover:text-white group-hover:transition-up">
              Sales
            </h1>
            <div className="h-[2px] w-[50px] -bottom-4 left-0 bg-primary group-hover:bg-white group-hover:transition-up"></div>
          </div>
          <p className="font-medium text-gray-400 group-hover:text-white group-hover:transition-down">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
        </div>
      </div>

      {/* card 4 */}
      <div className="px-10 shadow-lg max-w-[400px] rounded-sm relative group hover:bg-gradient-to-tr from-primary to-blue-400  transition duration-500 ">
        <MdOutlineManageAccounts className="absolute right-5 top-5 text-[80px] text-primary/40 group-hover:text-white group-hover:transition-up" />
        <div className="my-20">
          <div className="mb-9">
            <h1 className="text-2xl  relative mb-3 text-primary group-hover:text-white group-hover:transition-up">
              Account Management
            </h1>
            <div className="h-[2px] w-[50px] -bottom-4 left-0 bg-primary group-hover:bg-white group-hover:transition-up"></div>
          </div>
          <p className="font-medium text-gray-400 group-hover:text-white group-hover:transition-down">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
        </div>
      </div>

      {/* card 5 */}
      <div className="px-10 shadow-lg max-w-[400px] rounded-sm relative group hover:bg-gradient-to-tr from-primary to-blue-400  transition duration-500 ">
        <CiDeliveryTruck className="absolute right-5 top-5 text-[80px] text-primary/40 group-hover:text-white group-hover:transition-up" />
        <div className="my-20">
          <div className="mb-9">
            <h1 className="text-2xl  relative mb-3 text-primary group-hover:text-white group-hover:transition-up">
              Delivery
            </h1>
            <div className="h-[2px] w-[50px] -bottom-4 left-0 bg-primary group-hover:bg-white group-hover:transition-up"></div>
          </div>
          <p className="font-medium text-gray-400 group-hover:text-white group-hover:transition-down">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
        </div>
      </div>
      {/* card 1 */}
      <div className="px-10 shadow-lg max-w-[400px] rounded-sm relative group hover:bg-gradient-to-tr from-primary to-blue-400  transition duration-500 ">
        <GiDelighted className="absolute right-5 top-5 text-[80px] text-primary/40 group-hover:text-white group-hover:transition-up" />
        <div className="my-20">
          <div className="mb-9">
            <h1 className="text-2xl  relative mb-3 text-primary group-hover:text-white group-hover:transition-up">
              Delight
            </h1>
            <div className="h-[2px] w-[50px] -bottom-4 left-0 bg-primary group-hover:bg-white group-hover:transition-up"></div>
          </div>
          <p className="font-medium text-gray-400 group-hover:text-white group-hover:transition-down">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
        </div>
      </div>
    </div>
  );
}
