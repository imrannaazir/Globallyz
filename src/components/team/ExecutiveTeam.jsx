import Member from "./Member";

export default function ExecutiveTeam() {
  const teams = [
    {
      id: 1,
      name: "Alia Vat",
      designation: "Director  ",
      about:
        "ATX President and CEO Dan Whalen is responsible for the company’s overall strategic vision, global operations and growth. Whalen’s 20 years of senior management experience in the broadband and content industries includes a variety of leadership roles that stretch across multiple technology disciplines. With a background that spans sales, product and operational roles, Whalen has the proven expertise, vision and versatility to help customers expand and excel in an era of unprecedented disruption. Prior to joining ATX, Whalen was Chief Product Officer at ADTRAN, responsible for products from concept to delivery. Before ADTRAN, he held multiple leadership positions at ARRIS, including Senior Vice President of Sales, Senior Vice President and General Manager of Global Services, and President, Network & Cloud. In this role he was responsible for oversight of the development and delivery of the company’s portfolio of broadband and video network infrastructure technologies, cloud-based software solutions, and Global Services business. Whalen’s work history also includes key positions at Cisco Systems, Comdisco, KPMG and Bell Atlantic. Whalen holds a Bachelor of Engineering degree from Stevens Institute of Technology.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww&w=1000&q=80",
    },
    {
      id: 2,
      name: "Madhavi ",
      designation: "Business Development Manager",
      about:
        "ATX President and CEO Dan Whalen is responsible for the company’s overall strategic vision, global operations and growth. Whalen’s 20 years of senior management experience in the broadband and content industries includes a variety of leadership roles that stretch across multiple technology disciplines. With a background that spans sales, product and operational roles, Whalen has the proven expertise, vision and versatility to help customers expand and excel in an era of unprecedented disruption. Prior to joining ATX, Whalen was Chief Product Officer at ADTRAN, responsible for products from concept to delivery. Before ADTRAN, he held multiple leadership positions at ARRIS, including Senior Vice President of Sales, Senior Vice President and General Manager of Global Services, and President, Network & Cloud. In this role he was responsible for oversight of the development and delivery of the company’s portfolio of broadband and video network infrastructure technologies, cloud-based software solutions, and Global Services business. Whalen’s work history also includes key positions at Cisco Systems, Comdisco, KPMG and Bell Atlantic. Whalen holds a Bachelor of Engineering degree from Stevens Institute of Technology.",
      img: "https://i.ibb.co/8PTf915/Madhavi.jpg",
    },
    {
      id: 3,
      name: "Neelam Kota",
      designation: "Marketing Specialist",
      about:
        "ATX President and CEO Dan Whalen is responsible for the company’s overall strategic vision, global operations and growth. Whalen’s 20 years of senior management experience in the broadband and content industries includes a variety of leadership roles that stretch across multiple technology disciplines. With a background that spans sales, product and operational roles, Whalen has the proven expertise, vision and versatility to help customers expand and excel in an era of unprecedented disruption. Prior to joining ATX, Whalen was Chief Product Officer at ADTRAN, responsible for products from concept to delivery. Before ADTRAN, he held multiple leadership positions at ARRIS, including Senior Vice President of Sales, Senior Vice President and General Manager of Global Services, and President, Network & Cloud. In this role he was responsible for oversight of the development and delivery of the company’s portfolio of broadband and video network infrastructure technologies, cloud-based software solutions, and Global Services business. Whalen’s work history also includes key positions at Cisco Systems, Comdisco, KPMG and Bell Atlantic. Whalen holds a Bachelor of Engineering degree from Stevens Institute of Technology.",
      img: "https://i.ibb.co/2gGRfSZ/Neelam.jpg",
    },
    {
      id: 4,
      name: "Sambhrant Bhardwaj",
      designation: "Digital Marketing Executive",
      about:
        "ATX President and CEO Dan Whalen is responsible for the company’s overall strategic vision, global operations and growth. Whalen’s 20 years of senior management experience in the broadband and content industries includes a variety of leadership roles that stretch across multiple technology disciplines. With a background that spans sales, product and operational roles, Whalen has the proven expertise, vision and versatility to help customers expand and excel in an era of unprecedented disruption. Prior to joining ATX, Whalen was Chief Product Officer at ADTRAN, responsible for products from concept to delivery. Before ADTRAN, he held multiple leadership positions at ARRIS, including Senior Vice President of Sales, Senior Vice President and General Manager of Global Services, and President, Network & Cloud. In this role he was responsible for oversight of the development and delivery of the company’s portfolio of broadband and video network infrastructure technologies, cloud-based software solutions, and Global Services business. Whalen’s work history also includes key positions at Cisco Systems, Comdisco, KPMG and Bell Atlantic. Whalen holds a Bachelor of Engineering degree from Stevens Institute of Technology.",
      img: "https://i.ibb.co/M9G2gLF/sambhrant.jpg",
    },
  ];
  return (
    <div className="flex flex-col gap-10">
      {teams.map((member) => (
        <Member key={member.id} member={member} />
      ))}
    </div>
  );
}
