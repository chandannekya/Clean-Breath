import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../../service/oprations/BlogApi";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const BlogCard = ({ id, title, description, author, createdAt, coverImg, likeCount: initialLikeCount, hasLiked: initialHasLiked }) => {
  const dispatch = useDispatch();
  const [isLiking, setIsLiking] = useState(false);
  const [likeCount, setLikeCount] = useState(initialLikeCount || 0);
  const [hasLiked, setHasLiked] = useState(initialHasLiked || false);
  const { token } = useSelector((state) => state.auth);

  const handleLike = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!token) {
      // Optionally redirect to login or show a login prompt
      return;
    }

    const newHasLiked = !hasLiked; // Moved outside try block to be available in catch
    
    try {
      setIsLiking(true);
      const newLikeCount = newHasLiked ? likeCount + 1 : Math.max(0, likeCount - 1);
      
      // Optimistic UI update
      setHasLiked(newHasLiked);
      setLikeCount(newLikeCount);
      
      // Call the API
      await dispatch(toggleLike(id));
    } catch (error) {
      // Revert on error
      setHasLiked(!newHasLiked);
      setLikeCount(likeCount);
      console.error("Error toggling like:", error);
    } finally {
      setIsLiking(false);
    }
  };
  const formattedDate = new Date(createdAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <Link
      to={`/blogs/${id}`}
      // Updated card styling for dark mode
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 dark:bg-gray-800 dark:shadow-none dark:hover:shadow-lg dark:hover:shadow-green-900/50"
    >
      <img
        src={coverImg}
        alt="Blog Cover"
        className="w-full h-48 object-cover"
      />

      <div className="p-4 flex flex-col justify-between h-[230px]">
        <div>
          {/* Title color for dark mode */}
          <h2 className="text-xl font-semibold text-gray-800 line-clamp-2 dark:text-gray-100">
            {title}
          </h2>
          {/* Description color for dark mode */}
          <p className="text-sm text-gray-600 mt-2 line-clamp-3 dark:text-gray-400">
            {description}
          </p>
        </div>
        <div className="mt-4 flex justify-between items-center text-xs text-gray-500 dark:text-gray-500">
          <div className="flex items-center">
            <button 
              onClick={handleLike}
              disabled={isLiking}
              className={`flex items-center mr-2 ${hasLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'} transition-colors`}
              aria-label={hasLiked ? 'Unlike this post' : 'Like this post'}
            >
              {hasLiked ? (
                <FaHeart className="mr-1" />
              ) : (
                <FaRegHeart className="mr-1" />
              )}
              <span className="ml-1">{likeCount}</span>
            </button>
            <span>
              by{" "}
              <span className="font-medium dark:text-gray-300">
                {author?.username || "Unknown"}
              </span>
            </span>
          </div>
          <span>{formattedDate}</span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
