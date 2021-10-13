import { useState, useEffect } from "react";
export const useWindowSize = () => {
  const [width, setWidth] = useState({ width: undefined });
  useEffect(() => {
    const handleResize = () => {
      setWidth({ width: window.innerWidth });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
};
