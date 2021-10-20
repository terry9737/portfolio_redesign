const Skills = () => {
  const skills = [
    { name: "Html & CSS", percent: 80, id: 0 },
    { name: "Javascript", percent: 70, id: 1 },
    { name: "React.js", percent: 70, id: 2 },
    { name: "Next.js", percent: 60, id: 3 },
    { name: "TailwindCSS", percent: 80, id: 4 },
    { name: "Bootstrap", percent: 80, id: 5 },
    { name: "Styled Components", percent: 70, id: 6 },
    { name: "GIT", percent: 60, id: 7 },
    { name: "Jira", percent: 60, id: 8 },
    { name: "Framer Motion", percent: 70, id: 9 },
  ];
  return (
    <>
      <div>
        <div className="flex flex-col space-y-5 border-b-2 pb-5 border-gray-400 dark:border-gray-200 pt-7">
          {skills.map((skill) => {
            if (skill.percent > 50 && skill.percent < 61) {
              return (
                <div className="flex flex-col" key={skill.id}>
                  <div className="flex justify-between">
                    <p className="font-medium dark:text-gray-100">
                      {skill.name}
                    </p>
                    <p className="text-sm font-normal dark:text-gray-100">
                      {skill.percent}%
                    </p>
                  </div>
                  <span className="w-full h-1 border-2 rounded-full border-header-yellow p-1 relative">
                    <span className="bg-header-yellow rounded-full w-7/12 h-1 absolute inset-y-0.5"></span>
                  </span>
                </div>
              );
            } else if (skill.percent > 61 && skill.percent < 71) {
              return (
                <div className="flex flex-col" key={skill.id}>
                  <div className="flex justify-between">
                    <p className="font-medium dark:text-gray-100">
                      {skill.name}
                    </p>
                    <p className="text-sm font-normal dark:text-gray-100">
                      {skill.percent}%
                    </p>
                  </div>
                  <span className="w-full h-1 border-2 rounded-full border-header-yellow p-1 relative">
                    <span className="bg-header-yellow rounded-full w-8/12 h-1 absolute inset-y-0.5"></span>
                  </span>
                </div>
              );
            } else if (skill.percent > 71 && skill.percent < 81) {
              return (
                <div className="flex flex-col" key={skill.id}>
                  <div className="flex justify-between">
                    <p className="font-medium dark:text-gray-100">
                      {skill.name}
                    </p>
                    <p className="text-sm font-normal dark:text-gray-100">
                      {skill.percent}%
                    </p>
                  </div>
                  <span className="w-full h-1 border-2 rounded-full border-header-yellow p-1 relative">
                    <span className="bg-header-yellow rounded-full w-9/12 h-1 absolute inset-y-0.5"></span>
                  </span>
                </div>
              );
            } else if (skill.percent > 81 && skill.percent < 91) {
              return (
                <div className="flex flex-col" key={skill.id}>
                  <div className="flex justify-between">
                    <p className="font-medium ">{skill.name}</p>
                    <p className="text-sm font-normal ">{skill.percent}%</p>
                  </div>
                  <span className="w-full h-1 border-2 rounded-full border-header-yellow p-1 relative">
                    <span className="rounded-full w-10/12 h-1 absolute inset-y-0.5 bg-header-yellow"></span>
                  </span>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Skills;
