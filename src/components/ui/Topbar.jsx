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
            <span>Hyderabad, India</span>
          </p>

          {/* phone number */}
          <p className="flex gap-2 items-start text-xs">
            <BsFillTelephoneFill className="mt-1" />
            <span>+91-76184-20994</span>
          </p>

          {/* email */}
          <p className="flex gap-2 items-center text-xs">
            <BsEnvelopeFill />
            <span>Contact@globallyz.com</span>
          </p>
        </div>
        {/* social link */}
        <div className="flex gap-2">
          <a
            href="https://www.facebook.com/profile.php?id=100092753354641&is_tour_completed=true"
            target="_blank"
            rel="noreferrer"
          >
            <CiFacebook className="text-2xl text-[#3b5998] duration-500 hover:text-primary" />
          </a>

          <a
            href="https://twitter.com/globallyz_bd"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillTwitterCircle className="text-2xl text-[#00acee] duration-500 hover:text-primary" />
          </a>

          <a
            href="https://www.instagram.com/globallyz/?fbclid=IwAR0S4qDEgjcfH9ozrY0B0ZA_4f_CCpxShdpARqWfEig1C-EyZZmth52Ln8Y"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram className="text-2xl text-[#d62976] duration-500 hover:text-primary" />
          </a>

          <a
            href="https://www.linkedin.com/company/90681382/admin/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className="text-2xl text-[#0072b1] duration-500 hover:text-primary" />
          </a>
        </div>
      </div>
    </div>
  );
}
