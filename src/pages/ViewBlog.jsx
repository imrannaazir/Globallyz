import DetailedPost from "../components/blogs/DetailedPost";
import RelatedPostContainer from "../components/blogs/RelatedPostContainer";
import Banner from "../components/general/Banner";
import Layout from "../components/ui/Layout";

export default function ViewBlog() {
  return (
    <Layout bg_img="https://i.ibb.co/gDHPZ97/blog.jpg">
      <Banner title="Single Blog" />
      <div className="max-w-screen-xl  mx-auto p-4 flex gap-5">
        <DetailedPost />
        <RelatedPostContainer />
      </div>
    </Layout>
  );
}
