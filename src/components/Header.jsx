import React, { useState } from "react";
import { AnimatePresence, motion, transform } from "framer-motion";
import { Link } from "react-router-dom";
import "../scss/Header.scss";



function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <header>
        <Link to="/">
          <img src="/src/assets/cpf-floors-cuadrado-logo-02-01.png" alt="" />
        </Link>

        <motion.div
          className="menu-bar"
          onClick={() => setOpenMenu(!openMenu)}
          whileHover={{ scale: 1.1 }}
        >
          <i className="fa-solid fa-bars"></i>
        </motion.div>

        <nav>
          <Link to="/merch">Merch</Link>
          <Link to="/photo-bank">Photo Bank</Link>
          <Link to="/technnical-data">Technnical Data</Link>
        </nav>

        <AnimatePresence initial={false}>
          {openMenu && (
            <motion.div
              className="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 250 }}
              exit={{height:0, opacity: 0}}
            >
              <Link to="/merch">Merch</Link>
              <Link to="/photo-bank">Photo Bank</Link>
              <Link to="/technnical-data">Technnical Data</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

export default Header;
