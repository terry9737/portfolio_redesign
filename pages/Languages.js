import React from "react";
import Container from "../comps/UI/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation } from "swiper";
import { useState } from "react";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
const info = [
  { title: "lorem 1", body: "lorem ipsum1", id: 0 },
  { title: "lorem 2", body: "lorem ipsum2", id: 1 },
  { title: "lorem 3", body: "lorem ipsum3", id: 2 },
  { title: "lorem 4", body: "lorem ipsum4", id: 3 },
];
SwiperCore.use([Navigation]);
const Languages = () => {
  const [selected, setSelected] = useState("");
  const selectHanlder = (id) => {
    setSelected(id);
  };

  return (
    <main className="bg-header-default pt-5 hidden md:block">
      <Container>
        <h1 className="text-center">My Skills</h1>
        <Swiper
          className="w-full"
          navigation={{ nextEl: ".next__btn", prevEl: ".prev__btn" }}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          // breakpoints={{
          //   // when window width is >= 320px
          //   320: {
          //     slidesPerView: 2,
          //     spaceBetween: 20,
          //   },
          // }}
          onSlideChange={() => console.log("slide change")}
        >
          {/* <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          ... */}
          {info.map((info) => {
            if (info.id === selected) {
              return (
                <SwiperSlide key={info.id} className="bg-red-400">
                  <h1>{info.title}</h1>
                  <p>{info.body}</p>
                  <button onClick={() => selectHanlder(info.id)}>
                    {info.title}
                  </button>
                </SwiperSlide>
              );
            } else {
              return (
                <SwiperSlide
                  key={info.id}
                  className="flex flex-col items-center bg-green-800 cursor-pointer"
                >
                  <h1>{info.title}</h1>
                  <p>{info.body}</p>
                  <button onClick={() => selectHanlder(info.id)}>
                    {info.title}
                  </button>
                </SwiperSlide>
              );
            }
          })}
          <div className="flex justify-center">
            <IoMdArrowRoundBack className="prev__btn text-5xl cursor-pointer" />
            <IoMdArrowRoundForward className="next__btn text-5xl cursor-pointer ml-10" />
          </div>
        </Swiper>
        {info.map((item) => {
          if (item.id === selected) {
            return <p className="text-yellow-600">{item.title}</p>;
          }
        })}
      </Container>
    </main>
  );
};

export default Languages;
