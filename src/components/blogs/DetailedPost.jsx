import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaThumbsUp, FaUserEdit } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
export default function DetailedPost({ selectedBlog }) {
  const { title, thumbnail, content, createdAt, likes } = selectedBlog || {};
  return (
    <main className="max-w-screen-xl  mx-auto p-5 lg:w-[60%] bg-white/70">
      <img
        src={thumbnail}
        alt=""
        className="w-full rounded-md"
        id="lws-megaThumb"
      />
      <div>
        {/* post meta data */}
        <div className="flex justify-between my-5">
          <span className="flex items-center gap-3">
            <FaUserEdit className="text-primary" /> by Admin
          </span>

          <span className="flex items-center gap-3">
            <BsFillCalendarDateFill className="text-primary" /> {createdAt}
          </span>

          <span className="flex items-center gap-3">
            <FaThumbsUp className="text-primary" /> {likes}
          </span>
        </div>
        <h1 className="mt-6 text-2xl text-primary">{title}</h1>

        <div className="mt-6 text-justify ">
          <p>{content}</p>
        </div>
      </div>
    </main>
  );
}
