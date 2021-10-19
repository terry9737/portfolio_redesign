import Image from "next/dist/client/image";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

const PortfolioCard = ({ title, body, url, image }) => {
  const control = useAnimation();
  const variants = {
    hidden: {
      y: 500,
    },
    visible: {
      y: 0,
    },
  };
  return (
    <AnimatePresence>
      <motion.section
        initial={{ x: -800 }}
        animate={{ x: 0 }}
        exit={{ x: 800 }}
        className="h-52 relative overflow-hidden bg-gray-300 cursor-pointer w-52"
        onMouseEnter={() => control.start("visible")}
        onMouseLeave={() => control.start("hidden")}
      >
        <div className="w-full h-full">
          <Image alt="img" src={image} className="z-10 relative" />
        </div>
        <a href={url} target="_blank" rel="noreferrer">
          <motion.span
            variants={variants}
            initial="hidden"
            animate={control}
            className="absolute top-0 w-full h-full bg-header-yellow bg-opacity-80 z-50"
          ></motion.span>
        </a>
      </motion.section>
    </AnimatePresence>
  );
};

export default PortfolioCard;
