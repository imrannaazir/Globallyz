import Banner from "../components/general/Banner";
import Layout from "../components/ui/Layout";
import { NavLink, Outlet } from "react-router-dom";

export default function Team() {
  return (
    <Layout>
      <Banner title="Our Team" bg_img="https://i.ibb.co/s12vqhs/team.webp" />
      <div className="max-w-screen-xl  flex-wrap   mx-auto p-4">
        {/*  <div className="text-center">
          <h5 className="text-lg font-semibold text-gray-300">Our Experts</h5>
          <h3 className="text-[3rem] font-semibold text-white">
            Our Awesome Team
          </h3>
        </div> */}

        <div className="flex flex-col lg:flex-row gap-5">
          {/* aside */}
          <aside className="">
            <ul className=" p-4 w-72 bg-white rounded-lg">
              {/* <!-- Sidebar content here --> */}
              <li className="border-b mb-2 text-lg border-primary">
                <NavLink
                  to="/team/on-board"
                  className={({ isActive }) =>
                    isActive
                      ? " text-primary font-semibold border-l-4 border-primary pl-2"
                      : ""
                  }
                >
                  On Board
                </NavLink>
              </li>
              <li className="border-b mb-2 text-lg border-primary">
                <NavLink
                  to="/team/core-team"
                  className={({ isActive }) =>
                    isActive
                      ? " text-primary font-semibold border-l-4 border-primary pl-2"
                      : ""
                  }
                >
                  Core Team
                </NavLink>
              </li>
              <li className="border-b mb-2 text-lg border-primary">
                <NavLink
                  to="/team/executive-team"
                  className={({ isActive }) =>
                    isActive
                      ? " text-primary font-semibold border-l-4 border-primary pl-2"
                      : ""
                  }
                >
                  Executive Team
                </NavLink>
              </li>
              <li className="border-b mb-2 text-lg border-primary">
                <NavLink
                  to="/team/content-marketing-team"
                  className={({ isActive }) =>
                    isActive
                      ? " text-primary font-semibold border-l-4 border-primary pl-2"
                      : ""
                  }
                >
                  Content Marketing Team
                </NavLink>
              </li>
              <li className="border-b mb-2 text-lg border-primary">
                <NavLink
                  to="/team/tools-technologies"
                  className={({ isActive }) =>
                    isActive
                      ? " text-primary font-semibold border-l-4 border-primary pl-2"
                      : ""
                  }
                >
                  Tools & Technologies{" "}
                </NavLink>
              </li>
            </ul>
          </aside>

          {/* teams */}
          <Outlet />
        </div>
      </div>
    </Layout>
  );
}
