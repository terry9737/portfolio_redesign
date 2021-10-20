import Container from "../comps/UI/Container";
import { GoBrowser, GoBook, GoFileBinary, GoGlobe } from "react-icons/go";
import { motion, useAnimation } from "framer-motion";
import {
  firstContainer,
  firstText,
  firstsubText,
  secondContainer,
  secondText,
  secondsubText,
  thirdContainer,
  thirdText,
  thirdsubText,
  fourthContainer,
  fourthText,
  fourthsubText,
} from "../comps/Websites/WebSites";
import Particle from "../comps/particles/particles";
const WebSites = () => {
  const controlsOne = useAnimation();
  const controlsTwo = useAnimation();
  const controlsThree = useAnimation();

  const controlsFour = useAnimation();
  const controlsFive = useAnimation();
  const controlsSix = useAnimation();

  const controlsSeven = useAnimation();
  const controlsEight = useAnimation();
  const controlsNine = useAnimation();

  const controlsTen = useAnimation();
  const controlsEleven = useAnimation();
  const controlsTwelwe = useAnimation();

  return (
    <main className="bg-header-default dark:bg-dark-mainBackground pt-5">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-10 bg-header-default dark:bg-dark-mainBackground">
          {/* one */}

          <motion.section
            onHoverStart={() => {
              controlsOne.start("active");
              controlsTwo.start("active");
              controlsThree.start("active");
            }}
            whileTap={() => {
              controlsOne.start("active");
              controlsTwo.start("active");
              controlsThree.start("active");
              controlsFour.start("hidden");
              controlsFive.start("hidden");
              controlsSix.start("hidden");
              controlsSeven.start("hidden");
              controlsEight.start("hidden");
              controlsNine.start("hidden");
              controlsTen.start("hidden");
              controlsEleven.start("hidden");
              controlsTwelwe.start("hidden");
            }}
            onHoverEnd={() => {
              controlsOne.start("hidden");
              controlsTwo.start("hidden");
              controlsThree.start("hidden");
            }}
            className="website_container"
          >
            <GoBrowser className="text-7xl" />
            <motion.span
              variants={firstContainer}
              initial="hidden"
              animate={controlsOne}
              className="website_box relative"
            >
              <div className="w-full h-full absolute z-0">
                <Particle id={"0"} />
              </div>
              <motion.h3
                variants={firstText}
                initial="hidden"
                animate={controlsTwo}
                className="text-gray-50 font-semibold text-center my-3"
              >
                My Main Stack
              </motion.h3>
              <motion.p
                variants={firstsubText}
                initial="hidden"
                animate={controlsThree}
                className="website_text z-10"
              >
                My main focus is on React.js along with Next.js, which I use for
                creating dynamic projects, together with TailwindCSS
              </motion.p>
            </motion.span>
          </motion.section>

          <motion.section
            onHoverStart={() => {
              controlsFour.start("active");
              controlsFive.start("active");
              controlsSix.start("active");
            }}
            whileTap={() => {
              controlsOne.start("hidden");
              controlsTwo.start("hidden");
              controlsThree.start("hidden");
              controlsFour.start("active");
              controlsFive.start("active");
              controlsSix.start("active");
              controlsSeven.start("hidden");
              controlsEight.start("hidden");
              controlsNine.start("hidden");
              controlsTen.start("hidden");
              controlsEleven.start("hidden");
              controlsTwelwe.start("hidden");
            }}
            onHoverEnd={() => {
              controlsFour.start("hidden");
              controlsFive.start("hidden");
              controlsSix.start("hidden");
            }}
            className="website_container"
          >
            <GoBook className="text-7xl" />
            <motion.span
              variants={secondContainer}
              initial="hidden"
              animate={controlsFour}
              className="website_box relative"
            >
              <div className="w-full h-full absolute z-0">
                <Particle id={"1"} />
              </div>
              <motion.h3
                variants={secondText}
                initial="hidden"
                animate={controlsFive}
                className="text-gray-50 font-semibold text-center my-3"
              >
                Focus On Readability
              </motion.h3>
              <motion.p
                variants={secondsubText}
                initial="hidden"
                animate={controlsSix}
                className="website_text z-10"
              >
                Strong knowledge of basic web technologies such as HTML, CSS,
                Bootstrap,TailwindCSS,Sass and working knowledge of Linux and
                Windows
              </motion.p>
            </motion.span>
          </motion.section>
          <motion.section
            onHoverStart={() => {
              controlsSeven.start("active");
              controlsEight.start("active");
              controlsNine.start("active");
            }}
            whileTap={() => {
              controlsOne.start("hidden");
              controlsTwo.start("hidden");
              controlsThree.start("hidden");
              controlsFour.start("hidden");
              controlsFive.start("hidden");
              controlsSix.start("hidden");
              controlsSeven.start("active");
              controlsEight.start("active");
              controlsNine.start("active");
              controlsTen.start("hidden");
              controlsEleven.start("hidden");
              controlsTwelwe.start("hidden");
            }}
            onHoverEnd={() => {
              controlsSeven.start("hidden");
              controlsEight.start("hidden");
              controlsNine.start("hidden");
            }}
            className="website_container"
          >
            <GoGlobe className="text-7xl" />
            <motion.span
              variants={thirdContainer}
              initial="hidden"
              animate={controlsSeven}
              className="website_box relative"
            >
              <div className="w-full h-full absolute z-0">
                <Particle id={"2"} />
              </div>
              <motion.h3
                variants={thirdText}
                initial="hidden"
                animate={controlsEight}
                className="text-gray-50 font-semibold text-center my-3"
              >
                Sources
              </motion.h3>
              <motion.p
                variants={thirdsubText}
                initial="hidden"
                animate={controlsNine}
                className="website_text z-10"
              >
                I have learned everything I know from courses that on YouTube,
                Udemy, Stackoverflow posts, GitHub and Scrimba
              </motion.p>
            </motion.span>
          </motion.section>
          <motion.section
            onHoverStart={() => {
              controlsTen.start("active");
              controlsEleven.start("active");
              controlsTwelwe.start("active");
            }}
            whileTap={() => {
              controlsOne.start("hiden");
              controlsTwo.start("hiden");
              controlsThree.start("hiden");
              controlsFour.start("hidden");
              controlsFive.start("hidden");
              controlsSix.start("hidden");
              controlsSeven.start("hidden");
              controlsEight.start("hidden");
              controlsNine.start("hidden");
              controlsTen.start("active");
              controlsEleven.start("active");
              controlsTwelwe.start("active");
            }}
            onHoverEnd={() => {
              controlsTen.start("hidden");
              controlsEleven.start("hidden");
              controlsTwelwe.start("hidden");
            }}
            className="website_container"
          >
            <GoFileBinary className="text-7xl" />
            <motion.span
              variants={fourthContainer}
              initial="hidden"
              animate={controlsTen}
              className="website_box relative"
            >
              <div className="w-full h-full absolute z-0">
                <Particle id={"3"} />
              </div>
              <motion.h3
                variants={fourthText}
                initial="hidden"
                animate={controlsEleven}
                className="text-gray-50 font-semibold text-center my-3"
              >
                Diverse Knowledge
              </motion.h3>
              <motion.p
                variants={fourthsubText}
                initial="hidden"
                animate={controlsTwelwe}
                className="website_text z-10"
              >
                I have experience working with npm packages and using them
                properly to create corresponding designs. Additionally I am
                acknowledged with REST APIs, Axios, and other hooks from Next.js
              </motion.p>
            </motion.span>
          </motion.section>
        </div>
      </Container>
    </main>
  );
};
export default WebSites;
