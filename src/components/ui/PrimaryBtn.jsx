// eslint-disable-next-line react/prop-types
export default function PrimaryBtn({ children }) {
  return (
    <button
      className="primary-btn mt-12 px-10 py-5 relative border border-white uppercase font-semibold tracking-wider leading-none overflow-hidden text-white hover:text-primary"
      type="button"
    >
      <span className="absolute inset-0 bg-white"></span>
      <span className="absolute inset-0 flex justify-center items-center font-bold">
        {children}
      </span>
      {children}
    </button>
  );
}
