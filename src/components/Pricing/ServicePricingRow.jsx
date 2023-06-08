import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsXCircle } from "react-icons/bs";

export default function ServicePricingRow({ service }) {
  return (
    <tr className="">
      <td>{service?.service}</td>
      <td>
        <div className="flex items-center justify-center">
          {!service?.basic ? (
            <BsXCircle className="text-red-400" />
          ) : (
            <AiOutlineCheckCircle className="text-green-400" />
          )}
        </div>
      </td>
      <td>
        <div className="flex items-center justify-center">
          {!service?.premium ? (
            <BsXCircle className="text-red-400" />
          ) : (
            <AiOutlineCheckCircle className="text-green-400" />
          )}
        </div>
      </td>
      <td>
        <div className="flex items-center justify-center">
          {!service?.elite ? (
            <BsXCircle className="text-red-400" />
          ) : (
            <AiOutlineCheckCircle className="text-green-400" />
          )}
        </div>
      </td>
    </tr>
  );
}
