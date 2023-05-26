import PrimaryBtn from "../ui/PrimaryBtn";
import SecondaryBtn from "../ui/SecondaryBtn";

export default function Hero() {
  return (
    <div className=" relative z-10 flex flex-col items-center justify-center py-20 h-full ">
      <div className="mx-auto w-full max-w-screen-xl p-4">
        <h3 className="text-white lg:text-[4rem]">We Are Business</h3>
        <h1 className="lg:text-[4rem] font-bold text-white uppercase">
          {" "}
          Development Agency
        </h1>
        <p className="mt-4 text-white">
          Outsource your Business Development to us- you have services or
          products, you are small, medium, or large firm, you may be anywhere on
          this planet- we are here to you help you launch your services and
          products worldwide and ensure reaching your offerings to global
          customers
        </p>

        {/* btn */}
        <div className="flex flex-col lg:flex-row gap-2 ">
          <SecondaryBtn url="/pricing">Get Started</SecondaryBtn>
          <PrimaryBtn url="/contact">Contact Us</PrimaryBtn>
        </div>
      </div>
    </div>
    // <div className="relative hero-height">
    //   {/* Background img */}
    //   <div className="absolute inset-0 overflow-hidden">
    //     <div className="absolute inset-0 bg-primary opacity-50"></div>
    //     <img
    //       src="https://spellthemes.com/demos/html-templates/acea/preview/assets/images/banner/banner1.jpg"
    //       alt="Background Image"
    //       className="object-cover object-center w-full h-full animate-zoom"
    //     />
    //   </div>
    //   {/* content */}

    // </div>
  );
}
