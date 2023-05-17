import PrimaryBtnAlt from "../ui/PrimaryBtnAlt";

export default function AboutUs() {
  return (
    <div className="flex items-center justify-between max-w-screen-xl  flex-wrap   mx-auto p-4">
      <div className="flex-1 relative">
        <img
          className="absolute top-0 left-0 -z-10 "
          src="https://spellthemes.com/demos/html-templates/acea/preview/assets/images/all-img/designelements1.png"
          alt=""
        />
        <img
          className="absolute  -z-10 bottom-0 right-0 rotate-90"
          src="https://spellthemes.com/demos/html-templates/acea/preview/assets/images/all-img/designelements1.png"
          alt=""
        />
        <img
          className="flex-shrink-0 max-w-[446px]"
          src="https://spellthemes.com/demos/html-templates/acea/preview/assets/images/all-img/history-1.png"
          alt=""
        />
      </div>

      {/* content */}
      <div className="flex-1 max-w-[680px]">
        <div className="mb-9">
          <h1 className="text-[2rem] uppercase relative">Who we are</h1>
          <div className="h-1 w-[70px] -bottom-4 left-0 bg-primary"></div>
        </div>
        <p>
          We are a global business development company that helps small, medium,
          and large firms launch their services and products worldwide. With our
          expertise, network, and tailored solutions, we ensure your offerings
          reach a global customer base. From market research to international
          sales and marketing, we provide comprehensive support to drive your
          business growth in the global marketplace
        </p>
        <PrimaryBtnAlt shape="  mt-12 px-10 py-5 uppercase rounded-none">
          See more
        </PrimaryBtnAlt>
      </div>
    </div>
  );
}
