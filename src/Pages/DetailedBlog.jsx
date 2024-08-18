import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlog } from "../service/oprations/BlogApi"; // Adjust path as necessary
import Loader from "../Component/Loader";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { setBlogdel } from "../slices/BlogsData";
const DetailedBlog = () => {
  const { id } = useParams();

  const [blog, setblog] = useState({});
  const loading = useSelector((state) => state.blog.loading);
  const blogs = useSelector((state) => state.blog.blogs);
  const blogdel = useSelector((state) => {
    state.blog.blogdel;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    // Implement this function in BlogApi

    const fetchBlog = () => {
      const foundBlog = blogs.find((blog) => blog._id === id);
      dispatch(setBlogdel(foundBlog));
      console.log(blogdel);
      setblog(foundBlog);
    };
    fetchBlog();
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center">
        {" "}
        <Loader />
      </div>
    );
  if (!blog) return <p className="text-center">Blog not found.</p>;

  return (
    <div>
      <div className="bg-black/85  text-white flex w-fit p-2 m-6  rounded-full">
        <Link className=" rounded-full " to="/blogs">
          <IoMdArrowRoundBack />{" "}
        </Link>
      </div>
      <div className="m-auto mt-8 w-[80%] ">
        <h1 className="text-5xl poppins-bold">{blog.title}</h1>
        <p className="mt-4 text-sm poppins-regular text-gray-500">
          by {blog.user?.username || "Unknown Author"}
        </p>
        <div className=" bg-gray-500/50 my-4 h-[1px]"></div>
        <div
          className="mt-4 poppins-regular"
          dangerouslySetInnerHTML={{ __html: blog.body }}
        />
      </div>
    </div>
  );
};

export default DetailedBlog;
