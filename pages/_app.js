import "../styles/globals.css";
import DataProvider from "../comps/context/Context";

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <Component {...pageProps} />
    </DataProvider>
  );
}

export default MyApp;
