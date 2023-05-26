import Banner from "../components/general/Banner";
import Layout from "../components/ui/Layout";
import PrimaryBtnAlt from "../components/ui/PrimaryBtnAlt";

export default function Career() {
  return (
    <Layout bg_img="https://i.ibb.co/g6chxB5/career.jpg">
      <Banner title="Career " />
      <h1 className="text-white text-4xl text-center my-10">
        Join Our Awesome Team{" "}
      </h1>
      <div className="max-w-screen-xl  mx-auto p-4 flex flex-col md:flex-row justify-center gap-10 items-center ">
        {/* card 1 */}
        <div className="bg-white/70 p-10 text-center space-y-5 rounded-lg max-w-sm">
          <p className="text-primary"> Join as a </p>
          <h1 className="text-4xl uppercase ">Fresher / Student</h1>
          <PrimaryBtnAlt shape="px-6 py-3 rounded-full">
            Join Now{" "}
          </PrimaryBtnAlt>
        </div>

        {/* card 2*/}
        <div className="bg-white/70 p-10 text-center space-y-5 rounded-lg max-w-sm">
          <p className="text-primary"> Join as a </p>
          <h1 className="text-4xl uppercase ">Experienced / Professional</h1>
          <PrimaryBtnAlt shape="px-6 py-3 rounded-full">
            Join Now{" "}
          </PrimaryBtnAlt>
        </div>
      </div>
    </Layout>
  );
}
