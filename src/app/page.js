"use client";
import Link from "next/link";

function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-6">
      <h1 className="text-5xl font-bold mb-6">Product Store</h1>
      <p className="text-xl text-center mb-8 max-w-xl">
        Eng so‘nggi va sifatli mahsulotlarni bizdan toping! Tez yetkazib berish,
        arzon narx va sifat kafolati.
      </p>
      <Link href="/products">
        <button className="bg-yellow-400 text-black px-8 py-3 text-xl rounded-xl hover:bg-yellow-300 transition">
          Mahsulotlarni ko‘rish
        </button>
      </Link>
    </div>
  );
}

export default Page;
