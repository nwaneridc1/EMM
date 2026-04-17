import React from "react";
import { blogs } from "../asset/assets";
import PostCard from "./PostCard";

const FeaturedPosts = () => {
  // ✅ filter featured posts (optional)
  const featuredBlogs = blogs.filter((blog) => blog.featured === true);

  return (
    <div>
      {/* ///Next Section starts here */}
      <div className="py-16 px-4 flex flex-col max-md:px-4 max-w-5xl mx-auto">
        <div className="text-sm text-slate-600 max-w-lg pb-6">
          <h1 className="text-xl uppercase font-semibold text-slate-700">
            Featured Posts
          </h1>
          <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"></div>
          <p className="mt-3">
           Fresh perspectives on the ideas and innovations driving the digital world.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
          {featuredBlogs.map((blog) => (
            <div key={blog.id}>
              <PostCard
                id={blog.id} // ✅ FIXED
                image={blog.image}
  imageClass="h-[100vh]"
                title={blog.title}
                date={blog.date}
                description={blog.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
