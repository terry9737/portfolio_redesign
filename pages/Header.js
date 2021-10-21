import AnimationDots from "../comps/Header/AnimationDots";
import Container from "../comps/UI/Container";
import Image from "next/image";
import sync from "/public/images/sync.svg";
import Typist from "react-typist";
const Header = () => {
  return (
    <div className="bg-header-default dark:bg-dark-mainBackground mx-auto">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-center py-7 overflow-hidden shadow-md">
          <div className="flex flex-col items-start justify-center">
            <Typist
              cursor={{ hideWhenDone: true, show: false }}
              avgTypingDelay={30}
            >
              <h1 className="text-4xl sm:text-5xl font-bold px-5 leading-tight z-20 text-left dark:text-gray-100">
                I’m Gorgos Adrian{" "}
                <span className="text-header-yellow z-20">Front – End</span>{" "}
                Developer
              </h1>
            </Typist>
            <p className="text-header-gray dark:text-gray-100 font-normal px-5 pt-3 text-left leading-snug z-20">
              Self-Taught Web Developer based in Moldova, with a keen interest
              in modern web technologies who believes that coding standards and
              best practices are a must in today&apos;s developing industry
            </p>
            <span className="px-5">
              <a
                href="mailto:adriangorgos@gmail.com"
                className="uppercase px-8 py-4 rounded-md bg-header-yellow mt-8 z-20 hover:bg-dark-cta transition-colors duration-300 hover:text-dark-ctaText block"
              >
                hire me
              </a>
            </span>
          </div>
          <AnimationDots />
          <div className="w-full">
            <Image src={sync} alt="sync" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
