// components/Layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Layout.css'; // Import file CSS untuk Layout

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;