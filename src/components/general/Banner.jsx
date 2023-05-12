export default function Banner() {
  return (
    <div className="relative h-96">
      {/* Background img */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-primary opacity-50"></div>
        <img
          src="https://spellthemes.com/demos/html-templates/acea/preview/assets/images/banner/page-banner1.jpg"
          alt="Background Image"
          className="object-cover object-bottom w-full h-full animate-zoom"
        />
      </div>
      {/* content */}
      <div className=" relative z-10 flex flex-col items-center justify-center py-20 h-full bg-primary/80">
        <div className="mx-auto w-full max-w-screen-xl p-4">
          <h4 className="text-white text-center text-3xl">Marketing service</h4>
        </div>
      </div>
    </div>
  );
}
