import Member from "./Member";

export default function OnBoard() {
  const teams = [
    {
      id: 1,
      designation: "Chairman of Globallyz",
      name: "Hemant Yadav",
      about:
        "Hemant Yadav, a distinguished business leader, serves as the Chairman of Globallyz. With a wealth of experience and expertise in the industry, Hemant Yadav has played a pivotal role in shaping the company's vision and driving its success. Under his leadership, Globallyz has emerged as a dynamic and forward-thinking organization, known for its innovative solutions and commitment to excellence. Hemant Yadav's strategic guidance and insightful decision-making have propelled Globallyz to new heights, positioning it as a prominent player in its field. His strong leadership skills, combined with a passion for delivering exceptional results, have fostered a collaborative and high-performing team environment at Globallyz.F ",
      img: "https://i.ibb.co/mN8kcVV/hemant.jpg",
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
