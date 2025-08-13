import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../service/oprations/BlogApi";
import Loader from "../Component/Loader";
import BlogCard from "../Component/BlogCom/BlogCard";
import { FaPenToSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Blog = () => {
  const dispatch = useDispatch();
  const { blogs = null, pagination = {}, loading } = useSelector((state) => state.blog);

  const currentPage = pagination.currentPage || 1;

  useEffect(() => {
    dispatch(getAllBlogs(currentPage));
  }, [dispatch, currentPage]);

  const handlePrev = () => {
    if (pagination.hasPrevPage) {
      dispatch(getAllBlogs(currentPage - 1));
    }
  };

  const handleNext = () => {
    if (pagination.hasNextPage) {
      dispatch(getAllBlogs(currentPage + 1));
    }
  };

  return loading ? (
    <Loader />
  ) : (
    // Main container background and text color for dark mode
    <div className="min-h-screen bg-[#f7fff9] dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-10">
          {/* Heading color for dark mode */}
          <h1 className="text-4xl font-bold text-green-800 uppercase tracking-wider dark:text-green-400">Green Insights</h1>
          <Link
            to="/write-blog"
            // Button colors for dark mode
            className="flex items-center gap-3 text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-lg transition-colors duration-200 dark:bg-green-700 dark:hover:bg-green-600"
          >
            <FaPenToSquare />
            <span>Write Blog</span>
          </Link>
        </div>

        {/* Loading skeleton dark mode styling */}
        {blogs === null ?
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(10)].map((_, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse dark:bg-gray-800 dark:shadow-lg">
                <div className="w-full h-48 bg-gray-300 dark:bg-gray-700" />
                <div className="p-4 flex flex-col justify-between h-[230px]">
                  <div>
                    <div className="h-6 bg-gray-300 rounded w-3/4 mb-2 dark:bg-gray-700" />
                    <div className="h-4 bg-gray-300 rounded w-full mb-1 dark:bg-gray-700" />
                    <div className="h-4 bg-gray-300 rounded w-5/6 mb-1 dark:bg-gray-700" />
                    <div className="h-4 bg-gray-300 rounded w-4/6 dark:bg-gray-700" />
                  </div>
                  <div className="mt-4 flex justify-between text-xs text-gray-500 dark:text-gray-400">
                    <div className="h-4 bg-gray-300 rounded w-24 dark:bg-gray-700" />
                    <div className="h-4 bg-gray-300 rounded w-16 dark:bg-gray-700" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          :
          blogs.length === 0 ? (
            // No blogs found text color for dark mode
            <p className="text-center text-lg text-gray-600 font-semibold dark:text-gray-400">No blogs found.</p>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                  <BlogCard
                    key={blog._id}
                    id={blog._id}
                    title={blog.title}
                    description={blog.description}
                    author={blog.author}
                    createdAt={blog.createdAt}
                    coverImg={blog.coverImg}
                  />
                ))}
              </div>

              {/* Pagination dark mode styling */}
              <div className="flex justify-center items-center gap-6 mt-10">
                <button
                  onClick={handlePrev}
                  disabled={!pagination.hasPrevPage}
                  className="px-4 py-2 bg-green-200 text-green-800 rounded-md disabled:opacity-50 transition-colors duration-200 dark:bg-green-700 dark:text-green-200 disabled:dark:bg-green-700/50"
                >
                  Prev
                </button>
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  Page {pagination.currentPage} of {pagination.totalPages}
                </span>
                <button
                  onClick={handleNext}
                  disabled={!pagination.hasNextPage}
                  className="px-4 py-2 bg-green-200 text-green-800 rounded-md disabled:opacity-50 transition-colors duration-200 dark:bg-green-700 dark:text-green-200 disabled:dark:bg-green-700/50"
                >
                  Next
                </button>
              </div>
            </>
          )}
      </div>
    </div>
  );
};

export default Blog;