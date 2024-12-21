"use client"; // Ensuring client-side rendering

import { useState, useEffect } from "react";

const Slider = () => {
  const images = [
    { src: "sofa.jpg" },
    { src: "chair.png" },
    { src: "sofa.jpg" },
    { src: "chair.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change every 3000ms (3 seconds)

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  // Move to the next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Move to the previous image
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full md:w-[30rem] h-[22rem] overflow-hidden mx-auto mt-10">
      {/* Image container */}
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <img
              src={image.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Left and right navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 text-3xl text-white bg-black bg-opacity-50 hover:bg-opacity-75 transition duration-300"
        aria-label="Previous Slide"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-3xl text-white bg-black bg-opacity-50 hover:bg-opacity-75 transition duration-300"
        aria-label="Next Slide"
      >
        &gt;
      </button>
    </div>
  );
};

export default Slider;
