import React, { useState, useRef, useMemo } from "react";
import Loader from "../Loader";
import JoditEditor from "jodit-react";
import { createBlog } from "../../service/oprations/BlogApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Blogform = () => {
  const editor = useRef(null);
  const fileInputRef = useRef(null);

  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [coverImg, setCoverImg] = useState(null);
  const [preview, setPreview] = useState("https://placehold.co/1920x1080");

  const [isCreatingBlog, setIsCreatingBlog] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const config = useMemo(() => ({
    readonly: false,
    height: 500,
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setCoverImg(file);
    setPreview(URL.createObjectURL(file));
  };

  const triggerFileSelect = () => {
    fileInputRef.current.click();
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!heading.trim() || !content.trim()) return;

    dispatch(createBlog(heading, description, content, coverImg,setIsCreatingBlog, navigate));
    // ------------------page is going to redirect so there is no need to clear the form------------------
    // setHeading("");
    // setDescription("");
    // setContent("");
    // setCoverImg(null);
    // setPreview(null);
  };

  const onClear = () => {
    setHeading("");
    setDescription("");
    setContent("");
    setCoverImg(null);
    setPreview("https://placehold.co/1920x1080");
  };

  return (
    <div className="m-4 mx-auto max-w-4xl px-4 md:px-8">
      <form className="flex flex-col gap-6 poppins-regular" onSubmit={onSubmit}>

        {/* Cover Image Upload */}
        <div className="relative w-full overflow-hidden rounded-2xl border-2 border-green-700 input-shadow cursor-pointer">
          <div onClick={triggerFileSelect} className="w-full bg-gray-100 flex items-center justify-center">
            {preview ? (
              <img src={preview} alt="Cover Preview" className="w-full h-92 object-cover" />
            ) : (
              <span className="text-gray-400 text-lg py-12">Click to upload blog banner</span>
            )}
          </div>
          <input
            type="file"
            accept=".jpg, .jpeg, .png"
            ref={fileInputRef}
            onChange={handleImageChange}
            className="hidden"
          />
        </div>

        {/* Title Input */}
        <input
          className="text-3xl font-semibold text-gray-800 w-full border-b-2 border-green-600 outline-none p-2 placeholder:text-gray-400"
          type="text"
          placeholder="Your blog title here..."
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
        />

        {/* Description Input */}
        <textarea
          className="w-full h-28 resize-none border-2 border-green-600 rounded-md p-3 text-gray-700 placeholder:text-gray-500 focus:outline-none"
          placeholder="Short description about the blog..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* Jodit Editor for Content */}
        <label>
          <p className="mb-2 text-lg font-medium text-gray-700">Write your story:</p>
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

        {/* Buttons */}
        <div className="flex gap-4 items-center justify-end mt-4">
          <button
            type="button"
            onClick={onClear}
            className="bg-red-600 text-white px-5 py-2 rounded-md shadow hover:bg-red-700 transition"
          >
            Clear
          </button>
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-md shadow hover:bg-green-700 transition"
          >
            Publish
          </button>
        </div>
      </form>

      {/* Loader Overlay */}
      {isCreatingBlog && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 z-10 justify-center items-center flex">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Blogform;
