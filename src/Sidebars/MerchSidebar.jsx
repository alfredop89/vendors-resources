import { Link } from "react-router-dom";
import "../scss/Sidebar.scss";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function MerchSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="sidebar"
            initial={{ x: -1000, opacity: 1}}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -1000, opacity: 1 }}
            transition={{duration:1}}
          >
            <div className="sidebar-container">
              <h2>Merch</h2>
              <Link>Sell Sheets</Link>
              <Link>Products Guide</Link>
              <Link>CPF Benefits</Link>
              <Link>Products Kit</Link>
              <Link>Media & Press Kits</Link>
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

export default MerchSidebar;
