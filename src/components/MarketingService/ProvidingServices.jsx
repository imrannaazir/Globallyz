/* eslint-disable react/prop-types */
import SecondaryBtn from "../ui/SecondaryBtn";

// eslint-disable-next-line react/prop-types, no-unused-vars
export default function ProvidingServices({ name, services }) {
  // all digital services

  return (
    <div className=" py-6">
      <div className="max-w-screen-xl  mx-auto px-4 ">
        {/*  */}
        <div className="text-center">
          <h2 className="text-[2rem] font-semibold ">Globallyz’s {name}</h2>
          <p className="text-lg text-gray-500 tracking-wide">
            Build Brand Recognition as an Industry Leader and Increase
            Profitability
          </p>
        </div>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-20 gap-5 justify-center">
          {/* card 1 */}
          {services.map((service) => (
            <div
              key={service.id}
              className="px-10 shadow-lg max-w-[400px] rounded-sm relative group hover:bg-gradient-to-tr from-primary to-blue-400  transition duration-500 bg-white"
            >
              <div className="my-20">
                <div className="mb-9">
                  <h1 className="text-2xl  relative mb-3 text-primary group-hover:text-white group-hover:transition-up">
                    {service.name}
                  </h1>
                  <div className="h-[2px] w-[50px] -bottom-4 left-0 bg-primary group-hover:bg-white group-hover:transition-up"></div>
                </div>
                <p className="font-medium text-gray-400 group-hover:text-white group-hover:transition-down">
                  {service.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* btn */}
      <div className="text-center mt-20">
        <SecondaryBtn url="/contact" newClass="rounded-full">
          Get Started Now
        </SecondaryBtn>
      </div>
    </div>
  );
}
