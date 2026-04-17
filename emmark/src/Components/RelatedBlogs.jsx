import React, { useEffect, useState } from "react";
import { blogs } from "../asset/assets";
import PostCard from "./PostCard";

const RelatedBlogs = ({ category, currentId }) => {
   const [related, setRelated] = useState([]);

  useEffect(() => {
    let filtered = blogs.filter(
      (blog) =>
        blog.category === category && blog._id !== currentId
    );

    setRelated(filtered.slice(0, 3));
  }, [category, currentId]);

  if (related.length === 0) return null;

  if (!related) {
    return (
      <div className="min-h-screen flex items-center justify-center font-serif text-xl text-gray-500">
        No related stories.
      </div>
    );
  }

  return (
    <div className="pt-5 pb-16 px-4 flex flex-col max-md:px-4 max-w-5xl mx-auto">
      <section>
        <div className="text-sm text-slate-600 max-w-lg pb-6">
         <h1 className="text-xl uppercase font-semibold text-slate-700">
            Related Posts
          </h1>
          <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"></div>
          <p className="mt-3">
           Fresh perspectives on the ideas and innovations driving the digital world.
          </p>
        </div>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
        {related.map((blog) => (
          <div key={blog.id}>
            <PostCard
              id={blog.id}
              category={blog.category}
              conclusion={blog.conclusion}
              image={blog.image}
              title={blog.title}
              author={blog.author}
              date={blog.date}
              excerpt={blog.excerpt}
              featured={blog.featured}
            />
          </div>
        ))}
        </div>
      </section>
    </div>
  );
};

export default RelatedBlogs;