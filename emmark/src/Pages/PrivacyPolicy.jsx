import React, { useState } from 'react'
import { assets } from '../asset/assets'
import { useNavigate } from 'react-router-dom';

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
              <button onClick={() => navigate("/")} className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-[#8A7DFF] hover:bg-blue-700 rounded-full">
                Home
              </button>
              <div className="text-white py-2 text-xl">•</div>
              <button className="px-6 py-2 border rounded-full">Our Policy</button>
            </div>
            </section>
      
            {/* ///Next section starts from here */}
             <section className="mt-12 pb-10 max-md:px-4 max-w-5xl mx-auto">
        <div className="text-sm text-slate-600 max-w-xl mb-10">
  <h1 className="text-xl uppercase font-semibold text-slate-700">
    Our Terms & Privacy Policy
  </h1>

  <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF] mt-2"></div>

  <p className="mt-3 font-semibold italic">
    Your trust matters to us — we are committed to protecting your data and ensuring transparency in how we operate.
  </p>

  <p className="mt-4 text-slate-500">
    This page outlines how Emmark-Tech collects, uses, and safeguards your information when you interact with our platform and services.
  </p>

  <p className="mt-4 text-slate-500">
    By using our services, you agree to the terms described here, designed to keep your experience secure, fair, and reliable.
  </p>
  <p className="mt-4 text-slate-500">Effective Date: 12th June, 2024</p>
</div>
<div>
 


 <h3 className="text-lg uppercase font-semibold text-slate-700">
    1. Introduction
  </h3>

Emmark Tech (“we”, “our”, or “us”) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website or interact with our services.

Emmark Tech is a technology brand based in Lagos, Nigeria, offering IT training and mentorship, custom software development, and enterprise IT solutions to a global audience.

---
 <h3 className="mt-4 text-lg uppercase font-semibold text-slate-700">
    2. Information We Collect
  </h3>


We only collect personal information that you voluntarily provide to us. This may include:

* **Name**
* **Email address**
* **Message content**

This information is collected through:

* Newsletter subscription forms
* Website contact forms
* Direct communication initiated by you

For project requests, additional information may be shared by you during further communication after initial contact.

---

<h3 className="mt-4 text-lg uppercase font-semibold text-slate-700">
    3. How We Use Your Information
  </h3>

We use the information collected to:

* Respond to inquiries and messages
* Provide requested services or project discussions
* Send newsletters (only if you subscribe)
* Improve communication and service delivery

We do not sell, rent, or trade your personal information.

---

<h3 className="mt-4 text-lg uppercase font-semibold text-slate-700">
    4. Cookies and Tracking
  </h3>

Our website:

* **Does not use cookies**
* **Does not track user activity**
* **Does not use third-party analytics or tracking tools**

Your browsing experience is private and not monitored.

---

<h3 className="mt-4 text-lg uppercase font-semibold text-slate-700">
   5. Data Sharing
  </h3>

We do not share your personal information with third parties, except:

* When required by law
* When necessary to protect our rights or comply with legal obligations

---

<h3 className="mt-4 text-lg uppercase font-semibold text-slate-700">
   6. Data Security
  </h3>

We take reasonable measures to protect your information from unauthorized access, loss, or misuse. However, no internet-based system is completely secure, and we cannot guarantee absolute security.

---

<h3 className="mt-4 text-lg uppercase font-semibold text-slate-700">
  7. Children’s Privacy
  </h3>


Our website is not harmful to individuals under the age of 18. However, we recommend that minors use the website under parental or guardian supervision.

We do not knowingly collect personal data from children without appropriate guidance.

---

<h3 className="mt-4 text-lg uppercase font-semibold text-slate-700">
  8. Payments and Financial Information
  </h3>

We do not process payments or billing directly on this website. Any financial transactions or agreements are handled outside the platform through direct communication.

---

<h3 className="mt-4 text-lg uppercase font-semibold text-slate-700">
  9. Your Rights
  </h3>
Depending on your location, you may have the right to:

* Request access to your personal data
* Request correction or deletion of your data
* Withdraw consent at any time

To exercise any of these rights, please contact us using the details provided on our Contact page.

---

<h3 className="mt-4 text-lg uppercase font-semibold text-slate-700">
  10. Third-Party Links

  </h3>
Our website may contain links to third-party platforms (e.g., social media). We are not responsible for the privacy practices of those platforms.

---

<h3 className="mt-4 text-lg uppercase font-semibold text-slate-700">
  11. Contact Information

  </h3>
All official contact details, including our email address, phone number, and social media handles, are available on our website’s Contact page.

---

<h3 className="mt-4 text-lg uppercase font-semibold text-slate-700">
 12. Updates to This Policy

  </h3>
We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated effective date.

---

<h3 className="mt-4 text-lg uppercase font-semibold text-slate-700">
13. Consent

  </h3> 

By using our website, you agree to this Privacy Policy and the terms outlined herein.

</div>
      </section>
    </div>
  )
}

export default PrivacyPolicy