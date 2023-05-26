import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function RelatedPostCard({ blog }) {
  const { createdAt, title, thumbnail, id } = blog || {};
  return (
    <div className="flex bg-white/70 items-start">
      <Link to={`/blog/${id}`}>
        <img className="h- [100px] w-[200px]" src={thumbnail} alt="" />
      </Link>
      <div className="p-4">
        <p className="text-xs text-primary">{createdAt}</p>
        <Link to={`/blog/${id}`} className="text-lg font-medium text-gray-700">
          {title}
        </Link>
      </div>
    </div>
  );
}
