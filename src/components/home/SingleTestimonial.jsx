import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaQuoteLeft } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
export default function SingleTestimonial({ review: data }) {
  const { img, review, designation, name } = data || {};
  return (
    <div
      className="
      p-10
      flex
      flex-col
      items-center
      gap-5
      
      "
    >
      <div className="flex gap-5 items-center">
        {/* avatar */}
        <div className="avatar w-24">
          <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img} />
          </div>
        </div>

        {/* about client */}
        <div className=" ">
          <h3 className="text-xl font-semibold text-primary">{name}</h3>
          <p className="italic">{designation}</p>
          {/* social media */}
          <div className="flex gap-2 mt-2">
            <BsLinkedin />
            <BsInstagram />
            <BsTwitter />
          </div>
        </div>
      </div>

      <div>
        {/* review */}
        <div className="relative">
          <p className="bg-transparent z-50 text-justify">{review}</p>
          <FaQuoteLeft className="absolute -top-5 -left-5 text-7xl text-primary/20" />
        </div>
      </div>
    </div>
  );
}
