import Banner from "../components/general/Banner";
import Layout from "../components/ui/Layout";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { BsArrowRight } from "react-icons/bs";

export default function Package() {
  const packages = {
    id: 1,
    service: "Influencer Marketing ",
    plans: [
      {
        id: 1,
        planName: "Basic",
        color: "cyan-100",
        monthlyPrice: 100,
        quarterlyPrice: 270,
        annualPrice: 1000,
        benefits: [
          " Identification of relevant influencers",
          "Basic influencer outreach",
        ],
        offerings: [" Collaborations with influencers", "Content co-creation"],
      },
      {
        id: 2,
        planName: "Premium",
        color: "orange-100",
        monthlyPrice: 200,
        quarterlyPrice: 540,
        annualPrice: 2000,
        benefits: [
          "Basic + enhanced influencer research and targeting",
          "Performance tracking and measurement",
        ],
        offerings: [
          " Custom influencer campaigns",
          "Advanced influencer analytics",
        ],
      },
      {
        id: 3,
        planName: "Elite",
        color: "yellow-100",
        monthlyPrice: 300,
        quarterlyPrice: 810,
        annualPrice: 3000,
        benefits: [
          " Premium + influencer relationship management",
          " Influencer network expansion",
        ],
        offerings: [
          " Dedicated influencer support",
          "Influencer program development",
        ],
      },
    ],
  };

  return (
    <Layout bg_img="https://i.ibb.co/W64yYcK/pricing.webp">
      <Banner title="Influencer Marketing Pricing"></Banner>
      <div className="max-w-screen-xl  mx-auto p-4 grid grid-cols-3 gap-5 my-20 ">
        {packages.plans.map((plan) => (
          <div
            className={`p-5 flex flex-col justify-between gap-5 bg-${plan.color} rounded-lg shadow-lg`}
            key={plan.id}
          >
            <div>
              <h1 className="text-center text-[2rem]  font-semibold">
                {plan.planName}
              </h1>
              <ul className="">
                <h5 className="text-[1.3rem] text-gray-500 mt-4">Benefits</h5>
                {plan.benefits.map((benefit, i) => (
                  <li className="flex items-start gap-2" key={i}>
                    {" "}
                    <HiOutlineCheckBadge className="mt-1 text-primary" />{" "}
                    {benefit}
                  </li>
                ))}
              </ul>
              <ul className="">
                <h5 className="text-[1.3rem] text-gray-500 mt-4">Offerings</h5>
                {plan.offerings.map((offering, i) => (
                  <li className="flex items-start gap-2" key={i}>
                    {" "}
                    <HiOutlineCheckBadge className="mt-1 text-primary" />{" "}
                    {offering}
                  </li>
                ))}
              </ul>
            </div>
            {/* plans */}
            <div className=" flex flex-col gap-2">
              <button className="flex w-full bg-gradient-to-t from-primary to-primary/80 text-lg font-semibold text-white px-6 py-2 justify-between items-center hover:translate-x-1 duration-200">
                $ {plan.monthlyPrice}/Month <BsArrowRight />
              </button>
              <button className="flex w-full bg-gradient-to-t from-primary to-primary/80 text-lg font-semibold text-white px-6 py-2 justify-between items-center hover:translate-x-1 duration-200">
                $ {plan.quarterlyPrice}/Quarter <BsArrowRight />
              </button>
              <button className="flex w-full bg-gradient-to-t from-primary to-primary/80 text-lg font-semibold text-white px-6 py-2 justify-between items-center hover:translate-x-1 duration-200">
                $ {plan.annualPrice}/Annual <BsArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
