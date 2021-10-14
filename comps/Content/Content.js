import Header from "../../pages/Header";
import WebSites from "../../pages/Websites";
import Link from "next/link";
import Languages from "../../pages/Languages";
import Footer from "../footer/footer";
import Services from "../../pages/Services";
import Experience from "../../pages/Experience";
const Content = () => {
  return (
    <>
      <div className="flex flex-col mx-auto h-full overflow-scroll scroll_none">
        <Header />
        <WebSites />
        {/* <Languages /> */}
        <Services />
        <Experience />
        <Experience works />
      </div>
    </>
  );
};

export default Content;
