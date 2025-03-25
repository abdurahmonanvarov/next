import ProductCard from "@/component/ProductCard";
import React from "react";

const page = async () => {
  const data = await fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  );
  console.log(data);

  return (
    <div className="py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 container mx-auto gap-5">
      {data && data.map((p) => <ProductCard product={p} key={p.id} />)}
    </div>
  );
};

export default page;
