import React, { useState } from "react";
import { assets } from "../asset/assets";
import { useNavigate } from "react-router-dom";
import Newsletter from "./Newsletter";

const PrivacyPolicy = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const navigate = useNavigate();

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
            Our terms and policies
          </h1>
        </div>
        {/* <p className="text-slate-300 text-center max-w-2xl mt-3">
             We build digital solutions and nurture talent, helping individuals and businesses grow confidently in tech.
            </p> */}

        <div className="flex gap-7 mt-12">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-[#8A7DFF] hover:bg-blue-700 rounded-full"
          >
            Home
          </button>
          <div className="text-white py-2 text-xl">•</div>
          <button className="px-6 py-2 border rounded-full">Our Policy</button>
        </div>
      </section>

      {/* ///Next section starts from here */}
      <section className="mt-12 pb-10 max-md:px-4 max-w-5xl mx-auto">
        <h1 className="text-xl uppercase font-semibold text-slate-700">
            Our Terms & Privacy Policy
          </h1>
        <div className="flex flex-col md:flex-row gap-10">
        <div className="text-sm text-slate-600 max-w-xl mb-10">
          

          <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF] mt-2"></div>

          <p className="mt-3 font-semibold italic">
            Your trust matters to us — we are committed to protecting your data
            and ensuring transparency in how we operate.
          </p>

          <p className="mt-4 text-slate-500">
            This page outlines how Emmark-Tech collects, uses, and safeguards
            your information when you interact with our platform and services.
          </p>

          <p className="mt-4 text-slate-500">
            By using our services, you agree to the terms described here,
            designed to keep your experience secure, fair, and reliable.
          </p>
          <p className="mt-4 text-slate-500">Effective Date: 12th June, 2024</p>
        </div>
         <div className="relative shadow-2xl md:hidden shadow-indigo-600/40 rounded-2xl overflow-hidden shrink-0 pb-5">
            <img
              className="max-w-md w-full object-com rounded-2xl"
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
        </div>
        <div className="text-sm text-slate-600 max-w-3xl space-y-6">
          {/* 1 */}
          <div>
            <h3 className="text-lg uppercase font-semibold text-slate-700">
              1. Introduction
            </h3>

            <p className="mt-3 text-slate-500">
              Emmark Tech (“we”, “our”, or “us”) respects your privacy and is
              committed to protecting your personal information. This Privacy
              Policy explains how we collect, use, and safeguard information
              when you visit our website or interact with our services.
            </p>

            <p className="mt-3 text-slate-500">
              Emmark Tech is a technology brand based in Lagos, Nigeria,
              offering IT training and mentorship, custom software development,
              and enterprise IT solutions to a global audience.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h3 className="text-lg uppercase font-semibold text-slate-700">
              2. Information We Collect
            </h3>

            <p className="mt-3 text-slate-500">
              We only collect personal information that you voluntarily provide
              to us. This may include:
            </p>

            <ul className="mt-3 space-y-2 list-disc list-inside text-slate-500">
              <li>Name</li>
              <li>Email address</li>
              <li>Message content</li>
            </ul>

            <p className="mt-3 text-slate-500">
              This information is collected through:
            </p>

            <ul className="mt-3 space-y-2 list-disc list-inside text-slate-500">
              <li>Newsletter subscription forms</li>
              <li>Website contact forms</li>
              <li>Direct communication initiated by you</li>
            </ul>

            <p className="mt-3 text-slate-500">
              For project requests, additional information may be shared by you
              during further communication after initial contact.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h3 className="text-lg uppercase font-semibold text-slate-700">
              3. How We Use Your Information
            </h3>

            <ul className="mt-3 space-y-2 list-disc list-inside text-slate-500">
              <li>Respond to inquiries and messages</li>
              <li>Provide requested services or project discussions</li>
              <li>Send newsletters (only if you subscribe)</li>
              <li>Improve communication and service delivery</li>
            </ul>

            <p className="mt-3 text-slate-500">
              We do not sell, rent, or trade your personal information.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h3 className="text-lg uppercase font-semibold text-slate-700">
              4. Cookies and Tracking
            </h3>

            <ul className="mt-3 space-y-2 list-disc list-inside text-slate-500">
              <li>We do not use cookies</li>
              <li>We do not track user activity</li>
              <li>We do not use third-party analytics or tracking tools</li>
            </ul>

            <p className="mt-3 text-slate-500">
              Your browsing experience is private and not monitored.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h3 className="text-lg uppercase font-semibold text-slate-700">
              5. Data Sharing
            </h3>

            <ul className="mt-3 space-y-2 list-disc list-inside text-slate-500">
              <li>When required by law</li>
              <li>
                When necessary to protect our rights or comply with legal
                obligations
              </li>
            </ul>
          </div>

          {/* 6 */}
          <div>
            <h3 className="text-lg uppercase font-semibold text-slate-700">
              6. Data Security
            </h3>

            <p className="mt-3 text-slate-500">
              We take reasonable measures to protect your information from
              unauthorized access, loss, or misuse. However, no internet-based
              system is completely secure, and we cannot guarantee absolute
              security.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h3 className="text-lg uppercase font-semibold text-slate-700">
              7. Children’s Privacy
            </h3>

            <p className="mt-3 text-slate-500">
              Our website is not harmful to individuals under the age of 18.
              However, we recommend that minors use the website under parental
              or guardian supervision.
            </p>

            <p className="mt-3 text-slate-500">
              We do not knowingly collect personal data from children without
              appropriate guidance.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h3 className="text-lg uppercase font-semibold text-slate-700">
              8. Payments and Financial Information
            </h3>

            <p className="mt-3 text-slate-500">
              We do not process payments or billing directly on this website.
              Any financial transactions or agreements are handled outside the
              platform through direct communication.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h3 className="text-lg uppercase font-semibold text-slate-700">
              9. Your Rights
            </h3>

            <ul className="mt-3 space-y-2 list-disc list-inside text-slate-500">
              <li>Request access to your personal data</li>
              <li>Request correction or deletion of your data</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <p className="mt-3 text-slate-500">
              To exercise any of these rights, please contact us using the
              details provided on our Contact page.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h3 className="text-lg uppercase font-semibold text-slate-700">
              10. Third-Party Links
            </h3>

            <p className="mt-3 text-slate-500">
              Our website may contain links to third-party platforms (e.g.,
              social media). We are not responsible for the privacy practices of
              those platforms.
            </p>
          </div>

          {/* 11 */}
          <div>
            <h3 className="text-lg uppercase font-semibold text-slate-700">
              11. Contact Information
            </h3>

            <p className="mt-3 text-slate-500">
              All official contact details, including our email address, phone
              number, and social media handles, are available on our Contact
              page.
            </p>
          </div>

          {/* 12 */}
          <div>
            <h3 className="text-lg uppercase font-semibold text-slate-700">
              12. Updates to This Policy
            </h3>

            <p className="mt-3 text-slate-500">
              We may update this Privacy Policy from time to time. Any changes
              will be reflected on this page with an updated effective date.
            </p>
          </div>

          {/* 13 */}
          <div>
            <h3 className="text-lg uppercase font-semibold text-slate-700">
              13. Consent
            </h3>

            <p className="mt-3 text-slate-500">
              By using our website, you agree to this Privacy Policy and the
              terms outlined herein.
            </p>
          </div>
        </div>
      </section>
      {/* ////Next section starts here */}
      <section className=" max-md:px-4 max-w-5xl mx-auto">
        <Newsletter />
      </section>
    </div>
  );
};

export default PrivacyPolicy;
