import React, { useState } from "react";
import Link from "next/link";
import Bulb from "../../components/Bulb";
//  data
const aboutData = [
  {
    title: "Work Experience",
    info: [
      {
        title: "StepOut Sense",
        stage:
          "Worked as an intern in StepOut Sence in the development team for 5 months ",
      },
    ],
  },
  {
    title: "Education",
    info: [
      {
        title: "Full Stack Python Course",
        stage:
          "Currently doing a full stack python course in marathali pyspiders due to lack of campus in my collages",
      },
      {
        title: "B-TECH(CSE)",
        stage:
          "Synergy Institute Of Technology, Bhubaneswar , CGPA - 8.1 , OCTOBER 2020 - OCTOBER 2024",
      },
      {
        title: "+2 (SCIENCE-CHSE)  ",
        stage:
          "Buxi Jagabandhu Bidyadhar Higher Secondary School, Bhubaneswar , PERCENTAGE - 74% , JUNE 2018 - JUNE 2020",
      },
      {
        title: "10th(BSE)",
        stage:
          "Saraswati Sishu Vidya Mandir, Bhubaneswar , PERCENTAGE - 90.33% , JUNE 2006- JUNE 2018",
      },
    ],
  },
  {
    title: "Hobbies",
    info: [
      {
        title: "Arm Wrestling",
        stage:
          "I Started ArmWrestling From Febuary-2023 And Aspired To Be One Of The Strongest In My Weight-Catagory Of 70-Kg  ",
      },
      {
        title: "GYM",
        stage:
          "Started Gym To Avoid Boredom And Now It Became A Habit ,Just Working-out To Stay Fit  ",
      },
      {
        title: "Meditation",
        stage:
          "Nurturing Peace and Clarity: Embarking on the Journey of Meditation, My Serene Escape and Transformative Hobby.",
      },
      {
        title: "Watching Anime",
        stage:
          "Anime Enthusiast: Finding Joy and Adventure in the World of Animated Stories",
      },
    ],
  },
  {
    title: "Credentials",
    info: [
      {
        title: "DSA-Apna Collage",
        stage: "2023",
        link: "https://drive.google.com/file/d/196j4YbLBbvTKHiaLCX5VFOAu2ktcQE1E/view?usp=sharing",
      },
      {
        title: "Internship - STEPP OUTSENSE pvt Ltd",
        stage: "2024",
        link: "https://drive.google.com/file/d/16oj025krFSgGNvU2PxtCJgI52w387K62/view?pli=1",
      },
      {
        title: "Computer Science Degree",
        stage: "2024",
        link: "",
      },
    ],
  },
  
];

// components

import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-24 text-center xl:text-left relative ">
     
      <Circles className="fixed bottom-0 right-0" />
      
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 ">
        {/* text */}
        <div className="flex-1 flex flex-col jusitfy-center xs:mb-10">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent">Stories</span> Birth 
            <span className="text-accent"> Magnificient</span>  Design{" "} <span className="text-white">.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w=[500px] ,x-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 "
          >

          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl-max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div>
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                  <CountUp start={0} end={21} duration={4} /> <span className="text-accent">+</span> 
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                  Years Old
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px] "
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 ">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={` ${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300 "
                  }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-accent after:absolute after:-bottom-1 after:left-0 `}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row sm:flex-row max-w-max gap-x-2  items-center text-white/60 "
                >
                  {/* title */}
                  <Link
                    href={item.link ?? ""}
                    className="font-bold mb-2 md:mb-0 text-white "
                  >
                    {item.title}
                  </Link>
                  <div className="font-bold hidden md:flex text-accent ">-</div>
                  <div className="font-light">{item.stage}</div>
                  {/* <div className="flex gap-x-4">
                   
                    {item.icons?.map((icon) => {
                      return (
                        <div className=" flex-1 flex flex-row text-2xl text-smile">
                          {icon}
                        </div>
                      );
                    })}
                  </div> */}
                </div>
              );
            })}
          </div>
        </motion.div>
       
      </div >
      {/* <div className=" bg-primary/30 fixed"> */}
      <Bulb />
      {/* </div> */}
       
</div>
  );
};

export default About;
