import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function SingleService({ service }) {
  return (
    <Link
      to={service?.route}
      className="
        border
        border-gray-500
        rounded-md
        p-5
        flex
        items-center
        justify-center
        gap-5
        hover:shadow-xl
        hover:scale-105
        duration-200
        "
    >
      <img
        className="
            w-24
            h-24
            rounded-full

            "
        src={service?.img}
        alt=""
      />

      <div>
        <h3
          className="
              text-primary 
              text-xl
              "
        >
          {service?.name}
        </h3>

        <p>{service?.details}</p>
      </div>
    </Link>
  );
}
