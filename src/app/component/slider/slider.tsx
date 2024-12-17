"use client"; // Ensuring client-side rendering

import { useState, useEffect } from "react";

;

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
    <div className="relative w-[30rem] overflow-hidden ml-[10rem] mt-[4rem] h-[22rem]">
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
              className="w-[30rem] h-[30rem] object-cover"
            />
          </div>
        ))}
      </div>

      {/* Left and right navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 text-[2rem] text-white ml-[0.6rem]  "
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[2rem] text-white"
      >
        &gt;
      </button>

     
    </div>
  );
};

export default Slider;
