import AboutUs from "../components/home/AboutUs";
import Hero from "../components/home/Hero";
import Layout from "../components/ui/Layout";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <AboutUs />
    </Layout>
  );
}
