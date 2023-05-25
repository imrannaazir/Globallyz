import RelatedPostCard from "./RelatedPostCard";

export default function RelatedPostContainer() {
  return (
    <aside className="w-[40%]">
      <h4 className="mb-4 text-xl font-medium text-white">Related Posts</h4>
      <div className="space-y-4 related-post-container">
        <RelatedPostCard />
      </div>
    </aside>
  );
}
