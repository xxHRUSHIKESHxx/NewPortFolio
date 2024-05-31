import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { aboutProjects } from "../../components/AboutProjects";

// icons
import { GoProjectSymlink } from "react-icons/go";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { SiVite } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { SiDjango } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { PiFileSqlBold } from "react-icons/pi";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiMui } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaKey } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { SiRapid } from "react-icons/si";
import { FaCloudUploadAlt } from "react-icons/fa";
import { SiAxios } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaChartPie } from "react-icons/fa";
import { SiReactrouter } from "react-icons/si";
import { SiJsonwebtokens } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { MdSlowMotionVideo } from "react-icons/md";
import { SiEslint } from "react-icons/si";
import { BsFillGeoAltFill } from "react-icons/bs";
import { FaSkyatlas } from "react-icons/fa6";
import { BsClockFill } from "react-icons/bs";
import { FaSass } from "react-icons/fa";
import { GrDomain } from "react-icons/gr";
import { FaGoogle } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { RiBookReadLine } from "react-icons/ri";
import { FaInfinity } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { IoIosTime } from "react-icons/io";
import { FaCookie } from "react-icons/fa";
import { SiNodemon } from "react-icons/si";

const ProjectDescription = () => {
  const [projectData, setProjectData] = useState(null);
  const params = useSearchParams();
  const search = params.get("title");
  // console.log("about porjects objecct " , aboutProjects)

  useEffect(() => {
    setProjectData(aboutProjects[search]);
  }, [search]);

  const skills = {
    nodemon:<SiNodemon/>,
    "cookie-Parser":<FaCookie/>,
    Moment:<IoIosTime/>,
    HTML: <FaHtml5 />,
    CSS: <FaCss3 />,
    "Java Script": <SiJavascript />,
    "React Js": <FaReact />,
    "Next.js": <RiNextjsFill />,
    "React Native": <TbBrandReactNative />,
    "Vite.js": <SiVite />,
    "Node.js": <IoLogoNodejs />,
    Django: <SiDjango />,
    "Express.js": <SiExpress />,
    Python: <FaPython />,
    Java: <FaJava />,
    SQL: <PiFileSqlBold />,
    MongoDB: <SiMongodb />,
    MySql: <GrMysql />,
    "Material UI": <SiMui />,
    "Tailwind CSS": <RiTailwindCssFill />,
    // libraries
    bycrypt: <FaKey />,
    "Django Rest FrameWork": <TbApi />,
    Multer: <FaCloudUploadAlt />,
    Axios: <SiAxios />,
    "Framer Motion": <TbBrandFramerMotion />,
    "Apex Charts": <FaChartPie />,
    "React Router DOM": <SiReactrouter />,
    "Json Web Token": <SiJsonwebtokens />,
    Mongoose: <SiMongoose />,
    "React Player": <MdSlowMotionVideo />,
    "Rapid API": <TbApi />, // <SiRapid />,
    Eslint: <SiEslint />,
    "React GeoLocated": <BsFillGeoAltFill />,
    "Sky Cons": <FaSkyatlas />,
    "React Live Clock": <BsClockFill />,
    Sass: <FaSass />,
    Dompurify: <GrDomain />,
    "Google-auth-library": <FaGoogle />,
    "Google-apis": <FaGoogle />,
    NodeCron: <FaInfinity />,
    "Node Mailer": <SiMinutemailer />,
    "Read Line": <RiBookReadLine />,
    redux : <TbBrandRedux/>
  };

  if (projectData != null) {
    console.log("project data", projectData.technologies);
    // projectData.technologies.map((item) => console.log("items", skills[item]));
    console.log("data from skills", skills["React Js"]);
  }
  return (
    <div className="h-full  flex flex-col bg-primary/30 py-24 text-center xl:text-left">
      <div className="container bg-cover mx-auto h-full flex flex-col items-center xl:flex-col gap-x-6 ">
        <div className=" text-3xl font-bold text-accent text-center">
          {" "}
          {search}{" "}
        </div>
        <div className="text-slate-400 flex xl:flex-row text-left">
          <span className=" text-normal font-bold text-accent  ">
            {" "}
            Technologies Used :{" "}
          </span>{" "}
          <div className="flex flex-row">
            {" "}
            {projectData
              ? projectData.technologies.map((item) => (
                  <div className="text-smile text-2xl text-center p-1 relative flex items-center group hover:text-accent transition-all duration-300">
                    <div className="absolute xl:pr-12 pr-6 right-0 hidden group-hover:flex xl:group-hover:flex ">
                      <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px] ">
                        <div className="text-[12px] leading-none font-semibold capitalize">
                          {item}
                        </div>
                        <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right"></div>
                      </div>
                    </div>
                    <div className="xl:px-2">{skills[item]} </div>
                    {/* <div>{item} </div> */}
                  </div>
                ))
              : null}
          </div>
        </div>
        <div className="text-slate-400 pb-20">
          {" "}
          <span className=" text-normal font-bold text-accent  ">
            Description :{" "}
          </span>{" "}
          {projectData ? projectData.description : null}
        </div>
        {/* <div className="text-slate-400 flex flex-col">
          {" "}
          <span className=" text-normal font-bold text-accent  ">
            {" "}
            Skills Gained {"   "} :{"   "}
          </span>{" "}
          <div className="flex flex-col">
            {" "}
            {projectData
              ? projectData.skills_gained.map((gain) => <div>{gain}</div>)
              : null}
          </div>
        </div> */}
        {/* <div className="flex-1 flex flex-col jusitfy-center"></div> */}
      </div>
    </div>
  );
};

export default ProjectDescription;
