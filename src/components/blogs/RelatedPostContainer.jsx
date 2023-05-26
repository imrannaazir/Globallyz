/* eslint-disable react/prop-types */
import RelatedPostCard from "./RelatedPostCard";

// eslint-disable-next-line react/prop-types
export default function RelatedPostContainer({ relatedBlogs }) {
  return (
    <aside className="lg:w-[40%]">
      <h4 className="mb-4 text-xl font-medium text-white">Related Posts</h4>
      <div className="space-y-4 related-post-container">
        {relatedBlogs?.map((blog) => (
          <RelatedPostCard key={blog?.id} blog={blog} />
        ))}
      </div>
    </aside>
  );
}
