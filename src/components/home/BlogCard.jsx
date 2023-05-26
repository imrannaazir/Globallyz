import PrimaryBtnAlt from "../ui/PrimaryBtnAlt";
import { AiFillHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";

// eslint-disable-next-line react/prop-types
export default function BlogCard({ blog }) {
  const { title, createdAt, content, thumbnail, likes, comments, id } =
    blog || {};
  return (
    <div className="bg-white rounded-lg max-w-sm  hover:shadow-xl group overflow-hidden">
      <div className="">
        <figure className="">
          <img
            className="rounded-t-lg group-hover:scale-105 duration-200 h-[230px] w-full"
            src={thumbnail}
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
                {createdAt}
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-2 text-gray-500 hover:text-black"
                href="#"
              >
                <BiCommentDetail />
                {comments}
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-2 text-gray-500 hover:text-black"
                href="#"
              >
                <AiFillHeart />
                {likes}
              </a>
            </li>
          </ul>
          <div className="text-center my-5">
            <h3>
              <a className="text-lg font-semibold" href="#">
                {title.slice(0, 36)}
              </a>
            </h3>
            <p className="text-gray-500 leading-[32px]">
              {content.slice(0, 130)}
            </p>
            <a href="#" className="">
              <PrimaryBtnAlt
                shape="rounded-full px-6 py-3 my-2"
                url={`/blog/${id}`}
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
  );
}
