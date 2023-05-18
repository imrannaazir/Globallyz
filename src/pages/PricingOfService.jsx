import { FaAngleRight } from "react-icons/fa";
import Banner from "../components/general/Banner";
import Layout from "../components/ui/Layout";

export default function PricingOfService() {
  const marketingPricing = [
    {
      id: 1,
      service: "Influencer Marketing ",
      plan: [
        {
          id: 1,
          planName: "Basic",
          monthlyPrice: 100,
          quarterlyPrice: 270,
          annualPrice: 1000,
          benefits: [
            " Identification of relevant influencers",
            "Basic influencer outreach",
          ],
          offerings: [
            " Collaborations with influencers",
            "Content co-creation",
          ],
        },
        {
          id: 2,
          planName: "Premium",
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
    },
  ];
  return (
    <Layout>
      <Banner title="Marketing Service pricing" />
      <div className=" bg-gray-100">
        <div className="max-w-screen-xl  mx-auto p-4 grid grid-cols-4">
          {marketingPricing.map((pricing) => (
            <div
              className="bg-white border-t-primary border-t-4 p-5 shadow-lg flex flex-col gap-5 group"
              key={pricing.id}
            >
              <h2 className="text-[1.6rem]">{pricing.service}</h2>
              <button className=" flex items-center text-primary  group-hover:translate-x-1 duration-200">
                View Package <FaAngleRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
