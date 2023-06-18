/* eslint-disable react/prop-types */
import Footer from "./Footer";
import Navbar from "./Navbar";
// import TopBar from "./Topbar";

export default function Layout({ children }) {
  return (
    <div className="">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
