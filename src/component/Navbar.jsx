"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full border-b shadow-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href={"/"} className="text-2xl font-bold">
          MyStore
        </Link>
        <div className="hidden md:flex gap-10 text-lg">
          <Link href={"/"}>Home</Link>
          <Link href={"/products"}>Products</Link>
          <Link href={"/card"}>Cart</Link>
          <Link href={"/contaxt"}>Contact</Link>
        </div>
        <div className="md:hidden">
          {isOpen ? (
            <X size={30} onClick={toggleMenu} className="cursor-pointer" />
          ) : (
            <Menu size={30} onClick={toggleMenu} className="cursor-pointer" />
          )}
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col items-center gap-4 pb-4 md:hidden animate-slide-down">
          <Link href={"/"} onClick={toggleMenu}>
            Home
          </Link>
          <Link href={"/products"} onClick={toggleMenu}>
            Products
          </Link>
          <Link href={"/card"} onClick={toggleMenu}>
            Cart
          </Link>
          <Link href={"/contaxt"} onClick={toggleMenu}>
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
