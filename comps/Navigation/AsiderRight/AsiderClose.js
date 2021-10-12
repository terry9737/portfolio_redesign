import { HiOutlineX } from "react-icons/hi";
import { useContext } from "react";
import { DataContext } from "../../context/Context";

const AsiderClose = ({ controls }) => {
  const { setIsRightOn, isRightOn } = useContext(DataContext);
  return (
    <span
      className="cursor-pointer lg:hidden"
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
