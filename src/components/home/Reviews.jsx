// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper";

export default function Reviews() {
  return (
    <>
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
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-col justify-center my-10">
            <div className=" flex flex-col gap-y-5 mx-auto">
              <img
                className="h-32 w-32"
                src="http://globallyz.com/assets/img/testimonial-founder.png"
                alt=""
              />
              <h3 className="text-xl font-semibold">Margaret Lawson</h3>
              <h6 className="text-sm font-light">Creative Director</h6>
            </div>

            <div>
              <p className="text-xl font-light leading-[1.6] italic my-10">
                “I am at an age where I just want to be fit and healthy our
                bodies are our responsibility! So start caring for your body and
                it will care for you. Eat clean it will care for you and workout
                hard.”
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center my-10">
            <div className=" flex flex-col gap-y-5 mx-auto">
              <img
                className="h-32 w-32"
                src="http://globallyz.com/assets/img/testimonial-founder.png"
                alt=""
              />
              <h3 className="text-xl font-semibold">Margaret Lawson</h3>
              <h6 className="text-sm font-light">Creative Director</h6>
            </div>

            <div>
              <p className="text-xl font-light leading-[1.6] italic my-10">
                “I am at an age where I just want to be fit and healthy our
                bodies are our responsibility! So start caring for your body and
                it will care for you. Eat clean it will care for you and workout
                hard.”
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
