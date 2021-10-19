import Container from "../comps/UI/Container";
import { education, educationTitle } from "../comps/Education/education";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <Container>
      <motion.div
        className="h-screen"
        initial={{ y: -500 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", bounce: 0.3, damping: 11 }}
      >
        <header className="p-4 bg-header-default dark:bg-dark-mainBackground">
          <h1 className="text-center text-4xl font-medium mb-3 sm:mb-4 lg:mb-6 dark:text-gray-200">
            {educationTitle.title}
          </h1>
          <p className="text-center sm:px-16 md:px-20 dark:text-gray-300">
            {educationTitle.body}
          </p>
        </header>
        <div className="flex flex-col space-y-10 divide-y-2 divide-transparent dark:divide-gray-400">
          {education.map((edu) => {
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

export default Experience;
