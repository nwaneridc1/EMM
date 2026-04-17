import React from "react";
import Footer from "../Components/Footer";
import Landing from "./Landing";
import Service from "./service";
import Newsletter from "./Newsletter";
import Portfolio from "./Portfolio";
import Sectionii from "./Sectionii";
import Reviews from "./Reviews";
import Banner from "../Components/Banner";
import Faq from "../Components/Faq";

const Home = () => {
  return (
    <div>
      <Landing />
      <Sectionii />
      <Reviews/>
      <Banner />
      <Faq />
      <Newsletter/>      
    </div>
  );
};
export default Home;
