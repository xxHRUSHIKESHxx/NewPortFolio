// import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { Pagination } from "swiper/modules";
// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Full stack Dev",
    description: "React.js, React Native, Node.js, Express.js, and Django ",
  },
  {
    icon: <RxPencil2 />,
    title: "Front End Dev",
    description: "React Js , React Native , Next Js , Vite Js , Html , Css , Js",
  },
  {
    icon: <RxDesktop />,
    title: "Mobile App Dev",
    description: "In terms Of mobile app development i only know React Native ",
  },
  {
    icon: <RxReader />,
    title: "Back End Dev",
    description: "Python , Django , Java Script , Node Js , Express Js , SQL , MONGODB",
  },
  {
    icon: <RxRocket />,
    title: "UI/UX Design",
    description: "for ui/ux i provide Figma , Canva , Adobe , Framer in basic level",
  },
];

const ServiceSlider = () => {
  return (
    <div>
      {" "}
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        moudles={[Pagination, FreeMode]}
        className="h-[240px] sm:h-[340px] mySwiper"
      >
        {serviceData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer  hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 ">
                {/* icon */}
                <div className="text-4xl text-accent mb-4  ">{item.icon}</div>
                {/* titile and desc */}
                <div className="mb-8">
                  <div className="mb-2 text-lg">{item.title}</div>
                  <p className="max-w-[350px] leading-normal ">
                    {item.description}
                  </p>
                </div>
                {/* arrow */}
                <div class="text-3xl">
                  <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
                </div>
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

export default ServiceSlider;
