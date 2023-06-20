import Banner from "../components/general/Banner";
import Layout from "../components/ui/Layout";
import ServicePricingRow from "../components/Pricing/ServicePricingRow";
import ServicePricingHead from "../components/Pricing/ServicePricingHead";
import CollapsedTableBody from "../components/Pricing/CollapsedTableBody";
import ContactUsForPricing from "../components/Pricing/ContactUsForPricing";

export default function PricingOfService() {
  const pricingInfos = [
    {
      id: 1,
      name: "Marketing",
      services: [
        {
          id: 1,
          service: "Influencer Marketing ",
          basic: false,
          premium: false,
          elite: true,
        },
        {
          id: 2,
          service: "Market Research",
          basic: false,
          premium: true,
          elite: true,
        },
        {
          id: 3,
          service: "Search Engine Marketing ",
          basic: true,
          premium: true,
          elite: true,
        },
        {
          id: 4,
          service: "Social Media Marketing",
          basic: true,
          premium: true,
          elite: true,
        },
        {
          id: 5,
          service: "Email Marketing",
          basic: true,
          premium: true,
          elite: true,
        },
        {
          id: 6,
          service: "Marketing Communications",
          basic: true,
          premium: true,
          elite: true,
        },
        {
          id: 7,
          service: "Affiliate Marketing",
          basic: true,
          premium: true,
          elite: true,
        },
        {
          id: 8,
          service: "Brand Awareness",
          basic: true,
          premium: true,
          elite: true,
        },
        {
          id: 9,
          service: "Loyalty Program",
          basic: true,
          premium: true,
          elite: true,
        },
        {
          id: 10,
          service: "Public Relations",
          basic: true,
          premium: true,
          elite: true,
        },
        {
          id: 11,
          service: "Content Marketing ",
          basic: true,
          premium: true,
          elite: true,
        },
        {
          id: 12,
          service: "Direct Marketing",
          basic: true,
          premium: true,
          elite: true,
        },
        {
          id: 13,
          service: "SEO",
          basic: true,
          premium: true,
          elite: true,
        },
        {
          id: 14,
          service: "Guerilla Marketing",
          basic: true,
          premium: true,
          elite: true,
        },
        {
          id: 15,
          service: "Global Marketing ",
          basic: true,
          premium: true,
          elite: true,
        },
        {
          id: 16,
          service: "Networking",
          basic: true,
          premium: true,
          elite: true,
        },
      ],
    },
    {
      id: 2,
      name: "Pre-Sales",
      services: [
        {
          id: 1,
          name: "Prospecting",
          sub_service: [
            {
              id: 17,
              service: "Finding the contacts",
              basic: true,
              premium: true,
              elite: true,
            },
            {
              id: 18,
              service: "Conducting competitor research",
              basic: true,
              premium: true,
              elite: true,
            },
            {
              id: 19,
              service: "Conducting customer analysis",
              basic: true,
              premium: true,
              elite: true,
            },
            {
              id: 20,
              service: "Prospecting & making appointments-pay-per-appointment",
              basic: true,
              premium: true,
              elite: true,
            },
            {
              id: 21,
              service: "Qualification leads",
              basic: true,
              premium: true,
              elite: true,
            },
          ],
        },
        {
          id: 2,
          name: "After Making the contact with the leads",
          sub_service: [
            {
              id: 22,
              service: "Networking",
              basic: true,
              premium: true,
              elite: true,
            },
            {
              id: 23,
              service: "After making the contact",
              basic: true,
              premium: true,
              elite: true,
            },
            {
              id: 24,
              service: "Making discovery calls (knowing customer pain points)",
              basic: true,
              premium: true,
              elite: true,
            },
            {
              id: 25,
              service: "Performing product demos",
              basic: true,
              premium: true,
              elite: true,
            },
          ],
        },
        {
          id: 3,
          name: "After handling the sales",
          sub_service: [
            {
              id: 26,
              service:
                "Drafting and delivering proposals(responding to RFI/RFP/RFQs)",
              basic: true,
              premium: true,
              elite: true,
            },
            {
              id: 27,
              service: "Enable sales team with qualified leads ",
              basic: true,
              premium: true,
              elite: true,
            },
            {
              id: 28,
              service: "Handover leads to sales",
              basic: true,
              premium: true,
              elite: true,
            },
            {
              id: 29,
              service: "Do pilots/proof of concepts",
              basic: true,
              premium: true,
              elite: true,
            },
            {
              id: 30,
              service: "After handing over to sales",
              basic: true,
              premium: true,
              elite: true,
            },
            {
              id: 31,
              service: "Prepare sales pitches/decks",
              basic: true,
              premium: true,
              elite: true,
            },
            {
              id: 32,
              service:
                "Drafting and delivery Contracts/SOWs/Changes to contacts",
              basic: true,
              premium: true,
              elite: true,
            },
            {
              id: 33,
              service:
                "After-sale partnership with customer until the implementation is successful",
              basic: true,
              premium: true,
              elite: true,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Sales",
      services: [
        {
          id: 34,
          service: "Persuade leads to Customer conversions",
          basic: true,
          premium: true,
          elite: true,
        },
        {
          id: 35,
          service: "In-person meets",
          basic: true,
          premium: true,
          elite: true,
        },
        {
          id: 36,
          service: "Email/call follow-ups",
          basic: true,
          premium: true,
          elite: true,
        },
        {
          id: 37,
          service: "Relationship events",
          basic: true,
          premium: true,
          elite: true,
        },
        {
          id: 38,
          service: "Provide testimonials",
          basic: true,
          premium: true,
          elite: true,
        },
        {
          id: 39,
          service: "Know the hierarchy and customer potential",
          basic: true,
          premium: true,
          elite: true,
        },
        {
          id: 40,
          service: "Negotiation and closing-sales job",
          basic: true,
          premium: true,
          elite: true,
        },
        {
          id: 41,
          service: "Prep sign SOWs/Contacts",
          basic: true,
          premium: true,
          elite: true,
        },
        {
          id: 42,
          service: "Introduce & establish Account Managers",
          basic: true,
          premium: true,
          elite: true,
        },
        {
          id: 43,
          service: "On the off gauge the implementation success/failure",
          basic: true,
          premium: true,
          elite: true,
        },
        {
          id: 44,
          service: "Identify Strategic partnerships",
          basic: true,
          premium: true,
          elite: true,
        },
        {
          id: 45,
          service: "Networking ",
          basic: true,
          premium: true,
          elite: true,
        },
        {
          id: 46,
          service: "Insights to Product team",
          basic: true,
          premium: true,
          elite: true,
        },
        {
          id: 47,
          service: "Insights to Marketing team",
          basic: true,
          premium: true,
          elite: true,
        },
      ],
    },
    {
      id: 4,
      name: "Account Management",
      services: [
        {
          id: 1,
          name: "Customer Relationship Management",
          sub_service: [
            {
              id: 48,
              service: "Ensure Delivery",
              basic: true,
              premium: true,
              elite: true,
            },
            {
              id: 49,
              service: "Enable Organic Growth(refer Delight)",
              basic: true,
              premium: true,
              elite: true,
            },
          ],
        },
        {
          id: 2,
          name: "P & Management",
          sub_service: [
            {
              id: 50,
              service: "Consistently Enrich Customer Relationships",
              basic: true,
              premium: true,
              elite: true,
            },
            {
              id: 51,
              service:
                "Constantly Manage Relationships with Decision Markers and Influencer",
              basic: true,
              premium: true,
              elite: true,
            },
            {
              id: 52,
              service:
                "Provide Intel and Insights of Customers & Projects to the Sales & Pre-sales",
              basic: true,
              premium: true,
              elite: true,
            },
          ],
        },
      ],
    },
    {
      id: 5,
      name: "Delivery",
      services: [
        {
          id: 53,
          service: "Delivery",
          basic: true,
          premium: true,
          elite: true,
        },
      ],
    },
    {
      id: 6,
      name: "Strategic Alliances Partnerships Service",
      services: [
        {
          id: 53,
          service: "Delivery",
          basic: true,
          premium: true,
          elite: true,
        },
      ],
    },
  ];

  let content = null;

  content = pricingInfos?.map((service) => (
    <div key={service?.id} className="  py-10">
      <h1
        className="
      text-3xl 
      uppercase
      text-center
      my-5
       "
      >
        Pricing for {service?.name}
      </h1>
      <div className="overflow-x-auto bg-base-200 max-w-screen-xl  mx-auto p-4">
        <table className="table">
          {/* head */}
          <ServicePricingHead />

          {service?.services?.map((service) =>
            service?.sub_service ? (
              <CollapsedTableBody service={service} key={service?.id} />
            ) : (
              <tbody key={service?.id}>
                <ServicePricingRow service={service} />
              </tbody>
            )
          )}
        </table>
      </div>
    </div>
  ));

  return (
    <Layout>
      <Banner
        title={`Service pricing`}
        bg_img="https://i.ibb.co/W64yYcK/pricing.webp"
      />
      {content}

      <ContactUsForPricing />
    </Layout>
  );
}
