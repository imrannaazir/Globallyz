// eslint-disable-next-line react/prop-types, no-unused-vars
export default function PrimaryBtnAlt({ children, shape }) {
  return (
    <button
      className={`primary-btn   relative border border-primary   tracking-wider leading-none overflow-hidden text-primary hover:text-white ${shape}`}
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
