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
import Link from "next/dist/client/link";

const AsiderIcons = () => {
  const { selected, clickHandler } = useContext(DataContext);
  const icons = [
    {
      icon: <HiOutlineHome className="text-2xl" />,
      id: 0,
    },
    {
      icon: <HiOutlineDocumentText className="text-2xl" />,
      id: 1,
    },
    {
      icon: <HiOutlineUser className="text-2xl" />,
      id: 2,
    },
    {
      icon: <HiBriefcase className="text-2xl" />,
      id: 3,
    },
    {
      icon: <HiOutlinePencil className="text-2xl" />,
      id: 4,
    },
    {
      icon: <HiAnnotation className="text-2xl" />,
      id: 5,
    },
  ];
  return (
    <ul className="flex flex-col h-screen items-center justify-center space-y-10">
      {icons.map((icon) => {
        if (icon.id === selected) {
          return (
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={icon.id}
              onClick={() => clickHandler(icon.id)}
              className={`h-10 w-10 rounded-full flex justify-center items-center cursor-pointer bg-header-yellow
              }`}
            >
              <Link href="/Header">
                <a>{icon.icon}</a>
              </Link>
            </motion.li>
          );
        } else {
          return (
            <li
              key={icon.id}
              onClick={() => clickHandler(icon.id)}
              className={`h-10 w-10 rounded-full flex justify-center items-center cursor-pointer`}
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
