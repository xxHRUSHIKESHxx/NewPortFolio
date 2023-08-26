import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Services = () => {
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
              className="h2 xl:mt-8"
            >
             My  <span className="text-accent"> Services</span>
               <span className="text-white"> .</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 mx-w-[400px] mx-auto lg:mx-0 "
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe,
              officiis eligendi voluptatem minus eaque possimus amet nisi natus
              necessitatibus! Illum ex expedita possimus suscipit quasi nostrum
              reiciendis molestias ducimus dolorem!
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%] container "
          >
            {/* slider */}
            <ServiceSlider/>
          </motion.div>
        </div>
      </div>
      <div>
        <Bulb />
      </div>
    </div>
  );
};

export default Services;
