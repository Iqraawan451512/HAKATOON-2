"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  discountedPrice: number;
  title: string;
  product: string;
};

const Product = () => {
  const [data, setData] = useState<Product[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://template6-six.vercel.app/api/products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result.slice(0, 1));
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setData([]);
      }
    }

    fetchData();
  }, []);

  if (!data) return <p>Loading...</p>;
  if (data.length === 0) return <p>No products available.</p>;

  return (
    <div className="main-of-product lg:ml-[0.1rem] flex gap-4 text-center justify-center mt-[3rem] px-4 sm:w-full md:w-[80rem] lg:w-[80rem]">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {data.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            <Link href={`/product/${product._id}`}>
              <img
                src={product.imageUrl || "/fallback-image.jpg"}
                alt={product.name || "Product Image"}
                className="w-full h-64 object-cover"
              />
            </Link>
            <div className="p-4">
              <h1 className="text-xl font-bold">{product.name}</h1>
              <p className="text-lg font-semibold mt-2">${product.price}</p>
              <h2 className="text-lg font-semibold mt-2 hover:text-blue-800">
                {product.title}
              </h2>
              <p>
                {product.description.length > 100
                  ? `${product.description.slice(0, 100)}...`
                  : product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
