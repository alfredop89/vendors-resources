import React from 'react'
import "../scss/MainBanner.scss"
import { motion } from 'framer-motion'

function MainBanner() {
  return (
    <div className="main-banner">

      <motion.div 
      className="main-banner-text"
      initial={{y: -500, opcacity: 0}}
      animate={{y: 0, opcacity: 1}}
      transition={{duration:0.8}}>
        <h1>Vendors<br/> Resources</h1>
      </motion.div>

      <button>Visualize it</button>
    </div>
  )
}

export default MainBanner