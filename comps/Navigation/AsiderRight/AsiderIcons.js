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
      icon: <HiOutlineHome className="text-2xl" />,
      id: 0,
      path: "/",
    },
    {
      icon: <HiOutlineDocumentText className="text-2xl" />,
      id: 1,
      path: "/Education",
    },
    {
      icon: <HiBriefcase className="text-2xl" />,
      id: 3,
      path: "/Work",
    },
    {
      icon: <HiOutlineUser className="text-2xl" />,
      id: 2,
      path: "/",
    },
    {
      icon: <HiAnnotation className="text-2xl" />,
      id: 5,
      path: "/",
    },
  ];
  return (
    <ul className="flex flex-col h-screen items-center justify-center space-y-10">
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
              className={`h-10 w-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-header-yellow`}
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
