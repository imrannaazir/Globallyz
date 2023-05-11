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
    <div className=" bg-primary/30">
      <div className="mx-auto py-1 w-full max-w-screen-xl flex justify-between">
        {/*  */}
        <div className="flex gap-2 items-center text-xs">
          {/* address */}
          <p className="flex gap-2 items-center text-xs">
            <FaMapMarkerAlt />
            <span>Mumbai, india</span>
          </p>

          {/* phone number */}
          <p className="flex gap-2 items-center text-xs">
            <BsFillTelephoneFill />
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
          <CiFacebook />
          <AiFillTwitterCircle />
          <AiFillInstagram />
          <AiFillLinkedin />
        </div>
      </div>
    </div>
  );
}
