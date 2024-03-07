import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//
import Layout from './Layout'
import TechnnicalData from './Pages/TechnnicalData'
import Merch from './Pages/Merch'
import PhotoBank from './Pages/PhotoBank'

import PhotoBankDeco54 from './PhotoBanks/PhotoBankDeco54'
import PhotoBankSpiritXl from './PhotoBanks/PhotoBankSpiritXl'
import PhotoBankkeys from './PhotoBanks/PhotoBankkeys'
import PhotoBankProject from './PhotoBanks/PhotoBankProject'
import PhotoBankHydrowood from './PhotoBanks/PhotoBankHydrowood'
import PhotoBankQuick48 from './PhotoBanks/PhotoBankQuick48'
import PhotoBankDecotile from './PhotoBanks/PhotoBankDecotile'
import PhotoBankEvolve from './PhotoBanks/PhotoBankEvolve'
import PhotoBankSupreme from './PhotoBanks/PhotoBankSupreme'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}></Route>
      <Route path='/technnical-data' element={<TechnnicalData />}/>
      <Route path='/photo-bank' element={<PhotoBank />}/>
      <Route path='/merch' element={<Merch />}/>

      //PHOTO BANKS
      
      <Route path='/photo-bank/deco-54' element={<PhotoBankDeco54 />} />
      <Route path='/photo-bank/spirit-xl' element={<PhotoBankSpiritXl />} />
      <Route path='/photo-bank/keys' element={<PhotoBankkeys />} />
      <Route path='/photo-bank/project' element={<PhotoBankProject />} />
      <Route path='/photo-bank/hydrowood' element={<PhotoBankHydrowood />} />
      <Route path='/photo-bank/quick48' element={<PhotoBankQuick48 />} />
      <Route path='/photo-bank/decotile' element={<PhotoBankDecotile />} />
      <Route path='/photo-bank/evolve' element={<PhotoBankEvolve />} />
      <Route path='/photo-bank/supreme' element={<PhotoBankSupreme />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App