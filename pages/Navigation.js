import { HiMenu, HiMoon, HiSun, HiOutlineDotsVertical } from "react-icons/hi";
import { useContext } from "react";
import { DataContext } from "../comps/context/Context";
import { useTheme } from "next-themes";
import { useEffect } from "react";

const Navigation = () => {
  const { setIsLeftOn, setIsRightOn, isLeftOn, isRightOn } =
    useContext(DataContext);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    console.log(theme);
  });
  return (
    <>
      <nav className="2xl:hidden dark:bg-dark-main">
        <ul className="flex justify-between p-5">
          <li onClick={() => setIsLeftOn(!isLeftOn)} className="cursor-pointer">
            <HiMenu className="text-3xl text-navbar-default dark:text-dark-icons hover:text-header-yellow transition-colors duration-500 dark:hover:text-header-yellow" />
          </li>
          <li className="cursor-pointer">
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
          </li>
          <li
            onClick={() => setIsRightOn(!isRightOn)}
            className="cursor-pointer"
          >
            <HiOutlineDotsVertical className="text-3xl text-navbar-default dark:text-dark-icons hover:text-header-yellow transition-colors duration-500 dark:hover:text-header-yellow" />
          </li>
        </ul>
      </nav>
      <aside className="hidden 2xl:block"></aside>
    </>
  );
};

export default Navigation;
