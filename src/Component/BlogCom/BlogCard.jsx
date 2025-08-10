import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ id, title, description, author, createdAt, coverImg }) => {
  const formattedDate = new Date(createdAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <Link
      to={`/blogs/${id}`}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      <img
        src={coverImg}
        alt="Blog Cover"
        className="w-full h-48 object-cover"
      />

      <div className="p-4 flex flex-col justify-between h-[230px]">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 line-clamp-2">{title}</h2>
          <p className="text-sm text-gray-600 mt-2 line-clamp-3">{description}</p>
        </div>
        <div className="mt-4 flex justify-between text-xs text-gray-500">
          <span>by <span className="font-medium">{author?.username || "Unknown"}</span></span>
          <span>{formattedDate}</span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
