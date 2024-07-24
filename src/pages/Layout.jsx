import '../pages/Layout.css'; // Assuming your CSS file defines styles for the menu
import { useClickAway } from "react-use";
import { Outlet, Link } from "react-router-dom";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import Footer from '../components/Footer';

const Layout = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  
  useClickAway(ref, () => setOpen(false));

  const routes = [
    { title: "Home", href: "/" },
    { title: "Portfolio", href: "/portfolio" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <div className="layout">
      <nav className="nav">
        <ul>
            {/* Keep these links for desktop view */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="burger" ref={ref}>
        <Hamburger toggled={isOpen} size={25} toggle={setOpen} />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="burger-menu" // Add a class for styling
            >
              <ul className="burgerul">
                {routes.map((route, idx) => {
                  return (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1 + idx / 10,
                      }}
                      key={route.title}
                    >
                      <li className="burgerli">
                        <Link onClick={() => setOpen((prev) => !prev)} to={route.href}>
                          {route.title}
                        </Link>
                      </li>
                    </motion.div>
                  );
                })}
              </ul>
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Outlet />

      <Footer/>
    </div>
  );
};

export default Layout;
