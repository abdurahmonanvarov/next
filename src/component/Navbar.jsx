import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="  w-full  flex justify-center gap-10 items-center border bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-5 shadow-lg">
      <Link href={"/"}>Home</Link>
      <Link href={"/products"}>Products</Link>
      <Link href={"/card"}>Card</Link>
      <Link href={"/contaxt"}>Contact</Link>
    </div>
  );
};

export default Navbar;
