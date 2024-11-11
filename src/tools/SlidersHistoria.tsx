import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

//import noticias
import cap2 from "../assets/NossaHistoria/cap2.jpg";
import cap4 from "../assets/NossaHistoria/cap3.png";
import cap5 from "../assets/NossaHistoria/cap5.png";
import cap6 from "../assets/NossaHistoria/cap6.png";
import cap8 from "../assets/NossaHistoria/cap8.png";
import cap7 from "../assets/NossaHistoria/cap7.png";
import cap1 from "../assets/NossaHistoria/cap1.png";

export function SliderHistoria() {
  return (
    <div className="flex items-center justify-center w-full mb-16  ">
      <Swiper
        modules={[Pagination, Navigation, Scrollbar, Autoplay]}
        slidesPerView={1}
        navigation={true}
        // pagination={{ clickable: true }}
        className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="px-16">
          <img
            className="object-cover w-full rounded-md shadow-md shadow-black"
            src={cap1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="px-16">
          <img
            className="object-cover w-full rounded-md shadow-md shadow-black"
            src={cap2}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="px-16">
          <img
            className="object-cover w-full rounded-md shadow-md shadow-black"
            src={cap4}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="px-16">
          <img
            className="object-cover w-full rounded-md shadow-md shadow-black"
            src={cap5}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="px-16">
          <img
            className="object-cover w-full rounded-md shadow-md shadow-black"
            src={cap6}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="px-16">
          <img
            className="object-cover w-full rounded-md shadow-md shadow-black"
            src={cap7}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="px-16">
          <img
            className="object-cover w-full rounded-md shadow-md shadow-black"
            src={cap8}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
