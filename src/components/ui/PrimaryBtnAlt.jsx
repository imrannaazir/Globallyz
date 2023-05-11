// eslint-disable-next-line react/prop-types
export default function PrimaryBtnAlt({ children }) {
  return (
    <button
      className="primary-btn mt-12 px-10 py-5 relative border border-primary uppercase font-semibold tracking-wider leading-none overflow-hidden text-primary hover:text-white"
      type="button"
    >
      <span className="absolute inset-0 bg-primary"></span>
      <span className="absolute inset-0 flex justify-center items-center font-bold">
        {children}
      </span>
      {children}
    </button>
  );
}
