import { HiMenu, HiMoon, HiOutlineDotsVertical } from "react-icons/hi";
import { useContext } from "react";
import { DataContext } from "../comps/context/Context";
const Navigation = () => {
  const { setIsLeftOn, setIsRightOn, isLeftOn, isRightOn } =
    useContext(DataContext);

  return (
    <>
      <nav className="2xl:hidden">
        <ul className="flex justify-between p-5">
          <li onClick={() => setIsLeftOn(!isLeftOn)} className="cursor-pointer">
            <HiMenu className="text-3xl text-navbar-default" />
          </li>
          <li>
            <HiMoon className="text-3xl text-navbar-default" />
          </li>
          <li
            onClick={() => setIsRightOn(!isRightOn)}
            className="cursor-pointer"
          >
            <HiOutlineDotsVertical className="text-3xl text-navbar-default" />
          </li>
        </ul>
      </nav>
      <aside className="hidden 2xl:block"></aside>
    </>
  );
};

export default Navigation;
