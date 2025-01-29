'use client'

import React from 'react';
import { product } from '@/sanity/schemaTypes/products'; // Assume the `Product` type exists

interface ShoppingCartModalProps {
  cartItems: product[];
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCartItems: React.Dispatch<React.SetStateAction<Product[]>>;
}

const ShoppingCartModal: React.FC<ShoppingCartModalProps> = ({ cartItems, setIsCartOpen, setCartItems }) => {
  // Remove item from cart
  const removeItemFromCart = (productId: string) => {
    const updatedCart = cartItems.filter(item => item._id !== productId);
    setCartItems(updatedCart);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-5 rounded-lg w-96">
        <h2 className="text-lg font-bold">Your Cart</h2>
        <ul>
          {cartItems.length > 0 ? (
            cartItems.map(item => (
              <li key={item._id} className="flex justify-between py-2">
                <span>{item.title} - ${item.price}</span>
                <button
                  onClick={() => removeItemFromCart(item._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </li>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </ul>
        <div className="mt-4 flex justify-between">
          <button
            onClick={() => setIsCartOpen(false)}
            className="bg-gray-300 text-black py-2 px-4 rounded"
          >
            Close
          </button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartModal;
