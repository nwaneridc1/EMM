import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../asset/assets";
import { Check } from "lucide-react";
import Banner from "../Components/Banner";
import Faq from "../Components/Faq";
import Newsletter from "./Newsletter";
import PostCard from "../Components/PostCard";
import FeaturedPosts from "../Components/FeaturedPosts"

const Blogs = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const navigate = useNavigate();

  const cards = [
    {
      id: 1,
      image: assets.file1,
      title: "New week, full composure",
      date: "26.05.2025",
      description: "SUccess is not final,and failure is not fatal. It is the courage to continue that counts.",
    },
    {
      id: 2,
      image: assets.file8,
      title: "Welcom to June",
      date: "01.06.2025",
      description: "Technology will never replace great teachers. But technology in the hands of great teachers is transformation",
    },
    {
      id: 3,
      image: assets.file10,
      title: "Earning in tech 2.0",
      date: "12.07.2025",
      description: " Discover earning oppurtunities in: Blockchain technology, web3, Cyber security, Graphics design and more!!",
    },
    {
      id: 4,
      image: assets.file3,
      title: "Tech summer school",
      date: "15.08.2025",
      description: " Catch the young!! This summer, let your kids be part of the summer tech school as an investment into their futures. DISCOUNT FOR SIBLINGS APPLY",
    },
    {
      id: 5,
      image: assets.file2,
      title: "New product alert!",
      date: "13.09.2025",
      description: "'Stock Track' From your shelves to the counters, stocktrack will help you track it all. This application is suitable for business at all levels, and helps in tracking inventory."
    },
    {
      id: 6,
      image: assets.file9,
      title: "Happy Independence Day",
      date: "01.10.2025",
      description: "Freedom is never volutrarily given by the oppressor, but it must be demanded for by the oppressed"
    }
  ];
  ///////////////////Events ////////////////////////////////////
  const events = [
    {
      id: 1,
      image: assets.file4,
      title: "Earning in tech 1.0",
      date: "18.07.2024",
      description:
        "Earning in tech, a pathway to success and financial freedom in 2025.",
      status: "completed",
    },
    {
      id: 2,
      image: assets.file7,
      title: "Earning in tech 2.0",
      date: "28.06.2025",
      description:
        "Earning in tech, a pathway to success and financial freedom in 2025.",
      status: "completed",
    },
    {
      id: 3,
      image: assets.file10,
      title: "Earning in tech 2.0",
      date: "12.07.2025",
      description:
        "Earning in tech, a pathway to success and financial freedom in 2025.",
      status: "completed",
    },
    {
      id: 4,
      image: assets.file3,
      title: "Tech summer school",
      date: "15.08.2025",
      description:
        "Summer school for future worldchangers. Catch them young!!!",
      status: "completed",
    },
    {
      id: 5,
      image:
        "https://assets.prebuiltui.com/images/components/feature-sections/ai-avatar-image4.png",
      title: "NextGen summit",
      date: "Anticipate",
      description:
        "NextGen tech summit, a conference for world changers. Don't miss out.",
      status: "upcoming",
    },
  ];
  return (
    <div>
      <section className="relative flex flex-col items-center max-md:px-2 bg-black text-white text-sm pb-28 pt-8 h-screen bg-[url(https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/bg-gradient-3.svg)] bg-top bg-no-repeat">
        <style>
          {`
                                          @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
                                          *{
                                              font-family: "Poppins", sans-serif;
                                          }
                                          @keyframes rotate {
                                              100% {
                                                  transform: rotate(1turn);
                                              }
                                          }
                                  
                                          .rainbow::before {
                                              filter: blur(12px);
                                              opacity: 0.8;
                                              content: '';
                                              position: absolute;
                                              z-index: -2;
                                              left: -50%;
                                              top: -50%;
                                              width: 200%;
                                              height: 200%;
                                              background-position: 100% 50%;
                                              background-repeat: no-repeat;
                                              background-size: 50% 30%;
                                              filter: blur(6px);
                                              background-image: linear-gradient(#FFF);
                                              animation: rotate 4s linear infinite;
                                          }
                                      `}
        </style>
        {/* NAVBAR */}
       <nav className="flex items-center border mx-4 w-full max-w-4xl justify-between border-slate-700 px-4 py-2.5 rounded-full text-white">

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

    {/* LINKS */}
    <button onClick={() => { navigate("/"); setMenuOpen(false); }} className="px-4 py-2">
      Home
    </button>

    <button onClick={() => { navigate("/about"); setMenuOpen(false); }} className="px-4 py-2">
      About Us
    </button>

    <button
      onClick={() => { navigate("/blogs"); setMenuOpen(false); }}
      className="px-4 py-2 border border-white/10 font-medium rounded-full"
    >
      Blogs
    </button>

    <button onClick={() => { navigate("/services"); setMenuOpen(false); }} className="px-4 py-2">
      Our Services
    </button>

    <button onClick={() => { navigate("/testimonials"); setMenuOpen(false); }} className="px-4 py-2">
      Testimonials
    </button>

    {/* CLOSE BUTTON (MOBILE) */}
    <button onClick={() => setMenuOpen(false)} className="md:hidden">
      <img src={assets.cross_icon} alt="close" className="w-5" />
    </button>
  </div>

  {/* OPEN MENU BUTTON */}
  <button onClick={() => setMenuOpen(true)} className="md:hidden">
    <img src={assets.menu_icon} alt="menu" className="w-8" />
  </button>

  {/* CTA BUTTON */}
  <button
    onClick={() => navigate("/contact")}
    className="hidden md:block bg-gradient-to-r from-indigo-600 to-[#8A7DFF] text-white px-4 py-2 rounded-full"
  >
    Contact Us
  </button>

</nav>

       {/* HERO */}
      <div className="mb-10">
        <div className="rainbow relative z-0 bg-white/10 overflow-hidden p-px flex items-center justify-center rounded-full transition duration-300 active:scale-100 mt-24 md:mt-28">
        <button className="flex items-center justify-center gap-3 pl-4 pr-6 py-4 text-white rounded-full font-medium bg-black/10 backdrop-blur">
          <div className="relative flex size-5 items-center justify-center">
            <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75 animate-ping duration-300"></span>
            <span className="absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75 animate-ping duration-400"></span>
            <span className="relative inline-flex size-3 rounded-full bg-blue-700"></span>
          </div>
          <span className="text-md">Emmark Tech Solutions</span>
        </button>
      </div>
      </div>

     <div>
       <h1 className="text-4xl md:text-6xl text-center font-semibold max-w-4xl mt- font-serif">
        Insights and stories from the brand
      </h1>

     </div>
      {/* <p className="text-slate-300 text-center max-w-2xl mt-3">
       We build digital solutions and nurture talent, helping individuals and businesses grow confidently in tech.
      </p> */}

      <div className="flex gap-7 mt-12">
        <button onClick={() => navigate("/")} className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-[#8A7DFF] hover:bg-blue-700 rounded-full">
          Home
        </button>
        <div className="text-white py-2 text-xl">•</div>
        <button className="px-6 py-2 border rounded-full">Blogs</button>
      </div>
      </section>
      <FeaturedPosts />
      {/* ///Next section starts here */}
      <div className="py-16 px-4 flex flex-col max-md:px-4 max-w-5xl mx-auto">
        <h1 className="text-xl uppercase font-semibold text-slate-700">
          A look into our gallery
        </h1>
        <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"></div>
        <p className="mt-3 font-semibold italic">
          A visual collection of our most recent works - each piece crafted with
          intention, emotion, and style.
        </p>
        <div className="hidden md:flex gap-2 h-[400px] w-full mt-10 mx-auto">
          <div className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
            <img
              className="h-full w-full object-cover object-center"
              src={assets.file1}
              alt="image"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="text-3xl">New week, full composure</h1>
              <p className="text-sm mt-1">
                "SUccess is not final,and failure is not fatal. It is the courage to continue that counts."
              </p>
              <p className="text-sm mt-2">26.05.2025</p>
            </div>
          </div>
          <div className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
            <img
              className="h-full w-full object-cover object-center"
              src={assets.file8}
              alt="image"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="text-3xl">Welcome to June</h1>
              <p className="text-sm mt-1">
               "Technology will never replace great teachers. But technology in the hands of great teachers is transformation"
              </p>
              <p className="text-sm mt-2">01.06.2025</p>
            </div>
          </div>
          <div className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
            <img
              className="h-full w-full object-cover object-center"
              src={assets.file10}
              alt="image"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="text-3xl">Earning in tech 2.0</h1>
              <p className="text-sm mt-1">
               Discover earning oppurtunities in: Blockchain technology, web3, Cyber security, Graphics design and more!!
              </p>
              <p className="text-sm mt-2">12.07.2025</p>
            </div>
          </div>
          <div className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
            <img
              className="h-full w-full object-cover object-center"
              src={assets.file3}
              alt="image"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="text-3xl">Tech summer school</h1>
              <p className="text-sm mt-1">
                Catch the young!! This summer, let your kids be part of the summer tech school as an investment into their futures. DISCOUNT FOR SIBLINGS APPLY
              </p>
              <p className="text-sm mt-2">15.08.2025</p>
            </div>
          </div>
          <div className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
            <img
              className="h-full w-full object-cover object-center"
              src={assets.file2}
              alt="image"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="text-3xl">New product alert!!</h1>
              <p className="text-sm mt-1">
               "Stock Track". From your shelves to the counters, stocktrack will help you track it all. This application is suitable for business at all levels, and helps in tracking inventory.
              </p>
              <p className="text-sm mt-2">13.09.2025</p>
            </div>
          </div>
          <div className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
            <img
              className="h-full w-full object-cover object-center"
              src={assets.file9}
              alt="image"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="text-3xl">Happy Independence day</h1>
              <p className="text-sm mt-1">
               "Freedom is never volutrarily given by the oppressor, but it must be demanded for by the oppressed"
              </p>
              <p className="text-sm mt-2">01.10.2025</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:hidden mt-10 gap-6 w-full">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white border border-zinc-200 rounded-lg overflow-hidden transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-lg p-4 flex flex-col items-center"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full max-w-56 object-cover mb-6"
              />
              <div className="w-full max-w-56 flex flex-col h-full">
                <h3 className="text-base font-medium text-slate-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-3">
                  {card.description}
                </p>
                <div className="grid grid-cols-2 ">
                  <div className="text-xs text-slate-700 leading-relaxed">
                    {card.date}
                  </div>
                  {/* <button className="inline-flex items-center gap-2 bg-transparent border-0 text-slate-700 text-xs cursor-pointer p-0 hover:gap-2 group">
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
                      />
                    </svg>
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* ///Next Section starts here */}
      <div className="py-16 px-4 flex flex-col max-md:px-4 max-w-5xl mx-auto">
        <div className="text-sm text-slate-600 max-w-lg pb-6">
          <h1 className="text-xl uppercase font-semibold text-slate-700">
            upcoming events
          </h1>
          <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"></div>
          <p className="mt-3 font-semibold italic">upcoming events</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white border border-zinc-200 rounded-lg overflow-hidden transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-lg p-4 flex flex-col items-center"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full max-w-56 min-h-56 object-cover mb-6"
              />
              <div className="w-full max-w-56 flex flex-col h-full">
                <h3 className="text-base font-medium text-slate-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-3">
                  {event.description}
                </p>
                <div className="grid grid-cols-2 ">
                  <div className="text-xs text-slate-700 p-2 leading-relaxed">
                    {event.date}
                  </div>
                  <button
                    className={`${
                      event.status === "completed"
                        ? "bg-green-400"
                        : "bg-red-400"
                    } inline-flex items-center gap-1 text-slate-700 text-xs cursor-pointer p-1 hover:gap-1 group`}
                  >
                    {event.status}
                    <Check size={16} className="text-black" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* ////Next section starts here */}
      <section className=" max-md:px-4 max-w-5xl mx-auto">
        <Banner />
      </section>
      <section className=" max-md:px-4 max-w-5xl mx-auto">
        <Faq />
      </section>
      <section className=" max-md:px-4 max-w-5xl mx-auto">
        <Newsletter />
      </section>
    </div>
  );
};

export default Blogs;
