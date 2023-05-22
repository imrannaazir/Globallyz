// eslint-disable-next-line react/prop-types
export default function Banner({ title }) {
  return (
    <div className="relative h-96">
      {/* content */}
      <div className=" relative z-10 flex flex-col items-center justify-center py-20 h-full bg-primary/80">
        <div className="mx-auto w-full max-w-screen-xl p-4">
          <h4 className="text-white text-center text-3xl">{title}</h4>
        </div>
      </div>
    </div>
  );
}
