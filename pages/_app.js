import "../styles/globals.css";
import DataProvider from "../comps/context/Context";
import Navigation from "./Navigation";
function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <div className="bg-header-default">
        <Navigation />
        <Component {...pageProps} />
      </div>
    </DataProvider>
  );
}

export default MyApp;
