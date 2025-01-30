"use client"; 

import React, { useState, useEffect, useRef } from "react";
import Header_3 from "../component/headetr_3/page";
import Header from "../component/header-2";
import axios from "axios";

// Define Address Type
type Address = {
  name: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  cityLocality: string;
  stateProvince: string;
  postalCode: string;
  countryCode: string;
  addressResidentialIndicator: string;
};

// Define Rate Type
type Rate = {
  rateId: string;
  serviceCode: string;
  shippingAmount: number;
};

// Define Product Type
type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  discountedPrice: number;
  title: string;
  weight?: number; // Added weight to avoid undefined errors
  dimensions?: string; // Added dimensions to avoid undefined errors
};

// Define Cart Item Type (with quantity)
type CartItem = {
  product: Product;
  quantity: number;
};

const ShopNow = () => {
  // State to hold products and cart data
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCheckout, setShowCheckout] = useState(false); // State to manage checkout visibility

  // Refs for scrolling to specific sections
  const cartRef = useRef<HTMLDivElement | null>(null); // Reference to the cart section
  const checkoutRef = useRef<HTMLDivElement | null>(null); // Reference to the checkout section

  // State for shipping address and rates
  const [shipeToAddress, setshipeToAddress] = useState<Address>({
    name: "John Doe",
    phone: "+1 555-678-1234",
    addressLine1: "1600 Pennsylvania Avenue NW",
    addressLine2: "",
    cityLocality: "Washington",
    stateProvince: "DC",
    postalCode: "20500",
    countryCode: "US",
    addressResidentialIndicator: "no",
  });

  const [rates, setRates] = useState<Rate[]>([]);
  const [rateId, setRateId] = useState<string | null>(null); // Fixed state update name
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  // Fetch products data from API
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://template6-six.vercel.app/api/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  // Function to add a product to the cart and scroll to the cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(item => item.product._id === product._id);
      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { product, quantity: 1 }];
      }
    });

    if (cartRef.current) {
      cartRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product._id !== productId));
  };

  // Calculate total price in the cart
  const totalPrice = cart.reduce((total, item) => {
    const productPrice = item.product.discountedPrice || item.product.price;
    return total + (productPrice * item.quantity);
  }, 0);

  // Handle checkout click - show checkout section and scroll to it
  const handleCheckout = () => {
    setShowCheckout(true);
    if (checkoutRef.current) {
      checkoutRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Function to handle form submission of shipping rates
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors([]);
    setRates([]);

    try {
      const response = await axios.post("/api/shipengine/get-rates", {
        shipeToAddress,
        packages: cart.map((item) => ({
          weight: item.product.weight,
          dimensions: item.product.dimensions,
        })),
      });

      console.log(response.data);
      setRates(response.data.shipmentDetails.rateResponse.rates);
    } catch (error) {
      console.log(error);
      setErrors(["An error occurred while fetching rates."]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <Header_3 />
      <Header />
      <div className="min-h-screen bg-gray-50 p-8">
        {/* Shop Header */}
        <h1 className="text-4xl font-bold text-center text-blue-950 font-serif hover:text-slate-700 mb-8 transition-transform transform hover:scale-125">Shop Now</h1>

        {/* Product List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product._id} className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <img src={product.imageUrl} alt={product.title} className="w-full h-56 object-cover rounded-lg mb-4" />
              <h2 className="text-xl text-[0.70rem] font-semibold">{product.title}</h2>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-blue-600">
                  {product.discountedPrice ? `$${product.discountedPrice.toFixed(2)}` : `$${product.price.toFixed(2)}`}
                </span>
                <button onClick={() => addToCart(product)} className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div ref={cartRef} className="mt-8 bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
          <ul className="space-y-4">
            {cart.length === 0 ? <p>Your cart is empty.</p> : cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center">
                <div className="flex items-center">
                  <img src={item.product.imageUrl} alt={item.product.title} className="w-16 h-16 object-cover rounded-lg mr-4" />
                  <span>{item.product.name}</span>
                </div>
                <div className="flex items-center">
                  <span>{item.product.discountedPrice ? `$${item.product.discountedPrice.toFixed(2)}` : `$${item.product.price.toFixed(2)}`}</span>
                  <span className="ml-2 text-gray-500">x {item.quantity}</span>
                </div>
                <button onClick={() => removeFromCart(item.product._id)} className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600">Remove</button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-4">
            <span className="font-bold text-lg">Total</span>
            <span className="font-bold text-lg">{`$${totalPrice.toFixed(2)}`}</span>
          </div>
          <button onClick={handleCheckout} className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 w-full">Checkout</button>
        </div>

        {/* Checkout Summary */}
        {showCheckout && (
          <div ref={checkoutRef} className="mt-8 bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Checkout Summary</h2>
            <ul className="space-y-4">
              {cart.map((item, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{item.product.name}</span>
                  <span>{item.product.discountedPrice ? `$${item.product.discountedPrice.toFixed(2)}` : `$${item.product.price.toFixed(2)}`}</span>
                  <span className="ml-2 text-gray-500">x {item.quantity}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center mt-4">
              <span className="font-bold text-lg">Total</span>
              <span className="font-bold text-lg">{`$${totalPrice.toFixed(2)}`}</span>
            </div>
            <p className="mt-4 text-gray-700">Thank you for your purchase! We will process your order soon.</p>
          </div>
        )}
      </div>

      {/* Shipping Rates Form */}
      <div className="min-h-screen text-black bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Shipping Rates Calculator</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* To Address Section */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Ship To Address</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Name" value={shipeToAddress.name} onChange={(e) => setshipeToAddress({ ...shipeToAddress, name: e.target.value })} className="p-2 border border-gray-300 rounded-md" required />
                <input type="text" placeholder="Phone" value={shipeToAddress.phone} onChange={(e) => setshipeToAddress({ ...shipeToAddress, phone: e.target.value })} className="p-2 border border-gray-300 rounded-md" required />
                <input type="text" placeholder="Address Line 1" value={shipeToAddress.addressLine1} onChange={(e) => setshipeToAddress({ ...shipeToAddress, addressLine1: e.target.value })} className="p-2 border border-gray-300 rounded-md" required />
                <input type="text" placeholder="Address Line 2" value={shipeToAddress.addressLine2} onChange={(e) => setshipeToAddress({ ...shipeToAddress, addressLine2: e.target.value })} className="p-2 border border-gray-300 rounded-md" />
                <input type="text" placeholder="City" value={shipeToAddress.cityLocality} onChange={(e) => setshipeToAddress({ ...shipeToAddress, cityLocality: e.target.value })} className="p-2 border border-gray-300 rounded-md" required />
                <input type="text" placeholder="State" value={shipeToAddress.stateProvince} onChange={(e) => setshipeToAddress({ ...shipeToAddress, stateProvince: e.target.value })} className="p-2 border border-gray-300 rounded-md" required />
                <input type="text" placeholder="Postal Code" value={shipeToAddress.postalCode} onChange={(e) => setshipeToAddress({ ...shipeToAddress, postalCode: e.target.value })} className="p-2 border border-gray-300 rounded-md" required />
                <input type="text" placeholder="Country Code" value={shipeToAddress.countryCode} onChange={(e) => setshipeToAddress({ ...shipeToAddress, countryCode: e.target.value })} className="p-2 border border-gray-300 rounded-md" required />
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">
              {loading ? "Loading..." : "Get Shipping Rates"}
            </button>
          </form>

          {/* Errors */}
          {errors.length > 0 && (
            <div className="mt-6 bg-red-200 p-4 text-red-800 rounded-md">
              {errors.map((error, index) => (
                <p key={index}>{error}</p>
              ))}
            </div>
          )}

          {/* Shipping Rates */}
          {rates.length > 0 && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800">Available Shipping Rates</h3>
              <ul className="mt-4">
                {rates.map((rate) => (
                  <li key={rate.rateId} className="flex justify-between items-center border-b py-2">
                    <span>{rate.serviceCode}</span>
                    <span>{`$${rate.shippingAmount}`}</span>
                    <button
                      onClick={() => setRateId(rate.rateId)} // Fixed state update
                      className="bg-blue-600 text-white py-1 px-3 rounded-md hover:bg-blue-700"
                    >
                      Select
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default ShopNow;
