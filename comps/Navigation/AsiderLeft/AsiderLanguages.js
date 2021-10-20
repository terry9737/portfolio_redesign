import { BiCheck } from "react-icons/bi";
import styled from "styled-components";
const AsiderLanguages = () => {
  const languages = ["English", "Romanian", "Russian"];
  return (
    <div>
      <h3 className="text-base font-medium text-header-gray my-4 dark:text-gray-100">
        Languages
      </h3>
      <ul className="flex flex-col justify-center items-start space-y-2">
        {languages.map((language, index) => {
          return (
            <LiEl key={index}>
              <BiCheck className="text-2xl text-header-yellow" />
              {language}
            </LiEl>
          );
        })}
      </ul>
    </div>
  );
};

export default AsiderLanguages;
const LiEl = styled.li`
  position: relative;
  display: flex;
  width: 100%;
  font-size: 1em;
  font-weight: 800;
  color: #ffb400;
  overflow: hidden;
  background: linear-gradient(to right, royalblue, 50%, #ffb400 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 275ms ease;
  text-decoration: none;

  &:hover {
    background-position: 0 100%;
    cursor: pointer;
  }
`;
