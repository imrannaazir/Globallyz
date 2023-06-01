import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsXCircle } from "react-icons/bs";

export default function ServicePricingRow({ service }) {
  return (
    <tr className="">
      <td>{service?.service}</td>
      <td>
        <div className="flex items-center justify-center">
          {!service?.basic ? <BsXCircle /> : <AiOutlineCheckCircle />}
        </div>
      </td>
      <td>
        <div className="flex items-center justify-center">
          {!service?.premium ? <BsXCircle /> : <AiOutlineCheckCircle />}
        </div>
      </td>
      <td>
        <div className="flex items-center justify-center">
          {!service?.elite ? <BsXCircle /> : <AiOutlineCheckCircle />}
        </div>
      </td>
    </tr>
  );
}
