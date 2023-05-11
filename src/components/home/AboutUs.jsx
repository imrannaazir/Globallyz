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
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam
        </p>
        <PrimaryBtnAlt>See more</PrimaryBtnAlt>
      </div>
    </div>
  );
}
