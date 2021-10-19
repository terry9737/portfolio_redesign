import { useContext } from "react";
import { DataContext } from "../comps/context/Context";
import Container from "../comps/UI/Container";
import PortfolioCard from "../comps/portfolio/portfolioCard";
import PortfolioNav from "../comps/portfolio/portfolioNav";
const Portfolio = () => {
  const { menu } = useContext(DataContext);
  return (
    <main className="bg-header-default dark:bg-dark-mainBackground pt-5 h-full">
      <Container>
        <PortfolioNav />
        <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-5 sm:gap-20 overflow-hidden h-screen">
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
  );
};

export default Portfolio;
