import Container from "../comps/UI/Container";

import ContactInfo from "../comps/Contact/ContactInfo";
import ContactMyInfo from "../comps/Contact/ContactMyInfo";
import ContactMap from "../comps/Contact/ContactMap";
import { motion } from "framer-motion";
import Head from "next/dist/shared/lib/head";
const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact me</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <motion.main
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{ type: "tween" }}
        className="bg-header-default dark:bg-dark-mainBackground pt-5"
      >
        <Container>
          <div className="h-screen bg-header-default dark:bg-dark-mainBackground">
            <div className="flex flex-col md:flex-row md:space-x-5 bg-header-default dark:bg-dark-mainBackground pb-5">
              <ContactInfo />
              <ContactMyInfo />
            </div>
            <ContactMap />
          </div>
        </Container>
      </motion.main>
    </>
  );
};

export default Contact;
