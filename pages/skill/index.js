import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";
import React, { useState } from "react";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const aboutData = [
  {
    title: "Front-End",
    info: [
      {
        subject: "REACT JS",
        A: 150,
        fullMark: 150,
      },
      {
        subject: "NEXT JS",
        A: 130,
        fullMark: 150,
      },
      {
        subject: "CSS",
        A: 140,
        fullMark: 150,
      },
      {
        subject: "React Native",
        A: 120,
        fullMark: 150,
      },
      {
        subject: "VITE JS",
        A: 100,
        fullMark: 150,
      },
      {
        subject: "JS",
        A: 140,
        fullMark: 150,
      },
    ],
  },
  {
    title: "Back-End",
    info: [
      {
        subject: "EXPRESS",
        A: 130,
        fullMark: 150,
      },
      {
        subject: "NODE",
        A: 130,
        fullMark: 150,
      },
      {
        subject: "JAVA",
        A: 90,
        fullMark: 150,
      },
      {
        subject: "PYTHON",
        A: 150,
        fullMark: 150,
      },
      {
        subject: "DJango",
        A: 150,
        fullMark: 150,
      },
    ],
  },
  {
    title: "Data-Base",
    info: [
      {
        subject: "MySql",
        A: 150,
        fullMark: 150,
      },
      {
        subject: "MONGO DB",
        A: 120,
        fullMark: 150,
      },
      {
        subject: "SQL",
        A: 140,
        fullMark: 150,
      },
    ],
  },
  {
    title: "Side-subjects",
    info: [
      {
        subject: "Computer Networking",
        A: 100,
        fullMark: 150,
      },
      {
        subject: "GIT",
        A: 140,
        fullMark: 150,
      },
      {
        subject: "DSA",
        A: 120,
        fullMark: 150,
      },
      {
        subject: "OS",
        A: 100,
        fullMark: 150,
      },
      {
        subject: "System Design",
        A: 130,
        fullMark: 150,
      },

      {
        subject: "ML",
        A: 0,
        fullMark: 150,
      },
      {
        subject: "AI",
        A: 0,
        fullMark: 150,
      },
    ],
  },
];

const Subject = () => {
  const [yoindex, yosetIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-24 text-center xl:text-left xl:overflow-hidden">
      <div className="container bg-cover mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 ">
        {/* text */}
        <div className="flex-1 flex flex-col jusitfy-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            <span className="text-accent">Evolving Skillset </span>{" "}
            <span className="text-smile">:</span> From Code Proficiency to{" "}
            <span className="text-accent">Diverse</span> Expertise{" "}
            <span className="text-smile">.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" max-w=[500px] ,x-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 "
          >
            "Since 2021, I've been refining my skills through a project-driven
            approach, witnessing significant growth in frontend, backend, and
            database proficiency, accompanied by a keen eye for UI/UX finesse.
            During this period, I gained practical experience through
            internships, where I actively contributed to both frontend and
            backend tasks, gaining valuable insights into real-world systems.
            Additionally, I've become adept at Git management tools like GitHub
            and Bitbucket, enhancing my collaborative workflow."
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
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                  <CountUp start={0} end={3} duration={10} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                  Years of project driven experience
                </div>
              </div>
            </div>
            <div>
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                <CountUp start={0} end={5} duration={5} />
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                Months of actual work Experience
              </div>
            </div>
          </motion.div>
        </div>
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
                    yoindex === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300 "
                  }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-accent after:absolute after:-bottom-1 after:left-0 `}
                  onClick={() => yosetIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="container flex flex-wrap justify-center items-center pb-10">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="container flex flex-wrap justify-center items-center pb-3"
              >
                {yoindex === itemIndex && (
                  <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius="60%"
                    width={450}
                    height={450}
                    data={item.info}
                  >
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />

                    <Radar
                      name="Mike"
                      dataKey="A"
                      stroke="#02fa0f"
                      fill="#02fa0f"
                      fillOpacity={0.6}
                    />
                  </RadarChart>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Subject;
