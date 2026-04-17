import React from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqs = [
    {
      question: "What services does EmmarkTech offer?",
      answer:
        "EmmarkTech provides modern tech solutions including web development, UI/UX design, branding, and scalable digital systems tailored to your business needs.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Project timelines vary depending on complexity, but most standard projects are delivered within 2–6 weeks. We ensure timely delivery without compromising quality.",
    },
    {
      question: "Do you build responsive and mobile-friendly platforms?",
      answer:
        "Absolutely. Every solution we build is fully responsive and optimized for all devices to ensure a seamless user experience across mobile, tablet, and desktop.",
    },
    {
      question: "Can I request custom features for my project?",
      answer:
        "Yes, all our solutions are customizable. We work closely with you to understand your goals and build features that align perfectly with your vision.",
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer:
        "Yes, we provide continuous support, updates, and maintenance services to ensure your platform remains secure, fast, and up-to-date.",
    },
    {
      question: "Do you offer beginner-friendly tech training or courses?",
      answer:
        "Yes, EmmarkTech offers practical, hands-on tech training programs designed for all levels, from complete beginners to advanced learners. Our courses include step-by-step guidance, real-world projects, and mentorship support to help you build in-demand skills in web development, design, and modern digital tools.",
    },
    {
      question: "How do I get started with EmmarkTech?",
      answer:
        "Getting started is easy. Simply reach out through our contact page or request a consultation, and our team will guide you through the process step-by-step.",
    },
  ];

  return (
    <div className=" max-w-5xl mx-auto px-4 mt-6 pb-10">
      <div>
        <h1 className="text-xl uppercase font-semibold text-slate-700">
          Frequently Asked Questions
        </h1>
        <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"></div>

        <h1 className="text-3xl font-semibold mt-1">
          Got questions? We've got answers.
        </h1>

        <p className="mt-8">
          At EmmarkTech, we simplify technology for businesses. Here are answers
          to some of the most common questions about our services and process.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-start gap-8 mt-6">
        <img
          className="max-w-sm w-full rounded-xl h-auto"
          src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=830&h=844&auto=format&fit=crop"
          alt="FAQ visual"
        />

        <div>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-slate-200 py-4 cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-medium">{faq.question}</h3>

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${
                    openIndex === index ? "rotate-180" : ""
                  } transition-all duration-500 ease-in-out`}
                >
                  <path
                    d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                    stroke="#1D293D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <p
                className={`text-sm text-slate-500 transition-all duration-500 ease-in-out max-w-md ${
                  openIndex === index
                    ? "opacity-100 max-h-[300px] translate-y-0 pt-4"
                    : "opacity-0 max-h-0 -translate-y-2 overflow-hidden"
                }`}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
