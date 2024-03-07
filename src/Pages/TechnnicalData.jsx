import TechSidebar from "../Sidebars/TechSidebar";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { lazy, Suspense } from "react";
import Loader from "../components/Loader";
import "../scss/TechnnicalData.scss"
import {motion } from "framer-motion";
import Footer from "../components/Footer"

function TechnnicalData() {
  return (
    <>
      <Suspense fallback={<Loader />}>
      <Header />

      <motion.div 
      className="technnical-data-container"
      >
          <h1>CPF Technnical Data</h1>
          <motion.div className="content-container"
                initial={{ y: 200, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{duration: 1}}
          >
              <div className="section">
                <h3>Technnical Data</h3>
                <Link to="https://cpffloors.com/wp-content/uploads/2023/12/DECO54-Technical-Data.pdf">Deco54</Link>
                <Link to="https://cpffloors.com/wp-content/uploads/2023/12/KEYS-Technical-Data.pdf">Keys</Link>
                <Link to="https://cpffloors.com/wp-content/uploads/2023/12/PROJECT-Technical-Data.pdf">Project</Link>
                <Link to="https://cpffloors.com/wp-content/uploads/2023/09/HYDROWOOD-Technical-Data.pdf">Hydrowood</Link>
                <Link to="https://cpffloors.com/wp-content/uploads/2023/09/QUICK48-Technical-Data.pdf">Quick48+</Link>
                <Link to="https://cpffloors.com/wp-content/uploads/2023/09/DECOTILE-Technical-Data.pdf">Decotile</Link>
                <Link to="https://cpffloors.com/wp-content/uploads/2023/09/ft-finfloor-evolve-en-1.pdf">Evolve</Link>
                <Link to="https://cpffloors.com/wp-content/uploads/2023/09/ft-finfloor-evolve-en-1.pdf">Supreme</Link>
              </div>

              <div className="section">
                <h3>Test Labs</h3>
                <Link to="https://drive.google.com/file/d/1-InxUYW7mcXn1-WeYFmj40LfhOQ03Ie3/view?pli=1">Deco54</Link>
                <Link to="https://drive.google.com/file/d/1ypuCSJ_aWeHhP8evkA4BNrYWuu4vtw4t/view">Keys</Link>
                <Link to="https://drive.google.com/file/d/1stv_porc-O7-xMrJ2yGYKX2U1q8GapMp/view">Project</Link>
                <Link to="https://drive.google.com/file/d/1Mzb-e8e4Kl1qrzEvPv5qgMKblvKWaXm4/view">Corepad</Link>
                <Link to="https://drive.google.com/file/d/1bKodU046M5Ifw9yEMyJSp4-Z4cgltSOg/view">Finsa - Test Certification</Link>
              </div>

              <div className="section">
                <h3>Installation Manuals</h3>
                <Link to="https://cpffloors.com/wp-content/uploads/2023/09/SPC-FLOORS-Installation-Guidelines.pdf">CPF Installation Guidelines</Link>
                <Link to="https://cpffloors.com/wp-content/uploads/2023/09/Instructions-installation-finfloor-en-1.pdf">Finfloor Installation Manual</Link>
                <Link to="https://cpffloors.com/wp-content/uploads/2023/09/Instructions-cleaning-maintenance-finfloor-en.pdf">Maintenance</Link>
              </div>

              <div className="section">
                <h3>Legal Obligation</h3>
                <Link to="https://cpffloors.com/wp-content/uploads/2023/12/LEGAL_OBLIGATION_CPF.pdf">Legal Obligation Document</Link>
              </div>

              <div className="section">
                <h3>Warranty Sheet</h3>
                <Link to="https://cpffloors.com/wp-content/uploads/2023/12/Warranty-CPF-FLOORS.pdf">CPF Warranty Documentation</Link>
              </div>

          </motion.div>
          
      </motion.div>
      </Suspense>
      <Footer />


    </>
  );
}

export default TechnnicalData;
