"use client";
import React, { useState } from "react";

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([
    {
      name: "malik Shahzain",
      rating: 4,
      comment: "Great product! Really satisfied with the quality.",
    },
    {
      name: "Zara khan",
      rating: 5,
      comment: "Excellent! Worth every penny.",
    },
  ]);

  const [newReview, setNewReview] = useState({
    name: "",
    rating: 1,
    comment: "",
  });

  // ✅ Correctly typed function
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newReview.name && newReview.comment) {
      setReviews([...reviews, newReview]);
      setNewReview({ name: "", rating: 1, comment: "" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-400 via-indigo-100 to-slate-200 p-10">
      <div className="container mx-auto bg-white shadow-xl rounded-lg p-8 mb-10 max-w-4xl bg-opacity-80 backdrop-blur-md">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 hover:text-cyan-800">
          Customer Reviews
        </h1>

        {/* Review Form */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-medium mb-4 text-gray-700">
            Leave a Review
          </h2>
          <p className="text-center text-gray-600 text-lg mb-8">
            Your feedback is very important to us! Help others by sharing your
            experience.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Your name"
                value={newReview.name}
                onChange={(e) =>
                  setNewReview({ ...newReview, name: e.target.value })
                }
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="rating">
                Rating
              </label>
              <select
                id="rating"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={newReview.rating}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setNewReview({ ...newReview, rating: Number(e.target.value) })
                }
              >
                <option value="1">1 - Poor</option>
                <option value="2">2 - Fair</option>
                <option value="3">3 - Good</option>
                <option value="4">4 - Very Good</option>
                <option value="5">5 - Excellent</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="comment">
                Comment
              </label>
              <textarea
                id="comment"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Your comments"
                value={newReview.comment}
                onChange={(e) =>
                  setNewReview({ ...newReview, comment: e.target.value })
                }
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full p-3 bg-teal-700 text-white rounded-md hover:bg-blue-950 transition-colors"
            >
              Submit Review
            </button>
          </form>
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="font-semibold text-lg text-gray-800">
                {review.name}
              </h3>
              <p className="text-yellow-500">
                {"★".repeat(review.rating)} {"☆".repeat(5 - review.rating)}
              </p>
              <p className="text-gray-700 mt-2">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
