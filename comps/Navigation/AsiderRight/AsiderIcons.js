import { motion } from "framer-motion";
import { useEffect } from "react";
import { useContext } from "react";
import { DataContext } from "../../context/Context";
import { useRouter } from "next/dist/client/router";
import { icons } from "./Icons";

const AsiderIcons = () => {
  const { selected, setSelected, clickHandler } = useContext(DataContext);
  const router = useRouter();
  useEffect(() => {
    // const slideId = JSON.parse(localStorage.getItem("slide"));
    setSelected(router.pathname);
    // console.log(router.pathname);
  });
  return (
    <ul className="flex flex-col items-center justify-center space-y-10 h-screen icons_center">
      {icons.map((icon) => {
        if (icon.path === selected) {
          return (
            <motion.li
              key={icon.id}
              onClick={() => {
                router.push(icon.path);
                clickHandler(icon.path);
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
                clickHandler(icon.path);
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
