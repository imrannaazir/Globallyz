import Reviews from "./Reviews";

export default function Testimonials() {
  return (
    <div className="max-w-screen-xl  mx-auto p-4">
      <div className="flex justify-center">
        <h3 className="text-[2rem] uppercase font-semibold flex flex-col items-center">
          What Our Happy Clients Says
          <div className="h-1 w-[70px]  mt-3 bg-primary"></div>
        </h3>
      </div>
      <Reviews />
    </div>
  );
}
