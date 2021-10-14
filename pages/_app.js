import "../styles/globals.css";
import DataProvider from "../comps/context/Context";
import Navigation from "./Navigation";
import InnerContainer from "../comps/UI/InnerContainer";
import AsiderLeft from "../comps/Navigation/AsiderLeft";
import AsiderRight from "../comps/Navigation/AsiderRight";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <DataProvider>
        <div className="bg-header-default dark:bg-dark-mainBackground">
          <Navigation />
          <InnerContainer>
            <AsiderLeft />
            <Component {...pageProps} />
            <AsiderRight />
          </InnerContainer>
        </div>
      </DataProvider>
    </ThemeProvider>
  );
}

export default MyApp;
