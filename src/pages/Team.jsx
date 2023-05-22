import Banner from "../components/general/Banner";
import Layout from "../components/ui/Layout";
import Member from "../components/team/Member";

export default function Team() {
  const teams = [
    {
      id: 1,
      name: "Mark Jukerberg",
      designation: "CEO",
      about:
        "ATX President and CEO Dan Whalen is responsible for the company’s overall strategic vision, global operations and growth. Whalen’s 20 years of senior management experience in the broadband and content industries includes a variety of leadership roles that stretch across multiple technology disciplines. With a background that spans sales, product and operational roles, Whalen has the proven expertise, vision and versatility to help customers expand and excel in an era of unprecedented disruption. Prior to joining ATX, Whalen was Chief Product Officer at ADTRAN, responsible for products from concept to delivery. Before ADTRAN, he held multiple leadership positions at ARRIS, including Senior Vice President of Sales, Senior Vice President and General Manager of Global Services, and President, Network & Cloud. In this role he was responsible for oversight of the development and delivery of the company’s portfolio of broadband and video network infrastructure technologies, cloud-based software solutions, and Global Services business. Whalen’s work history also includes key positions at Cisco Systems, Comdisco, KPMG and Bell Atlantic. Whalen holds a Bachelor of Engineering degree from Stevens Institute of Technology.",
      img: "http://rainbowit.net/themes/imroz/wp-content/uploads/2021/09/team-01.jpg",
    },
    {
      id: 2,
      name: "Mark Jukerberg",
      designation: "CEO",
      about:
        "ATX President and CEO Dan Whalen is responsible for the company’s overall strategic vision, global operations and growth. Whalen’s 20 years of senior management experience in the broadband and content industries includes a variety of leadership roles that stretch across multiple technology disciplines. With a background that spans sales, product and operational roles, Whalen has the proven expertise, vision and versatility to help customers expand and excel in an era of unprecedented disruption. Prior to joining ATX, Whalen was Chief Product Officer at ADTRAN, responsible for products from concept to delivery. Before ADTRAN, he held multiple leadership positions at ARRIS, including Senior Vice President of Sales, Senior Vice President and General Manager of Global Services, and President, Network & Cloud. In this role he was responsible for oversight of the development and delivery of the company’s portfolio of broadband and video network infrastructure technologies, cloud-based software solutions, and Global Services business. Whalen’s work history also includes key positions at Cisco Systems, Comdisco, KPMG and Bell Atlantic. Whalen holds a Bachelor of Engineering degree from Stevens Institute of Technology.",
      img: "http://rainbowit.net/themes/imroz/wp-content/uploads/2021/09/team-01.jpg",
    },
    {
      id: 3,
      name: "Mark Jukerberg",
      designation: "CEO",
      about:
        "ATX President and CEO Dan Whalen is responsible for the company’s overall strategic vision, global operations and growth. Whalen’s 20 years of senior management experience in the broadband and content industries includes a variety of leadership roles that stretch across multiple technology disciplines. With a background that spans sales, product and operational roles, Whalen has the proven expertise, vision and versatility to help customers expand and excel in an era of unprecedented disruption. Prior to joining ATX, Whalen was Chief Product Officer at ADTRAN, responsible for products from concept to delivery. Before ADTRAN, he held multiple leadership positions at ARRIS, including Senior Vice President of Sales, Senior Vice President and General Manager of Global Services, and President, Network & Cloud. In this role he was responsible for oversight of the development and delivery of the company’s portfolio of broadband and video network infrastructure technologies, cloud-based software solutions, and Global Services business. Whalen’s work history also includes key positions at Cisco Systems, Comdisco, KPMG and Bell Atlantic. Whalen holds a Bachelor of Engineering degree from Stevens Institute of Technology.",
      img: "http://rainbowit.net/themes/imroz/wp-content/uploads/2021/09/team-01.jpg",
    },
  ];
  return (
    <Layout bg_img="https://i.ibb.co/s12vqhs/team.webp">
      <Banner title="Our Team" />
      <div className="max-w-screen-xl  flex-wrap   mx-auto p-4">
        <div className="text-center">
          <h5 className="text-lg font-semibold text-gray-300">Our Experts</h5>
          <h3 className="text-[3rem] font-semibold text-white">
            Our Awesome Team
          </h3>
        </div>

        {/* teams */}
        <div className="flex flex-col gap-10">
          {teams.map((member) => (
            <Member key={member.id} member={member} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
