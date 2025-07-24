import React from "react";
import { Link } from "react-router-dom";

// Extract plain text from <p> tags in the HTML body
const extractParagraphsText = (htmlString) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const paragraphs = Array.from(doc.querySelectorAll("p"));
  return paragraphs.map((p) => p.textContent).join("\n");
};

const BlogCard = ({ id, heading, body, author }) => {
  const paragraphText = extractParagraphsText(body);

  return (
    <div className="border border-green-950 m-4 rounded-md p-3 poppins-regular shadow-sm hover:shadow-md transition-shadow">
      <Link to={`/blogs/${id}`}>
        <h1 className="text-lg font-semibold mb-2">{heading}</h1>
        <div className="text-sm whitespace-pre-line text-gray-800">
          {paragraphText.length > 100
            ? paragraphText.slice(0, 100) + "..."
            : paragraphText}
        </div>
        <footer className="text-sm text-gray-500 mt-2">
          <span>by </span>
          <span className="font-medium">{author}</span>
        </footer>
      </Link>
    </div>
  );
};

export default BlogCard;