import { BsGraphUpArrow } from "react-icons/bs";
import { GiDelighted } from "react-icons/gi";
import { VscGraph, VscGraphLeft } from "react-icons/vsc";
import { MdOutlineManageAccounts } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
export default function ServicePricing() {
  const services = [
    {
      id: 1,
      name: "Marketing",
      icon: BsGraphUpArrow,
      color: "bg-orange-100 ",
      route: "/marketing-service",
      details: [
        "Advertising",
        "Influencer Marketing",
        "Market Research",
        "Search Engine Marketing",
        "Social Media Marketing",
        "Email Marketing",
        "Marketing Communications",
        "Affiliate Marketing",
        "Brand Awareness",
        "Loyalty Program",
        "Public Relations",
        "Content Marketing",
        "Direct Marketing",
        "Seo",
        "Guenlia Marketing",
        "Global Marketing",
        "Networking",
      ],
    },
    {
      id: 2,
      icon: VscGraphLeft,
      color: "bg-cyan-100",
      route: "/pre-sales-service",
      name: "Pre-Sales",
      details: [
        "Conductong competitor research",
        "Conduction customer analysis",
        "Prospecting",
        "Qualifying leads	",
        "Networking",
        "Making discovery calls",
        "Performing product demos	",
        "Drafting and delivering proposals",
        "Enable slaes team with quaified leads	",
        "Handover leads to sales	",
        "Do pilots/proof of concepts	",
        "prepare sales pitches/decks	",
        "Drafting and delivering Contracts/SOWs/Changes to contracts",
        "after sale partnership with customer until the implementation is successfull",
        "address challenges between the customers ad the delivery	",
      ],
    },
    {
      id: 3,
      icon: VscGraph,
      color: "bg-slate-100",
      route: "/sales-service",
      name: "Sales",
      details: [
        "Persuade leads to Cutomer coversion	",
        "In-person meets	",
        "email/call follow ups	",
        "relatiosnhip events	",
        "provide testimonials	",
        "know the heirarchy and customer potential	",
        "Negotiation and closing - sales job	",
        "Prep sign SOWs/Contracts	",
        "Introduce & establish  Account Managers	",
        "on and off gauge the implementation success/failure	",
        "Identify Strategic parterships 	",
        "Networking",
        "Insights to Prodcut team	",
        "Course correction to Pre-sales	",
      ],
    },
    {
      id: 4,
      icon: MdOutlineManageAccounts,
      color: "bg-pink-100",
      route: "/account-management-service",
      name: "Account Management",
      details: [
        "Ensure Delivery	",
        "Enable organic growth (refer Delight)	",
        "Consistantly enrich customer relationships 	",
        "constantly manage relationships with decision makers and influencers	",
        "provide intel and insights of customers & projects to the Sales & pre-sales 	",
      ],
    },
    {
      id: 5,
      icon: CiDeliveryTruck,
      color: "bg-yellow-100",
      route: "/delivery-service",
      name: "Delivery",
      details: [
        "Understand ",
        "Scope",
        "Schedule",
        "Business Priorities",
        "Agile methodology	",
        "Resource management	",
        "Accountability	",
        "Handshake with Account Management	",
      ],
    },
    {
      id: 6,
      icon: GiDelighted,
      color: "bg-green-100",
      route: "/delight-service",
      name: "Delight",
      details: ["Cross Sell", "	Up Sell"],
    },
  ];
  return (
    <div className="max-w-screen-xl  mx-auto p-4 grid grid-cols-6 gap-3 my-20">
      {services.map((service) => (
        <div
          key={service.id}
          className={`${service.color} flex justify-center flex-col items-center p-10 text-center rounded-md gap-5 hover:bg-primary hover:text-white duration-500`}
        >
          <service.icon className="text-6xl " />
          <h3 className="text-lg">{service.name}</h3>
        </div>
      ))}
    </div>
  );
}
