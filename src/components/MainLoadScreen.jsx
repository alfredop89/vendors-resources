import React from 'react'
import "../scss/MainLoadScreen.scss"

function MainLoadScreen() {
  return (
    <div className="main-load-container">
        <img className='load-logo' src="/src/assets/Logo-tiendas.png" alt="" />
        <img className='load-spinner' src="/src/assets/load-37_256.gif" alt="" />
    </div>
  )
}

export default MainLoadScreen