import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import WorkSlider from "../../components/WorkSlider";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text  */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 ">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              My  <span className="text-accent">Work</span><span className="text-hola">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 mx-w-[400px] mx-auto lg:mx-0 "
            >
              Discover my collection of live projects, ranging from dynamic web
              applications to innovative user interfaces. Explore my hands-on
              coding skills and passion for creating impactful digital
              solutions.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%] "
          >
            {/* slider */}
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <div>
        <Bulb />
      </div>
    </div>
  );
};

export default Work;
