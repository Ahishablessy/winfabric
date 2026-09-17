import { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';
import logobgremove from '../images/logobgremove.png';

const LINKS = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'services', label: 'Services', path: '/services' },
  { id: 'contact', label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header>

      {/* Top Contact Bar */}
      <div className="d-flex justify-content-end bg-secondary">
        <div className="p-2 text-white fw-bold">
          <IoCall />
          &nbsp;&nbsp;+91-9876543218
        </div>

        <div className="p-2 pe-5 text-white fw-bold">
          <MdEmail />
          &nbsp;&nbsp;admin@vinfabrications.com
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
          Menu
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