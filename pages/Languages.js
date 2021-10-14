import Container from "../comps/UI/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { DiReact } from "react-icons/di";
const Languages = () => {
  const [open, isOpen] = useState(false);
  const toggleOpen = () => {
    isOpen(!open);
  };
  return (
    <main className="bg-header-default pt-5 hidden md:block">
      <Container>
        <h1 className="text-center">My Skills</h1>
        <Swiper
          className="w-full"
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          onSlideChange={() => console.log("slide change")}
        >
          <AnimateSharedLayout>
            <SwiperSlide layout className="bg-header-yellow">
              <motion.div layout initial={{ borderRadius: 25 }}>
                <motion.span
                  layout
                  initial={{ borderRadius: 10 }}
                  onClick={toggleOpen}
                  className="cursor-pointer"
                >
                  <motion.span layout>
                    <DiReact />
                  </motion.span>
                </motion.span>
                <AnimatePresence>{open && <Content />}</AnimatePresence>
              </motion.div>
            </SwiperSlide>
          </AnimateSharedLayout>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          ...
        </Swiper>
      </Container>
    </main>
  );
};

export default Languages;
const Content = () => {
  return <h1>content</h1>;
};
