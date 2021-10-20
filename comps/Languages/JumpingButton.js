import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { useContext } from "react";
import { DataContext } from "../context/Context";
const JumpingButton = () => {
  const { clickHandler } = useContext(DataContext);
  const route = useRouter;
  const controls = useAnimation();
  const { ref, inView } = useInView({});
  useEffect(() => {
    if (inView) {
      controls.start("active");
    } else {
      controls.start("hidden");
    }
  });
  const variants = {
    hidden: { x: 100, opacity: 0 },
    active: {
      x: 0,
      opacity: 1,
      scale: 1.2,
    },
  };
  return (
    <Link href="/Portfolio" passHref>
      <motion.button
        variants={variants}
        initial="hidden"
        animate={controls}
        whileHover={{ scale: 1.2 }}
        ref={ref}
        className="bg-header-yellow px-5 py-3 rounded-full font-medium text-xl text-gray-100 my-10 dark:bg-dark-cta dark:text-dark-ctaText"
        onClick={() => clickHandler(2)}
      >
        <a>Jump To Portfolio</a>
      </motion.button>
    </Link>
  );
};

export default JumpingButton;
