import { HiOutlineX } from "react-icons/hi";
import { useContext } from "react";
import { DataContext } from "../../context/Context";

const AsiderClose = ({ controls }) => {
  const { setIsRightOn, isRightOn } = useContext(DataContext);
  return (
    <span
      className="cursor-pointer xl:hidden dark:text-gray-100 hover:text-header-yellow dark:hover:text-header-yellow transition-colors duration-500"
      onClick={() => {
        setIsRightOn(!isRightOn);
        controls.start("hidden");
      }}
    >
      <HiOutlineX className="text-3xl" />
    </span>
  );
};

export default AsiderClose;
