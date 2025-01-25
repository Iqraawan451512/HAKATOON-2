'use client';

import React, { useState, useEffect } from 'react';

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
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Cart will hold the list of products with their quantities
  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>([]);

  // State to handle the description visibility
  const [expandedDescription, setExpandedDescription] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://template6-six.vercel.app/api/products');
        const result = await response.json();
        setData(result.slice(2, 3)); // For the demo, we slice data
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Adding product to the cart
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

  // Removing product from the cart
  const removeFromCart = (productId: string) => {
    const updatedCart = cart.filter((item) => item.product._id !== productId);
    setCart(updatedCart);
  };

  // Adjusting the quantity of a product in the cart
  const adjustQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) return;
    const updatedCart = cart.map((item) =>
      item.product._id === productId ? { ...item, quantity } : item
    );
    setCart(updatedCart);
  };

  // Toggle the description visibility
  const toggleDescription = (productId: string) => {
    setExpandedDescription((prevId) => (prevId === productId ? null : productId));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="main-of-product lg:ml-[0.1rem] gap-4 text-center justify-center mt-[3rem] px-4 sm:w-full md:w-[80rem] lg:w-[80rem]">
      {/* Product List */}
      <div className="w-[80rem]">
        {Array.isArray(data) && data.length > 0 ? (
          data.map((product) => (
            <div key={product._id} className="bg-white shadow-lg rounded-lg  hover:shadow-lg hover:shadow-slate-500 overflow-hidden mb-4">
              <div className="flex flex-wrap items-center p-4">
                {/* Left side - Image and Title */}
                <div className="w-full sm:w-1/3 pr-4">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full lg:w-[50rem] h-64 object-cover rounded-lg lg:mt-[3rem] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                  />
                  <h2 className="text-lg font-semibold lg:text-[2rem] mt-2 hover:text-blue-800">{product.title}</h2>
                  <p className="text-lg font-semibold mt-2 lg:mt-1">$ {product.price}</p>

{/* Quantity input */}
<div className="mt-4 flex items-center gap-1  ml-[5rem]">
                    <input
                      type="number"
                      min="1"
                      defaultValue="1"
                      id={`quantity-${product._id}`}
                      className="border  px-2 py-1 rounded-md"
                    />
                    <button
                      onClick={() => {
                        const quantity = Number(
                          (document.getElementById(`quantity-${product._id}`) as HTMLInputElement).value
                        );
                        addToCart(product, quantity);
                      }}
                      className="bg-white-500  text-blue-500 font-sans   px-2 py-1 rounded-lg  hover:bg-blue-700 border-solid border-2 hover:text-white border-blue-500"
                    >
                      Add to Cart
                    </button>
                  </div>









                </div>



                {/* Right side - Description */}
                <div className="w-full sm:w-2/3 pl-4">
                  <div className="mt-2 lg:mt-1 lg:w-[40rem]">
                  <h2 className="text-lg font-semibold lg:text-[2rem] mt-2 mb-[2rem] hover:text-blue-800">{product.title}</h2>

                    {expandedDescription === product._id ? (
                      <p className="text-[1rem] text-left text-gray-500 font-sans">{product.description}</p>
                    ) : (
                      <p className="text-[1rem] text-left text-gray-500 font-sans">{product.description.slice(0, 700)}...</p>
                    )}
                  </div>

                  {/* "See More" button */}
                  {product.description.length > 100 && (
                    <button
                      onClick={() => toggleDescription(product._id)}
                      className="text-blue-500 mt-[1rem] lg:mr-[10rem] border-solid border-2 border-blue-500 px-2 py-1 rounded-lg hover:bg-blue-500 hover:text-white"
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
              <li key={item.product._id} className="flex justify-between mb-2">
                <span>{item.product.title} (x{item.quantity})</span>
                <div>
                  <button
                    onClick={() => removeFromCart(item.product._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-700 mr-2"
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
        <p className="mt-4 font-semibold">Total Items: {cart.reduce((acc, item) => acc + item.quantity, 0)}</p>
      </div>
    </div>
  );
};

export default Product;
