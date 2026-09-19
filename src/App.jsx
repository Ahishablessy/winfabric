import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/services';
import Contact from './components/Contact';

import './index.css';

import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import logobgremove from './images/logobgremove.png';

export default function App() {

  return (
    <BrowserRouter>

      <Navbar />

      <main className="wrap">

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/services" element={<Services />} />

          <Route path="/contact" element={<Contact />} />

        </Routes>

      </main>

      {/* Footer */}
       <>
           <div className="site-footer">
     
             <div className="footer-col logo-col">
               <img
                 src={logobgremove}
                 alt="logo"
                 className="footer-logo"
               />
             </div>
     
             <div className="footer-col contact-col">
     
               <div className="footer-item fw-bold">
                 <IoCall />
                 &nbsp;&nbsp;
                 <a href="tel:+919460244204">+91-94602 44204</a>
               </div>
     
               <div className="footer-item fw-bold">
                 <MdEmail />
                 &nbsp;&nbsp;
                 <a href="mailto:admin@vinfabricationworks.com">
                   admin@vinfabricationworks.com
                 </a>
               </div>
     
             </div>
     
             <div className="footer-col links-col">
     
               <p><a href="/">Home</a></p>
               <p><a href="/about">About</a></p>
               <p><a href="/services">Our Services</a></p>
               <p><a href="/contact">Contact Us</a></p>
     
             </div>
     
           </div>
     
           <div className="footer-bottom fw-bold">
             © 2026. All rights reserved. Vin Fabrication Works
           </div>
         </>

    </BrowserRouter>
  );
}