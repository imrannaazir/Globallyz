// eslint-disable-next-line react/prop-types
export default function SectionHeader({ children }) {
  return (
    <div className="flex justify-center mb-10">
      <h3 className="text-[2rem] uppercase  flex flex-col items-center ">
        {children}
        <div className="h-1 w-[70px]  mt-3 bg-primary"></div>
      </h3>
    </div>
  );
}
