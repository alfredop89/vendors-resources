import { Link } from "react-router-dom";
import "../scss/Sidebar.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
function PhotoBankSidebar() {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="sidebar"
            initial={{ x: -1000, opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -1000, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="sidebar-container">
              <h2>Photo Bank</h2>
              <Link to="/photo-bank/deco-54">Deco54</Link>
              <Link to="/photo-bank/spirit-xl">Spirit XL</Link>
              <Link to="/photo-bank/keys">Keys</Link>
              <Link to="/photo-bank/project">Project</Link>
              <Link to="/photo-bank/hydrowood">Hydrowood</Link>
              <Link to ="/photo-bank/quick48">Quick48+</Link>
              <Link to="/photo-bank/decotile">Decotile</Link>
              <Link to="/photo-bank/Evolve">Evolve</Link>
              <Link to="/photo-bank/supreme">Supreme</Link>
            </div>
            <div className="close-sidebar" onClick={() => setIsOpen(false)}>
              <i className="fa-solid fa-chevron-left"></i>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence initial={true}>
        {!isOpen && (
          <div className="open-sidebar" onClick={() => setIsOpen(true)}>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default PhotoBankSidebar;
