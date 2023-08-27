

//components

import ProjectsBtn from "../components/ProjectsBtn";

import Sphere from "../components/Sphere";
import BannerText from "../components/BannerText";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";
import ParticlesContainer from "../components/ParticlesContainer";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full   ">
        <ParticlesContainer />
      {/* text */}
      <div className="w-full h-full ">
        <div className="text-center flex flex-col justify-center xl:pt-20 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 mt-10"
          >
            {`Hi I'm `}           
             <span className="text-accent  ">
             HRUSHIKESH
            </span> , <br />
            <span className="text-accent">
              <BannerText />
            </span>
          </motion.h1>
          {/* subtitles */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-white"
          >
            Welcome to my front-end development playground, where I turn designs
            into interactive wonders. With a passion for clean code and
            captivating experiences, I craft websites that leave a lasting
            impression. Let&apos;s collaborate and create something extraordinary
            together.
          </motion.p>
          {/* btn */}
         
            <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="xl:hidden flex justify-center mb-5"
          >
            <ProjectsBtn />
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
        {/* image */}
      <div className="hidden xl:block w-[1000px] h-full absolute right-0 bottom-0 ">
        {/* bg img */}
        <div
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right-top xl:bg-no-repeat w-full h-full absolute  mix-blend-color-dodge
         translate-z-0 mb-100px "
        ></div>
        {/*  */}

       
        {/* 3d tag cloud*/}
        <div className="hidden xl:block ">
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[537px] max-h-[478px] absolute lg:right-[18%] "
        >
          {/* w-full h-full max-w-[537px] max-h-[478px] absolute -bottom-32 lg:bottom-0 lg:right-[8%] */}

          <Sphere />
        </motion.div>
        </div>
        
      </div>
    
    </div>
  );
};

export default Home;
