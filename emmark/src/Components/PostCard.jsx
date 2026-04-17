import React from "react";
import { useNavigate } from "react-router-dom";

const PostCard = ({ id, image, title, date, description }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white border border-zinc-200 rounded-lg overflow-hidden transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-lg p-4 flex flex-col items-center">
      <img
        src={image[0]}
        alt={title}
        className="w-full max-w-full max-h-48 object-cover mb-6"
      />

      <div className="w-full max-w-56 flex flex-col h-full">
        <h3 className="text-base font-medium text-slate-900 mb-2">{title}</h3>

        <p className="text-xs text-slate-700 leading-relaxed mb-3">
          {description}
        </p>

        <div className="grid grid-cols-2">
          <div className="text-xs text-slate-700">{date}</div>

          <button
             onClick={()=> {
        navigate(`/post/${id}`)}}
            className="inline-flex items-center gap-1 text-xs cursor-pointer hover:gap-2 group"
          >
            SEE NOW
            <svg
              width="22"
              height="15"
              viewBox="0 0 22 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M4.583 7.5h12.834M11 3.125 17.417 7.5 11 11.875"
                stroke="#314158"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />{" "}
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
