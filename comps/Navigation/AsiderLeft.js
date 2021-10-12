import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useContext } from "react";
import { DataContext } from "../context/Context";
import Skills from "./AsiderLeft/Skills";
import AsiderClose from "./AsiderLeft/AsiderClose";
import AsiderHeader from "./AsiderLeft/AsiderHeader";
import AsiderBio from "./AsiderLeft/AsiderBio";
import { slideLeftVariants } from "../animations/Variants";
import AsiderLanguages from "./AsiderLeft/AsiderLanguages";
import styled from "styled-components";
// import cv from "./cv.pdf";
const AsiderLeft = ({ on }) => {
  const controls = useAnimation();
  const { isLeftOn } = useContext(DataContext);
  useEffect(() => {
    if (on) {
      controls.start("visible");
    } else if (isLeftOn) {
      controls.start("visible");
    } else if (!isLeftOn) {
      controls.start("hidden");
    }
  }, [isLeftOn]);

  return (
    <motion.nav
      variants={slideLeftVariants}
      initial="hidden"
      animate={controls}
      className="fixed top-0 left-0 w-60 sm:w-5/12 md:w-5/12 lg:w-4/12 xl:w-2/12 px-5 py-5 bg-white shadow-2xl h-screen"
    >
      <AsiderClose controls={controls} />
      <AsiderHeader />

      {/* <main className="flex flex-col mt-7 overflow-scroll h-80 scroll__left"> */}
      <Wrap>
        <AsiderBio />
        <AsiderLanguages />
        <Skills />
      </Wrap>
      {/* </main> */}

      <section className="flex justify-center items-center pt-10">
        <a
          download="cv"
          href="./cv.pdf"
          target="_blank"
          className="uppercase font-bold bg-header-yellow px-5 xl:px-3 py-3 sm:px-10 sm:py-3 text-gray-700"
        >
          download cv
        </a>
      </section>
    </motion.nav>
  );
};

export default AsiderLeft;
const Wrap = styled.main`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  height: calc(100vh - 500px);
  scrollbar-width: none;
`;
