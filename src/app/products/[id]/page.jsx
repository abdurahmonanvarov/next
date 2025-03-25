"use client";
import ProductCard from "@/component/ProductCard";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Page() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };
    if (id) {
      getDetail();
    }
  }, [id]);

  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    existingCart.push(product);
    localStorage.setItem("cart", JSON.stringify(existingCart));
    toast.success("Mahsulot savatchaga qo‘shildi!");
  };

  return (
    <div className="mt-10 px-4 w-full max-w-md mx-auto text-center cursor-default">
      {product && (
        <>
          <ProductCard product={product} />
          <button
            onClick={handleAddToCart}
            className="cursor-pointer w-full p-4 text-lg bg-blue-700 text-white mt-4 rounded-xl hover:bg-blue-800 transition"
          >
            Add to cart
          </button>
        </>
      )}
    </div>
  );
}

export default Page;
