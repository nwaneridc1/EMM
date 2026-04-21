import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { assets, blogs } from "../asset/assets";
import Newsletter from "./Newsletter";
import Footer from "../Components/Footer";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
// import RelatedBlogs from "./RelatedBlogs";
import { FaEye, FaHeart, FaRegHeart, FaShare } from "react-icons/fa";
import toast from "react-hot-toast";
import RelatedBlogs from "../Components/RelatedBlogs";

const PostDetails = () => {
  const { id } = useParams();

  const [menuOpen, setMenuOpen] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const navigate = useNavigate();

  // ✅ FIXED ID MATCHING
  const blog = blogs.find((b) => String(b.id) === String(id));

  const postKey = `blog_${id}`;

  /* =======================
     Likes & Views
  ======================== */
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [views, setViews] = useState(0);

  useEffect(() => {
    if (!id) return;

    const stored = JSON.parse(localStorage.getItem(postKey)) || {
      likes: 0,
      liked: false,
      views: 0,
    };

    const viewedKey = `${postKey}_viewed`;

    // ✅ Count view once per session
    if (!sessionStorage.getItem(viewedKey)) {
      stored.views += 1;
      sessionStorage.setItem(viewedKey, "true");
      localStorage.setItem(postKey, JSON.stringify(stored));
    }

    setLiked(stored.liked);
    setLikesCount(stored.likes);
    setViews(stored.views);
  }, [id]);

  const toggleLike = () => {
    const stored = JSON.parse(localStorage.getItem(postKey)) || {
      likes: 0,
      liked: false,
      views,
    };

    if (stored.liked) {
      stored.likes -= 1;
      toast("Removed Like", { icon: "♡" });
    } else {
      stored.likes += 1;
      toast("Liked Post", { icon: "♥" });
    }

    stored.liked = !stored.liked;
    localStorage.setItem(postKey, JSON.stringify(stored));

    setLiked(stored.liked);
    setLikesCount(stored.likes);
  };

  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      await navigator.share({
        title: blog.title,
        url,
      });
    } else {
      await navigator.clipboard.writeText(url);
      toast("Link copied!");
    }
  };

  /* =======================
     Gallery Modal
  ======================== */
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index = 0) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const prevImage = () =>
    setSelectedIndex((i) => (i === 0 ? blog.image.length - 1 : i - 1));

  const nextImage = () =>
    setSelectedIndex((i) => (i === blog.image.length - 1 ? 0 : i + 1));

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-gray-500">
        This post does not exist.
      </div>
    );
  }
  console.log(blog);

  return (
    <article>
      <section className="relative h-screen">
        {/* NAVBAR */}
        <nav className="absolute top-0 left-0 w-full flex justify-center z-50 px-4 py-4">
          <div className="flex items-center w-full max-w-4xl justify-between border border-slate-700 px-4 py-2.5 rounded-full text-white backdrop-blur bg-black/30">
            {/* LOGO */}
            <div onClick={() => navigate("/")} className="cursor-pointer">
              <img src={assets.logo} alt="logo" className="w-10" />
            </div>

            {/* NAV LINKS */}
            <div
              className={`max-md:absolute max-md:bg-black/90 max-md:top-0 transition-all duration-300 
    max-md:h-full max-md:w-full max-md:z-10 flex flex-col md:flex-row items-center gap-5 md:gap-4 pt-28 md:pt-0
    ${menuOpen ? "max-md:left-0" : "max-md:-left-full"}`}
            >
              <button
                onClick={() => {
                  navigate("/");
                  setMenuOpen(false);
                }}
                className="px-4 py-2"
              >
                Home
              </button>

              <button
                onClick={() => {
                  navigate("/about");
                  setMenuOpen(false);
                }}
                className="px-4 py-2"
              >
                About Us
              </button>

              <button
                onClick={() => {
                  navigate("/blogs");
                  setMenuOpen(false);
                }}
                className="px-4 py-2 border border-white/10 font-medium rounded-full"
              >
                Blogs
              </button>

              <button
                onClick={() => {
                  navigate("/services");
                  setMenuOpen(false);
                }}
                className="px-4 py-2"
              >
                Our Services
              </button>

              <button
                onClick={() => {
                  navigate("/testimonials");
                  setMenuOpen(false);
                }}
                className="px-4 py-2"
              >
                Testimonials
              </button>

              {/* CLOSE BUTTON */}
              <button onClick={() => setMenuOpen(false)} className="md:hidden">
                <img src={assets.cross_icon} alt="close" className="w-5" />
              </button>
            </div>

            {/* OPEN BUTTON */}
            <button onClick={() => setMenuOpen(true)} className="md:hidden">
              <img src={assets.menu_icon} alt="menu" className="w-8" />
            </button>

            {/* CTA */}
            <button
              onClick={() => navigate("/contact")}
              className="hidden md:block bg-gradient-to-r from-indigo-600 to-[#8A7DFF] px-4 py-2 rounded-full"
            >
              Contact Us
            </button>
          </div>
        </nav>

        {/* BACKGROUND IMAGE */}
        <motion.img
          src={blog.image[0]}
          alt={blog.title}
          className="absolute w-full h-full object-cover z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* HERO CONTENT */}
        <div className="relative z-20 flex items-center h-full px-10">
          <div className=" max-w-5xl md:px-20 text-white">
            <p className="uppercase text-sm tracking-widest mb-3">
              {blog.category}
            </p>
            <h1 className="text-4xl font-bold">{blog.title}</h1>
            <p className="mt-4 text-sm">
              {blog.author} • {blog.date}
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mt-16 pb-16  max-w-5xl mx-auto max-md:px-4">
        <section className="flex flex-col md:flex-row gap-10 max-md:px-4">
          <div className="text-sm text-slate-600 max-w-lg">
            <h1 className="text-xl uppercase font-semibold text-slate-700">
              {blog.description}
            </h1>
            <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"></div>
            <p className="mt-8">{blog.excerpt}</p>

            {readMore && (
              <div>
                <p className="mt-4">{blog.continuation}</p>
                <h1 className="text-xl mt-8 uppercase font-semibold text-slate-700">
                  In conclusion,
                </h1>
                <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"></div>
                <p className="mt-4">{blog.conclusion}</p>
              </div>
            )}
            <button
              onClick={() => setReadMore(!readMore)}
              className="group relative flex items-center w-max gap-2 mt-8 hover:-translate-y-0.5 transition bg-gradient-to-r from-indigo-600 to-[#8A7DFF] py-3 px-8 rounded-full text-white"
            >
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
                  fill="#fff"
                />
              </svg>
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                {readMore ? "Show Less" : "Learn More"}
              </span>
            </button>
          </div>
          <div className="relative rounded-2xl overflow-hidden shrink-0">
            <img
              className="max-w-md w-[80vh] max-h-[80vh] object-cover rounded-2xl"
              src={blog.image[1]}
              alt=""
            />
            {/* <div className="flex items-center gap-1 max-w-72 absolute bottom-8 left-8 bg-white p-4 rounded-xl">
              <div className="flex -space-x-4 shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                  alt="image"
                  className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-1"
                />
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                  alt="image"
                  className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[2]"
                />
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
                  alt="image"
                  className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[3]"
                />
                <div className="flex items-center justify-center text-xs  text-white size-9 rounded-full border-[3px] border-white bg-indigo-600 hover:-translate-y-1 transition z-[4]">
                  180+
                </div>
              </div>
              <p className="text-sm font-medium text-slate-800">
                Satisfied clients (worldwide)
              </p>
            </div> */}
          </div>
        </section>

        {/* GALLERY BUTTON */}
        <div className="text-center mt-10">
          <button
            onClick={() => openModal(0)}
            className="border px-6 py-3 rounded-full hover:bg-gradient-to-r from-indigo-600 to-[#8A7DFF] hover:text-white hover:-translate-y-0.5 transition"
          >
            View Gallery
          </button>
        </div>

        {/* LIKE / VIEW / SHARE */}
        <div className="flex justify-center gap-6 mt-12 text-gray-700">
          {/* LIKE */}
          <button
            onClick={toggleLike}
            className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100"
          >
            {liked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
            {likesCount}
          </button>

          {/* VIEWS */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100">
            <FaEye />
            {views}
          </div>

          {/* SHARE */}
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100"
          >
            <FaShare />
            Share
          </button>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white"
            >
              Close
            </button>

            <button
              onClick={prevImage}
              className="absolute left-6 text-white text-2xl"
            >
              ‹
            </button>

            <motion.img
              key={selectedIndex}
              src={blog.image[selectedIndex]}
              className="max-h-[80vh]"
            />

            <button
              onClick={nextImage}
              className="absolute right-6 text-white text-2xl"
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div>
        <RelatedBlogs category={blog.category} currentId={blog.id} />

      </div>
      <Newsletter />
    </article>
  );
};

export default PostDetails;
