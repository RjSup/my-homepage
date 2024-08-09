import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Squash as Hamburger } from 'hamburger-react';
import { useClickAway } from 'react-use';
import '../components/Burger.css'; // Import the relevant CSS file

const BurgerMenu = ({ routes }) => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  useEffect(() => {
    const burgerLinks = document.querySelectorAll('.burgerul li a');

    function setActiveLink(links, href) {
      links.forEach(link => {
        if (link.getAttribute('href') === href) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }

    function handleLinkClick(event) {
      const href = event.target.getAttribute('href');
      setActiveLink(burgerLinks, href);
      setOpen(false); // Close the burger menu after selection
    }

    burgerLinks.forEach(link => link.addEventListener('click', handleLinkClick));

    // Set the initial active link based on the current URL
    const currentPath = window.location.pathname;
    setActiveLink(burgerLinks, currentPath);

    return () => {
      burgerLinks.forEach(link => link.removeEventListener('click', handleLinkClick));
    };
  }, []);

  return (
    <div className="burger" ref={ref}>
      <Hamburger toggled={isOpen} size={25} toggle={setOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="burger-menu-overlay"
          >
            <ul className="burgerul">
              {routes.map((route, idx) => (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1 + idx / 10,
                  }}
                  key={route.title}
                >
                  <li className="burgerli">
                    <Link
                      to={route.href}
                      onClick={() => setOpen(false)} // Close the menu when clicking a link
                    >
                      {route.title}
                    </Link>
                  </li>
                </motion.div>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BurgerMenu;
