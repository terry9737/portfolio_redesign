import { createContext } from "react";
import { useState } from "react";

export const DataContext = createContext({});

const DataProvider = ({ children }) => {
  const [selected, setSelected] = useState(0);

  const clickHandler = (id) => {
    setSelected(id);
  };
  // ! left and right asides

  const [isRightOn, setIsRightOn] = useState(false);
  const [isLeftOn, setIsLeftOn] = useState(false);

  // !right aside

  return (
    <DataContext.Provider
      value={{
        selected,
        clickHandler,
        setIsLeftOn,
        setIsRightOn,
        isRightOn,
        isLeftOn,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
