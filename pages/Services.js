import Container from "../comps/UI/Container";
import { services } from "../comps/services";
import Image from "next/dist/client/image";
import image from "/public/images/coding.svg";
const Services = () => {
  return (
    <main className="bg-header-default dark:bg-dark-mainBackground pt-5 hidden sm:block">
      <Container>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 bg-header-default dark:bg-dark-mainBackground justify-items-center sm:gap-y-2 md:gap-y-0">
          {services.map((item) => {
            return (
              <div className="flip-card" key={item.id}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <span className="flex flex-col justify-center items-center p-7 h-full">
                      {/* {item.icon} */}
                      <Image src={item.icon} alt="img" />
                      <p className="mt-5 font-semibold">{item.name}</p>
                      <span className="text-center">
                        <p className="text-sm">{item.title}</p>
                      </span>
                    </span>
                  </div>
                  <div className="flip-card-back">
                    <h1 className="text-header-yellow text-xl font-medium pt-8">
                      {item.name}
                    </h1>
                    <p className="text-navbar-default mt-8 p-1">{item.flip}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </main>
  );
};

export default Services;

{
}
