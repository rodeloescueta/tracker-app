import Image from "next/image";
import React from "react";
import Logo from "../../public/example.svg";

export default function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px]">
      <Image src={Logo} alt="Logo" width={50} height={50} />
    </nav>
  );
}
