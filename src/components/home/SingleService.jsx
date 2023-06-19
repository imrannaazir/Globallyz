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
        src="https://i.ibb.co/7y9pR6h/mission.jpg"
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

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est itaque,
          excepturi magni cumque eaque tempora voluptas ipsam asperiores dolore
          esse nemo omnis delectus totam alias beatae a amet autem
          reprehenderit!
        </p>
      </div>
    </Link>
  );
}
