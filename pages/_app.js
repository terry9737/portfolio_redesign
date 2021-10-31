import "../styles/globals.css";
import DataProvider from "../comps/context/Context";
import Navigation from "./Navigation";
import InnerContainer from "../comps/UI/InnerContainer";
import AsiderLeft from "../comps/Navigation/AsiderLeft";
import AsiderRight from "../comps/Navigation/AsiderRight";
import { ThemeProvider } from "next-themes";
import Footer from "../comps/footer/footer";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="An interactive portfolio I created using Next.js"
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, React, Next, Tailwind"
        />
        <meta name="author" content="Gorgos Adrian" />
      </Head>
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
