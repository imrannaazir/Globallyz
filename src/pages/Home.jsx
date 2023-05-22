// import AboutUs from "../components/home/AboutUs";
import Blogs from "../components/home/Blogs";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Testimonials from "../components/home/Testimonials";
import Layout from "../components/ui/Layout";

export default function Home() {
  return (
    <div className="">
      {/* Background img */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="fixed inset-0 bg-black opacity-60 z-10"></div>
        <img
          src="https://i.ibb.co/s355sn6/background.webp"
          alt="Background Image"
          className="object-cover object-center w-full h-full animate-zoom"
        />
      </div>
      <Layout>
        <Hero />
        {/* <AboutUs /> */}
        <Services />
        <Testimonials />
        <Blogs />
      </Layout>
    </div>
  );
}
