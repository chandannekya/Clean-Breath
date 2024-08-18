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

  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch]);

  if (loading) return <Loader />;

  return (
    <div className="h-screen">
      <h1 className=" text-black/85 uppercase poppins-bold bg-green-300 text-6xl  text-center p-4">
        Blogs
      </h1>

      <div className=" flex flex-col  items-center">
        <Link
          className=" flex items-center gap-5 text-black/85 mt-6 bg-green-300 p-4 text-3xl rounded-md"
          to="/write-blog"
        >
          <FaPenToSquare /> <h1>write Blog</h1>
        </Link>

        <div className=" w-[80%] mt-4 ">
          {blogs.length === 0 ? (
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
