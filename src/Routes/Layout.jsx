import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const Layout = () => {
  return (
    <div className="layout">
      <Navbar/>
      <main className="main-content">
        <Outlet/>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;