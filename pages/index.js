import Navigation from "./Navigation";
import AsiderLeft from "../comps/Navigation/AsiderLeft";
import AsiderRight from "../comps/Navigation/AsiderRight";
import Content from "../comps/test/Content";
import { useContext } from "react";
import { DataContext } from "../comps/context/Context";
import { useWindowSize } from "../comps/hooks/useWindowSize";
export default function Home() {
  const { setIsLeftOn } = useContext(DataContext);
  return (
    <>
      <div className="max-w-9xl mx-auto bg-header-default overflow-hidden">
        <Navigation />
        <div className="flex relative justify-between">
          <AsiderLeft />
          <Content />
          <AsiderRight />
        </div>
      </div>
    </>
  );
}
