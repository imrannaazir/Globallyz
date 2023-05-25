// eslint-disable-next-line react/prop-types
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
export default function Member({ member }) {
  const { name, designation, img, about } = member || {};
  return (
    <div className="flex gap-10 border-b-2  bg-white rounded-lg p-10">
      {/* img */}
      <div className="w-[104px] h-[138px] flex-shrink-0">
        <img className="w-[104px] h-[138px] flex-shrink-0 " src={img} alt="" />
        <p className="flex my-2 gap-3 justify-between px-2 text-primary">
          <BsLinkedin /> <BsInstagram /> <BsTwitter />
        </p>
      </div>
      <div className="flex flex-col gap-3 ">
        <h4 className="uppercase text-primary text-xl font-semibold">
          {name}
          <div className="h-[2px] w-[70px] -bottom-4 left-0 bg-primary"></div>
        </h4>

        <h6 className="font-semibold text-gray-500">{designation}</h6>
        <p className="text-justify">{about}</p>
      </div>
    </div>
  );
}
