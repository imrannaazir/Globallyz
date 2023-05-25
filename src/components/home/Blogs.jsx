import { BiCommentDetail } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import PrimaryBtnAlt from "../ui/PrimaryBtnAlt";
export default function Blogs() {
  return (
    <div className="max-w-screen-xl  mx-auto p-4">
      <div className="flex justify-center">
        <h3 className="text-[2rem] uppercase font-semibold flex flex-col items-center text-white">
          OUR LATEST BLOG
          <div className="h-1 w-[70px]  mt-3 bg-primary"></div>
        </h3>
      </div>

      {/* blogs */}
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-10">
        {/* blog  */}
        <div className="bg-white rounded-lg max-w-[350px]  hover:shadow-xl group overflow-hidden">
          <div className="">
            <figure className="">
              <img
                className="rounded-t-lg group-hover:scale-105 duration-200"
                src="https://spellthemes.com/demos/html-templates/acea/preview/assets/images/all-img/blg1.jpg"
                alt=""
              />
            </figure>
            <div className=" p-5">
              <ul className="flex justify-between">
                <li>
                  <a
                    className="flex items-center gap-2 text-gray-500 hover:text-black"
                    href="#"
                  >
                    June 20, 2018
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-2 text-gray-500 hover:text-black"
                    href="#"
                  >
                    <BiCommentDetail />
                    22
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-2 text-gray-500 hover:text-black"
                    href="#"
                  >
                    <AiFillHeart />
                    15
                  </a>
                </li>
              </ul>
              <div className="text-center my-5">
                <h3>
                  <a className="text-lg font-semibold" href="#">
                    Their plans as well as applications
                  </a>
                </h3>
                <p className="text-gray-500 leading-[32px]">
                  Entrepreneurs for their business plans, as well as loan
                  applications with banks and national small business lenders.
                </p>
                <a href="#" className="">
                  <PrimaryBtnAlt
                    shape="rounded-full px-6 py-3 my-2"
                    url="/blog/1"
                  >
                    Read More
                  </PrimaryBtnAlt>
                </a>
              </div>
            </div>
            {/* <!-- end blog text --> */}
          </div>
          {/* <!-- end single blog post --> */}
        </div>
        {/* blog  */}
        <div className="bg-white rounded-lg max-w-[350px]  hover:shadow-xl group overflow-hidden">
          <div className="">
            <figure className="">
              <img
                className="rounded-t-lg group-hover:scale-105 duration-200"
                src="https://spellthemes.com/demos/html-templates/acea/preview/assets/images/all-img/blg1.jpg"
                alt=""
              />
            </figure>
            <div className=" p-5">
              <ul className="flex justify-between">
                <li>
                  <a
                    className="flex items-center gap-2 text-gray-500 hover:text-black"
                    href="#"
                  >
                    June 20, 2018
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-2 text-gray-500 hover:text-black"
                    href="#"
                  >
                    <BiCommentDetail />
                    22
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-2 text-gray-500 hover:text-black"
                    href="#"
                  >
                    <AiFillHeart />
                    15
                  </a>
                </li>
              </ul>
              <div className="text-center my-5">
                <h3>
                  <a className="text-lg font-semibold" href="#">
                    Their plans as well as applications
                  </a>
                </h3>
                <p className="text-gray-500 leading-[32px]">
                  Entrepreneurs for their business plans, as well as loan
                  applications with banks and national small business lenders.
                </p>
                <a href="#" className="">
                  <PrimaryBtnAlt
                    shape="rounded-full px-6 py-3 my-2"
                    url="/blog/1"
                  >
                    Read More
                  </PrimaryBtnAlt>
                </a>
              </div>
            </div>
            {/* <!-- end blog text --> */}
          </div>
          {/* <!-- end single blog post --> */}
        </div>
        {/* blog  */}
        <div className="bg-white rounded-lg max-w-[350px]  hover:shadow-xl group overflow-hidden">
          <div className="">
            <figure className="">
              <img
                className="rounded-t-lg group-hover:scale-105 duration-200"
                src="https://spellthemes.com/demos/html-templates/acea/preview/assets/images/all-img/blg1.jpg"
                alt=""
              />
            </figure>
            <div className=" p-5">
              <ul className="flex justify-between">
                <li>
                  <a
                    className="flex items-center gap-2 text-gray-500 hover:text-black"
                    href="#"
                  >
                    June 20, 2018
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-2 text-gray-500 hover:text-black"
                    href="#"
                  >
                    <BiCommentDetail />
                    22
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-2 text-gray-500 hover:text-black"
                    href="#"
                  >
                    <AiFillHeart />
                    15
                  </a>
                </li>
              </ul>
              <div className="text-center my-5">
                <h3>
                  <a className="text-lg font-semibold" href="#">
                    Their plans as well as applications
                  </a>
                </h3>
                <p className="text-gray-500 leading-[32px]">
                  Entrepreneurs for their business plans, as well as loan
                  applications with banks and national small business lenders.
                </p>
                <a href="#" className="">
                  <PrimaryBtnAlt
                    shape="rounded-full px-6 py-3 my-2"
                    url="/blog/1"
                  >
                    Read More
                  </PrimaryBtnAlt>
                </a>
              </div>
            </div>
            {/* <!-- end blog text --> */}
          </div>
          {/* <!-- end single blog post --> */}
        </div>
      </div>
    </div>
  );
}
