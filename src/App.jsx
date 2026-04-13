import React, { useEffect } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import AOS from 'aos'
import 'aos/dist/aos.css'

import LayoutOne from './layout/LayoutOne'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Cloud from './pages/Cloud'
import Contact from './pages/Contact'

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    })
  }, [])

  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<LayoutOne/>}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='services' element={<Services />} />
        <Route path='cloud' element={<Cloud />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    </Route>
  ))

  return (
    <>
      <RouterProvider router={myRoute} />
    </>
  )
}

export default App