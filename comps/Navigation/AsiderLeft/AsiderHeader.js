import Image from "next/image";
import avatar from "/public/images/ava.jpg";
import { FaFacebookF, FaLinkedinIn, FaInbox } from "react-icons/fa";
import { motion } from "framer-motion";
import { bipDotVariants } from "../../animations/Variants";
const AsiderHeader = () => {
  const Links = [
    {
      image: <FaFacebookF />,
      id: 0,
    },
    {
      image: <FaLinkedinIn />,
      id: 1,
    },
    {
      image: <FaInbox />,
      id: 2,
    },
  ];
  return (
    <header className="flex flex-col items-center border-b-2 border-gray-400 border-opacity-40">
      <section className=" bg-white w-40 h-40 mb-5 sm:w-52 sm:h-52 rounded-full relative">
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
          className="h-5 w-5 bg-green-400 absolute bottom-2 right-5 sm:bottom-2 sm:right-9 rounded-full"
        ></motion.span>
      </section>
      <h3 className="font-medium text-xl">Rayan Adlard</h3>
      <p className="text-navbar-default text-sm mb-2">Front End Developer</p>
      <ul className="flex justify-evenly space-x-5 mb-4">
        {Links.map((link) => {
          return (
            <li
              key={link.id}
              className="text-sm sm:text-md md:text-lg flex justify-center items-center h-10 w-10 bg-header-yellow rounded-full cursor-pointer filter hover:grayscale transition duration-500"
            >
              {link.image}
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default AsiderHeader;
