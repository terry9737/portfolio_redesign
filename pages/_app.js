import "../styles/globals.css";
import DataProvider from "../comps/context/Context";
import Navigation from "./Navigation";
import InnerContainer from "../comps/UI/InnerContainer";
import AsiderLeft from "../comps/Navigation/AsiderLeft";
import AsiderRight from "../comps/Navigation/AsiderRight";
import { ThemeProvider } from "next-themes";
import Footer from "../comps/footer/footer";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <DataProvider>
        <div className="bg-header-default dark:bg-dark-mainBackground">
          <Navigation />
          <InnerContainer>
            <AsiderLeft />
            <div className="flex flex-col mx-auto h-full scroll_none xl:ml-60">
              <Component {...pageProps} />
              <Footer />
            </div>
            <AsiderRight />
          </InnerContainer>
        </div>
      </DataProvider>
    </ThemeProvider>
  );
}

export default MyApp;
