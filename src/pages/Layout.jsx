import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import Burger from '../components/Burger';
import Footer from '../components/Footer';
import '../pages/Layout.css';

const Layout = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const routes = [
    { title: "Home", href: "/" },
    { title: "Portfolio", href: "/portfolio" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <div className="layout">
      <div className="navBorder">
        <nav className="nav">
          <ul>
            {routes.map((route) => (
              <li key={route.title}>
                <Link to={route.href} className={route.href === currentPath ? 'active' : ''}>
                  {route.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <Burger routes={routes} currentPath={currentPath} />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Layout;
