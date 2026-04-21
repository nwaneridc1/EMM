import React from "react";
import { useNavigate } from "react-router-dom";

const Sectionii = () => {
   const navigate = useNavigate()
  const companyLogos = [
    "slack",
    "framer",
    "netflix",
    "google",
    "linkedin",
    "instagram",
    "facebook",
  ];
  return (
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
      {/* ////Marquee section, displaying comapanies and their logos ends here */}
      {/* /// Next section starts here */}
      <div className="mt-12 pb-10">
        <section className="flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4">
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
          <div className="text-sm text-slate-600 max-w-lg">
            <h1 className="text-xl uppercase font-semibold text-slate-700">
              Who we are?
            </h1>
            <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"></div>
            <p className="mt-8">
              We are a fast rising tech force in Africa with a global mindset,
              aiming to build digital products that matter and develop talents
              that shape the future.{" "}
            </p>
            <p className="mt-4">
              {" "}
              We are committed to bridging the global digital divide by
              providing scalable software, robust IT infrastructure, and
              hands-on tech training programs.
            </p>
            <p className="mt-4">
              Our mission is to empower individuals, startups, and enterprises
              through technology that transforms businesses and careers.
            </p>
            <p className="mt-4">
              With a visionary team of professionals, we deliver end-to-end tech
              services including software development, cloud integration, IT
              consulting, product engineering, and full-stack training. Our
              approach is simple: deliver real results with innovation,
              integrity, and impact.
            </p>
            <a
              href="#"
              className="flex items-center w-max gap-2 mt-8 hover:-translate-y-0.5 transition bg-gradient-to-r from-indigo-600 to-[#8A7DFF] py-3 px-8 rounded-full text-white"
            >
              <span>Read more</span>
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
            </a>
          </div>
        </section>
      </div>
      {/* ///Next section starts here */}
      <div className="mt-12 pb-10">
        <section className="flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4">
          <div className="text-sm text-slate-600 max-w-lg">
            <h1 className="text-xl uppercase font-semibold text-slate-700">
              What we offer?
            </h1>
            <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"></div>
            <p className="mt-8">
              Our founding team brings a wealth of expertise across multiple
              disciplines including software engineering, cybersecurity, cloud
              computing, UI/UX design, business development, and more.
            </p>
            <p className="mt-4">
              We don't just build digital tools, we create experiences,
              streamline systems, and inspiring innovations.
            </p>
            <p className="mt-4">
              With a visionary team of professionals, we deliver end-to-end tech
              services including software development, cloud integration, IT
              consulting, product engineering, and full-stack training. Our
              approach is simple: deliver real results with innovation,
              integrity, and impact.
            </p>
            <p className="mt-4">
              Whether you’re an aspiring tech talent or a growing business,
              Emmark Tech provides the right tools, training, and solutions to
              help you thrive in today's fast-evolving tech world.
            </p>
            <a
             onClick={() => navigate("/services")}
              href="#"
              className="flex items-center w-max gap-2 mt-8 hover:-translate-y-0.5 transition bg-gradient-to-r from-indigo-600 to-[#8A7DFF] py-3 px-8 rounded-full text-white"
            >
              <span>Learn more</span>
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
            </a>
          </div>
          <div className="relative shadow-2xl shadow-indigo-600/40 rounded-2xl overflow-hidden shrink-0">
            <img
              className="max-w-md w-full object-cover rounded-2xl"
              src="https://i.pinimg.com/1200x/8a/72/ea/8a72eae989508f49244da3c9824fcf6a.jpg"
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
                  180+
                </div>
              </div>
              <p className="text-sm font-medium text-slate-800">
                Satisfied clients (worldwide)
              </p>
            </div>
          </div>
        </section>
      </div>
      {/* ///Next section starts here */}
      <div className="relative mx-auto max-w-5xl px-4 mt-12 pb-10">
        <div className="absolute -z-50 size-[400px] -top-10 -left-20 aspect-square rounded-full bg-indigo-500/30 blur-3xl"></div>
        <h1 className="text-xl uppercase font-semibold text-slate-700">
          Why choose Emmark-Tech?
        </h1>
        <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"></div>
        <p className="mt-8">
          Discover what makes us stand out and the energy that drives our
          passion.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-10">
          <div className="relative md:col-span-2 mb-10">
            <img
              alt="features showcase"
              src="https://i.pinimg.com/1200x/f1/78/fc/f178fcce51e126fddc6d7410847672e6.jpg"
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
              </div>
              <p className="text-sm font-medium text-slate-800">
                Trusted by thousands of brands and businesses
              </p>
            </div>
          </div>
          <div className="md:col-span-1">
            <img
              alt="features showcase"
              className="hover:-translate-y-0.5 transition duration-300"
              src="https://i.pinimg.com/736x/d7/ec/42/d7ec4294e43b6d32ae478f880eb3935e.jpg"
            />
            <h3 className="text-[24px]/7.5 text-slate-800 font-medium mt-2">
              Our clients, Our priority!!{" "}
            </h3>
            <p className="text-slate-600 mt-2">
              At Emmark-Tech, we prioritize our customers' needs and are
              committed to delivering exceptional services tailored to their
              goals.
            </p>
            <a
              href="/about"
              className="group flex items-center gap-2 mt-4 text-indigo-600 hover:text-indigo-700 transition"
            >
              Learn more about Emmark-Tech
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-up-right size-5 group-hover:translate-x-0.5 transition duration-300"
                aria-hidden="true"
              >
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectionii;
