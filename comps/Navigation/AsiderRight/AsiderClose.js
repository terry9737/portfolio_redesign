import { HiOutlineX, HiMoon, HiSun } from "react-icons/hi";
import { useContext } from "react";
import { DataContext } from "../../context/Context";
import { useTheme } from "next-themes";

const AsiderClose = ({ controls }) => {
  const { setIsRightOn, isRightOn } = useContext(DataContext);
  const { theme, setTheme } = useTheme();

  return (
    <>
      <span
        className="cursor-pointer xl:hidden dark:text-gray-100 hover:text-header-yellow dark:hover:text-header-yellow transition-colors duration-500"
        onClick={() => {
          setIsRightOn(!isRightOn);
          controls.start("hidden");
        }}
      >
        <HiOutlineX className="text-3xl" />
      </span>
      <span className="hidden lg:flex justify-center cursor-pointer pt-5">
        {theme === "light" && (
          <HiMoon
            className="text-3xl text-navbar-default dark:text-dark-icons hover:text-header-yellow transition-colors duration-500 dark:hover:text-header-yellow"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
        )}

        {theme === "dark" && (
          <HiSun
            className="text-3xl text-navbar-default dark:text-dark-icons hover:text-header-yellow transition-colors duration-500 dark:hover:text-header-yellow"
            onClick={() => setTheme("light")}
          />
        )}
      </span>
    </>
  );
};

export default AsiderClose;
