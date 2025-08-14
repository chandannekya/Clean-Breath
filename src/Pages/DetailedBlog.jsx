import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "../service/oprations/BlogApi";
import Loader from "../Component/Loader";
import { IoMdArrowRoundBack } from "react-icons/io";
import moment from "moment";

const DetailedBlog = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.blog.loading);

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await dispatch(getBlog(id));
      if (response?.data?.blog) {
        setBlog(response.data.blog);
      }
    };
    fetchData();
  }, [dispatch, id]);

  if (loading || !blog) {
    return (
      <div className="flex justify-center items-center h-screen dark:bg-gray-900 transition-colors duration-300">
        <Loader />
      </div>
    );
  }

  return (
    // Main container with dark mode text color. Background is handled by App.jsx.
    <div className="pb-10 dark:text-gray-200 transition-colors duration-300">
      {/* Back Button */}
      <div className="bg-black/85 text-white w-fit p-2 m-6 rounded-full hover:bg-black transition-colors duration-300 dark:bg-gray-800 dark:hover:bg-gray-700">
        <Link to="/blogs">
          <IoMdArrowRoundBack size={24} />
        </Link>
      </div>

      {/* Blog Container */}
      <div className="m-auto mt-4 w-[90%] max-w-4xl">
        {/* Title */}
        <h1 className="text-4xl font-bold poppins-bold dark:text-gray-100">{blog.title}</h1>

        {/* Meta */}
        <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          <span>By <span className="font-medium">{blog.author?.username || "Unknown"}</span></span>
          <span className="mx-2">•</span>
          <span>{moment(blog.createdAt).format("MMMM D, YYYY")}</span>
        </div>

        {/* Cover Image */}
        <div className="mt-6">
          <img
            src={blog.coverImg}
            alt="Blog Cover"
            className="w-full h-[300px] object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Description */}
        <p className="mt-6 text-lg text-gray-800 italic dark:text-gray-300">{blog.description}</p>

        {/* Divider */}
        <hr className="my-6 border-gray-300 dark:border-gray-700" />

        {/* Content - Using dark:prose-invert for automatic dark mode styling */}
        <div
          className="prose prose-lg max-w-none poppins-regular dark:prose-invert dark:text-gray-300"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </div>
  );
};

export default DetailedBlog;