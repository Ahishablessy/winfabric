import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './index.css';
import Services from './components/services';
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import logobgremove from './images/logobgremove.png';

const PAGES = ['home', 'about','services', 'contact'];

export default function App() {
  const [page, setPage] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    return PAGES.includes(hash) ? hash : 'home';
  });

  useEffect(() => {
    window.location.hash = page;
  }, [page]);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (PAGES.includes(hash)) setPage(hash);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (target) => {
    setPage(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar current={page} onNavigate={navigate} />
      <main className="wrap">
        {page === 'home' && <Home onNavigate={navigate} />}
        {page === 'about' && <About />}
         {page === 'services' && <Services />}
        {page === 'contact' && <Contact />}
        
      </main>
     
       <div className="d-flex justify-content-around " style={{background:"lightgrey"}}>
    <div className="p-2 "> <img src={logobgremove} alt="logo"  style={{width:"200px", height:"200px"}}/></div>
    <div className="p-2">
        <div className="p-2 fw-bold"><IoCall />&nbsp;&nbsp;+91-9876543218</div>
        <div className="p-2 fw-bold"><MdEmail />&nbsp;&nbsp;admin@vinfabrications.com</div>
        </div>
    <div className="p-2 ">
      <p>Home</p>
      <p>About</p>
      <p>Our Services</p>
      <p>Contact Us</p>
    </div>
    
  </div>
   <footer>
        © 2026 Jordan Rivera. Built with care.</footer>
    </>
  );
}
