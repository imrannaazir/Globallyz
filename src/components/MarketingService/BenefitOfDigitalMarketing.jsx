/* eslint-disable react/no-unescaped-entities */
import SecondaryBtn from "../ui/SecondaryBtn";
import Statistics from "./Statistics";

export default function BenefitOfDigitalMarketing() {
  return (
    <div className="max-w-screen-xl  flex-wrap   mx-auto p-4">
      <div className="text-center py-5">
        <h2 className="text-gray-700 text-[2rem] font-semibold">
          How Digital Marketing Services Drive Business Growth
        </h2>
        <p className="text-primary text-lg">
          Engage Your Target Customers at the Right Time on the Right Platform
        </p>
      </div>
      <div className="flex items-center justify-between ">
        <img
          className="flex-shrink-0 max-w-[446px]"
          src="https://spellthemes.com/demos/html-templates/acea/preview/assets/images/all-img/history-1.png"
          alt=""
        />

        {/* content */}
        <div className="flex-1 max-w-[680px]">
          <p className="leading-8">
            Digital marketing services provide businesses of all sizes with an
            opportunity to market their brand 24/7 at a low cost. From startups
            to medium-sized enterprises to multiple-location companies, a
            digital marketing company helps you expand your niche market reach
            to offer goods and services to your target customers, irrespective
            of time differences or location.
            <br />
            Hiring an internet marketing agency is one of the best ways to reach
            your prospects while maintaining a robust relationship with your
            existing clients. As long as your business has a strong digital
            presence, your customers will always find you.
            <br />
            Since 2005, our digital marketing company has been partnering with
            hundreds of businesses in the United States to achieve their
            conversion goals. Throughout the years, we’ve provided an array of
            custom digital marketing services to our clients and generated the
            following results:
          </p>
        </div>
      </div>
      {/* statistics */}
      <Statistics />
      <p className="text-center">
        Our digital marketing agency follows a systematic approach to ensure all
        our online marketing efforts deliver profitable results. Leverage
        Thrive’s internet marketing services today and let us help you boost
        your customer acquisition and retention rates.
      </p>
      {/* btn */}
      <div className="text-center">
        <SecondaryBtn newClass="rounded-full">Let's Talk</SecondaryBtn>
      </div>
    </div>
  );
}
