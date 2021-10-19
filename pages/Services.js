import Container from "../comps/UI/Container";
import { services } from "../comps/services/services";
import Image from "next/dist/client/image";
const Services = () => {
  return (
    <main className="bg-header-default dark:bg-dark-mainBackground pt-5">
      <Container>
        <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-2 md:grid-cols-4 bg-header-default dark:bg-dark-mainBackground justify-items-center sm:gap-y-5 gap-x-5 md:gap-y-0">
          {services.map((item) => {
            return (
              <div
                className="flip-card dark:bg-dark-mainBackground"
                key={item.id}
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front dark:bg-dark-main">
                    <span className="flex flex-col justify-center items-center p-7 h-full">
                      <Image src={item.icon} alt="img" />
                      <p className="mt-5 font-semibold dark:text-gray-200">
                        {item.name}
                      </p>
                      <span className="text-center">
                        <p className="text-sm dark:text-gray-500">
                          {item.title}
                        </p>
                      </span>
                    </span>
                  </div>
                  <div className="flip-card-back dark:bg-dark-main">
                    <h1 className="text-header-yellow text-xl font-medium pt-8">
                      {item.name}
                    </h1>
                    <p className="text-navbar-default mt-8 p-1 dark:text-gray-300">
                      {item.flip}
                    </p>
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
