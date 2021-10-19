import Header from "../../pages/Header";
import WebSites from "../../pages/Websites";
import Languages from "../Languages/Languages";
import Services from "../../pages/Services";
import { motion } from "framer-motion";
const Content = () => {
  return (
    <>
      <motion.div
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", bounce: 0.3, damping: 11 }}
      >
        <Header />
        <WebSites />
        <Languages />
        <Services />
      </motion.div>
    </>
  );
};

export default Content;
