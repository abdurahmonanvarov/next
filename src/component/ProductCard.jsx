import Image from "next/image";
import Link from "next/link";

function ProductCard({ product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className={"rounded overflow-hidden  cursor-pointer shadow block mb-5"}
    >
      <Image
        src={product.image}
        width={300}
        height={200} // to'g'ri yozilishi kerak
        alt={product.title}
        className={"w-full object-contain h-[200px]"}
      />
      <h3 className={"text-xl font-semibold p-3"}>{product.title}</h3>
    </Link>
  );
}

export default ProductCard;
