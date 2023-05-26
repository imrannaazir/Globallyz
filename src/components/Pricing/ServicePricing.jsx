import { BsGraphUpArrow } from "react-icons/bs";
import { VscGraph, VscGraphLeft } from "react-icons/vsc";
import { MdOutlineManageAccounts } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { DiTechcrunch } from "react-icons/di";
import { Link } from "react-router-dom";
export default function ServicePricing() {
  const services = [
    {
      id: 1,
      name: "Marketing",
      icon: BsGraphUpArrow,
      color: "bg-orange-100 ",
    },
    {
      id: 2,
      icon: VscGraphLeft,
      color: "bg-cyan-100",
      name: "Pre-Sales",
    },
    {
      id: 3,
      icon: VscGraph,
      color: "bg-slate-100",
      name: "Sales",
    },
    {
      id: 4,
      icon: MdOutlineManageAccounts,
      color: "bg-pink-100",
      name: "Account Management",
    },
    {
      id: 5,
      icon: FaHandshake,
      color: "bg-yellow-100",
      name: "Delivery",
    },
    {
      id: 6,
      icon: DiTechcrunch,
      color: "bg-green-100",
      route: "/delight-service",
      name: "Strategic Alliances Partnerships Service",
      details: ["Cross Sell", "	Up Sell"],
    },
  ];
  return (
    <div className="max-w-screen-xl  mx-auto p-4 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 my-20">
      {services.map((service) => (
        <Link
          to={`/pricing/${service.name
            ?.toLowerCase()
            .trim()
            .replace(/\s+/g, "-")}`}
          key={service.id}
          className={`${service.color} flex justify-center flex-col items-center p-10 text-center rounded-md gap-5 hover:bg-primary hover:text-white duration-500`}
        >
          <service.icon className="text-6xl " />
          <h3 className="text-lg">{service.name}</h3>
        </Link>
      ))}
    </div>
  );
}
