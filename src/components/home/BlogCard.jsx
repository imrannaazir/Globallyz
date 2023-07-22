import { formatDate } from "../../utils/formatDate";
import PrimaryBtnAlt from "../ui/PrimaryBtnAlt";
// import { AiFillHeart } from "react-icons/ai";
// import { BiCommentDetail } from "react-icons/bi";

// eslint-disable-next-line react/prop-types
export default function BlogCard({ blog }) {
  const { id = 1, createdAt, topic_title, topic_desc, image_url } = blog || {};

  // formatted date
  const date = formatDate(createdAt);

  return (
    <div className="bg-white rounded-lg w-[375px]  hover:shadow-xl group overflow-hidden border-2">
      <div className="">
        <figure className="">
          <img
            className="rounded-t-lg   h-[230px] w-full"
            src={image_url}
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
                {date}
              </a>
            </li>

            {/* number of comments */}
            {/* <li>
              <a
                className="flex items-center gap-2 text-gray-500 hover:text-black"
                href="#"
              >
                <BiCommentDetail />
                {comments}
              </a>
            </li> */}

            {/* number of likes */}
            {/* <li>
              <a
                className="flex items-center gap-2 text-gray-500 hover:text-black"
                href="#"
              >
                <AiFillHeart />
                {likes}
              </a>
            </li> */}
          </ul>
          <div className="text-center my-5">
            <h3>
              <a className="text-lg font-semibold" href="#">
                {topic_title.slice(0, 36)}
              </a>
            </h3>
            <p className="text-gray-500 leading-[32px] text-justify">
              {topic_desc.slice(0, 125)} <span>...</span>
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
