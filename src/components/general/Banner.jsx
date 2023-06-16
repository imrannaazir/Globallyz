// eslint-disable-next-line react/prop-types
export default function Banner({ title, bg_img }) {
  return (
    <div className="relative h-96">
      {/* Background img */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="hero-overlay bg-primary bg-opacity-10 absolute z-10"></div>
        <img
          src={bg_img}
          alt="Background Image"
          className="object-cover object-center w-full h-full animate-zoom"
        />
      </div>
      {/* content */}
      <div className=" relative z-10 flex flex-col items-center justify-center py-20 h-full bg-primary/80">
        <div className="mx-auto w-full max-w-screen-xl p-4">
          <h4 className="text-white text-center text-3xl">{title}</h4>
        </div>
      </div>
    </div>
  );
}
