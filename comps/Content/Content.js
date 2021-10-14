import Header from "../../pages/Header";
import WebSites from "../../pages/Websites";
import Link from "next/link";
import Languages from "../../pages/Languages";
import Education from "../../pages/Education";
import Work from "../../pages/Work";
import Footer from "../footer/footer";
import Services from "../../pages/Services";
const Content = () => {
  return (
    <>
      <div className="flex flex-col mx-auto h-full overflow-scroll scroll_none">
        <Header />
        <WebSites />
        {/* <Languages /> */}
        <Services />
        <Education />
        <Work />
      </div>
    </>
  );
};

export default Content;
