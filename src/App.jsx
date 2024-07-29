import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Layouts from './layouts/Layouts'
import Aos from 'aos'

export default function App() {
  useEffect(()=>{
    Aos.init({
      duration: 1000, // Durée de l'animation
      offset: 200, // Offset pour éviter l'affichage de la barre de défilement
      easing: "ease-out", // Type d'animation (facultatif)
    });
  },[])
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layouts/>} >
            <Route index element={<Home/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
}
