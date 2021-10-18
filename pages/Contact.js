import Container from "../comps/UI/Container";

import ContactInfo from "../comps/Contact/ContactInfo";
import ContactMyInfo from "../comps/Contact/ContactMyInfo";
import ContactMap from "../comps/Contact/ContactMap";
import Footer from "../comps/footer/footer";
const Contact = () => {
  return (
    <main className="bg-header-default dark:bg-dark-mainBackground pt-5">
      <Container>
        <div className="h-screen bg-header-default dark:bg-dark-mainBackground">
          <div className="flex flex-col md:flex-row md:space-x-5 bg-header-default dark:bg-dark-mainBackground pb-5">
            <ContactInfo />
            <ContactMyInfo />
          </div>
          <ContactMap />
        </div>
        <Footer />
      </Container>
    </main>
  );
};

export default Contact;
