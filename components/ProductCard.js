"use client";

import Image from "next/image";
import Link from "next/link";
import HeartFavorite from "./HeartFavorite";

const ProductCard = ({ product, updateSignedInUser }) => {
  return (
    <Link
      href={`/products/${product._id}`}
      className="w-[350px] flex flex-col gap-3 border rounded-xl shadow-md p-5"
    >
      <Image
        src={product.media[0]}
        alt="product"
        width={300}
        height={300}
        className="h-full max-md:w-full rounded-lg object-contain"
      />
      <div>
        <p className="text-base-bold">{product.title}</p>
        <p className="text-small-medium text-grey-2">{product.category}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-body-bold">BDT{product.price}</p>
        <HeartFavorite
          product={product}
          updateSignedInUser={updateSignedInUser}
        />
      </div>
    </Link>
  );
};

export default ProductCard;
