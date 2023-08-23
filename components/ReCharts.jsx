import React, { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

// const data = [
//   {
//     subject: "Math",
//     A: 120,
//     B: 110,
//     fullMark: 150,
//   },
//   {
//     subject: "Chinese",
//     A: 98,
//     B: 130,
//     fullMark: 150,
//   },
//   {
//     subject: "English",
//     A: 86,
//     B: 130,
//     fullMark: 150,
//   },
//   {
//     subject: "Geography",
//     A: 99,
//     B: 100,
//     fullMark: 150,
//   },
// ];

const ReCharts = (data, polarangledatkey,radardatakey) => {
  return (
    <div>
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="80%"
        width={400}
        height={400}
        data={data} // Pass the infoItem array as data
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="polarangledatkey" />
        <PolarRadiusAxis />

        <Radar
          name="Mike"
          dataKey="radardatakey"
          stroke="#bc50fa"
          fill="#bc50fa"
          fillOpacity={0.6}
        />
      </RadarChart>
    </div>
  );
};

export default ReCharts;

{
  /* <ReCharts
data={item}
angledatakey={item.skill}
radiusdatakey={item.A}
/> */
}
