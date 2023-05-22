/* eslint-disable react/prop-types */
import Footer from "./Footer";
import Navbar from "./Navbar";
import TopBar from "./Topbar";

export default function Layout({ children, bg_img }) {
  return (
    <div className="">
      {/* Background img */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="fixed inset-0 bg-black opacity-60 z-10"></div>
        <img
          src={bg_img}
          alt="Background Image"
          className="object-cover object-center w-full h-full animate-zoom"
        />
      </div>
      <TopBar />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
