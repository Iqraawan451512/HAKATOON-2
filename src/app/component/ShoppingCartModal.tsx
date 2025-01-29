import React from 'react';
import { Product } from '@/sanity/schemaTypes/products'; // ✅ Correctly import Product interface

interface ShoppingCartModalProps {
  cartItems: Product[];  // Use the Product type here
}

const ShoppingCartModal: React.FC<ShoppingCartModalProps> = ({ cartItems }) => {
  return (
    <div className="shopping-cart-modal">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <strong>{item.title}</strong> - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShoppingCartModal;
