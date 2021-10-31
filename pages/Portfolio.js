import { useContext } from "react";
import { DataContext } from "../comps/context/Context";
import Container from "../comps/UI/Container";
import PortfolioCard from "../comps/portfolio/portfolioCard";
import PortfolioNav from "../comps/portfolio/portfolioNav";
import Head from "next/dist/shared/lib/head";
const Portfolio = () => {
  const { menu } = useContext(DataContext);
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="bg-header-default dark:bg-dark-mainBackground pt-5 h-full">
        <Container>
          <PortfolioNav />
          <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-5 sm:gap-20 overflow-hidden min-h-screen h-full">
            {menu.map((info) => {
              return (
                <PortfolioCard
                  key={info.id}
                  title={info.title}
                  body={info.body}
                  url={info.url}
                  image={info.img}
                />
              );
            })}
          </div>
        </Container>
      </main>
    </>
  );
};

export default Portfolio;
