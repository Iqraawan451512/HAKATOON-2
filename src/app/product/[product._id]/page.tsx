'use client';

import Header_3 from '@/app/component/headetr_3/page';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Header from '@/app/component/header-2';

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

const ProductPage = () => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>([]);
  const [expandedDescription, setExpandedDescription] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = data.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://template6-six.vercel.app/api/products');
        const result = await response.json();
        setData(result);
      } catch {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const addToCart = (product: Product, quantity: number) => {
    const existingProductIndex = cart.findIndex((item) => item.product._id === product._id);
    if (existingProductIndex >= 0) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, { product, quantity }]);
    }
  };

  const removeFromCart = (productId: string) => {
    const updatedCart = cart.filter((item) => item.product._id !== productId);
    setCart(updatedCart);
  };

  const adjustQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) return;
    const updatedCart = cart.map((item) =>
      item.product._id === productId ? { ...item, quantity } : item
    );
    setCart(updatedCart);
  };

  const toggleDescription = (productId: string) => {
    setExpandedDescription((prevId) => (prevId === productId ? null : productId));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main>
      <Header_3 />
      <Header />

      <div className="main-of-product lg:ml-[0.1rem] gap-4 text-center justify-center mt-[3rem] px-4 sm:w-full md:w-[80rem] lg:w-[80rem]">
        {/* Search Bar */}
        <div className="search-bar mb-4">
          <input
            type="text"
            placeholder="Search products..."
            className="border p-2 rounded-md w-full md:w-[30rem] hover:bg-slate-200 font-sans "
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Product List */}
        <div className="w-full md:w-[80rem]">
          {Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product._id}
                className="bg-white shadow-lg rounded-lg hover:shadow-lg hover:shadow-slate-500 overflow-hidden mb-4"
              >
                <div className="flex flex-wrap sm:flex-nowrap items-center p-4">
                  {/* Left Side - Image */}
                  <div className="w-full sm:w-1/3 pr-4">
                    <Link href={`/products/${product._id}`}>
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-48 sm:h-64 object-cover rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                      />
                    </Link>
                    <h2 className="text-lg font-semibold sm:text-xl mt-2 hover:text-blue-800">{product.title}</h2>
                    <p className="text-lg font-semibold mt-2 sm:mt-1">$ {product.price}</p>

                    {/* Quantity Input */}
                    <div className="mt-4 flex items-center gap-1 sm:ml-[7rem]">
                      <input
                        type="number"
                        min="1"
                        defaultValue="1"
                        id={`quantity-${product._id}`}
                        className="border px-2 py-1 rounded-md w-20"
                      />
                      <button
                        onClick={() => {
                          const quantity = Number(
                            (document.getElementById(`quantity-${product._id}`) as HTMLInputElement).value
                          );
                          addToCart(product, quantity);
                        }}
                        className="bg-white-500 text-blue-500 font-sans px-2 py-1 rounded-lg hover:bg-blue-700 border-solid border-2 hover:text-white border-blue-500"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>

                  {/* Right Side - Description */}
                  <div className="w-full sm:w-2/3 pl-4 mt-4 sm:mt-0">
                    <div>
                      <h2 className="text-lg font-semibold lg:text-[1.8rem] sm:text-xl lg:font-bold mt-2 lg:mb-[2rem] hover:text-blue-800">
                        {product.title}
                      </h2>

                      {expandedDescription === product._id ? (
                        <p className="text-sm text-gray-500 font-sans lg:mt-3 md:mt-3 lg:text-[1rem] lg:leading-relaxed">
                          {product.description}
                        </p>
                      ) : (
                        <p className="text-sm text-gray-500 font-sans">
                          {product.description.slice(0, 700)}...
                        </p>
                      )}
                    </div>

                    {/* "See More" Button */}
                    {product.description.length > 100 && (
                      <button
                        onClick={() => toggleDescription(product._id)}
                        className="text-blue-500 mt-2 border-solid border-2 lg:mt-[2rem] border-blue-500 px-2 py-1 rounded-lg hover:bg-blue-500 hover:text-white"
                      >
                        {expandedDescription === product._id ? 'See Less' : 'See More'}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No products available.</p>
          )}
        </div>

        {/* Cart Summary */}
        <div className="mt-10">
          <h2 className="text-xl font-bold text-gray-800">Cart Summary</h2>
          <ul>
            {cart.length > 0 ? (
              cart.map((item) => (
                <li key={item.product._id} className="flex flex-col sm:flex-row justify-between mb-2">
                  <span>{item.product.title} (x{item.quantity})</span>
                  <div className="flex gap-2 mt-2 sm:mt-0">
                    <button
                      onClick={() => removeFromCart(item.product._id)}
                      className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-700"
                    >
                      Remove
                    </button>
                    <button
                      onClick={() => adjustQuantity(item.product._id, item.quantity + 1)}
                      className="bg-green-500 text-white px-2 py-1 rounded-lg hover:bg-green-700"
                    >
                      +1
                    </button>
                    <button
                      onClick={() => adjustQuantity(item.product._id, item.quantity - 1)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded-lg hover:bg-yellow-700"
                    >
                      -1
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <p>No items in cart.</p>
            )}
          </ul>
          <p className="mt-4 font-semibold">
            Total Items: {cart.reduce((acc, item) => acc + item.quantity, 0)}
          </p>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
