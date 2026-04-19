import React, { useState } from "react";
import { assets } from "../asset/assets";
import Achievements from "../Components/Achievements";
import { Users, Code, Briefcase } from "lucide-react";
import Newsletter from "./Newsletter";
import Banner from "../Components/Banner";
import Reviews from "./Reviews";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Code,
    title: "Custom Software Dev.",
    description:
      "We design and develop powerful, scalable software solutions tailored to solve real-world challenges across industries. With a global-first approach and cutting-edge technologies, our solutions drive innovation, streamline operations, and accelerate business growth on an international scale.",
  },
  {
    icon: Users,
    title: "Enterprise IT Solutions",
    description:
      "We empower enterprises and startups worldwide with intelligent IT infrastructure, secure cloud integration, and transformative digital strategies. Our future-focused solutions are engineered to scale, adapt, and deliver exceptional value in today’s dynamic global marketplace.",
  },
  {
    icon: Briefcase,
    title: "Training & Mentorship",
    description:
      "We’re shaping the next generation of global tech leaders through hands-on training and expert mentorship. From web and mobile development to DevOps and cloud engineering, our programs equip learners with practical skills, industry insights, and the mindset to compete and lead in the global tech space.",
  },
];

const Services = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const navigate = useNavigate()

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
            <a
              onclick="closeNavbar()"
              class="px-4 py-2 border border-white/10 font-medium rounded-full"
              href="/services"
            >
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
          <button onClick={() => navigate("/contact")} class="hidden md:block bg-gradient-to-r from-indigo-600 to-[#8A7DFF] hover:bg-blue-700 text-white px-4 py-2 rounded-full transition">
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
        What we bring to the table 
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
        <button className="px-6 py-2 border rounded-full">Our Services</button>
      </div>
      </section>
      {/* ///Next Section starts here */}
      <div className="mt-12 pb-10">
        <section className="flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4">
          <div className="text-sm text-slate-600 max-w-lg">
            <h1 className="text-xl uppercase font-semibold text-slate-700">
              What we offer?
            </h1>
            <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"></div>
            <p className="mt-3 font-semibold italic">
              Building the Future Through Technology and Talent
            </p>

            <p className="mt-8">
              At EmmarkTech, we provide a wide range of technology-driven
              services designed to help businesses grow, scale, and stay
              competitive in a rapidly evolving digital world. Our strength lies
              in combining innovation, strategy, and technical expertise to
              deliver solutions that are both impactful and future-ready.
            </p>

            <p className="mt-4">
              Our team brings together deep experience across software
              engineering, cybersecurity, cloud computing, UI/UX design, and
              business strategy. This multidisciplinary approach allows us to
              tackle complex challenges and build solutions that are not only
              functional, but also efficient, scalable, and user-focused.
            </p>

            <p className="mt-4">
              We go beyond just building digital products. We create intelligent
              systems, optimize workflows, and design seamless user experiences
              that help organizations operate smarter and deliver more value to
              their customers.
            </p>

            {readMore && (
              <div
                className={`transition-all duration-500 overflow-hidden ${
                  readMore ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                <p className="mt-4">
                  From startups looking to launch their first product to
                  established businesses aiming to modernize their
                  infrastructure, EmmarkTech provides the tools, expertise, and
                  guidance needed to succeed in today’s tech-driven environment.
                </p>

                <p className="mt-4">
                  Our services include custom software development, cloud
                  solutions, IT consulting, product engineering, and hands-on
                  technical training programs. Each solution is tailored to meet
                  specific business needs, ensuring measurable results and
                  long-term impact.
                </p>

                <p className="mt-4">
                  We are committed to building strong partnerships with our
                  clients by understanding their goals and delivering solutions
                  that align with their vision. At EmmarkTech, success is not
                  just about delivering projects, but creating lasting value.
                </p>
                <p className="mt-4">
                  Our development process is centered around scalability,
                  performance, and innovation. Whether it's building web
                  applications, enterprise platforms, or integrating modern
                  cloud systems, we ensure every solution is engineered to grow
                  with your business.
                </p>

                <p className="mt-4">
                  At EmmarkTech, we place a strong emphasis on empowering
                  people. Through our practical, hands-on training programs, we
                  equip individuals with in-demand tech skills that prepare them
                  for real-world opportunities. Our goal is not just to teach,
                  but to build confident, capable professionals ready to thrive
                  in the global tech ecosystem.
                </p>

                <p className="mt-4">
                  We serve businesses, organizations, and individuals across
                  various industries, delivering solutions that solve real
                  problems and drive meaningful progress. Our approach is rooted
                  in innovation, integrity, and excellence (values that guide
                  everything we do).
                </p>

                <p className="mt-4">
                  By combining cutting-edge technology with a deep understanding
                  of business needs, EmmarkTech continues to build impactful
                  solutions, empower talent, and transform ideas into reality.
                  We don’t just follow trends, we help shape the future of
                  technology.
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
      {/* //Another section starts here */}
      <section className=" max-md:px-4 max-w-5xl mx-auto">
        <Achievements />
      </section>
      {/* ////Next section starts here */}
      <section className="mt-12 pb-10 max-md:px-4 max-w-5xl mx-auto">
        <div className="text-sm text-slate-600 max-w-xl mb-10">
          <h1 className="text-xl uppercase font-semibold text-slate-700">
            Our core services
          </h1>
          <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF] mt-2"></div>
          <p className="mt-3 font-semibold italic">
            Building global solutions, empowering tech minds, and transforming
            enterprises with innovation.
          </p>
          <p className="mt-4 text-slate-500">
            Emmark-Tech offers a wide range of tech solutions. Among many
            others, these are our core tech services.{" "}
          </p>
          <p className="mt-4 text-slate-500"> </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
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
                <div className="flex gap-2">
                  <div className="text-white text-lg font-semibold relative z-10">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-white text-lg font-semibold relative z-10">
                    {service.title}
                  </h3>
                </div>
                <div className="w-24 h-[2px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF] mt-1"></div>

                <p className="text-slate-200 mt-3 text-sm leading-relaxed relative z-10">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      {/* ////Next section starts here */}
     <section className=" max-md:px-4 max-w-5xl mx-auto">
        <Banner />
      </section>
      {/* ////Next section starts here */}
       <section className=" max-md:px-4 max-w-5xl mx-auto ">
        <Reviews />
      </section>
      {/* ////Next section starts here */}
      <section className=" max-md:px-4 max-w-5xl mx-auto">
        <Newsletter />
      </section>
    </div>
  );
};

export default Services;
