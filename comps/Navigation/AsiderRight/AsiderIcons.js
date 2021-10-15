import { motion } from "framer-motion";
import {
  HiOutlineHome,
  HiOutlineDocumentText,
  HiOutlineUser,
  HiBriefcase,
  HiOutlinePencil,
  HiAnnotation,
} from "react-icons/hi";
import { useContext } from "react";
import { DataContext } from "../../context/Context";
import { useRouter } from "next/dist/client/router";
const AsiderIcons = () => {
  const { selected, clickHandler } = useContext(DataContext);
  const router = useRouter();
  const icons = [
    {
      icon: <HiOutlineHome className="text-2xl dark:text-gray-200" />,
      id: 0,
      path: "/",
    },
    {
      icon: <HiOutlineDocumentText className="text-2xl dark:text-gray-200" />,
      id: 1,
      path: "/Experience",
    },
    {
      icon: <HiBriefcase className="text-2xl dark:text-gray-200" />,
      id: 3,
      path: "/Work",
    },
    {
      icon: <HiOutlineUser className="text-2xl dark:text-gray-200" />,
      id: 2,
      path: "/",
    },
    {
      icon: <HiAnnotation className="text-2xl dark:text-gray-200" />,
      id: 5,
      path: "/",
    },
  ];
  return (
    <ul className="flex flex-col items-center justify-center space-y-10 h-screen icons_center">
      {icons.map((icon) => {
        if (icon.id === selected) {
          return (
            <motion.li
              key={icon.id}
              onClick={() => {
                router.push(icon.path);
                clickHandler(icon.id);
              }}
              className={`h-10 w-10 rounded-full flex justify-center items-center cursor-pointer bg-header-yellow
            }`}
            >
              {icon.icon}
            </motion.li>
          );
        } else {
          return (
            <li
              key={icon.id}
              onClick={() => {
                router.push(icon.path);
                clickHandler(icon.id);
              }}
              className={`h-10 w-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-header-yellow dark:bg-gray-400 dark:hover:bg-header-yellow transition-colors duration-500`}
            >
              {icon.icon}
            </li>
          );
        }
      })}
    </ul>
  );
};

export default AsiderIcons;
