import Header from "../../pages/Header";
import WebSites from "../../pages/Websites";
import Languages from "../Languages/Languages";
import Services from "../../pages/Services";
import { motion } from "framer-motion";
import Head from "next/head";

const Content = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <motion.main
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{ type: "tween" }}
      >
        <Header />
        <WebSites />
        <Languages />
        <Services />
      </motion.main>
    </>
  );
};

export default Content;
