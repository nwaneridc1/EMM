import React from "react";
import Landing from "./Landing";
import Newsletter from "./Newsletter";
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
