import React, { useState, useEffect } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faGamepad,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const WhyChooseUs = () => {
  return (
    <div
      id="wcs"
      className="flex items-center justify-center xl:mt-16 bg-white flex-col xl:flex-row"
    >
      <div className="xxl:w-1/2 xxl:ps-32 ps-5  max-width:md">
        <h1 className="text-7xl xl:text-6xl xxl:text-7xl font-bold mb-6 gradient-wcs">
          Why Must
          <br /> Choose Us?
        </h1>
        <p className="text-lg hidden md:block text-gray-600 mb-8">
          Each activity is designed with interactive features
          <br />
          that spark curiosity and make learning enjoyable.
        </p>

        <p className="text-lg block md:hidden text-gray-600 mb-8">
          Each activity is designed with interactive features that spark
          curiosity and make learning enjoyable.
        </p>
        <a
          href="#"
          className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-700"
        >
          Start Now
        </a>
      </div>

      <div className="relative w-[750px] h-[400px] ps-5 pt-14 xl:pt-0 xl:ps-24 xxl:ps-0">
        <Swiper
          modules={[Pagination, A11y]}
          spaceBetween={-600}
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '"></span>';
            },
          }}
        >
          <SwiperSlide>
            <div className="card">
              <div className="flex items-center justify-end mb-4">
                <FontAwesomeIcon
                  icon={faGear}
                  className="text-purple-600 text-7xl mr-2"
                />
              </div>
              <h2 className="text-2xl font-bold text-purple-600">
                Creative Thinking
              </h2>
              <p className="text-start text-gray-700 pt-2">
                With our interactive features, you can play and learn anytime,
                anywhere. Try our learning adventures specially designed for
                preschoolers so you can keep discovering new things every day.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card">
              <div className="flex items-center justify-end mb-4">
                <FontAwesomeIcon
                  icon={faGamepad}
                  className="text-red-600 text-7xl mr-2"
                />
              </div>
              <h2 className="text-2xl font-bold text-red-600">Play & Learn</h2>

              <p className="text-start text-gray-700 pt-2">
                With our interactive features, you can play and learn anytime,
                anywhere. Try our learning adventures specially designed for
                preschoolers so you can keep discovering new things every day.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card">
              <div className="flex items-center justify-end mb-4">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="text-blue-600  mr-2 text-7xl"
                />
              </div>
              <h2 className="text-2xl font-bold text-blue-600">Scheduled</h2>

              <p className="text-start text-gray-700 pt-2">
                With our interactive features, you can play and learn anytime,
                anywhere. Try our learning adventures specially designed for
                preschoolers so you can keep discovering new things every day.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default WhyChooseUs;
