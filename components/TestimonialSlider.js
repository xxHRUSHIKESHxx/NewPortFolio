// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Might Guy',
    position: 'Customer',
    message:
      'Stunning design, seamless functionality. Impressed by the front-end work. Aesthetic and user-friendly, its a masterpiece of web development'
  },
  {
    image: '/t-avt-2.png',
    name: 'Gold D Roger',
    position: 'Customer',
    message:
      'Outstanding front-end work! The websites design is captivating, user-friendly, and responsive. Impressed by the seamless navigation and visual appeal',
  },
  {
    image: '/t-avt-3.png',
    name: 'Haruno Sakura',
    position: 'Customer',
    message:
      'Exceptional front-end work. The websites stunning design and seamless functionality exceeded expectations. A true professional in web development'
  },
];


// import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation,Pagination } from "swiper/react";
import { Pagination ,Navigation } from 'swiper/modules';

// import swiper styles
import "swiper/css";
import 'swiper/css/navigation'
import 'swiper/css/pagination';


import Image from "next/image";

// icons
import { FaQuoteLeft } from "react-icons/fa";



const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      moudles={[Pagination,Navigation]}
      className="h-[400px] mySwiper"

    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
           <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16 " >
            {/* avatar, name , position */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0 " >
              <div className="flex flex-col justify-center text-center " >
              {/* avataar */}
              <div className="mb-2 mx-auto" >
                <Image src={person.image} width={100} height={100} alt='' />
              </div>
              {/* name */}
              <div className="text-lg">{person.name}</div>
              {/* position */}
              <div className="text-[12px] uppercase font-extralight tracking-widest " >{person.position}</div>
              </div>
            </div>
            {/* quote and message */}
            <div className=" flex-1 flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[170px] relative xl:pl-20 " > 
              {/* quote icon */}
              <div className="mb-4">
                <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>
                {/* message */}
                <div className="xl:text-lg text-center md:text-left" >{person.message}</div>
            </div>
           </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;

