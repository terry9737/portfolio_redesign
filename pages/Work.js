import Container from "../comps/UI/Container";
import { work, workTitle } from "../comps/Work/work";
import { motion } from "framer-motion";
const Work = () => {
  return (
    <Container>
      <motion.div
        initial={{ y: -500 }}
        animate={{ y: 0 }}
        transition={{ type: "tween", ease: "linear" }}
        className="h-screen"
      >
        <header className="p-4 bg-header-default dark:bg-dark-mainBackground">
          <h1 className="text-center text-4xl font-medium mb-3 sm:mb-4 lg:mb-6 dark:text-gray-200">
            {workTitle.title}
          </h1>
          <p className="text-center sm:px-16 md:px-20 dark:text-gray-300">
            {workTitle.body}
          </p>
        </header>
        <div className="flex flex-col space-y-10 divide-y-2 divide-transparent dark:divide-gray-400">
          {work.map((edu) => {
            return (
              <section
                className="p-4 bg-white dark:bg-dark-main flex flex-col sm:flex-row justify-between"
                key={edu.id}
              >
                <div className="flex flex-col">
                  <h2 className="text-md sm:text-base md:text-lg lg:text-xl mb-4 dark:text-gray-100">
                    {edu.place}
                  </h2>
                  <span className="flex items-center mb-4">
                    <p className="font-normal text-sm sm:text-base dark:text-gray-200">
                      {edu.post}
                    </p>
                    <p className="text-xs leading-none bg-header-yellow p-0.5 sm:p-0.8 ml-3 dark:text-gray-100">
                      {edu.date}
                    </p>
                  </span>
                </div>
                <div className="flex flex-col w-full sm:w-8/12">
                  <h2 className="text-md sm:text-base md:text-lg lg:text-xl mb-4 dark:text-gray-100">
                    {edu.award}
                  </h2>
                  <p className="text-sm md:text-base dark:text-gray-400">
                    {edu.text}
                  </p>
                </div>
              </section>
            );
          })}
        </div>
      </motion.div>
    </Container>
  );
};

export default Work;
