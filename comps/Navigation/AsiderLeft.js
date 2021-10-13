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
      className="fixed xl:static top-0 left-0 z-30 w-60 sm:w-5/12 md:w-5/12 lg:w-4/12 xl:w-3/12 px-5 py-5 bg-white shadow-2xl h-full"
    >
      <AsiderClose controls={controls} />
      <AsiderHeader />

      <Wrap className="scroll_none">
        <AsiderBio />
        <AsiderLanguages />
        <Skills />
      </Wrap>

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
`;
