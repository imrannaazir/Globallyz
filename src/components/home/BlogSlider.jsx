import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import BlogCard from "./BlogCard";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import SectionHeader from "./SectionHeader";
import { useEffect, useState } from "react";
import axios from "axios";

const BlogSlider = () => {
  // state for blogs
  const [blogs, setBlogs] = useState([]);

  // fetch blogs api request
  useEffect(() => {
    // function for get blogs
    const getBlogs = async () => {
      try {
        const baseUrl = import.meta.env.VITE_REACT_BLOGS_API;
        const response = await axios.get(`${baseUrl}`);
        setBlogs(response?.data?.data);
      } catch (error) {
        console.log(error);
      }
    };

    // invoked the getBlogs function
    getBlogs();
  }, []);

  return (
    <div className="relative w-full group p-4">
      <SectionHeader>OUR LATEST BLOG</SectionHeader>
      <Swiper
        className="mx-auto p-4 max-w-screen-xl pb-10"
        modules={[Autoplay, Navigation]}
        spaceBetween={0}
        // slidesPerView={3}
        loop={true}
        pagination={{ clickable: true }}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {blogs?.map((blog, i) => (
          <SwiperSlide key={i}>
            <BlogCard blog={blog} />
          </SwiperSlide>
        ))}

        <div
          className="
        custom-prev 
        cursor-pointer
        bg-primary 
        w-[50px] 
        h-[50px] 
        text-white 
        flex 
        justify-center 
        items-center 
        absolute 
        z-[999] 
        left-0
        md:-left-14
        md:group-hover:left-0
        top-[50%]
        rounded-full"
        >
          <BsArrowLeft />
        </div>
        <div
          className="
        custom-next 
        cursor-pointer 
        bg-primary 
        w-[50px] 
        h-[50px] 
        text-white 
        flex 
        justify-center 
        items-center 
        absolute 
        right-0
        md:-right-14
        md:group-hover:right-0 
        top-[50%] 
        z-[999]
        rounded-full"
        >
          <BsArrowRight />
        </div>
      </Swiper>
    </div>
  );
};

export default BlogSlider;
