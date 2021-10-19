import { BiUpArrow } from "react-icons/bi";
import { db } from "../data/firestore";
import { collection, addDoc } from "firebase/firestore";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { contactVariants } from "../animations/Variants";
const ContactInfo = () => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState({
    name: "",
    mail: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, "contacts"), data);
      setLoading(false);
      setSent(true);
      setSuccess(true);
      setTimeout(() => setSent(false), 3000);
    } catch (e) {
      console.error("Error adding document: ", e);
      setSuccess(false);
    }
    setData({ name: "", mail: "", subject: "", message: "" });
  };

  const controls = useAnimation();
  useEffect(() => {
    if (sent) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [sent]);
  return (
    <div className="bg-header-default dark:bg-dark-mainBackground w-full px-5 sm:px-0">
      <h1 className="font-bold text-3xl text-gray-700   dark:text-gray-300 my-12 text-center md:text-left">
        Leave Me Your Info
      </h1>
      <form
        className="flex flex-col justify-start items-start p-5 bg-white font-normal text-base  sm:text-sm relative overflow-hidden dark:bg-dark-main"
        onSubmit={handleSubmit}
        autoComplete="true"
      >
        <label
          htmlFor="textinp"
          className="text-navbar-default dark:text-gray-400"
        >
          Your name
        </label>
        <input
          type="text"
          name=""
          id="textinp"
          className="bg-header-default mb-5 w-full p-2 dark:bg-gray-500"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          required
        />

        <label
          htmlFor="mailinp"
          className="text-navbar-default dark:text-gray-400"
        >
          Your email
        </label>
        <input
          type="email"
          name=""
          id="mailinp"
          className="bg-header-default mb-5 w-full p-2 dark:bg-gray-500"
          value={data.mail}
          onChange={(e) => setData({ ...data, mail: e.target.value })}
          required
        />

        <label
          htmlFor="subjectinp"
          className="text-navbar-default w-full dark:text-gray-400"
        >
          Subject
        </label>
        <input
          type="text"
          name=""
          id="subjectinp"
          className="bg-header-default mb-5 w-full p-2 dark:bg-gray-500"
          value={data.subject}
          onChange={(e) => setData({ ...data, subject: e.target.value })}
          required
        />

        <label
          htmlFor="subjectinp"
          className="text-navbar-default dark:text-gray-400"
        >
          Your message
        </label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          maxLength="100"
          className="max-h-44 bg-header-default w-full p-2 mb-5 dark:bg-gray-500"
          value={data.message}
          onChange={(e) => setData({ ...data, message: e.target.value })}
          required
        ></textarea>

        <button
          type="submit"
          className={`uppercase bg-header-yellow py-1 px-5 font-medium mx-auto md:mx-0 my-5 text-base sm:text-sm flex items-center justify-center ${
            loading && "animate-pulse"
          } dark:text-gray-100`}
        >
          {loading && (
            <span>
              <BiUpArrow className="animate-spin mr-1" />
            </span>
          )}
          submit
        </button>
        <AnimatePresence>
          {sent && (
            <motion.aside
              variants={contactVariants}
              initial="hidden"
              animate={controls}
              exit="exit"
              className={`w-full bg-blue-700 absolute bottom-2 text-center text-gray-100 capitalize right-0 ${
                success && "bg-blue-700"
              } ${!success && "bg-red-700"}`}
            >
              {`${success ? "message sent" : "message failed"}`}
            </motion.aside>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
};

export default ContactInfo;
