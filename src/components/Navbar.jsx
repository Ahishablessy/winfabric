import { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import logobgremove from '../images/logobgremove.png';

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
   { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ current, onNavigate }) {
  const [open, setOpen] = useState(false);

  const handleClick = (id) => {
    onNavigate(id);
    setOpen(false);
  };

  return (
    <header>
      <div className="d-flex justify-content-end bg-secondary ">
   
    <div className="p-2 text-white fw-bold"><IoCall />&nbsp;&nbsp;+91-9876543218</div>
    <div className="p-2  pe-5 text-white fw-bold"><MdEmail />&nbsp;&nbsp;admin@vinfabrications.com</div>
  </div>
      <div className="navbar">
        {/* <div className="brand">Jordan Rivera</div> */}
        <img src={logobgremove} alt="logo"  style={{width:"100px", height:"90px"}}/>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="navlinks"
          onClick={() => setOpen((o) => !o)}
        >
          Menu
        </button>
        <ul id="navlinks" className={`navlinks ${open ? 'open' : ''}`}>
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                className={current === link.id ? 'active' : ''}
                onClick={() => handleClick(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
