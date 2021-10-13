import Header from "../../pages/Header";
import WebSites from "../../pages/Websites";
import Link from "next/link";
import Languages from "../../pages/Languages";
import Education from "../../pages/Education";
import Work from "../../pages/Work";
import Footer from "../footer/footer";
const Content = () => {
  return (
    <>
      <div className="flex flex-col mx-auto">
        {/* <Link href="/">
          <a>
            <Header />
            <WebSites />
            <Languages />
          </a>
        </Link>
        <Link href="/work">
          <a>
            <Education />
            <Work />
          </a>
        </Link> */}
        <Header />
        <Education />
        <Footer />
      </div>
    </>
  );
};

export default Content;
