import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types, no-unused-vars
export default function PrimaryBtnAlt({ children, shape, url }) {
  return (
    <Link
      to={url}
      className={`primary-btn relative   border border-primary   overflow-hidden text-primary hover:text-white ${shape}`}
      type="button"
    >
      {children}
      <span className="absolute inset-0 bg-primary border-0"></span>
      <span className="absolute inset-0 flex justify-center items-center ">
        {children}
      </span>
    </Link>
  );
}
