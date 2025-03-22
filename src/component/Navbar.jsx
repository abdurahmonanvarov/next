import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center gap-10 items-center border py-5">
      <Link href={"/"}>Home</Link>
      <Link href={"/products"}>Products</Link>
      <Link href={"/card"}>Card</Link>
      <Link href={"/contaxt"}>Contact</Link>
    </div>
  );
};

export default Navbar;
