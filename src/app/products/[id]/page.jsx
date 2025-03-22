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
    // Oldin mavjud cart ni olish
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    // Yangisini qo'shish
    existingCart.push(product);
    // LocalStorage ga saqlash
    localStorage.setItem("cart", JSON.stringify(existingCart));
    toast.success("Mahsulot savatchaga qo‘shildi!");
  };

  return (
    <div className="text-center mt-10 w-[400px] mx-auto cursor-default">
      {product && (
        <>
          <ProductCard product={product} />
          <button
            onClick={handleAddToCart}
            className="cursor-pointer w-full p-3.5 text-xl bg-blue-700 text-amber-50 mt-4"
          >
            Add to cart
          </button>
        </>
      )}
    </div>
  );
}

export default Page;
