import React, { useEffect, useRef, useState } from "react";

const Reviews = () => {
  const testimonials = [
    {
      name: "Daniel",
      role: "- Meme Trader",
      testimony:
        "I recently launched my first ever memecoin and it was a huge banger.. shout out to Emmark-Tech. I love you guys lots ",
    },
    {
      name: "Ella Victory",
      role: "- Frontend Developer",
      testimony:
        "I joined Emmark-Tech’s learning program with zero tech experience. Today, I’m building real-world applications confidently. It's a life-changer!",
    },
    {
      name: "Leon David",
      role: "- Freelancer",
      testimony:
        "Emmark-Tech gave me the tools and confidence to launch my freelance tech career. It’s one of the best decisions I’ve made.Much thanks Guys ..",
    },
    {
      name: "Adaeze Uwakwe",
      role: "- Graphics Designer",
      testimony:
        "After years of struggling to learn from youtube,then I finally came across Emmark-Tech and the story changed definetly for me. I'm so grateful guys..",
    },
    {
      name: "Elvis Chikwendu",
      role: "- CEO elionphones Nigeria",
      testimony:
        "I've always needed to reach more customers and make more sales generally and today that's the testimony.. My E-commerce website is doing perfectly well.",
    },
  ];

  const [index, setIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const trackRef = useRef(null);
  const startX = useRef(0);
  const isDragging = useRef(false);

  // Clone for infinite effect
  const extended = [
    testimonials[testimonials.length - 1],
    ...testimonials,
    testimonials[0],
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
    <div className="relative mx-auto max-w-5xl px-4 mt-6 pb-10">
      {/* <div className="absolute -z-50 size-[400px] -top-10 -left-20 aspect-square rounded-full bg-indigo-500/30 blur-3xl"></div> */}
      <h1 className="text-xl uppercase font-semibold text-slate-700">
        What People Are Saying!
      </h1>
      <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"></div>
      <p className="mt-8 text-slate-500">
        A few out of so many wonderful testimonies from wonderful people.{" "}
        <p className="mt-2 text-slate-500">
          You too can experience the impact, whether through our tech support
          services, <p>or our tech mentorship programs.</p>
        </p>
      </p>

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
          {extended.map((testimonials, i) => (
            <div
              key={i}
              style={{ minWidth: `${slideWidth}%` }}
              className="px-2"
            >
              <div className="bg-white text-gray-500 text-sm rounded-lg py-5 px-5 md:py-8 border border-gray-300/80 max-h-[40vh] hover:shadow-md mb-10">
               <div className="min-h-20">
                 <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                  alt="image"
                  className="w-10 h-10 rounded-full border-2 border-white float-left mr-3 mb-"
                />

                <p className="italic">"{testimonials.testimony}"</p>
               </div>

                {/* Clear float */}
               <div className="pt-5">
                  <h3 className="text-lg font-semibold">{testimonials.name}</h3>
                  <p className="text-sm">{testimonials.role}</p>
                </div>
              </div>
              {/* <div className="bg-white text-gray-500 text-sm rounded-lg p-5 md:p-8 border border-gray-300/80 min-h-[45vh] hover:shadow-md mb-16">
               
                
                
                <div className="mt-auto">
                  <h3 className="text-lg font-semibold">{testimonials.name}</h3>
                  <p className="text-sm">{testimonials.role}</p>
                </div>
              </div> */}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center">
        <div className="relative flex items-center gap-3 px-10 py-2 bg-black/1 backdrop-blur-xl">
          {/* Liquid Indicator */}
          <div
            className="absolute -translate-y-1/2 h-3 rounded-full bg-black/70 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              width: index === 1 ? "24px" : "24px",
              transform: `translateX(${(index - 1) * 24}px)`,
            }}
          />

          {testimonials.map((_, i) => {
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
    </div>
  );
};

export default Reviews;
