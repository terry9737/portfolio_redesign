import AnimationDots from "../comps/Header/AnimationDots";
import Container from "../comps/UI/Container";
import Image from "next/image";
import sync from "/public/images/sync.svg";
const Header = () => {
  return (
    <main className="bg-header-default dark:bg-dark-main mx-auto">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-center py-7 overflow-hidden shadow-md">
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-4xl sm:text-5xl font-bold px-5 leading-tight z-20 text-left dark:text-gray-100">
              I’m Gorgos Adrian{" "}
              <span className="text-header-yellow z-20">Front – End</span>{" "}
              Developer
            </h1>
            <p className="text-header-gray dark:text-gray-100 font-normal px-5 pt-3 text-left leading-snug z-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              volutpat feugiat placerat lobortis. Natoque rutrum semper sed
              suspendisse nunc lectus.
            </p>
            <span className="px-5">
              <button className="uppercase px-8 py-4 rounded-md bg-header-yellow mt-8 z-20">
                hire me
              </button>
            </span>
          </div>
          <AnimationDots />
          <span className="w-full">
            <Image src={sync} alt="sync" />
          </span>
        </div>
      </Container>
    </main>
  );
};

export default Header;
