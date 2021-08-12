import React from 'react'

//IMPORT COMPONENTS
import Navbar from '../Navbar/Navbar.js';
import Hero from '../Hero/Hero.js';
import Features from '../Features/Features.js';
import Information from '../Information/Information.js';
import Pricing from '../Pricing/Pricing.js';
import Testimonials from '../Testimonials/Testimonials';
import LargeCTA from '../LargeCTA/LargeCTA';
import Footer from '../Footer/Footer';


const Home = () => {
  return (
    <div class="body-wrap">
      <Navbar/>
      <main class="site-content">
        <Hero/>
        <Features/>
        <Information/>
        <Pricing/>
        <Testimonials/>
        <LargeCTA/>
      </main>
      <Footer/>
    </div>
  )
}

export default Home
