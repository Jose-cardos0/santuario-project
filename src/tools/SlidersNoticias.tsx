import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

//import noticias
import { Slider1 } from "./sliders/Slider1";
import { Slider2 } from "./sliders/Slider2";

export function SlidersNoticias() {
  return (
    <div
      className="flex items-center justify-center w-full px-64 
    mm:max-md:px-0 mm:max-md:py-16 mm:max-md:h-auto  "
    >
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
          <Slider1 />
        </SwiperSlide>
        <SwiperSlide className="px-16">
          <Slider2 />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
