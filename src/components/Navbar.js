import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import '../styles/Navbar.css'; 

export default function Navbar() {
  const navigate=useNavigate();
  return (
    <nav className="navbar">
      <div className="logo" onClick={()=>{navigate('/')}}>🎬 Movix</div>
      <div className="nav-links">
        <NavLink to="/" className="link">Home</NavLink>
        <NavLink to="/about" className="link">About</NavLink>
      </div>
    </nav>
  );
}
