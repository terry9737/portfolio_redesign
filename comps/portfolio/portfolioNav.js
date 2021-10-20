import { useContext } from "react";
import { DataContext } from "../context/Context";
import { useState } from "react";

const PortfolioNav = () => {
  const { menuHandler } = useContext(DataContext);
  const [selected, setSelected] = useState(0);
  const selectHandler = (id) => {
    setSelected(id);
  };
  const titles = [
    {
      name: "All categories",
      id: 0,
      cat: "reset",
    },
    {
      name: "HTML/CSS",
      id: 1,
      cat: "vanila",
    },
    {
      name: "Next.js",
      id: 2,
      cat: "next",
    },
    {
      name: "React.js",
      id: 3,
      cat: "react",
    },
  ];
  return (
    <section className="p-5">
      <h1 className="text-center text-2xl text-dark-main mb-5 dark:text-gray-200">
        Portfolios
      </h1>
      <p className="text-center mb-5">
        A section on my works that I created from various online designs and
        YouTube projects
      </p>
      <ul className="flex items-center justify-center space-x-5 dark:text-gray-400">
        {titles.map((title) => {
          if (selected === title.id) {
            return (
              <li
                key={title.id}
                className="hover:text-gray-300 text-header-yellow transition-colors duration-300 cursor-pointer dark:text-300"
                onClick={() => {
                  menuHandler(title.cat);
                  selectHandler(title.id);
                }}
              >
                {title.name}
              </li>
            );
          } else {
            return (
              <li
                key={title.id}
                className="hover:text-header-yellow transition-colors duration-300 cursor-pointer dark:text-300"
                onClick={() => {
                  menuHandler(title.cat);
                  selectHandler(title.id);
                }}
              >
                {title.name}
              </li>
            );
          }
        })}
      </ul>
    </section>
  );
};

export default PortfolioNav;
