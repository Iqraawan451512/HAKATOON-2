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
  const [data, setData] = useState<Product[] | null>(null); // initialize as null

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetching data (replace with your actual data fetch)
        const response = await fetch("https://template6-six.vercel.app/api/products");
        const result = await response.json();
        setData(result.slice(0, 1)); // Set the fetched data
      } catch {
        setData([]); // Fallback to an empty array on error
      }
    }

    fetchData();
  }, []);

  if (!data) return <p>Loading...</p>; // Handle loading without the loading state
  if (data.length === 0) return <p>No products available.</p>; // Handle error or empty data

  return (
    <div className="main-of-product lg:ml-[0.1rem] flex gap-4 text-center justify-center mt-[3rem] px-4 sm:w-full md:w-[80rem] lg:w-[80rem]">
      {/* Product List */}
      <div className="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[50rem] flex gap-5">
        {data.map((product) => (
          // Add the key to the outermost div element inside the map
          <div
            key={product._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            <Link href={"./product-id"}>
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
            </Link>
            <div className="p-4">
              <h1 className="text-xl font-bold">{product.name}</h1> {/* Product Name */}
              <p className="text-lg font-semibold mt-2">${product.price}</p>
              <h2 className="text-lg font-semibold mt-2 hover:text-blue-800">
                {product.title}
              </h2>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;