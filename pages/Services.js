import Container from "../comps/UI/Container";
import { DiAppcelerator } from "react-icons/di";
const Services = () => {
  const services = [
    {
      name: "Web Development",
      title: "Blog, E-Commerce",
      flip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi.",
      id: 0,
    },
    {
      name: "Web Development",
      title: "Blog, E-Commerce",
      flip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi.",
      id: 0,
    },
    {
      name: "Web Development",
      title: "Blog, E-Commerce",
      flip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi.",
      id: 0,
    },
    {
      name: "Web Development",
      title: "Blog, E-Commerce",
      flip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi.",
      id: 0,
    },
    {
      name: "Web Development",
      title: "Blog, E-Commerce",
      flip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi.",
      id: 0,
    },
    {
      name: "Web Development",
      title: "Blog, E-Commerce",
      flip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi.",
      id: 0,
    },
  ];
  return (
    <main className="bg-header-default pt-5 hidden sm:block">
      <Container>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 bg-header-default justify-items-center gap-y-7">
          {services.map((item) => {
            return (
              <div className="flip-card" key={item.id}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <span className="flex flex-col justify-center items-center p-8">
                      <DiAppcelerator className="text-6xl" />
                      <p>{item.name}</p>
                      <p>{item.title}</p>
                    </span>
                  </div>
                  <div className="flip-card-back">
                    <h1>{item.name}</h1>
                    <p className="text-header-yellow">{item.flip}</p>
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
