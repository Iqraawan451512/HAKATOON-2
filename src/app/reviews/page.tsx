"use client"
import React, { useState, useEffect } from "react";
import Header_1 from "../component/header-1";
import Header from "../component/header-2";

const CommentSection_1 = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  // Fetch comments from local storage when the component mounts
  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  // Handle comment submit
  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      localStorage.setItem("comments", JSON.stringify(updatedComments));
      setNewComment(""); // Clear input field after posting
    }
  };

  return (
    <main className="relative">
      <Header_1 />
      <Header />
      <img src="https://plus.unsplash.com/premium_photo-1684785618727-378a3a5e91c5?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" className="absolute  w-full h-full" />

      <div className=" relative">
      <p className="text-lg  mt-[5rem] mb-[5rem] text-center text-white lg:ml-[18rem]  w-[50rem] ">
          We value your feedback! Share your thoughts about our service, products, or experience below. 
          Your opinion matters and helps us improve!
        </p>
      <div className="max-w-[32rem]  mx-auto p-6 bg-blue-950 opacity-4 rounded-xl shadow-xl shadow-slate-200">
        {/* Title and Intro */}
        
        <h2 className="text-3xl font-bold text-center mb-6  opacity-4 text-black">Reviews</h2>
        
        
        {/* Display Comments */}
        <div className="space-y-5">
          {comments.length === 0 ? (
            <p className="text-gray-800 text-center">No comments yet. Be the first to share your thoughts!</p>
          ) : (
            comments.map((comment, index) => (
              <div
                key={index}
                className="p-5  bg-blue-300 border-[0.5px] rounded-lg shadow-md hover:shadow-lg hover:bg-[#f5f5f5] transition-all duration-300"
              >
                <p className="text-[#cacecf] hover:text-gray-950  ">{comment}</p>
              </div>
            ))
          )}
        </div>

        {/* Comment Input Area */}
        <div className="mt-8">
          <textarea
            className="w-full sm:w-[28rem]  bg-blue-300 p-4 border-gray-800  text-gray-100 shadow-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800 transition-all"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            rows={4}
          ></textarea>

          <button
            onClick={handleCommentSubmit}
            className="mt-4 w-full sm:w-[28rem] px-6 py-2 bg-slate-600 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Post Comment
          </button>
        </div>

        {/* Thank You Section */}
        
      </div>
      <div className="mt-8 text-center">
          <p className="text-lg text-white font-sans font-semibold">
            Thank you for taking the time to leave a comment. We truly appreciate your input and look forward to hearing more from you!
          </p>
        </div>
        </div>
    </main>
  );
};

export default CommentSection_1;
