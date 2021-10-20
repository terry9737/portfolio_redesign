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
import { useWindowSize } from "../hooks/useWindowSize";
import { BsFillMouseFill } from "react-icons/bs";

const AsiderLeft = () => {
  const controls = useAnimation();
  const { isLeftOn } = useContext(DataContext);
  const { width } = useWindowSize();
  useEffect(() => {
    if (isLeftOn || width > 1279) {
      controls.start("visible");
    } else if (!isLeftOn) {
      controls.start("hidden");
    }
  });
  return (
    <motion.nav
      variants={slideLeftVariants}
      initial="hidden"
      animate={controls}
      className="fixed top-0 left:0 xl:w-80 w-60 sm:w-64 md:w-72 lg:w-80 bg-white dark:bg-dark-main shadow-2xl h-screen px-5 py-5 z-30"
    >
      <AsiderClose controls={controls} />
      <AsiderHeader />

      <BsFillMouseFill className="mx-auto text-2xl animate-bounce text-gray-600 dark:text-white mt-5" />
      <Wrap className="scroll_none">
        <AsiderBio />
        <AsiderLanguages />
        <Skills />
      </Wrap>

      <div className="flex justify-center items-center pt-10">
        <a
          download="cv"
          href="./cv.pdf"
          target="_blank"
          className="uppercase font-bold bg-header-yellow px-5 xl:px-3 py-3 sm:px-10 sm:py-3 text-white dark:text-gray-100 hover:text-gray-400 dark:hover:text-gray-400 transition-colors duration-300"
        >
          download cv
        </a>
      </div>
    </motion.nav>
  );
};

export default AsiderLeft;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  height: calc(100vh - 500px);
`;
