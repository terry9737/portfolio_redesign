import { HiOutlineX } from "react-icons/hi";
import { useContext } from "react";
import { DataContext } from "../../context/Context";
const AsiderClose = ({ controls }) => {
  const { setIsLeftOn, isLeftOn } = useContext(DataContext);
  return (
    <div className="text-3xl flex justify-end xl:hidden">
      <HiOutlineX
        className="cursor-pointer dark:text-gray-100 hover:text-header-yellow dark:hover:text-header-yellow transition-colors duration-500"
        onClick={() => {
          setIsLeftOn(!isLeftOn);
          controls.start("hidden");
        }}
      />
    </div>
  );
};

export default AsiderClose;
