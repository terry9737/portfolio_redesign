import React from "react";
import Container from "../comps/UI/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
const info = [
  {
    title: "Lasles Vpn",
    body: "A landingpage I made using Next.js and TailwindCSS",
    url: "https://spa-vpn-sitex-n9032a3yk-greaffer.vercel.app/",
    id: 0,
  },
  {
    title: "Patrix",
    body: "A landing page I made using Bootstrap5",
    url: "https://terry9737.github.io/purple-respo/",
    id: 1,
  },
  {
    title: "Net Pirate",
    body: " Another landingpage I made using Bootstrap5Another landingpage I made using Bootstrap5",
    url: "https://terry9737.github.io/btstrp/#home",
    id: 2,
  },
];
SwiperCore.use([Autoplay, Navigation]);
const Languages = () => {
  return (
    <main className="pt-5 bg-header-default dark:bg-dark-mainBackground">
      <Container>
        <div className="bg-header-default dark:bg-dark-mainBackground">
          <h1 className="text-center text-xl font-medium text-navbar-default dark:text-gray-300 mb-5">
            A brief overview of my projects
          </h1>
          <Swiper
            className="w-full"
            navigation={{ nextEl: ".next__btn", prevEl: ".prev__btn" }}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
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
            onSlideChange={() => console.log("slide change")}
          >
            {info.map((info) => {
              return (
                <SwiperSlide
                  key={info.id}
                  className="bg-white dark:bg-dark-main rounded-xl cursor-pointer flex flex-col items-center justify-between space-y-5 pt-0"
                >
                  <h1 className="text-center text-gray-500 dark:text-gray-200 font-semibold text-xl">
                    {info.title}
                  </h1>
                  <p className="text-center dark:text-gray-300">{info.body}</p>
                  <a
                    href={info.url}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-header-yellow rounded-t-lg p-5 font-normal dark:text-gray-100 hover:bg-yellow-400"
                  >
                    Visit {info.title}
                  </a>
                </SwiperSlide>
              );
            })}
            <div className="flex justify-center lg:hidden my-5">
              <IoMdArrowRoundBack className="prev__btn text-5xl cursor-pointer text-gray-600 dark:text-gray-200 dark:hover:text-gray-400 transition-colors duration-300" />
              <IoMdArrowRoundForward className="next__btn text-5xl cursor-pointer ml-10 text-gray-600 dark:text-gray-200 dark:hover:text-gray-400 transition-colors duration-300" />
            </div>
          </Swiper>
        </div>
      </Container>
    </main>
  );
};

export default Languages;
