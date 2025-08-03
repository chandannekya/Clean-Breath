import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../service/oprations/BlogApi"; // Adjust path as necessary
import Loader from "../Component/Loader";
import BlogCard from "../Component/BlogCom/BlogCard"; // Corrected component name
import { FaPenToSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Blog = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.blog.loading); // Adjust according to your state structure
  const blogs = useSelector((state) => state.blog.blogs);
  const token = useSelector((state) => state.auth.token);
  console.log(blogs);
  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : (
    <div className="">
      <h1 className=" text-black/80 uppercase poppins-bold bg-gradient-to-r from-green-400/40 via-green-300/40 to-green-400/40 text-6xl  text-center p-4">
        Green insights
      </h1>

      <div className=" flex flex-col  items-center">
        <Link
          className=" flex items-center gap-5 text-black/85 mt-6 bg-gradient-to-r from-green-400/40 via-green-300/40 to-green-400/40 p-4 text-3xl rounded-md"
          to="/write-blog"
        >
          <FaPenToSquare /> <h1>write Blog</h1>
        </Link>

        <div className=" w-[80%] mt-4 ">
          {!blogs || blogs.length === 0 ? (
            <p className="text-center poppins-bold">No blogs available.</p>
          ) : (
            <div className=" ">
              {blogs.map((blog) => (
                <BlogCard
                  key={blog._id}
                  id={blog._id} // Assuming _id is a unique identifier for each blog
                  heading={blog.title}
                  body={blog.body} // Assuming body is a string
                  author={blog.user?.username || "Unknown Author"} // Use optional chaining and fallback value
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
