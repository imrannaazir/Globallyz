import { Link } from "react-router-dom";

export default function RelatedPostCard() {
  return (
    <div className="flex bg-white/70 items-center">
      <Link to={`/blogs/`}>
        <img
          src="https://spellthemes.com/demos/html-templates/acea/preview/assets/images/all-img/blogl-1.jpg"
          className="card-image"
          alt=""
        />
      </Link>
      <div className="p-4">
        <p className="text-xs text-primary">11 June, 2023</p>
        <Link to={`/blogs/`} className="text-lg font-medium text-gray-700">
          2018 UK Consumer Spending Habits: Convenience and Confidence
        </Link>
      </div>
    </div>
  );
}
