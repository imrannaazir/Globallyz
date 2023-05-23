import { FaAngleRight } from "react-icons/fa";
import Banner from "../components/general/Banner";
import Layout from "../components/ui/Layout";
import { Link, useParams } from "react-router-dom";

export default function PricingOfService() {
  const { name } = useParams();

  const pricingInfos = [
    {
      id: 1,
      name: "Marketing",
      services: [
        {
          id: 1,
          service: "Influencer Marketing ",
        },
        {
          id: 2,
          service: "Market Research",
        },
        {
          id: 3,
          service: "Search Engine Marketing ",
        },
        {
          id: 4,
          service: "Social Media Marketing",
        },
        {
          id: 5,
          service: "Email Marketing",
        },
        {
          id: 6,
          service: "Marketing Communications",
        },
        {
          id: 7,
          service: "Affiliate Marketing",
        },
        {
          id: 8,
          service: "Brand Awareness",
        },
        {
          id: 9,
          service: "Loyalty Program",
        },
        {
          id: 10,
          service: "Public Relations",
        },
        {
          id: 11,
          service: "Content Marketing ",
        },
        {
          id: 12,
          service: "Direct Marketing",
        },
        {
          id: 13,
          service: "SEO",
        },
        {
          id: 14,
          service: "Guerilla Marketing",
        },
        {
          id: 15,
          service: "Global Marketing ",
        },
        {
          id: 16,
          service: "Networking",
        },
      ],
    },
    {
      id: 2,
      name: "Pre-Sales",
      services: [
        {
          id: 17,
          service: "Finding the contacts",
        },
        {
          id: 18,
          service: "Conducting competitor research",
        },
        {
          id: 19,
          service: "Conducting customer analysis",
        },
        {
          id: 20,
          service: "Prospecting & making appointments-pay-per-appointment",
        },
        {
          id: 21,
          service: "Qualification leads",
        },
        {
          id: 22,
          service: "Networking",
        },
        {
          id: 23,
          service: "After making the contact",
        },
        {
          id: 24,
          service: "Making discovery calls (knowing customer pain points)",
        },
        {
          id: 25,
          service: "Performing product demos",
        },
        {
          id: 26,
          service:
            "Drafting and delivering proposals(responding to RFI/RFP/RFQs)",
        },
        {
          id: 27,
          service: "Enable sales team with qualified leads ",
        },
        {
          id: 28,
          service: "Handover leads to sales",
        },
        {
          id: 29,
          service: "Do pilots/proof of concepts",
        },
        {
          id: 30,
          service: "After handing over to sales",
        },
        {
          id: 31,
          service: "Prepare sales pitches/decks",
        },
        {
          id: 32,
          service: "Drafting and delivery Contracts/SOWs/Changes to contacts",
        },
        {
          id: 33,
          service:
            "After-sale partnership with customer until the implementation is successful",
        },
      ],
    },
    {
      id: 3,
      name: "Sales",
      services: [
        {
          id: 34,
          service: "Persuade leads to Customer conversions",
        },
        {
          id: 35,
          service: "In-person meets",
        },
        {
          id: 36,
          service: "Email/call follow-ups",
        },
        {
          id: 37,
          service: "Relationship events",
        },
        {
          id: 38,
          service: "Provide testimonials",
        },
        {
          id: 39,
          service: "Know the hierarchy and customer potential",
        },
        {
          id: 40,
          service: "Negotiation and closing-sales job",
        },
        {
          id: 41,
          service: "Prep sign SOWs/Contacts",
        },
        {
          id: 42,
          service: "Introduce & establish Account Managers",
        },
        {
          id: 43,
          service: "On the off gauge the implementation success/failure",
        },
        {
          id: 44,
          service: "Identify Strategic partnerships",
        },
        {
          id: 45,
          service: "Networking ",
        },
        {
          id: 46,
          service: "Insights to Product team",
        },
        {
          id: 47,
          service: "Insights to Marketing team",
        },
      ],
    },
    {
      id: 4,
      name: "Account Management",
      services: [
        {
          id: 48,
          service: "Ensure Delivery",
        },
        {
          id: 49,
          service: "Enable Organic Growth(refer Delight)",
        },
        {
          id: 50,
          service: "Consistently Enrich Customer Relationships",
        },
        {
          id: 51,
          service:
            "Constantly Manage Relationships with Decision Markers and Influencer",
        },
        {
          id: 52,
          service:
            "Provide Intel and Insights of Customers & Projects to the Sales & Pre-sales",
        },
      ],
    },
    {
      id: 5,
      name: "Delivery",
      services: [
        {
          id: 53,
          service: "Delivery",
        },
      ],
    },
    {
      id: 6,
      name: "Strategic Alliances Partnerships Service",
      services: [
        {
          id: 53,
          service: "Delivery",
        },
      ],
    },
  ];

  const selectedService = pricingInfos.find(
    (service) =>
      service.name.toLowerCase().trim().replace(/\s+/g, "-") ===
      name.toLowerCase().trim().replace(/\s+/g, "-")
  );
  return (
    <Layout bg_img="https://i.ibb.co/W64yYcK/pricing.webp">
      <Banner title={`${selectedService?.name} Service pricing`} />
      <div className="  py-10">
        <div className="max-w-screen-xl  mx-auto p-4 grid grid-cols-4 gap-5">
          {selectedService.services.map((pricing) => (
            <Link
              to={`/pricing/${name
                ?.toLowerCase()
                .trim()
                .replace(/\s+/g, "-")}/${pricing?.service
                ?.toLowerCase()
                .trim()
                .replace(/\s+/g, "-")}`}
              className="bg-white border-t-primary border-t-4 p-5 shadow-lg flex flex-col gap-5 group"
              key={pricing.id}
            >
              <h2 className="text-[1.6rem]">{pricing.service}</h2>
              <button className=" flex items-center text-primary  group-hover:translate-x-1 duration-200">
                View Package <FaAngleRight />
              </button>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
