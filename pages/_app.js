import "../styles/globals.css";
import DataProvider from "../comps/context/Context";
import Navigation from "./Navigation";
import InnerContainer from "../comps/UI/InnerContainer";
import AsiderLeft from "../comps/Navigation/AsiderLeft";
import AsiderRight from "../comps/Navigation/AsiderRight";
import Footer from "../comps/footer/footer";
function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <div className="bg-header-default dark:bg-header-yellow">
        <Navigation />
        <InnerContainer>
          <AsiderLeft />
          <Component {...pageProps} />
          <AsiderRight />
        </InnerContainer>
      </div>
    </DataProvider>
  );
}

export default MyApp;
