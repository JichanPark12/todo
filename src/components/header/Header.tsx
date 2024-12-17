import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className=" h-[60px] flex items-center">
      <div>
        <Image src={"/image/logo.png"} alt="로고" height={40} width={151} />
      </div>
    </header>
  );
};

export default Header;
