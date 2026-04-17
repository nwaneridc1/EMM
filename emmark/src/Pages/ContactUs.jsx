import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../asset/assets";

const ContactUs = () => {
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
            <a onclick="closeNavbar()" class="px-4 py-2" href="/testimonials">
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
       <section className='relative bg-black flex flex-col md:flex-row justify-center px-4 py-20 gap-20 my-10'>
                
               
                <div className='text-center md:text-left mt-12'>
                     <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none mb-10 size-[120vh] bg-blue-600/35 rounded-full blur-[200px]'></div>
                
                    
                    <div className="flex items-center  p-1.5 rounded-full border border-blue-900 text-xs w-fit mx-auto md:mx-0">
                        <div className="flex items-center">
                            <img className="size-7 rounded-full border border-blue-900" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50" alt="userImage1" />
                            <img className="size-7 rounded-full border border-blue-900 -translate-x-2" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50" alt="userImage2" />
                            <img className="size-7 rounded-full border border-blue-900 -translate-x-4" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop" alt="userImage3" />
                        </div>
                        <p className="-translate-x-2 text-xs text-slate-200">Join community of 1m+ founders </p>
                    </div>
                    <h1 className='font-medium text-3xl md:text-5xl max-md:mx-auto bg-gradient-to-r from-white to-blue-600 bg-clip-text text-transparent max-w-[470px] mt-4'>Ready to Transform Your Digital Experience?</h1>
                    <p className='text-sm/6 text-white max-w-[345px] mt-4 mx-auto md:mx-0'>Let our design team craft a website that elevates your brand. Book a free session today.</p> 
                </div>
                        
                <div className='w-full max-w-lg max-md:mx-auto bg-[#00A63E]/0 backdrop-blur-sm border border-white/10 rounded-xl p-8'>
                    <form className='space-y-6'>
                        <div>
                            <label className='block text-white text-sm mb-2'>Name</label>
                            <input 
                                type="text" 
                                required
                                placeholder="Eden Johnson" 
                                className='w-full bg-[#00A63E]/5 border border-white/20 rounded-lg px-4 py-3 text-white/40 placeholder:text-white/40 placeholder:text-sm focus:outline-none focus:border-blue-600 transition'
                            />
                        </div>
            
                        <div>
                            <label className='block text-white text-sm mb-2'>Email</label>
                            <input 
                                type="email" 
                                required
                                placeholder="Eden@example.com" 
                                className='w-full bg-[#00A63E]/5 border border-white/20 rounded-lg px-4 py-3 text-white/40 placeholder:text-white/40 placeholder:text-sm focus:outline-none focus:border-blue-600 transition'
                            />
                        </div>
            
                        <div>
                            <label className='block text-white text-sm mb-2'>Message</label>
                            <textarea 
                                placeholder="Write your message here..." 
                                rows="4"
                                required
                                className='w-full bg-[#00A63E]/5 border border-white/20 rounded-lg px-4 py-3 text-white/40 placeholder:text-white/40 placeholder:text-sm focus:outline-none focus:border-blue-600 transition resize-none'
                            ></textarea>
                        </div>
            
                        <div className='flex items-center justify-between'>
                            <p className='text-xs md:text-sm text-white/60 max-w-3xs'>
                                By submitting, you agree to our <span className='text-white'>Terms</span> and <span className='text-white'>Privacy Policy</span>.
                            </p>
                            <button type="submit" className='bg-linear-to-r from-blue-950 to-blue-600 hover:from-blue-600 hover:to-blue-950 text-white text-sm px-8 md:px-16 py-3 rounded-full transition duration-300 cursor-pointer'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </section>
    </div>
  );
};

export default ContactUs;
