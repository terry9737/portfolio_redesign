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
    <main className="bg-header-default pt-5">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-10 bg-header-default">
          {/* one */}
          <motion.section
            onHoverStart={() => {
              controlsOne.start("active");
              controlsTwo.start("active");
              controlsThree.start("active");
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
              className="website_box"
            >
              <motion.h3
                variants={firstText}
                initial="hidden"
                animate={controlsTwo}
                className="text-white text-center my-3"
              >
                item one
              </motion.h3>
              <motion.p
                variants={firstsubText}
                initial="hidden"
                animate={controlsThree}
                className="website_text"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              </motion.p>
            </motion.span>
          </motion.section>

          <motion.section
            onHoverStart={() => {
              controlsFour.start("active");
              controlsFive.start("active");
              controlsSix.start("active");
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
              className="website_box"
            >
              <motion.h3
                variants={secondText}
                initial="hidden"
                animate={controlsFive}
                className="text-white text-center my-3"
              >
                item one
              </motion.h3>
              <motion.p
                variants={secondsubText}
                initial="hidden"
                animate={controlsSix}
                className="website_text"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              </motion.p>
            </motion.span>
          </motion.section>

          <motion.section
            onHoverStart={() => {
              controlsSeven.start("active");
              controlsEight.start("active");
              controlsNine.start("active");
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
              className="website_box"
            >
              <motion.h3
                variants={thirdText}
                initial="hidden"
                animate={controlsEight}
                className="text-white text-center my-3"
              >
                item one
              </motion.h3>
              <motion.p
                variants={thirdsubText}
                initial="hidden"
                animate={controlsNine}
                className="website_text"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              </motion.p>
            </motion.span>
          </motion.section>

          <motion.section
            onHoverStart={() => {
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
              className="website_box"
            >
              <motion.h3
                variants={fourthText}
                initial="hidden"
                animate={controlsEleven}
                className="text-white text-center my-3"
              >
                item one
              </motion.h3>
              <motion.p
                variants={fourthsubText}
                initial="hidden"
                animate={controlsTwelwe}
                className="website_text"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              </motion.p>
            </motion.span>
          </motion.section>
        </div>
      </Container>
    </main>
  );
};
export default WebSites;
