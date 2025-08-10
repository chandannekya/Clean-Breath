import React from "react";
import Blogform from "../Component/BlogCom/Blogform";
const CreateBlog = () => {
  return (
    // The main container inherits its background color from App.jsx,
    // so we only need to update the text within this component.
    <div className="m-auto mt-6 lg:w-[70%]">
      {/* Heading text color for dark mode */}
      <h1 className="text-4xl text-black/80 ml-5 poppins-bold dark:text-gray-200">
        What's in Your Mind !!
      </h1>
      <Blogform />
    </div>
  );
};

export default CreateBlog;