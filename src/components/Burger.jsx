import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Squash as Hamburger } from 'hamburger-react';
import { useClickAway } from 'react-use';
import '../components/Burger.css';

const BurgerMenu = ({ routes, currentPath }) => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

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
                      onClick={() => setOpen(false)}
                      className={route.href === currentPath ? 'active' : ''}
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
