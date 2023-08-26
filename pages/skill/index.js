import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";
import React, { useState } from "react";

import SkillCircle from "../../components/SkillCircle";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// import ChangingProgressProvider from "./ChangingProgressProvider";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

import ReCharts from "../../components/ReCharts";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaWordpress,
} from "react-icons/fa";
//data
const aboutData = [
  {
    title: "Front-End",
    info: [
      {
        subject: "REACT",
        A: 90,
        fullMark: 150,
      },
      {
        subject: "NEXT",
        A: 90,
        fullMark: 150,
      },
      {
        subject: "VITE",
        A: 90,
        fullMark: 150,
      },
      {
        subject: "HTML",
        A: 100,
        fullMark: 150,
      },
      {
        subject: "CSS",
        A: 100,
        fullMark: 150,
      },
      {
        subject: "JS",
        A: 80,
        fullMark: 150,
      },
    ],
  },
  {
    title: "Back-End",
    info: [
      {
        subject: "EXPRESS",
        A: 120,
        fullMark: 150,
      },
      {
        subject: "NODE",
        A: 100,
        fullMark: 150,
      },
      {
        subject: "JAVA",
        A: 140,
        fullMark: 150,
      },
    ],
  },
  {
    title: "Data-Base",
    info: [
      {
        subject: "MySql",
        A: 900,
        fullMark: 150,
      },
      {
        subject: "MONGO",
        A: 100,
        fullMark: 150,
      },
      {
        subject: "MONGOOSE",
        A: 140,
        fullMark: 150,
      },
    ],
  },
  {
    title: "Side-subjects",
    info: [
      {
        subject: "MS-OFFICE",
        A: 100,
        fullMark: 150,
      },
      {
        subject: "VEDIO EDITING ",
        A: 50,
        fullMark: 150,
      },
      {
        subject: "PHOTO EDITING",
        A: 70,
        fullMark: 150,
      },
      {
        subject: "XYZ",
        A: 90,
        fullMark: 150,
      },
    ],
  },
];

const Subject = () => {
  const [yoindex, yosetIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-24 text-center xl:text-left">
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
            className="max-w=[500px] ,x-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 "
          >
            Refining skills from 2021 to 2023, my project-driven approach
            molded me. Frontend, backend, database proficiency grew, supported
            by UI/UX finesse.
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
                  Years of experience
                </div>
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
          <div className="container flex flex-wrap justify-center items-center   ">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="container flex flex-wrap justify-center items-center "
              >
                {yoindex === itemIndex && (
                  <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius="80%"
                    width={450}
                    height={350}
                    data={item.info} // Pass the infoItem array as data
                  >
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis />

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
