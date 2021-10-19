import { createContext } from "react";
import { useState } from "react";
import { info } from "../Languages/LanguagesData";

export const DataContext = createContext({});

const DataProvider = ({ children }) => {
  const [selected, setSelected] = useState(0);

  const clickHandler = (id) => {
    localStorage.setItem("slide", id);
    setSelected(id);
  };
  // ! left and right asides

  const [isRightOn, setIsRightOn] = useState(false);
  const [isLeftOn, setIsLeftOn] = useState(false);

  //! portfolio section
  const [menu, setMenu] = useState(info);

  const menuHandler = (cat) => {
    if (cat === "vanila") {
      const filtered = info.filter((item) => item.category === "vanila");
      setMenu(filtered);
    } else if (cat === "next") {
      const filtered = info.filter((item) => item.category === "next");
      setMenu(filtered);
    } else if (cat === "react") {
      const filtered = info.filter((item) => item.category === "react");
      setMenu(filtered);
    } else {
      setMenu(info);
    }
  };
  return (
    <DataContext.Provider
      value={{
        selected,
        setSelected,
        clickHandler,
        setIsLeftOn,
        setIsRightOn,
        isRightOn,
        isLeftOn,
        menu,
        setMenu,
        menuHandler,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
