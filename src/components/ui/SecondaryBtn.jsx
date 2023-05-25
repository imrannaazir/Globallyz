import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function SecondaryBtn({ children, newClass, url }) {
  return (
    <Link
      to={url}
      className={`mt-12 px-10 py-4 uppercase font-semibold bg-primary text-white hover:bg-primary/80 transition duration-300 ${newClass}`}
      href="#"
    >
      {children}
    </Link>
  );
}
