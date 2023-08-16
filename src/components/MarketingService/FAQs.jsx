/* eslint-disable react/prop-types */
import Faq from "./FAQ";

// eslint-disable-next-line react/prop-types
export default function FAQs({ faqs, name }) {
  return (
    <div className="max-w-screen-xl  mx-auto p-4">
      <h1 className="text-[2rem] text-center font-semibold mb-10 ">
        {name} FAQs
      </h1>
      <div className="flex flex-col gap-2">
        {/* faq 1 */}
        {faqs?.map((faq) => (
          <Faq key={faq.id} faq={faq} />
        ))}
      </div>
    </div>
  );
}
