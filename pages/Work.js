import Container from "../comps/UI/Container";
import { work } from "../comps/Work/work";
const Work = () => {
  return (
    <Container top>
      <header className="p-4 bg-header-default">
        <h1 className="text-center text-4xl font-medium mb-3 sm:mb-4 lg:mb-6 my-10">
          Work History
        </h1>
        <p className="text-center sm:px-16 md:px-20">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </p>
      </header>
      <div className="flex flex-col space-y-10">
        {work.map((work) => {
          return (
            <section
              className="p-4 bg-white flex flex-col sm:flex-row justify-between"
              key={work.id}
            >
              <div className="flex flex-col">
                <h2 className="text-md sm:text-base md:text-lg lg:text-xl mb-4">
                  {work.place}
                </h2>
                <span className="flex items-center mb-4">
                  <p className="font-normal text-sm sm:text-base">
                    {work.post}
                  </p>
                  <p className="text-xs leading-none bg-header-yellow p-0.5 sm:p-0.8 ml-3">
                    {work.date}
                  </p>
                </span>
              </div>
              <div className="flex flex-col w-full sm:w-8/12">
                <h2 className="text-md sm:text-base md:text-lg lg:text-xl mb-4">
                  {work.award}
                </h2>
                <p className="text-sm md:text-base">{work.text}</p>
              </div>
            </section>
          );
        })}
      </div>
    </Container>
  );
};

export default Work;
