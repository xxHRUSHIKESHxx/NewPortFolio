import Image from "next/image";

import Link from "next/link";

import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-8 xl:px-16 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center">
        {/* logo */}
        <Link href={'/'}>
          <Image
            src={"/logo.svg"}
            width={300}
            height={48}
            alt=""
            priority={true}
          />
        </Link>
        {/* socials */}
        <Socials/>
        </div>
      </div>
    </header>
  );
};

export default Header;
