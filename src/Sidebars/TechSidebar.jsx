import { Link } from "react-router-dom";
import "../scss/Sidebar.scss";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function TechSidebar() {
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
              <h2>Technnical Data</h2>
              <Link>Technnical Data</Link>
              <Link>Test Labs</Link>
              <Link>Installation Manuals</Link>
              <Link>Legal Obligation</Link>
              <Link>Warranty Sheet</Link>
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
export default TechSidebar;
