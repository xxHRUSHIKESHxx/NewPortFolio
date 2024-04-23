// import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import Image from "next/image";
import Link from "next/link";

// icons
import { BsArrowRight } from "react-icons/bs";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "TUBE TROVE",
          path: "/thumb1.jpg",
          link:"https://cloned-tube.vercel.app/"
       
        },
        {
          title: "EXPENSE MANAGER",
          path: "/thumb2.jpg",
          link:"https://yearly-expenses.vercel.app/"
        },
        {
          title: "AI SUMMARISER",
          path: "/thumb3.jpg",
          link:"https://ai-summerizer-nu.vercel.app/"
          
        },
        {
          title: "IRCTC DEMO",
          path: "/thumb4.jpg",
          link:"https://github.com/xxHRUSHIKESHxx/irctcdemo"
        },
      ],
    },
    {
      images: [
        {
          title: "GMAIL REPLY SENDER",
          path: "/thumb4.jpg",
          link:"https://github.com/xxHRUSHIKESHxx/gmailreplysender"
        },
        {
          title: "EXPENSE MANAGER",
          path: "/thumb1.jpg",
          link:"https://yearly-expenses.vercel.app/"
        },
        {
          title: "AI SUMMARISER",
          path: "/thumb2.jpg",
          link:"https://ai-summerizer-nu.vercel.app/"
        },
        {
          title: "OLD PORTFOLIO",
          path: "/thumb3.jpg",
          link:"https://xxhrushikeshxxportfolio.onrender.com"
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      moudles={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <Link href={image.link} className="realtive rounded-lg overflow-hidden flex items-center  justify-center group" key={index} >
                    <div className="flex items-center justify-center relative overflow-hidden group ">
                      {/* images */}
                      <Image src={image.path} width={500} height={300} alt="" />
                      {/* overlaying gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300 ">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* title part 1 */}
                          <div className="delay-100">{image.title}</div>
                          {/* title part 2 */}
                          <div className=" translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150 ">APP</div>
                          {/* icon*/}
                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200 '> <BsArrowRight/> </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
