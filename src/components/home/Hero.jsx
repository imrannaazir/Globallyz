import PrimaryBtn from "../ui/PrimaryBtn";
import SecondaryBtn from "../ui/SecondaryBtn";

export default function Hero() {
  return (
    <div className="relative hero-height">
      {/* Background img */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-primary opacity-50"></div>
        <img
          src="https://spellthemes.com/demos/html-templates/acea/preview/assets/images/banner/banner1.jpg"
          alt="Background Image"
          className="object-cover object-center w-full h-full animate-zoom"
        />
      </div>
      {/* content */}
      <div className=" relative z-10 flex flex-col items-center justify-center py-20 h-full bg-primary/50">
        <div className="mx-auto w-full max-w-screen-xl p-4">
          <h3 className="text-white text-[4rem]">We Are</h3>
          <h1 className="text-[4rem] font-bold text-white">DIGITAL AGENCY</h1>
          <p className="mt-4 text-white">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore dolore magna aliquyam erat
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
            rebum.
          </p>

          {/* btn */}
          <div className="flex gap-2">
            <SecondaryBtn>Get Started</SecondaryBtn>
            <PrimaryBtn>Contact Us</PrimaryBtn>
          </div>
        </div>
      </div>
    </div>
  );
}
