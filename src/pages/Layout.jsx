// Layout.js
import '../pages/Layout.css';
import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from '../components/Footer';
import BurgerMenu from '../components/Burger';

const Layout = () => {
  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav ul li a');

    function setActiveLink(href) {
      navLinks.forEach(link => {
        if (link.getAttribute('href') === href) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }

    function handleLinkClick(event) {
      const href = event.target.getAttribute('href');
      setActiveLink(href);
    }

    navLinks.forEach(link => link.addEventListener('click', handleLinkClick));

    // Set the initial active link based on the current URL
    const currentPath = window.location.pathname;
    setActiveLink(currentPath);

    return () => {
      navLinks.forEach(link => link.removeEventListener('click', handleLinkClick));
    };
  }, []);

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
                <Link to={route.href}>{route.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <BurgerMenu routes={routes} />

      <Outlet />

      <Footer/>
    </div>
  );
};

export default Layout;
