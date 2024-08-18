import React from "react";
import { Link } from "react-router-dom";
const extractParagraphsText = (htmlString) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const paragraphs = Array.from(doc.querySelectorAll("p"));

  return paragraphs.map((p) => p.textContent).join("\n");
};

const BlogCard = ({ id, heading, body, author }) => {
  const paragraphText = extractParagraphsText(body);

  return (
    <div className=" border-[1px] m-4 border-green-950 rounded-md poppins-regular p-3">
      <Link to={`/blogs/${id}`}>
        <h1 className="text-lg poppins-bold mb-2">{heading}</h1>
        <div className="text-sm whitespace-pre-line">
          {paragraphText.length > 100
            ? paragraphText.slice(0, 100) + "..."
            : paragraphText}
        </div>
        <footer className="text-sm text-gray-500">
          <span>by</span> <p className="inline font-medium">{author}</p>
        </footer>
      </Link>
    </div>
  );
};

export default BlogCard;
