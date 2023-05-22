import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiBars3BottomRight } from "react-icons/hi2";
import { FaAngleDown } from "react-icons/fa";
import { BiX } from "react-icons/bi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(true);

  // handle header bg by scrolling
  const handleNavBg = () => {
    if (window.scrollY > 20) {
      setScrolling(false);
    } else {
      setScrolling(true);
    }
  };
  window.addEventListener("scroll", handleNavBg);

  return (
    <>
      <nav
        className={`${
          scrolling ? " bg-white/70" : "bg-white transition-down"
        }  border-gray-200 dark:bg-gray-900 sticky top-0  z-40 shadow-md `}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Globallyz
            </span>
          </Link>

          {/*toggle button  */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className={`text-2xl md:hidden cursor-pointer`}
          >
            {isOpen ? <BiX /> : <HiBars3BottomRight />}
          </div>

          <ul className="hidden md:flex gap-5 text-sm ">
            <li>
              <NavLink
                to="/marketing-service"
                className={({ isActive }) =>
                  isActive ? " text-primary font-semibold " : ""
                }
              >
                Marketing
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pre-sales-service"
                className={({ isActive }) =>
                  isActive ? " text-primary font-semibold" : ""
                }
              >
                Pre-sales
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sales-service"
                className={({ isActive }) =>
                  isActive ? " text-primary font-semibold" : ""
                }
              >
                Sales
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/account-management-service"
                className={({ isActive }) =>
                  isActive ? " text-primary font-semibold" : ""
                }
              >
                Account Management
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/delivery-service"
                className={({ isActive }) =>
                  isActive ? " text-primary font-semibold" : ""
                }
              >
                Delivery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/strategic-alliances-partnerships-service"
                className={({ isActive }) =>
                  isActive ? " text-primary font-semibold" : ""
                }
              >
                Strategic Alliances & Partnerships
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  isActive ? " text-primary font-semibold" : ""
                }
              >
                Pricing
              </NavLink>
            </li>
            <li className="group">
              <span className="flex items-center gap-1">
                About <FaAngleDown />{" "}
              </span>
              <div
                className={`absolute hidden group-hover:block z-10  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 p-5`}
              >
                <ul className="py-2 text-sm text-gray-700 flex flex-col gap-3">
                  <li>
                    <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        isActive ? " text-primary font-semibold" : ""
                      }
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/team"
                      className={({ isActive }) =>
                        isActive ? " text-primary font-semibold" : ""
                      }
                    >
                      Team
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <ul
            className={`flex flex-col gap-5 text-sm absolute top-16 bg-white p-5 w-full  left-0 md:hidden duration-200 ${
              isOpen ? "" : "hidden"
            }`}
          >
            <li>
              <NavLink
                to="/marketing-service"
                className={({ isActive }) =>
                  isActive ? " text-primary font-semibold " : ""
                }
              >
                Marketing
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pre-sales-service"
                className={({ isActive }) =>
                  isActive ? " text-primary font-semibold" : ""
                }
              >
                Pre-sales
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sales-service"
                className={({ isActive }) =>
                  isActive ? " text-primary font-semibold" : ""
                }
              >
                Sales
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/account-management-service"
                className={({ isActive }) =>
                  isActive ? " text-primary font-semibold" : ""
                }
              >
                Account Management
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/delivery-service"
                className={({ isActive }) =>
                  isActive ? " text-primary font-semibold" : ""
                }
              >
                Delivery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/delight-service"
                className={({ isActive }) =>
                  isActive ? " text-primary font-semibold" : ""
                }
              >
                Strategic Alliances & Partnerships
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  isActive ? " text-primary font-semibold" : ""
                }
              >
                Pricing
              </NavLink>
            </li>
            <li className="group">
              <span className="flex items-center gap-1">
                About <FaAngleDown />{" "}
              </span>
              <div
                className={`absolute hidden group-hover:block z-10  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 p-5`}
              >
                <ul className="py-2 text-sm text-gray-700 flex flex-col gap-3 ">
                  <li>
                    <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        isActive ? " text-primary font-semibold" : ""
                      }
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/team"
                      className={({ isActive }) =>
                        isActive ? " text-primary font-semibold" : ""
                      }
                    >
                      Team
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      {/* <aside className="fixed md:hidden top-0 right-0 w-screen h-full bg-black/70 z-[999]"></aside> */}
    </>
  );
}
