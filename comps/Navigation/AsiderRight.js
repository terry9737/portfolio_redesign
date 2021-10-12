import { slideRightVariants } from "../animations/Variants";
import { motion, useAnimation } from "framer-motion";
import { useContext } from "react";
import { DataContext } from "../context/Context";
import { useEffect } from "react";
import AsiderIcons from "./AsiderRight/AsiderIcons";
import AsiderClose from "./AsiderRight/AsiderClose";

const AsiderRight = ({ on }) => {
  const { isRightOn } = useContext(DataContext);

  useEffect(() => {
    if (on) {
      controls.start("active");
    } else if (isRightOn) {
      controls.start("active");
    } else if (!isRightOn) {
      controls.start("hidden");
    }
  }, [isRightOn]);

  const controls = useAnimation();
  return (
    <motion.nav
      variants={slideRightVariants}
      initial="hidden"
      animate={controls}
      className="bg-red-700 w-20 h-screen fixed right-0 top-0 z-30 pt-3 pl-2"
    >
      <AsiderClose controls={controls} />
      <AsiderIcons />
    </motion.nav>
  );
};

export default AsiderRight;
