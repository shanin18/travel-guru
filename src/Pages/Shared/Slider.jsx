import React from "react";
import slide1 from "../../assets/images/others/Sajek.png";
import slide2 from "../../assets/images/others/Sreemongol.png";
import slide3 from "../../assets/images/others/sundorbon.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={40}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative rounded-3xl overflow-hidden">
            <img src={slide1} alt="" />
            <div className="bg-gradient-to-t from-[#000000f1] absolute inset-0 flex flex-col justify-end px-7 py-9">
              <h3 className="text-white font-bebas text-4xl">Cox’s Bazar</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative rounded-3xl overflow-hidden">
            <img src={slide2} alt="" />
            <div className="bg-gradient-to-t from-[#000000f1] absolute inset-0 flex flex-col justify-end px-7 py-9">
              <h3 className="text-white font-bebas text-4xl">Sreemangal</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative rounded-3xl overflow-hidden">
            <img src={slide3} alt="" />
            <div className="bg-gradient-to-t from-[#000000f1] absolute inset-0 flex flex-col justify-end px-7 py-9">
              <h3 className="text-white font-bebas text-4xl">Sundarbans</h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
