import { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';
import logobgremove from '../images/logobgremove.png';
import { GiHamburgerMenu } from "react-icons/gi";

const LINKS = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'services', label: 'Our Services', path: '/services' },
  { id: 'contact', label: 'Contact Us', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header>

      {/* Top Contact Bar */}
   <div
  className="d-none d-lg-flex justify-content-end align-items-center bg-secondary"
  style={{ paddingRight: "225px" }}
>
  <div className="p-2 text-warning fw-bold">
    <IoCall />
    &nbsp;&nbsp; <a href="tel:+919460244204" className='text-warning'>+91-94602 44204</a>
  </div>

  <div className="p-2 text-warning fw-bold">
    <MdEmail />
    &nbsp;&nbsp;<a href="mailto:admin@vinfabricationworks.com" className='text-warning'>
                   admin@vinfabricationworks.com
                 </a>
  </div>
</div>

      {/* Navbar */}
      <div className="navbar">

        {/* Logo */}
        <Link to="/" onClick={() => setOpen(false)}>
          <img
            src={logobgremove}
            alt="logo"
            style={{
              width: "100px",
              height: "90px"
            }}
          />
        </Link>

        {/* Mobile Menu */}
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="navlinks"
          onClick={() => setOpen((o) => !o)}
        >
         <GiHamburgerMenu />
        </button>

        {/* Navigation Links */}
        <ul
          id="navlinks"
          className={`navlinks ${open ? 'open' : ''}`}
        >
          {LINKS.map((link) => {

            const isActive =
              link.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(link.path);

            return (
              <li key={link.id}>
                <Link
                style={{color:"black",textDecoration:"none"}}
                  to={link.path}
                  className={isActive ? 'active' : ''}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

      </div>
    </header>
  );
}