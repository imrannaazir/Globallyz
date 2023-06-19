import { ToastContainer } from "react-toastify";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiBars3BottomRight } from "react-icons/hi2";
import { FaAngleDown } from "react-icons/fa";
import { BiX } from "react-icons/bi";
import "react-toastify/dist/ReactToastify.css";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  /*   
  const [scrolling, setScrolling] = useState(true);

  // handle header bg by scrolling
  const handleNavBg = () => {
    if (window.scrollY > 20) {
      setScrolling(false);
    } else {
      setScrolling(true);
    }
  };
  window.addEventListener("scroll", handleNavBg); */

  const routes = [
    {
      id: 1,
      name: "Home",
      route: "/",
    },
    {
      id: 2,
      name: "About Us",
      route: "/about-us",
      sub_routes: [
        {
          id: 1,
          name: "Mission",
          route: "/#our-goal",
        },
        {
          id: 2,
          name: "Vision",
          route: "/#our-goal",
        },
        {
          id: 3,
          name: "Team",
          route: "/team/core-team",
        },
      ],
    },
    {
      id: 3,
      name: "Services",
      route: "/services",
      sub_routes: [
        {
          id: 1,
          name: "Marketing Service",
          route: "/marketing-service",
        },
        {
          id: 2,
          name: "Pre-Sales Service",
          route: "/pre-sales-service",
        },
        {
          id: 3,
          name: "Sales Service",
          route: "/sales-service",
        },
        {
          id: 4,
          name: "Account Management",
          route: "/account-management-service",
        },
        {
          id: 5,
          name: "Strategic Alliances Partnerships Service",
          route: "/strategic-alliances-partnerships-service",
        },
        {
          id: 6,
          name: "Delivery Service",
          route: "/delivery-service",
        },
      ],
    },
    {
      id: 4,
      name: "Pricing",
      route: "/pricing",
    },
    {
      id: 5,
      name: "Our Clients",
      route: "/testimonials",
    },
    {
      id: 6,
      name: "Career",
      route: "/career",
    },
    {
      id: 7,
      name: "Contact Us",
      route: "/contact-us",
    },
  ];

  const links = (
    <>
      {routes?.map((route) =>
        !route.sub_routes ? (
          <li key={route?.id}>
            <NavLink
              to={route?.route}
              className={({ isActive }) =>
                isActive ? " text-primary font-semibold" : ""
              }
            >
              {route?.name}
            </NavLink>
          </li>
        ) : (
          <li key={route?.id} className="group">
            <span className="flex items-center gap-1">
              {route?.name}{" "}
              <FaAngleDown className="group-hover:rotate-180  transition duration-200" />{" "}
            </span>
            <div
              className={`absolute hidden group-hover:block z-10  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 p-5`}
            >
              <ul className="py-2 text-sm text-gray-700 flex flex-col gap-3">
                {route?.sub_routes?.map((route) => (
                  <li key={route?.id}>
                    {route?.route?.includes("#") ? (
                      <HashLink className="" to={route?.route} smooth>
                        {route?.name}
                      </HashLink>
                    ) : (
                      <NavLink
                        to={route?.route}
                        className={({ isActive }) =>
                          isActive ? " text-primary font-semibold" : ""
                        }
                      >
                        {route?.name}
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        )
      )}
    </>
  );

  return (
    <>
      <nav
        className={`${"bg-white transition-down"}  border-gray-200  sticky top-0  z-40 shadow-md `}
      >
        {/* toast */}
        <ToastContainer />
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            <img
              src="https://i.ibb.co/qWTXjcY/Globallyz-logo.png"
              className="h-12 mr-3 rounded-full"
              alt="Globallyz logo"
            />
          </Link>

          {/*toggle button  */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className={`text-2xl xl:hidden cursor-pointer`}
          >
            {isOpen ? <BiX /> : <HiBars3BottomRight />}
          </div>

          <ul className="hidden xl:flex gap-3 text-sm ">{links}</ul>

          <ul
            className={`flex flex-col gap-5 text-sm absolute top-16 bg-white p-5 w-full  left-0 xl:hidden duration-200 ${
              isOpen ? "" : "hidden"
            }`}
          >
            {links}
          </ul>
        </div>
      </nav>
    </>
  );
}
