// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper";
import SingleTestimonial from "./SingleTestimonial";

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Sai Satyadeep Kotla",
      designation: "CEO, Dignity of Noble",
      review:
        "Working with Globallyz has been an absolute pleasure. Their team is knowledgeable, professional, and dedicated to helping us achieve our marketing goals. Thanks to their expertise, we've been able to significantly increase our online visibility and reach more potential customers than ever before. I highly recommend their services to anyone looking to take their marketing efforts to the next level.",
      img: "https://dignityofnoble.org/wp-content/uploads/2023/04/1648856269331.jpeg",
    },
    {
      id: 2,
      name: "Sonia Yadav",
      designation: "Director, Noblespiritz",
      review:
        "Globallyz is simply the best. Their team is incredibly talented and has a deep understanding of the marketing landscape. They've helped us build our brand from the ground up and have been instrumental in our growth and success. We're grateful for their partnership and would recommend their services to anyone looking for a top-notch marketing agency.",
      img: "https://i.ibb.co/vLQKpXc/Sonia-Yadav.jpg",
    },
    {
      id: 3,
      name: "Phani Phenumatsa",
      designation: "Director, Ravsol",
      review:
        "When we first approached Globallyz, we were struggling to reach our target audience and generate leads. But their team quickly assessed our needs and developed a comprehensive marketing strategy that has transformed our business",
      img: "https://i.ibb.co/stGnhFn/Phani-Phenumatsa.jpg",
    },

    {
      id: 5,
      name: "NAVEEN",
      designation: "Director,Mediclinicals",
      review:
        "Globallyz has truly been a game-changer for our business. Their expertise in digital marketing has helped us expand our online presence and reach a wider audience. Their strategic approach, coupled with their in-depth market analysis, has allowed us to stay ahead of the competition.",
      img: "https://i.ibb.co/rFn62BH/user.jpg",
    },
    {
      id: 6,
      name: "MAYANK PATEL",
      designation: "Director, Samvedna",
      review:
        "Globallyz has been a trusted partner in our digital marketing journey. Their comprehensive approach and attention to detail have been instrumental in enhancing our online visibility and brand reputation. They bring a wealth of knowledge and expertise to the table, consistently providing innovative solutions that yield tangible results. The team is responsive, collaborative, and genuinely invested in our success.",
      img: "https://i.ibb.co/1JDVTfR/MR-MAYANK-PATEL.jpg",
    },
  ];

  return (
    <div
      className="
    border-2
    rounded-md
    shadow-md
    lg:p-14
     "
    >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {reviews?.map((review) => (
          <SwiperSlide key={review?.id}>
            <SingleTestimonial review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
