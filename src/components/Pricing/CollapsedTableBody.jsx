import { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import ServicePricingRow from "./ServicePricingRow";

export default function CollapsedTableBody({ service }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 flex justify-between bg-base-100 w-full shadow-lg cursor-pointer mt-1 font-semibold"
      >
        <h3>{service?.name}</h3>
        {!isOpen ? <BiPlus /> : <BiMinus />}
      </div>
      {isOpen && (
        <tbody>
          {service?.sub_service?.map((service) => (
            <ServicePricingRow key={service?.id} service={service} />
          ))}
        </tbody>
      )}
    </>
  );
}
