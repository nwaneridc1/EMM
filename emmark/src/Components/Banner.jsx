import React from "react";

const Banner = () => {
  return (
    <div className="max-w-5xl mx-auto max-md:px-4 px-4 mt-6 pb-10">
      <section className="flex flex-col px-6 py-8 w-full text-justify rounded-2xl bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/banners/image-2.png')] bg-cover bg-center bg-no-repeat">
        <h1 className="text-2xl md:text-3xl font-medium text-white max-w-2xl">
          Have an IT solution need? look no further. Emmark-Tech got you
          covered.
        </h1>
        <div className="h-[3px] w-[32vh] my-1 bg-gradient-to-l from-transparent to-white"></div>
        <p className="text-sm md:text-base text-white max-w-xl mt-3">
          Whether you're a startup or an enterprise, we deliver scalable,
          world-class tech solutions to power your success across the globe.
        </p>
        <button className="flex items-center w-max gap-2 mt-8 hover:-translate-y-0.5 transition bg-gradient-to-r from-indigo-600 to-[#8A7DFF] py-3 px-8 rounded-full text-white">
          Get started
        </button>
      </section>
    </div>
  );
};

export default Banner;
