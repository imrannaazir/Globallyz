import Banner from "../components/general/Banner";
import Member from "../components/team/Member";
import Layout from "../components/ui/Layout";

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Sai Satyadeep Kotla",
      designation: "CEO, Dignity of Noble",
      about:
        "Working with Globallyz has been an absolute pleasure. Their team is knowledgeable, professional, and dedicated to helping us achieve our marketing goals. Thanks to their expertise, we've been able to significantly increase our online visibility and reach more potential customers than ever before. I highly recommend their services to anyone looking to take their marketing efforts to the next level.",
      img: "http://rainbowit.net/themes/imroz/wp-content/uploads/2021/09/team-01.jpg",
    },
    {
      id: 2,
      name: "Sonia Yadav",
      designation: "Director, Noblespiritz",
      about:
        "Globallyz is simply the best. Their team is incredibly talented and has a deep understanding of the marketing landscape. They've helped us build our brand from the ground up and have been instrumental in our growth and success. We're grateful for their partnership and would recommend their services to anyone looking for a top-notch marketing agency.",
      img: "https://i.pinimg.com/originals/77/71/68/7771683223d86b237a3304d6f32828b9.jpg",
    },
    {
      id: 3,
      name: "Phani Phenumatsa",
      designation: "Director, Mediclinicals",
      about:
        "When we first approached Globallyz, we were struggling to reach our target audience and generate leads. But their team quickly assessed our needs and developed a comprehensive marketing strategy that has transformed our business",
      img: "http://rainbowit.net/themes/imroz/wp-content/uploads/2021/09/team-01.jpg",
    },
  ];
  return (
    <Layout bg_img="https://i.ibb.co/gSdb4bC/testimonials.jpg">
      <Banner title="Clients & Testimonials" />
      <div className="max-w-screen-xl  flex-wrap   mx-auto p-4">
        {/* <div className="text-center">
          <h5 className="text-lg font-semibold text-gray-300">Our Experts</h5>
          <h3 className="text-[3rem] font-semibold text-white">
            Our Awesome Team
          </h3>
        </div> */}

        {/* teams */}
        <div className="flex flex-col gap-10">
          {reviews.map((member) => (
            <Member key={member.id} member={member} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
