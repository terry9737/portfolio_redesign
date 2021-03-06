import React from "react";
import Container from "../UI/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { info } from "./LanguagesData";
import JumpingButton from "./JumpingButton";
SwiperCore.use([Autoplay, Navigation]);
const Languages = () => {
  return (
    <div className="pt-5 bg-header-default dark:bg-dark-mainBackground">
      <Container>
        <div className="bg-header-default dark:bg-dark-mainBackground">
          <h1 className="text-center text-3xl text-navbar-default font-semibold dark:text-gray-100 mb-5">
            A brief overview of my projects
          </h1>
          <Swiper
            className="w-full relative z-0"
            navigation={{ nextEl: ".next__btn", prevEl: ".prev__btn" }}
            spaceBetween={10}
            slidesPerView={1}
            loop={false}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
          >
            {info.map((info) => {
              if (info.category !== "unknown") {
                return (
                  <SwiperSlide
                    key={info.id}
                    className="bg-white dark:bg-dark-main rounded-xl cursor-pointer flex flex-col items-center space-y-5 pt-0 relative"
                  >
                    <h1 className="text-center text-gray-500 dark:text-gray-200 font-semibold text-xl mt-2 sm:mt-5">
                      {info.title}
                    </h1>
                    <p className="text-center dark:text-gray-300">
                      {info.body}
                    </p>
                    <a
                      href={info.url}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-header-yellow rounded-t-lg p-5 font-normal dark:text-gray-100 hover:bg-yellow-400 absolute bottom-0"
                    >
                      Visit {info.title}
                    </a>
                  </SwiperSlide>
                );
              }
            })}
          </Swiper>
          <div className="flex justify-between mt-5 w-full px-5 absolute top-4/4 z-20">
            <IoMdArrowRoundBack className="prev__btn animate-pulse text-5xl cursor-pointer text-gray-600 dark:text-gray-200 dark:hover:text-gray-400 transition-colors duration-300" />
            <IoMdArrowRoundForward className="next__btn animate-pulse text-5xl cursor-pointer ml-10 text-gray-600 dark:text-gray-200 dark:hover:text-gray-400 transition-colors duration-300" />
          </div>
          <span className="flex justify-center items-center w-full overflow-hidden">
            <JumpingButton />
          </span>
        </div>
      </Container>
    </div>
  );
};

export default Languages;
