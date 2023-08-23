// next image
import Image from "next/image";

// next link
import Link from "next/link";

// icon
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    
      <Link
        href={"/work"} 
        // className="relative w-[145px] h-[145px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        {/* relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group  */}
        <div className="relative w-[145px] h-[145px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group">
        <Image
          src={"/rounded-text.png"}
          width={121}
          height={128}
          alt=""
          className="animate-spin-slow w-full h-full max-w-[121px] max-h-[128px]"
        />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-3 transition-all duration-300" />
        </div>
      </Link>
   
  );
};

export default ProjectsBtn;
