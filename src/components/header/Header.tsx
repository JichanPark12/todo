import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className=" h-[60px] flex items-center">
      <Link href={"/"}>
        <Image src={"/image/logo.png"} alt="로고" height={40} width={151} />
      </Link>
    </header>
  );
};

export default Header;
