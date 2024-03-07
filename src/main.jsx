import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './scss/index.scss'
//
import MainLoadScreen from './components/MainLoadScreen'
const App = lazy(() => import("./App"))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={<MainLoadScreen />}>
    <App />
  </Suspense>
)
