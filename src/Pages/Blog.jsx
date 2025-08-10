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

  // Keep current page in Redux state instead of component state
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
    <div className="min-h-screen bg-[#f7fff9]">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold text-green-800 uppercase tracking-wider">Green Insights</h1>
          <Link
            to="/write-blog"
            className="flex items-center gap-3 text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-lg"
          >
            <FaPenToSquare />
            <span>Write Blog</span>
          </Link>
        </div>

        {/* if blogs === null (initial state when data is not fetched) => show the loading skeleton */}
        {blogs === null ?
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(10)].map((index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
                <div className="w-full h-48 bg-gray-300" />

                <div className="p-4 flex flex-col justify-between h-[230px]">
                  <div>
                    <div className="h-6 bg-gray-300 rounded w-3/4 mb-2" />
                    <div className="h-4 bg-gray-300 rounded w-full mb-1" />
                    <div className="h-4 bg-gray-300 rounded w-5/6 mb-1" />
                    <div className="h-4 bg-gray-300 rounded w-4/6" />
                  </div>
                  <div className="mt-4 flex justify-between text-xs text-gray-500">
                    <div className="h-4 bg-gray-300 rounded w-24" />
                    <div className="h-4 bg-gray-300 rounded w-16" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          :
          blogs.length === 0 ? (
            <p className="text-center text-lg text-gray-600 font-semibold">No blogs found.</p>
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

              {/* Pagination */}
              <div className="flex justify-center items-center gap-6 mt-10">
                <button
                  onClick={handlePrev}
                  disabled={!pagination.hasPrevPage}
                  className="px-4 py-2 bg-green-200 text-green-800 rounded-md disabled:opacity-50"
                >
                  Prev
                </button>
                <span className="font-semibold text-gray-700">
                  Page {pagination.currentPage} of {pagination.totalPages}
                </span>
                <button
                  onClick={handleNext}
                  disabled={!pagination.hasNextPage}
                  className="px-4 py-2 bg-green-200 text-green-800 rounded-md disabled:opacity-50"
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
