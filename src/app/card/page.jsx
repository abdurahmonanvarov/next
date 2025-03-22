"use client";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Page() {
  const [cartItems, setCartItems] = useState([]);

  // LocalStorage dan cart ma'lumotlarini olish
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  // Mahsulotni o‘chirish funksiyasi
  const handleDelete = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1); // Tanlangan mahsulotni o‘chiradi
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success("Mahsulot muvoffaqiyatli uchirildi");
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Savatcha</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-xl text-gray-500">Savatcha bo‘sh</p>
      ) : (
        cartItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between border p-4 rounded-2xl shadow mb-4"
          >
            <div>
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600">${item.price}</p>
            </div>
            <button
              onClick={() => handleDelete(index)}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl transition"
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Page;
