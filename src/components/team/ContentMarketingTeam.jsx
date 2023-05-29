import Member from "./Member";

export default function ContentMarketingTeam() {
  const teams = [
    {
      id: 1,
      name: "Hemant Yadav",
      designation: "Director  ",
      about:
        "ATX President and CEO Dan Whalen is responsible for the company’s overall strategic vision, global operations and growth. Whalen’s 20 years of senior management experience in the broadband and content industries includes a variety of leadership roles that stretch across multiple technology disciplines. With a background that spans sales, product and operational roles, Whalen has the proven expertise, vision and versatility to help customers expand and excel in an era of unprecedented disruption. Prior to joining ATX, Whalen was Chief Product Officer at ADTRAN, responsible for products from concept to delivery. Before ADTRAN, he held multiple leadership positions at ARRIS, including Senior Vice President of Sales, Senior Vice President and General Manager of Global Services, and President, Network & Cloud. In this role he was responsible for oversight of the development and delivery of the company’s portfolio of broadband and video network infrastructure technologies, cloud-based software solutions, and Global Services business. Whalen’s work history also includes key positions at Cisco Systems, Comdisco, KPMG and Bell Atlantic. Whalen holds a Bachelor of Engineering degree from Stevens Institute of Technology.",
      img: "https://i.ibb.co/mN8kcVV/hemant.jpg",
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
    {
      id: 5,
      name: "Sneha Joseph",
      designation: "Digital Marketing Executive",
      about:
        "A talented Digital Marketing Executive with a strong command of various digital platforms and strategies. With a passion for staying ahead of digital trends, he excels at creating and implementing effective marketing campaigns that drive online visibility and engagement. Sambhrant's analytical mindset and results-driven approach make him a valuable asset in the field of digital marketing.",
      img: "https://media.licdn.com/dms/image/D4D03AQEjlFXsoh1qEA/profile-displayphoto-shrink_400_400/0/1667564699722?e=1691020800&v=beta&t=1o6C1qbyZ6rm6Mz-7H1dPE3uWx41AllRulhnc8QRdRc",
    },
    {
      id: 7,
      name: "Shivani",
      designation: "Writer",
      about:
        "A talented Digital Marketing Executive with a strong command of various digital platforms and strategies. With a passion for staying ahead of digital trends, he excels at creating and implementing effective marketing campaigns that drive online visibility and engagement. Sambhrant's analytical mindset and results-driven approach make him a valuable asset in the field of digital marketing.",
      img: "https://media.licdn.com/dms/image/D5603AQHLVKOEp6Payg/profile-displayphoto-shrink_400_400/0/1680076119230?e=1691020800&v=beta&t=9iGWRdNKFh4oNl_CV3T_c3z9fbTEPJb3rlnj_FFt0G8",
    },
    {
      id: 8,
      name: "Shanul",
      designation: "Writer",
      about:
        "A talented Digital Marketing Executive with a strong command of various digital platforms and strategies. With a passion for staying ahead of digital trends, he excels at creating and implementing effective marketing campaigns that drive online visibility and engagement. Sambhrant's analytical mindset and results-driven approach make him a valuable asset in the field of digital marketing.",
      img: "https://media.licdn.com/dms/image/D5603AQHLVKOEp6Payg/profile-displayphoto-shrink_400_400/0/1680076119230?e=1691020800&v=beta&t=9iGWRdNKFh4oNl_CV3T_c3z9fbTEPJb3rlnj_FFt0G8",
    },
    {
      id: 9,
      name: "Nikhil",
      designation: "Writer",
      about:
        "A talented Digital Marketing Executive with a strong command of various digital platforms and strategies. With a passion for staying ahead of digital trends, he excels at creating and implementing effective marketing campaigns that drive online visibility and engagement. Sambhrant's analytical mindset and results-driven approach make him a valuable asset in the field of digital marketing.",
      img: "https://media.licdn.com/dms/image/D5603AQHLVKOEp6Payg/profile-displayphoto-shrink_400_400/0/1680076119230?e=1691020800&v=beta&t=9iGWRdNKFh4oNl_CV3T_c3z9fbTEPJb3rlnj_FFt0G8",
    },
    {
      id: 10,
      name: "Aastha Tandon",
      designation: "Content Marketing Intern",
      about:
        "A talented Digital Marketing Executive with a strong command of various digital platforms and strategies. With a passion for staying ahead of digital trends, he excels at creating and implementing effective marketing campaigns that drive online visibility and engagement. Sambhrant's analytical mindset and results-driven approach make him a valuable asset in the field of digital marketing.",
      img: "https://media.licdn.com/dms/image/D5603AQHLVKOEp6Payg/profile-displayphoto-shrink_400_400/0/1680076119230?e=1691020800&v=beta&t=9iGWRdNKFh4oNl_CV3T_c3z9fbTEPJb3rlnj_FFt0G8",
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
