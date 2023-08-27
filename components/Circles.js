import Image from 'next/image';
const Circles = () => {
  return <div className="w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-hard-light  animate-pulse duration-75 z-1 ">

   <Image src={'/circles24.png'} width={260} height={200} className="w-full h-full" alt='' />

  </div>;
};

export default Circles;
