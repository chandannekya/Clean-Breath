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

  const config = useMemo(() => ({
    readonly: false,
    height: 300,
    toolbarButtonSize: "small",
    toolbarAdaptive: true,
    toolbarSticky: false,
    buttons: [
      "bold", "italic", "underline", "|",
      "ul", "ol", "outdent", "indent", "|",
      "fontsize", "brush", "paragraph", "|",
      "image", "file", "link", "|",
      "align", "undo", "redo", "hr", "table", "|",
      "fullsize"
    ]
  }), []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!heading.trim() || !content.trim()) return;

    dispatch(createBlog(heading, content, navigate));
    setContent("");
    setHeading("");
  };

  const onClear = () => {
    setHeading("");
    setContent("");
  };

  return (
    <div className="m-8">
      <form className="flex flex-col gap-5 poppins-regular" onSubmit={onSubmit}>
        <label>
          <p className="mb-1">Enter Title :</p>
          <input
            className="input-shadow w-full rounded-md h-[50px] border-2 border-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 p-2"
            type="text"
            placeholder="Blog title..."
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
          />
        </label>

        <label>
          <p className="mb-1">Enter Description :</p>
          <div className="border-2 border-green-700 rounded-md input-shadow p-1">
            <JoditEditor
              ref={editor}
              value={content}
              config={config}
              tabIndex={1}
              onBlur={(newContent) => setContent(newContent)}
              onChange={(newContent) => setContent(newContent)}
            />
          </div>
        </label>

        <div className="flex gap-4 items-center justify-center mt-2">
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-md shadow hover:bg-green-700 transition"
          >
            Create
          </button>
          <button
            type="button"
            onClick={onClear}
            className="bg-red-700 text-white px-4 py-2 rounded-md shadow hover:bg-red-800 transition"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default Blogform;