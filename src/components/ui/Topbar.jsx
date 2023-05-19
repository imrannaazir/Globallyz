import { FaMapMarkerAlt } from "react-icons/fa";
import { BsEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";

export default function TopBar() {
  return (
    <div className=" bg-yellow-500/50 z-50">
      <div className="mx-auto px-4 py-2 w-full max-w-screen-xl flex flex-wrap justify-between">
        {/*  */}
        <div className="flex flex-wrap gap-2 items-center text-xs">
          {/* address */}
          <p className="flex gap-2 items-start text-xs">
            <FaMapMarkerAlt className="mt-1" />
            <span>Mumbai, india</span>
          </p>

          {/* phone number */}
          <p className="flex gap-2 items-start text-xs">
            <BsFillTelephoneFill className="mt-1" />
            <span>+9134895 -6555 - 42</span>
          </p>

          {/* email */}
          <p className="flex gap-2 items-center text-xs">
            <BsEnvelopeFill />
            <span>nfoname12@gmail.com</span>
          </p>
        </div>
        {/* social link */}
        <div className="flex gap-2">
          <CiFacebook className="text-2xl text-gray-300 duration-500 hover:text-primary" />
          <AiFillTwitterCircle className="text-2xl text-gray-300 duration-500 hover:text-primary" />
          <AiFillInstagram className="text-2xl text-gray-300 duration-500 hover:text-primary" />
          <AiFillLinkedin className="text-2xl text-gray-300 duration-500 hover:text-primary" />
        </div>
      </div>
    </div>
  );
}
