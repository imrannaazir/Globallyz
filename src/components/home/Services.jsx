import SectionHeader from "./SectionHeader";
import SingleService from "./SingleService";

export default function Services() {
  // const services
  const services = [
    {
      id: 1,
      name: "Marketing",
      img: "https://i.ibb.co/5T7FfVY/marketing.jpg",
      details:
        "At Globallyz, our marketing services are designed to elevate your brand, expand your reach, and connect with your target audience. We employ innovative strategies and creative campaigns to help you effectively promote your products or services and achieve your marketing goals.",
      route: "/marketing-service",
    },

    {
      id: 2,
      name: "Presales",
      img: "https://i.ibb.co/Jthp9gD/presales-1.jpg",
      details:
        "Globallyz boasts a proficient presales team that understands the importance of building strong customer relationships and closing deals. With their expertise in lead qualification, needs assessment, and compelling product demonstrations, we ensure that your prospects are engaged and confident in choosing your offerings.",
      route: "/pre-sales-service",
    },

    {
      id: 3,
      name: "Sales",
      img: "https://i.ibb.co/rwXytLc/sales-1.jpg",
      details:
        "Our dedicated sales professionals at Globallyz are focused on driving revenue growth and achieving sales targets. With their customer-centric approach, they leverage their skills to identify opportunities, build connections, and close deals, ultimately helping you maximize your sales potential and business success.",
      route: "/sales-service",
    },
    {
      id: 4,
      name: "Account Management",
      img: "https://i.ibb.co/2KzCGrm/account-management.jpg",
      details:
        "At Globallyz, we value long-term partnerships and prioritize customer satisfaction. Our account management team works closely with you to understand your unique needs, provide personalized solutions, and deliver proactive support. We aim to nurture and strengthen our client relationships to drive mutual growth and success.",
      route: "/account-management-service",
    },

    {
      id: 5,
      name: "Strategic Alliance and Partnership",
      img: "https://i.ibb.co/8cvPfqt/Strategic-Alliance-and-Partnership.jpg",
      details:
        "Globallyz specializes in creating strategic alliances and partnerships that provide mutual benefits and foster business growth. Through careful analysis and collaboration, we identify opportunities to form strong alliances, leveraging complementary strengths and expanding market reach for sustainable success.",
      route: "/strategic-alliances-partnerships-service",
    },

    {
      id: 6,
      name: "Delivery",
      img: "https://i.ibb.co/ftbwz2Q/delivery-1.jpg",
      details:
        "Our dedicated delivery team at Globallyz ensures the smooth implementation and successful execution of our solutions. With meticulous planning and timely execution, we strive to exceed expectations, deliver exceptional service, and achieve measurable results for our clients.",
      route: "/delivery-service",
    },
  ];
  return (
    <>
      <SectionHeader>Services We are providing</SectionHeader>
      <div
        className="  
      mx-auto
      p-4
      grid
      lg:grid-cols-3
      md:grid-cols-2
      sm:grid-cols-1
      my-20
      gap-5
      justify-center
      max-w-screen-xl
      "
      >
        {/* cards */}
        {services.map((service) => (
          <SingleService key={service?.id} service={service} />
        ))}
      </div>
    </>
  );
}
