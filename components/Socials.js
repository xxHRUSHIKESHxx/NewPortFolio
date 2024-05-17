import Link from "next/link";

import {
  
  RiInstagramLine,
  RiLinkedinFill,
  RiGithubFill,
 
  
} from "react-icons/ri";
import{ImProfile} from "react-icons/im";

const Socials = () => {
  return <div className="flex items-center gap-x-5 text-lg ">
    
    <Link href={'https://www.instagram.com/hrushikesh_behera_/'} className="hover:text-accent transition-all duration-300" >
       <RiInstagramLine/>
    </Link>
    <Link href={'https://www.linkedin.com/in/hrushikesh-behera-a6bb3321a'} className="hover:text-accent transition-all duration-300" >
       <RiLinkedinFill/>
    </Link>
    <Link href={'https://github.com/xxHRUSHIKESHxx'} className="hover:text-accent transition-all duration-300" >
       <RiGithubFill/>
    </Link>

    <Link href={"https://drive.google.com/file/d/1ObAOk9mg5fStEcSLn8NQOPIg0IuGhTij/view?usp=drive_link"} className="hover:text-accent transition-all duration-300" >
       <ImProfile/>
    </Link>
  
  
  
   
   
  </div>;
};

export default Socials;
