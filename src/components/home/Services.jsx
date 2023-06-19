import { BsGraphUpArrow } from "react-icons/bs";
import { VscGraph, VscGraphLeft } from "react-icons/vsc";
import { MdOutlineManageAccounts } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { DiTechcrunch } from "react-icons/di";
import SectionHeader from "./SectionHeader";
import SingleService from "./SingleService";

export default function Services() {
  // const services
  const services = [
    {
      id: 1,
      name: "Marketing",
      icon: BsGraphUpArrow,
      color: "bg-orange-100 ",
      route: "/marketing-service",
      details: [
        "Advertising",
        "Influencer Marketing",
        "Market Research",
        "Search Engine Marketing",
        "Social Media Marketing",
        "Email Marketing",
        "Marketing Communications",
        "Affiliate Marketing",
        "Brand Awareness",
        "Loyalty Program",
        "Public Relations",
        "Content Marketing",
        "Direct Marketing",
        "Seo",
        "Guenlia Marketing",
        "Global Marketing",
        "Networking",
      ],
    },
    {
      id: 2,
      icon: VscGraphLeft,
      color: "bg-cyan-100",
      route: "/pre-sales-service",
      name: "Pre-Sales",
      sub_service: [
        {
          id: 1,
          name: "Prospecting",
          details: [
            " Research and Finding the contacts",
            "Conducting competitor research  ",
            "Conducting customer analysis  ",
            "Leveraging the Potential of Referrals  ",
            "Collaborating with Marketing and Sales teams to bater Intel (Customer insights)  ",
            " Cold calling/emails  ",
            "Making appointments  ",
            "  Work with alliances for pay-per-appointment ",
            " Qualifying leads  ",
            " Develop Strategic plans  ",
          ],
        },
        {
          id: 2,
          name: " After making contact with the Leads  ",
          details: [
            "Making customized presentations & materials  ",
            "Working with the Marketing team for Marketing content",
            "Prepare sales pitches/decks  ",
            " Making Discovery calls (knowing customer pain points)  ",
            "Performing product demos  ",
            "Enable sales team with qualified leads  ",
            "Handover Qualified leads to sales  ",
          ],
        },
        {
          id: 3,
          name: "After handing over to the sales  ",
          details: [
            "Collaborate with Sales on pitches/decks",
            "Drafting and delivering Contracts /SOWs /Changes to contracts",
            "Collaborate with Sales on RFI/RFP/RFQs",
            " Partnership with customers after-sales",
            "Ensure delivery with delivery teams ",
            " Networking",
          ],
        },
      ],
    },
    {
      id: 3,
      icon: VscGraph,
      color: "bg-slate-100",
      route: "/sales-service",
      name: "Sales",
      details: [
        " Reach out ad set up meetings with customers ",
        "Identify possible Referrals ",
        "Be the first point person for Customer",
        " Collaborate with Delivery teams to do pilots/proof of concepts",
        "Drafting and Delivering proposals ",
        "Responding to RFI/RFP/RFQs",
        "Sign Contracts ",
        "Provide insights to Marketing teams",
        "Collaborate with Pre-Sales on course corrections in prospecting ",
        "Collaborate with Delivery and Product teams ",
        "Ensure CXO level contacts (Decision influencers/takers)  ",
        "Work with ACD teams for Delight (cross-sell/up-sell)  ",
        "Develop Strategic plans  ",
      ],
    },
    {
      id: 4,
      icon: MdOutlineManageAccounts,
      color: "bg-pink-100",
      route: "/account-management-service",
      name: "  Account Management / CRM / Delight (ACD)",
      sub_service: [
        {
          id: 1,
          name: "Customer Relationship Management ",
          details: [
            " Enrich Customer Relationships with ground-level teams - decision Influencers (For ex: Leads, Managers, Directors)",
            "Enable organic growth by consistently managing relationships with Decision takers (for ex: D, VP, CxO)",
            " Enhance the visibility of the brand and offerings to CXO levels",
            " Provide intel and insights of customers & projects to the Sales & pre-sales  ",
            "Offer customers with proof of concept[ts /pilot projects /consulting services",
          ],
        },
        {
          id: 2,
          name: "P & Management   ",
          details: [
            "Write contracts with SLAs  ",
            "Comply with Contractual change requests/amendments ",
            "Respond to RFI/RFQ/RFP",
            "Collaborate with Pre-Sales, Sales teams for new pitches  ",
            "Ensure invoices are time submitted to the customers ",
            "Ensure follow ups and Account Receivables and Account Payables ",
            "Be accountable for the Business portfolios  ",
          ],
        },
        /* {
          id: 3,
          name: "Delivery   ",
          details: [
            "Collaborate with Delivery teams and ensure Delivery ",
            "Speak the customer voice to Delivery teams ",
            "Delight  ",
            "Up-Sell  ",
            "Cross-Sell ",
          ],
        },
        {
          id: 4,
          name: "  Strategic Alliances & Partnerships  ",
          details: [
            "with competencies (MS Azure, AWS, Google, IBM, Salesforce, .etc)",
            "with Domain/Industry Experts  ",
            "with Domain Entities: Agencies /Companies /Organizations /Institutes  ",
            "with Technology/Industry Experts ",
            "with Technology Entities: Agencies /Companies /Organizations /Institutes  ",
          ],
        }, */
      ],
    },
    {
      id: 5,
      icon: DiTechcrunch,
      color: "bg-green-100",
      route: "/strategic-alliances-partnerships-service",
      name: "Strategic Alliances & Partnerships",
      details: [
        "With Competencies(MS Azure , AWS, Google, IBM, Salesforce, .etc)",
        "with Domain/industry Experts",
        "with Domain Entities Agencies /Companies /Organizations /Institutes",
        "with Technology/industry Experts",
      ],
    },
    {
      id: 6,
      icon: FaHandshake,
      color: "bg-yellow-100",
      route: "/delivery-service",
      name: "Delivery",
      details: [
        "Understand ",
        "Scope",
        "Schedule",
        "Business Priorities",
        "Agile methodology	",
        "Resource management	",
        "Accountability	",
        "Handshake with Account Management	",
        "Up-Sell  ",
        "Cross-Sell ",
      ],
      link: {
        url: "http://dilizent.com/",
        link_title: "DiliZent",
      },
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
