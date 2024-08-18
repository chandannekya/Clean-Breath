import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import { createBlog } from "../../service/oprations/BlogApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const Blogform = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [heading, setHeading] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createBlog(heading, content, navigate));

    setContent("");
    setHeading("");
  };

  return (
    <div className="m-8">
      <form className="flex flex-col gap-5 poppins-regular" onSubmit={onSubmit}>
        <label>
          <p className="">Enter Title :</p>
          <input
            className="input-shadow w-full rounded-md h-[50px] border-2 focus:outline-2 focus:outline focus:outline-green-700 p-2"
            type="text"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
          />
        </label>

        <label className="">
          <p>Enter Description :</p>
          <JoditEditor
            ref={editor}
            value={content}
            className="input-shadow w-full rounded-md h-[200px] border-2 p-2"
            // config={config}
            tabIndex={1} // tabIndex of textarea
            onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={(newContent) => {
              setContent(newContent);
            }}
          />
        </label>

        <div className="flex  gap-4 items-center justify-center">
          <button
            type="sumbit"
            className=" bg-green-200 w-fit  p-2 rounded-md input-shadow"
          >
            Create
          </button>
          <button className=" bg-red-950/75 w-fit  p-2 rounded-md input-shadow">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default Blogform;
