// import swiper react component
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import Image from "next/image";
import Link from "next/link";
import RedirectPopup from "./RedirectPopup";

// icons
import { BsArrowRight } from "react-icons/bs";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Tube Trove",
          path: "/thumb1.jpg",
          deployLink: "https://cloned-tube.vercel.app/",
          githubLink: "https://github.com/xxHRUSHIKESHxx/YouTube-Clone",
        },
        {
          title: "Gmail Reply Sender",
          path: "/thumb2.jpg",
          deployLink: null,
          githubLink: "https://github.com/xxHRUSHIKESHxx/gmailreplysender",
        },
        {
          title: "Campus Canvas BackEnd",
          path: "/thumb3.jpg",
          deployLink: null,
          githubLink: "https://github.com/xxHRUSHIKESHxx/backEnd",
        },
        {
          title: "Campus Canvas FrontEnd",
          path: "/thumb4.jpg",
          deployLink: null,
          githubLink: "https://github.com/xxHRUSHIKESHxx/major_project",
        },
      ],
    },
    {
      images: [
        {
          title: "Ai Summariser",
          path: "/thumb4.jpg",
          deployLink: "https://ai-summerizer-nu.vercel.app/",
          githubLink: "https://github.com/xxHRUSHIKESHxx/AiSummerizer",
        },
        {
          title: "Ask Her Out",
          path: "/thumb1.jpg",
          deployLink: "https://lets-go-one.vercel.app/",
          githubLink: "https://github.com/xxHRUSHIKESHxx/lets_go",
        },
        {
          title: "Story Sphere",
          path: "/thumb2.jpg",
          deployLink: null,
          githubLink: "https://github.com/xxHRUSHIKESHxx/blogApp",
        },
        {
          title: "Hope Harbour",
          path: "/thumb3.jpg",
          deployLink: null,
          githubLink: "https://github.com/xxHRUSHIKESHxx/bputpresentation",
        },
      ],
    },
    {
      images: [
        {
          title: "Expense Manager",
          path: "/thumb4.jpg",
          deployLink: "https://yearly-expenses.vercel.app/",
          githubLink: "https://github.com/xxHRUSHIKESHxx/YearlyExpenses",
        },
        {
          title: "Weather App",
          path: "/thumb1.jpg",
          deployLink: null,
          githubLink: "https://github.com/xxHRUSHIKESHxx/weather_app",
        },
        {
          title: "Book Management",
          path: "/thumb2.jpg",
          deployLink: null,
          githubLink: "https://github.com/xxHRUSHIKESHxx/book_management",
        },
        {
          title: "IRCTC Demo",
          path: "/thumb3.jpg",
          deployLink: null,
          githubLink: "https://github.com/xxHRUSHIKESHxx/irctcdemo",
        },
      ],
    },
    // {
    //   images: [
    //     {
    //       title: "Old Portfolio",
    //       path: "/thumb4.jpg",
    //       deployLink: "https://github.com/xxHRUSHIKESHxx/gmailreplysender",
    //       githubLink: "https://github.com/xxHRUSHIKESHxx/gmailreplysender",
    //     },
    //     {
    //       title: "EXPENSE MANAGER",
    //       path: "/thumb1.jpg",
    //       deployLink: "https://yearly-expenses.vercel.app/",
    //       githubLink: "https://yearly-expenses.vercel.app/",
    //     },
    //   ],
    // },
  ],
};

const WorkSlider = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [deployLink, setDeployLink] = useState(null);
  const [githubLink, setGithubLink] = useState(null);
  const [projectname, setProjectName] = useState(null);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  const handleProjectClick = (
    link_for_github,
    link_for_deploy,
    projectTitle
  ) => {
    console.log(
      "clicked on handle project click",
      link_for_github,
      link_for_deploy
    );
    setDeployLink(link_for_deploy);
    setGithubLink(link_for_github);
    setShowPopup(true);
    setProjectName(projectTitle);
  };

  return (
    <div>
      {showPopup && (
        <RedirectPopup
          onClose={closePopup}
          projectName={projectname}
          githubLink={githubLink}
          deployLink={deployLink}
        />
      )}
      <Swiper
        modules={[Pagination]}
        spaceBetween={10}
        slidesPerView={3}
        pagination={{ clickable: true }}
        className="h-[280px] sm:h-[480px]"
      >
        {workSlides.slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
                {slide.images.map((image, index) => {
                  return (
                    // <Link href={image.link} className="realtive rounded-lg overflow-hidden flex items-center  justify-center group" key={index} >
                    <div
                      onClick={() =>
                        handleProjectClick(
                          image.githubLink,
                          image.deployLink,
                          image.title
                        )
                      }
                      className="realtive rounded-lg overflow-hidden flex items-center  justify-center group"
                      key={index}
                    >
                      <div className="flex items-center justify-center relative overflow-hidden group ">
                        {/* images */}
                        <Image
                          src={image.path}
                          width={500}
                          height={300}
                          alt=""
                        />
                        {/* overlaying gradient */}
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                        {/* title */}
                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300 ">
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                            {/* title part 1 */}
                            <div className="delay-100">{image.title}</div>
                            {/* icon*/}
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200 ">
                              {" "}
                              <BsArrowRight />{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="text-center text-accent font-bold">
        {" "}
        Slide Left Or Right To See More{" "}
       
      </div>
    </div>
  );
};

export default WorkSlider;
