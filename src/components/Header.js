// components/Header.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';
import logoHead from '../assets/logo/LOGO.png';

const Header = () => {
  const [isTransparent, setIsTransparent] = useState(true);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === '/') {
        setIsTransparent(window.scrollY < 50);
      } else {
        setIsTransparent(false);
      }
    };

    handleScroll(); // Panggil saat pertama render
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    setIsMobileNavOpen(false); // Tutup menu saat route berubah
  }, [location.pathname]);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(prev => !prev);
  };

  return (
    <header className={`header ${isTransparent ? 'header-transparent' : 'header-solid'}`}>
      <div className="container">
        <div className="logo">
          <img src={logoHead} alt="LOGO" />
        </div>

        <nav className="desktop-nav">
          <ul className="nav-links">
  <li><Link to="/" className={`nav-link ${isTransparent ? 'light-text' : 'dark-text'}`}>Beranda</Link></li>
  <li><Link to="/projects" className={`nav-link ${isTransparent ? 'light-text' : 'dark-text'}`}>Proyek</Link></li>
  <li><Link to="/#about" className={`nav-link ${isTransparent ? 'light-text' : 'dark-text'}`}>Tentang</Link></li>
</ul>

        </nav>

        <button
          className="mobile-menu-button"
          onClick={toggleMobileNav}
          aria-label="Toggle menu"
        >
          {isMobileNavOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`mobile-nav ${isMobileNavOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={toggleMobileNav}>Beranda</Link></li>
            <li><Link to="/projects" onClick={toggleMobileNav}>Proyek</Link></li>
            <li><Link to="/#about" onClick={toggleMobileNav}>Tentang</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
