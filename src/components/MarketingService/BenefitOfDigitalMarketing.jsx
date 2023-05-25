/* eslint-disable react/no-unescaped-entities */
import SecondaryBtn from "../ui/SecondaryBtn";

// eslint-disable-next-line react/prop-types
export default function BenefitOfDigitalMarketing({ name, url, description }) {
  return (
    <div className="max-w-screen-xl  flex-wrap   mx-auto p-4 bg-white my-10 rounded-lg">
      <div className="text-center py-5">
        <h2 className="text-gray-700 text-[2rem] font-semibold">
          How {name} Drive Business Growth
        </h2>
        <p className="text-primary text-lg">
          Engage Your Target Customers at the Right Time on the Right Platform
        </p>
      </div>
      <div className="flex items-center justify-between ">
        <img className="flex-shrink-0 max-w-[446px]" src={url} alt={name} />

        {/* content */}
        <div className="flex-1 max-w-[680px]">
          <p className="leading-8">{description}</p>
        </div>
      </div>

      {/* btn */}
      <div className="text-center">
        <SecondaryBtn url="/contact" newClass="rounded-full">
          Let's Talk
        </SecondaryBtn>
      </div>
    </div>
  );
}
