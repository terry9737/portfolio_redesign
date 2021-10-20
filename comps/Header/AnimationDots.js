import { motion } from "framer-motion";

const AnimationDots = () => {
  return (
    <>
      {" "}
      <motion.div
        initial={{ y: 200, rotate: 0 }}
        animate={{ y: [-500, 200], x: [220, 50], rotate: "180deg" }}
        transition={{ repeat: Infinity, duration: 12.2, ease: "linear" }}
        className="z-10"
      >
        <span className="w-3 h-3 border-2 border-red-500"></span>
      </motion.div>
      <motion.div
        initial={{ y: -500, rotate: 0 }}
        animate={{ y: [200, -500], x: [-12, -220], rotate: "180deg" }}
        transition={{ repeat: Infinity, duration: 12.2, ease: "linear" }}
        className="z-10"
      >
        <span className="w-3 h-3 border-2 border-green-500 rounded-xl"></span>
      </motion.div>
      <motion.div
        initial={{ y: -500, x: -300, rotate: 0 }}
        animate={{ y: 500, x: 300, rotate: "180deg" }}
        transition={{ repeat: Infinity, duration: 12.2, ease: "linear" }}
        className="z-10"
      >
        <span className="w-4 h-4 border-2 border-yellow-500 rounded-sm"></span>
      </motion.div>
      <motion.div
        initial={{ y: 200, x: 0, rotate: 0 }}
        animate={{ y: -500, x: 150, rotate: "180deg" }}
        transition={{ repeat: Infinity, duration: 12.2, ease: "linear" }}
        className="z-10"
      >
        <span className="w-5 h-5 border-2 border-purple-500 rounded"></span>
      </motion.div>
      <motion.div
        initial={{ y: -100, x: 400, rotate: 0 }}
        animate={{ y: -500, x: -400, rotate: "180deg" }}
        transition={{ repeat: Infinity, duration: 12.2, ease: "linear" }}
        className="z-10"
      >
        <span className="w-4 h-4 border-2 border-gray-500"></span>
      </motion.div>
    </>
  );
};

export default AnimationDots;
