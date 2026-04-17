import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../asset/assets";
import Newsletter from "./Newsletter";
import Reviews from "./Reviews";

const Testimonials = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

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
        <nav class="flex items-center border mx-4 w-full max-w-4xl justify-between border-slate-700 px-4 py-2.5 rounded-full text-white">
          <a href="/">
            <img src={assets.logo} alt="logo" className="w-10" />
          </a>
          <div
            className={`max-md:absolute max-md:bg-black/90 max-md:top-0 transition-all duration-300 
                                  max-md:h-full max-md:w-full max-md:z-10 flex flex-col md:flex-row items-center gap-5 md:gap-2 pt-28 md:pt-0
                                  ${menuOpen ? "max-md:left-0" : "max-md:-left-full"}`}
          >
            <a onclick="closeNavbar()" class="px-4 py-2" href="/">
              Home
            </a>
            <a onclick="closeNavbar()" class="px-4 py-2" href="/about">
              About Us
            </a>
            <a onclick="closeNavbar()" class="px-4 py-2" href="/blogs">
              Blogs
            </a>
            <a onclick="closeNavbar()" class="px-4 py-2" href="/services">
              Our Services
            </a>
            <a
              onclick="closeNavbar()"
              class="px-4 py-2 border border-white/10 font-medium rounded-full"
              href="/testimonials"
            >
              Testimonials
            </a>
            {/* <a onclick="closeNavbar()" class="px-4 py-2" href="#">Docs</a> */}
            {/* CLOSE BUTTON */}
            <button onClick={() => setMenuOpen(false)} className="md:hidden">
              <img src={assets.cross_icon} alt="hey" className="w-5" />
            </button>
          </div>

          {/* OPEN BUTTON */}
          <button onClick={() => setMenuOpen(true)} className="md:hidden">
            <img src={assets.menu_icon} alt="hey" className="w-12" />
          </button>
          <button
            onClick={() => navigate("/contact")}
            class="hidden md:block bg-gradient-to-r from-indigo-600 to-[#8A7DFF] hover:bg-blue-700 text-white px-4 py-2 rounded-full transition"
          >
            Contact Us
          </button>
        </nav>

        {/* HERO */}
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

        <h1 className="text-4xl md:text-6xl text-center font-semibold max-w-4xl mt-5 font-serif">
          Learn and discover the brand you love.
        </h1>
      </section>

      {/* ///Next section starts from here */}
       <section className=" max-md:px-4 max-w-5xl mx-auto mt-10">
        <Reviews />
      </section>
       {/* ///Next section starts from here */}
       <section className=" max-md:px-4 max-w-5xl mx-auto">
        <Newsletter />
      </section>
    </div>
  );
};

export default Testimonials;
