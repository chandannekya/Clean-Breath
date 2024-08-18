import React from "react";
import Blogform from "../Component/BlogCom/Blogform";
const CreateBlog = () => {
  return (
    <div className=" m-auto  mt-6 lg:w-[70%] ">
      <h1 className="text-4xl text-black/80 ml-5 poppins-bold ">
        What's in Your Mind !!
      </h1>
      <Blogform />
    </div>
  );
};

export default CreateBlog;
