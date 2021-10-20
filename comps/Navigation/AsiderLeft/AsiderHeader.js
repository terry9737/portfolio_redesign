import Image from "next/image";
import avatar from "/public/images/ava.jpg";
import { FaFacebookF, FaLinkedinIn, FaInbox } from "react-icons/fa";
import { motion } from "framer-motion";
import { bipDotVariants } from "../../animations/Variants";
const AsiderHeader = () => {
  const Links = [
    {
      image: <FaFacebookF />,
      link: "https://www.facebook.com/adrian9737/",
      id: 0,
    },
    {
      image: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/gorgos-adrian/",
      id: 1,
    },
    {
      image: <FaInbox />,
      id: 2,
      link: "mailto:adriangorgos@gmail.com?subject=Adrian&nbsp;Gorgos&nbsp;Frontend",
    },
  ];
  return (
    <header className="flex flex-col items-center border-b-2 border-gray-400 dark:border-gray-300 border-opacity-40">
      <div className="w-40 h-40 mb-5 sm:w-52 sm:h-52 rounded-full relative">
        <Image
          src={avatar}
          alt="avatar"
          layout="fill"
          objectFit="cover"
          objectPosition="center top"
          className="rounded-full"
        />
        <motion.span
          variants={bipDotVariants}
          initial="hidden"
          animate="visible"
          className="h-5 w-5 bg-green-400 dark:bg-green-600 absolute bottom-2 right-5 sm:bottom-2 sm:right-9 rounded-full"
        ></motion.span>
      </div>
      <h3 className="font-medium text-xl dark:text-gray-300">Gorgos Adrian</h3>
      <p className="text-navbar-default text-sm mb-2 dark:text-gray-500">
        Front End Developer
      </p>
      <ul className="flex justify-evenly space-x-5 mb-4">
        {Links.map((link) => {
          return (
            <li
              key={link.id}
              className="text-sm sm:text-md md:text-lg flex justify-center items-center h-10 w-10 bg-header-yellow rounded-full cursor-pointer filter hover:grayscale transition duration-500"
            >
              <a href={link.link} target="_blank" rel="noreferrer">
                {link.image}
              </a>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default AsiderHeader;
