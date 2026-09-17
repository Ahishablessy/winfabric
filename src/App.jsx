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
      <div
        className="d-flex justify-content-around"
        style={{ background: "lightgrey" }}
      >

        <div className="p-2">
          <img
            src={logobgremove}
            alt="logo"
            style={{
              width: "200px",
              height: "200px"
            }}
          />
        </div>

        <div className="p-2">

          <div className="p-2 fw-bold">
            <IoCall />
            &nbsp;&nbsp;+91-9876543218
          </div>

          <div className="p-2 fw-bold">
            <MdEmail />
            &nbsp;&nbsp;admin@vinfabrications.com
          </div>

        </div>

        <div className="p-2">

          <p>
            <a href="/">Home</a>
          </p>

          <p>
            <a href="/about">About</a>
          </p>

          <p>
            <a href="/services">Our Services</a>
          </p>

          <p>
            <a href="/contact">Contact Us</a>
          </p>

        </div>

      </div>

      <footer>
        © 2026 Jordan Rivera. Built with care.
      </footer>

    </BrowserRouter>
  );
}