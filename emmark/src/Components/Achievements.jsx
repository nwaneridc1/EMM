import React, { useEffect, useRef, useState } from "react";
import { Users, Code, Briefcase, Award } from "lucide-react";

const achievements = [
  { label: "Projects Delivered", value: 120, icon: Briefcase },
  { label: "Clients Worldwide", value: 180, icon: Users },
  { label: "Tech Talents Trained", value: 70, icon: Code },
  { label: "Years of Commitment", value: 8, icon: Award },
];

const Achievements = () => {
  const [counts, setCounts] = useState(achievements.map(() => 0));
  const [start, setStart] = useState(false);
  const sectionRef = useRef(null);

  // 👇 Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // 👇 Counter animation
  useEffect(() => {
    if (!start) return;

    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((count, i) =>
          count < achievements[i].value
            ? count + Math.ceil(achievements[i].value / 40)
            : achievements[i].value
        )
      );
    }, 40);

    return () => clearInterval(interval);
  }, [start]);

  return (
    <section
      ref={sectionRef}
      className="relative mt-24 pb-20 max-w-6xl mx-auto px-4 overflow-hidden"
    >
      

      {/* Heading */}
      <div className="text-sm text-slate-600 max-w-xl mb-12">
          <h1 className="text-xl uppercase font-semibold text-slate-700">
            Our Impact In Numbers
          </h1>
          <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF] mt-2"></div>
          <p className="mt-4 text-slate-500">
            
          </p>
          </div>
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {achievements.map((item, i) => {
          const Icon = item.icon;

          return (
            <div
              key={i}
             className="relative px-6 py-8 rounded-2xl bg-gradient-to-r from-indigo-600 to-[#8A7DFF] backdrop-blur-xl border border-white/20 
              hover:border-indigo-400/40 hover:shadow-indigo-500/20 
              transition-all duration-500 hover:scale-[1.03] overflow-hidden">
              {/* ⚡ Animated Gradient Glow */}
              <div
                className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-700 
                bg-gradient-to-r from-gray-500/10 to-purple-500/10 blur-xl"
              ></div>

              {/* Icon */}
              <div className="text-white text-lg font-semibold relative z-10">
                <Icon size={28} />
              </div>

              {/* Number */}
              <h2 className="text-white text-2xl font-semibold relative z-10 mt-2">
                {counts[i]}+
              </h2>

              {/* Label */}
              <p className="text-slate-200 mt-3 text-sm leading-relaxed relative z-10">
                {item.label}
              </p>
              <div className="w-28 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Achievements;