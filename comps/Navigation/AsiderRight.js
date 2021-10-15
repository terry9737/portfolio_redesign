import { slideRightVariants } from "../animations/Variants";
import { motion, useAnimation } from "framer-motion";
import { useContext } from "react";
import { DataContext } from "../context/Context";
import { useEffect } from "react";
import AsiderIcons from "./AsiderRight/AsiderIcons";
import AsiderClose from "./AsiderRight/AsiderClose";
import { useWindowSize } from "../hooks/useWindowSize";
const AsiderRight = () => {
  const { isRightOn } = useContext(DataContext);
  const { width } = useWindowSize();
  const controls = useAnimation();

  useEffect(() => {
    if (isRightOn || width > 1280) {
      controls.start("active");
    } else if (!isRightOn) {
      controls.start("hidden");
    }
  });
  return (
    <>
      <motion.nav
        variants={slideRightVariants}
        initial="hidden"
        animate={controls}
        className="bg-white dark:bg-dark-main w-20 fixed right-0 top-0 z-30 h-screen flex flex-col justify-start items-center shadow-md xl:hidden"
      >
        <div className="fixed h-screen">
          <AsiderClose controls={controls} />
          <AsiderIcons />
        </div>
      </motion.nav>

      <nav className="bg-white dark:bg-dark-main w-20 absolute right-0 top-0 z-30 xl:z-0 h-full flex-col justify-start items-center shadow-md hidden xl:flex">
        <div className="fixed h-screen">
          <AsiderClose controls={controls} />
          <AsiderIcons />
        </div>
      </nav>
    </>
  );
};

export default AsiderRight;
