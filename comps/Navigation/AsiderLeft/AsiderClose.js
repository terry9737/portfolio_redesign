import { HiOutlineX } from "react-icons/hi";
import { useContext } from "react";
import { DataContext } from "../../context/Context";
const AsiderClose = ({ controls }) => {
  const { setIsLeftOn, isLeftOn } = useContext(DataContext);
  return (
    <div className="text-3xl flex justify-end 2xl:hidden">
      <HiOutlineX
        className="cursor-pointer"
        onClick={() => {
          setIsLeftOn(!isLeftOn);
          controls.start("hidden");
        }}
      />
    </div>
  );
};

export default AsiderClose;
