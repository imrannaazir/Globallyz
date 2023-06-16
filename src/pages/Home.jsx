// import AboutUs from "../components/home/AboutUs";
import Blogs from "../components/home/Blogs";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
// import Testimonials from "../components/home/Testimonials";
import Layout from "../components/ui/Layout";

export default function Home() {
  return (
    <Layout>
      <Hero />
      {/* <AboutUs /> */}
      <Services />
      {/* <Testimonials /> */}
      <Blogs />
    </Layout>
  );
}
