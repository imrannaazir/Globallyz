import Member from "./Member";

export default function CoreTeam() {
  const teams = [
    {
      id: 1,
      designation: "Director  ",
      name: "Madhavi ",
      about:
        "A driven entrepreneur and marketing expert with a deep understanding of customer behavior and market dynamics. With a passion for crafting effective strategies, she excels in connecting with customers in a meaningful way",
      img: "https://i.ibb.co/8PTf915/Madhavi.jpg",
    },
    /* {
      id: 2,
      designation: "Business Development Manager",
      name: "Hemant Yadav",
      about:
        "A driven entrepreneur and marketing expert with a deep understanding of customer behavior and market dynamics. With a passion for crafting effective strategies, he excels in connecting with customers in a meaningful way. ",
      img: "https://i.ibb.co/mN8kcVV/hemant.jpg",
    }, */
    {
      id: 3,
      name: "Neelam Kota",
      designation: "Marketing Specialist",
      about:
        "A skilled Marketing Specialist with a talent for developing impactful marketing strategies. With a keen understanding of market trends and consumer behavior, she excels at creating engaging campaigns that resonate with the target audience. Neelam's passion for innovation and her ability to drive results make her a valuable asset in the field of marketing.",

      img: "https://i.ibb.co/2gGRfSZ/Neelam.jpg",
    },
    {
      id: 4,
      name: "Sambhrant Bhardwaj",
      designation: "Digital Marketing Executive",
      about:
        "A talented Digital Marketing Executive with a strong command of various digital platforms and strategies. With a passion for staying ahead of digital trends, he excels at creating and implementing effective marketing campaigns that drive online visibility and engagement. Sambhrant's analytical mindset and results-driven approach make him a valuable asset in the field of digital marketing.",
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
