import React, { useEffect, useRef, useState } from "react";
import { assets } from "../asset/assets";
import Achievements from "../Components/Achievements";
import Reviews from "./Reviews";
import Banner from "../Components/Banner";
import Newsletter from "./Newsletter";
import { useNavigate } from "react-router-dom";
import Faq from "../Components/Faq";

const AboutUs = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const navigate = useNavigate();

  const companyLogos = [
    "slack",
    "framer",
    "netflix",
    "google",
    "linkedin",
    "instagram",
    "facebook",
  ];

  const reasons = [
    {
      title: "Our Mission",
      text: "To empower individuals and businesses through innovative technology solutions and practical skill development that drives real-world impact.",
    },
    {
      title: "Our Vision",
      text: "To become a globally recognized tech company shaping the future through innovation, talent development, and transformative digital experiences.",
    },
    {
      title: "Our Values",
      text: "We are driven by innovation, integrity, growth, and excellence. These principles guide everything we build and every solution we deliver.",
    },
  ];

  // for our teams carousel
  const teamMembers = [
    {
      name: "Mark Onwa",
      role: "CEO, Lead Engineer",
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=600",
    },
    {
      name: "Majesty Harrison",
      role: "Co-founder, Security Engineer",
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=600",
    },
    {
      name: "Joshua Nzute",
      role: "HR Manager, Chief Designer",
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=600",
    },
    {
      name: "Nwaneri DC",
      role: "Admin Officer, Web Dev.",
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=600",
    },
    {
      name: "Daniel Onwa",
      role: "Director of Operations, Web Dev.",
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=600",
    },
    {
      name: "Mitchelle Dozie",
      role: "Business Developer",
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=600",
    },
    {
      name: "Victor Dozie",
      role: "Business Analyst",
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=600",
    },
  ];
  const [index, setIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const trackRef = useRef(null);
  const startX = useRef(0);
  const isDragging = useRef(false);

  // Clone for infinite effect
  const extended = [
    teamMembers[teamMembers.length - 1],
    ...teamMembers,
    teamMembers[0],
  ];

  // Responsive check
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slidesPerView = isMobile ? 1 : 3.5;
  const slideWidth = 100 / slidesPerView;

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  const next = () => setIndex((prev) => prev + 1);
  const prev = () => setIndex((prev) => prev - 1);

  // Infinite reset (no flicker)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    if (index === extended.length - 1) {
      setTimeout(() => {
        track.style.transition = "none";
        setIndex(1);
      }, 500);
    }

    if (index === 0) {
      setTimeout(() => {
        track.style.transition = "none";
        setIndex(extended.length - 2);
      }, 500);
    }

    setTimeout(() => {
      if (track) track.style.transition = "";
    }, 600);
  }, [index, extended.length]);

  // Drag / Swipe
  const onStart = (x) => {
    startX.current = x;
    isDragging.current = true;
  };

  const onMove = (x) => {
    if (!isDragging.current) return;
    const diff = x - startX.current;

    if (diff > 50) {
      prev();
      isDragging.current = false;
    } else if (diff < -50) {
      next();
      isDragging.current = false;
    }
  };

  const onEnd = () => {
    isDragging.current = false;
  };
  return (
    <div>
      <section className="relative flex flex-col items-center max-md:px-2 bg-black text-white text-sm pb-28 pt-8 h-screen bg-[url(https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/bg-gradient-3.svg)] bg-top bg-no-repeat">
        <style>
          {`                   .rainbow::before {
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
            <a
              onclick="closeNavbar()"
              class="px-4 py-2 border border-white/10 font-medium rounded-full"
              href="/about"
            >
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

        {/* <div className="flex gap-7 mt-6">
                <button className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-[#8A7DFF] hover:bg-blue-700 rounded-full">
                  Get Started
                </button>
                <button className="px-6 py-2 border rounded-full">Learn More</button>
              </div> */}
      </section>

      {/* ///Next section starts from here */}

      <div className="mt-10">
        {/* ////Marquee section, displaying comapanies and their logos */}
        <style>{`
                .marquee-inner {
                    animation: marqueeScroll linear infinite;
                }

                @keyframes marqueeScroll {
                    0% {
                        transform: translateX(0%);
                    }

                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>

        <div className="overflow-hidden w-full relative max-w-5xl mx-auto select-none">
          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
          <div
            className="marquee-inner flex will-change-transform min-w-[200%]"
            style={{ animationDuration: "15s" }}
          >
            <div className="flex">
              {[...companyLogos, ...companyLogos].map((company, index) => (
                <img
                  key={index}
                  src={`https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/${company}.svg`}
                  alt={company}
                  className="w-full h-full object-cover mx-6"
                  draggable={false}
                />
              ))}
            </div>
          </div>
          <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
      {/* //Next section starts here */}
      <div className="mt-12 pb-10">
        <section className="flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4">
          <div className="text-sm text-slate-600 max-w-lg">
            <h1 className="text-xl uppercase font-semibold text-slate-700">
              About us
            </h1>
            <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"></div>
            <p className="mt-3 font-semibold italic">
              Building the Future Through Technology and Talent
            </p>

            <p className="mt-6">
              EmmarkTech is a fast-growing technology company rooted in Africa
              with a global vision. We are driven by a passion for building
              impactful digital solutions and nurturing the next generation of
              tech talent.
            </p>

            <p className="mt-4">
              At our core, we believe technology should be accessible,
              practical, and transformative. Our focus is on creating meaningful
              products and empowering individuals and businesses to thrive in a
              rapidly evolving digital world.
            </p>

            <p className="mt-4">
              We are a team of forward-thinking professionals committed to
              innovation, growth, and excellence. Every project is guided by a
              clear purpose, to create value, and deliver lasting impact.
            </p>

            <p className="mt-4">
              EmmarkTech serves as a trusted partner for organizations and
              aspiring professionals, helping them navigate today’s tech-driven
              landscape with confidence and clarity.
            </p>

            {readMore && (
              <div
                className={`transition-all duration-500 overflow-hidden ${readMore ? "max-h-[1000px]" : "max-h-0"}`}
              >
                <p className="mt-4">
                  We specialize in developing scalable software solutions,
                  delivering strategic IT consulting, and equipping people with
                  real-world, in-demand tech skills. Our approach combines
                  creativity with technical expertise, ensuring that every
                  solution we build is not only functional but also meaningful
                  and future-ready.
                </p>

                <p className="mt-4">
                  At EmmarkTech, we believe technology is more than just tools —
                  it is a powerful driver of growth, transformation, and
                  opportunity. This belief fuels our dedication to empowering
                  startups, businesses, and aspiring tech professionals with the
                  resources and support they need to grow, compete, and stand
                  out.
                </p>

                <p className="mt-4">
                  Our team is made up of passionate, forward-thinking
                  professionals who are committed to delivering excellence at
                  every stage. From idea to execution, we focus on creating
                  value, solving real problems, and building solutions that
                  leave a lasting impact. Whether it's through innovative
                  products or hands-on training, our goal remains the same — to
                  shape the future through technology.
                </p>
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
          <div className="relative shadow-2xl shadow-indigo-600/40 rounded-2xl overflow-hidden shrink-0">
            <img
              className="max-w-md w-full object-cover rounded-2xl"
              src="https://i.pinimg.com/1200x/9d/67/6e/9d676e1e3e5a0380b6616cca724c5206.jpg"
              alt=""
            />
            <div className="flex items-center gap-1 max-w-72 absolute bottom-8 left-8 bg-white p-4 rounded-xl">
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
                  250+
                </div>
              </div>
              <p className="text-sm font-medium text-slate-800">
                Active community members
              </p>
            </div>
          </div>
        </section>
      </div>
      {/* //Another section starts here */}
      <div className="mt-16 pb-16  max-w-5xl mx-auto max-md:px-4">
        {/* Section Header */}
        <div className="text-sm text-slate-600 max-w-xl mb-12">
          <h1 className="text-xl uppercase font-semibold text-slate-700">
            Why We Exist
          </h1>
          <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF] mt-2"></div>
          <p className="mt-4 text-slate-500">
            Driven by purpose, guided by innovation, and committed to impact.
          </p>
          <p className="mt-4 text-slate-500">
            With a deep understanding of the industries we work in, strong
            technical competencies and a flexible organization, we go the extra
            mile to deliver quality, scalable, and business-aligned solutions
            across the globe.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="relative px-6 py-8 rounded-2xl bg-gradient-to-r from-indigo-600 to-[#8A7DFF] backdrop-blur-xl border border-white/20 
              hover:border-indigo-400/40 hover:shadow-indigo-500/20 
              transition-all duration-500 hover:scale-[1.03] overflow-hidden"
            >
              {/* Glow effect */}
              <div
                className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-700 
                bg-gradient-to-r from-gray-500/10 to-purple-500/10 blur-xl"
              ></div>

              <h3 className="text-white text-lg font-semibold relative z-10">
                {item.title}
              </h3>
              <div className="w-24 h-[2px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF] mt-1"></div>

              <p className="text-slate-200 mt-3 text-sm leading-relaxed relative z-10">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* ///Next section starts here */}
      <section className="mt-12 pb-10 max-md:px-4 max-w-5xl mx-auto">
        <div className="text-sm text-slate-600 max-w-xl mb-12">
          <h1 className="text-xl uppercase font-semibold text-slate-700">
            Meet Our Team
          </h1>
          <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF] mt-2"></div>
          <p className="mt-4 text-slate-500">
            The creative minds, that power Emmark-Tech.
          </p>
          <p className="mt-2 text-slate-500">
            From our passionate CEO, down the wonderfful visionaries that power
            the brand.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="overflow-hidden mt-12 cursor-grab active:cursor-grabbing"
          onMouseDown={(e) => onStart(e.clientX)}
          onMouseMove={(e) => onMove(e.clientX)}
          onMouseUp={onEnd}
          onMouseLeave={onEnd}
          onTouchStart={(e) => onStart(e.touches[0].clientX)}
          onTouchMove={(e) => onMove(e.touches[0].clientX)}
          onTouchEnd={onEnd}
        >
          <div
            ref={trackRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * slideWidth}%)`,
            }}
          >
            {extended.map((member, i) => (
              <div
                key={i}
                style={{ minWidth: `${slideWidth}%` }}
                className="px-2"
              >
                <div className="bg-black text-white rounded-2xl overflow-hidden">
                  <div className="relative">
                    <img
                      src={member.img}
                      alt=""
                      className="h-[270px] w-full object-cover object-top hover:scale-105 transition"
                    />
                    <div className="absolute bottom-0 h-60 w-full bg-gradient-to-t from-black to-transparent"></div>
                  </div>

                  <div className="px-4 pb-6 text-center">
                    <p className="mt-4 text-lg">{member.name}</p>
                    <p className="text-sm font-medium bg-gradient-to-r from-[#8B5CF6] via-[#9938CA] to-[#E0724A] text-transparent bg-clip-text">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10">
          <div className="relative flex items-center gap-3 px-10 py-2 bg-black/1 backdrop-blur-xl">
            {/* Liquid Indicator */}
            <div
              className="absolute -translate-y-1/2 h-3 rounded-full bg-black/70 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                width: index === 1 ? "24px" : "24px",
                transform: `translateX(${(index - 1) * 24}px)`,
              }}
            />

            {teamMembers.map((_, i) => {
              const active = index - 1 === i;

              return (
                <button
                  key={i}
                  onClick={() => setIndex(i + 1)}
                  className={`relative h-3 rounded-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${active ? "w-6" : "w-3 hover:w-4"}`}
                >
                  {/* Glass Dot */}
                  <span
                    className={`absolute inset-0 rounded-full transition-all duration-500
                  ${active ? "bg-transparent" : "bg-black/30 backdrop-blur-sm"}`}
                  />

                  {/* Glow Effect */}
                  <span
                    className={`absolute inset-0 rounded-full blur-[6px] transition-all duration-500
                  ${active ? "bg-black/40 opacity-70" : "opacity-0"}`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </section>
      {/* //////////Achievements section starts here */}
      <section className=" max-md:px-4 max-w-5xl mx-auto">
        <Achievements />
      </section>
      {/* ////Next section starts here */}
      <section className=" max-md:px-4 max-w-5xl mx-auto">
        <Reviews />
      </section>
      {/* ////Next section starts here */}
      <section className=" max-md:px-4 max-w-5xl mx-auto">
        <Banner />
      </section>
      {/* ////Next section starts here */}
      <section className=" max-md:px-4 max-w-5xl mx-auto">
        <Faq />
      </section>
      <section className=" max-md:px-4 max-w-5xl mx-auto">
        <Newsletter />
      </section>
    </div>
  );
};

export default AboutUs;
