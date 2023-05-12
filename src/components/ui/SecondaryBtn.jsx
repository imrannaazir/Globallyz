// eslint-disable-next-line react/prop-types
export default function SecondaryBtn({ children, newClass }) {
  return (
    <button
      className={`mt-12 px-10 py-4 uppercase font-semibold bg-primary text-white hover:bg-primary/80 transition duration-300 ${newClass}`}
      href="#"
    >
      {children}
    </button>
  );
}
