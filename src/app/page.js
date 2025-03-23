"use client";
import Modal from "@/component/Modal";
import Link from "next/link";
import { useEffect, useState } from "react";

function Page() {
  const [openModal, setIsOpenmModal] = useState(false);

  useEffect(() => {
    const modalData = JSON.parse(localStorage.getItem("modalShown"));

    if (!modalData || Date.now() - modalData.timestamp > 24 * 60 * 60 * 1000) {
      const timer = setTimeout(() => {
        setIsOpenmModal(true);
        localStorage.setItem(
          "modalShown",
          JSON.stringify({ shown: true, timestamp: Date.now() })
        );
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-6">
        <h1 className="text-5xl font-bold mb-6">Product Store</h1>
        <p className="text-xl text-center mb-8 max-w-xl">
          Eng so‘nggi va sifatli mahsulotlarni bizdan toping! Tez yetkazib
          berish, arzon narx va sifat kafolati.
        </p>
        <Link href="/products">
          <button className="bg-yellow-400 text-black px-8 py-3 text-xl rounded-xl hover:bg-yellow-300 transition">
            Mahsulotlarni ko‘rish
          </button>
        </Link>
      </div>
      {openModal && <Modal setIsOpenmModal={setIsOpenmModal} />}
    </>
  );
}

export default Page;
