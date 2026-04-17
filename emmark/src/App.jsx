import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import ReactGA from 'react-ga4'; // ✅ GA import
ReactGA.initialize("G-EJW03PCDN0"); // ✅ Your GA4 Measurement ID

// Pages
import Home from './Pages/Home';
import Services from './Pages/Services';
import PrivacyPolicy from './Pages/Privacy';

// Components


// Fonts and Styles
import '@fontsource/inter';
import '@fontsource/inter/700.css';
import { Toaster } from "react-hot-toast";
import './App.css';
import ScrollToTop from './Pages/ScrollToTop';
import AboutUs from './Pages/AboutUs';
import Footer from './Components/Footer';
import ContactUs from './Pages/ContactUs';
import Testimonials from './Pages/Testimonials';
import Blogs from './Pages/Blogs';
import PostDetails from './Pages/PostDetails';

// ✅ Google Analytics listener
const GAListener = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return null;
};

const App = () => {
  return (
    <div className='font'>
      <Toaster position="top-right" reverseOrder={false} />
        <GAListener />
        <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/blogs' element={<Blogs />}/>
          <Route path="/post/:id" element={<PostDetails />} />
          <Route path='/services' element={<Services />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/privacy' element={<PrivacyPolicy />} />
          
        </Routes>
        <Footer />
    </div>
  );
};

export default App;
