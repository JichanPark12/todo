import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className=" h-[60px] flex items-center">
      <Link href={"/"}>
        <Image
          src={"/image/logo.png"}
          alt="로고"
          height={40}
          width={151}
          className="xs:block hidden"
        />
        <Image
          src={"/image/smallLogo.png"}
          alt="작은 로고"
          height={40}
          width={71}
          className="xs:hidden block"
        />
      </Link>
    </header>
  );
};

export default Header;
