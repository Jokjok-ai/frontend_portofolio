import React from 'react';
import './Footer.css'; // Import file CSS untuk Footer

// Import gambar ikon dari folder public
import whatsappIcon from '../assets/social-icons/whatsapp.png';
import telegramIcon from '../assets/social-icons/telegram.png';
import instagramIcon from '../assets/social-icons/instagram.png';
import githubIcon from '../assets/social-icons/github.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        {/* Link WhatsApp */}
        <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src={whatsappIcon} alt="WhatsApp" className="social-icon-image" />
        </a>

        {/* Link Telegram */}
        <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src={telegramIcon} alt="Telegram" className="social-icon-image" />
        </a>

        {/* Link Instagram */}
        <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src={instagramIcon} alt="Instagram" className="social-icon-image" />
        </a>

        {/* Link GitHub */}
        <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src={githubIcon} alt="GitHub" className="social-icon-image" />
        </a>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Joko Susanto. All rights reserved.</p>
    </footer>
  );
};

export default Footer;