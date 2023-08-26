import React from "react";
import Image from "next/image";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SkillCircle = ({ percentage, skill }) => {
  return (
    <div>
      <div
        className="flex items-center justify-center mr-2 ml-3 "
        style={{ height: 150, width: 150 }}
      >
        {/* <ChangingProgressProvider values={[0, 20, 40, 60, 80, 100]}> */}
        <CircularProgressbar
          value={percentage}
          text={skill}
          styles={buildStyles({
            textColor: "red",
            pathColor: "#07fa02",
            trailColor: "#cecbcb28",
            textSize: "10px",
            pathTransitionDuration: 0.15,
          })}
        ></CircularProgressbar>
        {/* </ChangingProgressProvider> */}
      </div>
    </div>
  );
};

export default SkillCircle;
  {/* <SkillCircle percentage={item.percentages[indeX]} skill={skill} /> */}