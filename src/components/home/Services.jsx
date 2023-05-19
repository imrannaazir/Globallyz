import { BsCheck2Circle, BsGraphUpArrow } from "react-icons/bs";
import { GiDelighted } from "react-icons/gi";
import { VscGraph, VscGraphLeft } from "react-icons/vsc";
import { MdOutlineManageAccounts } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function Services() {
  // const services
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
        "Cross-Sales",
        "Up-Sales",
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
    <div className="max-w-screen-xl  mx-auto p-4 grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 my-20 gap-1 gap-y-3 ">
      {/* cards */}
      {services.map((service) => (
        <Link
          key={service.id}
          to={service.route}
          className={` px-5 shadow-lg max-w-[400px] rounded-sm relative group hover:bg-gradient-to-tr from-primary to-blue-400  transition duration-500 ${service.color}`}
        >
          <service.icon className="absolute right-5 top-5 text-5xl text-primary/40 group-hover:text-white group-hover:transition-up" />
          <div className="my-5">
            <div className="mb-9">
              <h1 className="text-2xl  relative mb-3 text-primary group-hover:text-white group-hover:transition-up">
                {service.name}
              </h1>
              <div className="h-[2px] w-[50px] -bottom-4 left-0 bg-primary group-hover:bg-white group-hover:transition-up"></div>
            </div>
            <div className="font-medium text-gray-400 group-hover:text-white group-hover:transition-down">
              {service.details.map((feature, i) => (
                <p className="flex items-start gap-1" key={i}>
                  <BsCheck2Circle className="mt-1 min-w-[24px]" />
                  {feature}
                </p>
              ))}
            </div>
          </div>
        </Link>
      ))}

      {/*  <div className="px-10 shadow-lg max-w-[400px] rounded-sm relative group hover:bg-gradient-to-tr from-primary to-blue-400  transition duration-500 ">
        <VscGraphLeft className="absolute right-5 top-5 text-[80px] text-primary/40 group-hover:text-white group-hover:transition-up" />
        <div className="my-20">
          <div className="mb-9">
            <h1 className="text-2xl  relative mb-3 text-primary group-hover:text-white group-hover:transition-up">
              Presales
            </h1>
            <div className="h-[2px] w-[50px] -bottom-4 left-0 bg-primary group-hover:bg-white group-hover:transition-up"></div>
          </div>
          <p className="font-medium text-gray-400 group-hover:text-white group-hover:transition-down">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
        </div>
      </div>


      <div className="px-10 shadow-lg max-w-[400px] rounded-sm relative group hover:bg-gradient-to-tr from-primary to-blue-400  transition duration-500 ">
        <VscGraph className="absolute right-5 top-5 text-[80px] text-primary/40 group-hover:text-white group-hover:transition-up" />
        <div className="my-20">
          <div className="mb-9">
            <h1 className="text-2xl  relative mb-3 text-primary group-hover:text-white group-hover:transition-up">
              Sales
            </h1>
            <div className="h-[2px] w-[50px] -bottom-4 left-0 bg-primary group-hover:bg-white group-hover:transition-up"></div>
          </div>
          <p className="font-medium text-gray-400 group-hover:text-white group-hover:transition-down">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
        </div>
      </div>

      <div className="px-10 shadow-lg max-w-[400px] rounded-sm relative group hover:bg-gradient-to-tr from-primary to-blue-400  transition duration-500 ">
        <MdOutlineManageAccounts className="absolute right-5 top-5 text-[80px] text-primary/40 group-hover:text-white group-hover:transition-up" />
        <div className="my-20">
          <div className="mb-9">
            <h1 className="text-2xl  relative mb-3 text-primary group-hover:text-white group-hover:transition-up">
              Account Management
            </h1>
            <div className="h-[2px] w-[50px] -bottom-4 left-0 bg-primary group-hover:bg-white group-hover:transition-up"></div>
          </div>
          <p className="font-medium text-gray-400 group-hover:text-white group-hover:transition-down">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
        </div>
      </div>

      <div className="px-10 shadow-lg max-w-[400px] rounded-sm relative group hover:bg-gradient-to-tr from-primary to-blue-400  transition duration-500 ">
        <CiDeliveryTruck className="absolute right-5 top-5 text-[80px] text-primary/40 group-hover:text-white group-hover:transition-up" />
        <div className="my-20">
          <div className="mb-9">
            <h1 className="text-2xl  relative mb-3 text-primary group-hover:text-white group-hover:transition-up">
              Delivery
            </h1>
            <div className="h-[2px] w-[50px] -bottom-4 left-0 bg-primary group-hover:bg-white group-hover:transition-up"></div>
          </div>
          <p className="font-medium text-gray-400 group-hover:text-white group-hover:transition-down">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
        </div>
      </div>
   
      <div className="px-10 shadow-lg max-w-[400px] rounded-sm relative group hover:bg-gradient-to-tr from-primary to-blue-400  transition duration-500 ">
        <GiDelighted className="absolute right-5 top-5 text-[80px] text-primary/40 group-hover:text-white group-hover:transition-up" />
        <div className="my-20">
          <div className="mb-9">
            <h1 className="text-2xl  relative mb-3 text-primary group-hover:text-white group-hover:transition-up">
              Delight
            </h1>
            <div className="h-[2px] w-[50px] -bottom-4 left-0 bg-primary group-hover:bg-white group-hover:transition-up"></div>
          </div>
          <p className="font-medium text-gray-400 group-hover:text-white group-hover:transition-down">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
        </div>
      </div> */}
    </div>
  );
}
