import AnimationDots from "../comps/Header/AnimationDots";
import Container from "../comps/UI/Container";

const Header = () => {
  return (
    <main className="bg-header-default mx-auto">
      <Container>
        <div className="flex flex-col items-center justify-center py-7 overflow-hidden shadow-md">
          <h1 className="text-4xl sm:text-5xl font-bold px-16 sm:px-20 leading-tight z-20 text-center">
            I’m Gorgos Adrian{" "}
            <span className="text-header-yellow z-20">Font – End</span>{" "}
            Developer
          </h1>
          <p className="text-header-gray font-normal px-16 pt-3 text-center leading-snug z-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
            volutpat feugiat placerat lobortis. Natoque rutrum semper sed
            suspendisse nunc lectus.
          </p>
          <button className="uppercase px-8 py-4 rounded-md bg-header-yellow mt-8 z-20">
            hire me
          </button>
          <AnimationDots />
        </div>
      </Container>
    </main>
  );
};

export default Header;
