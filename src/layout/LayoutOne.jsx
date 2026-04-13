import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TopBar from '../components/TopBar'

const LayoutOne = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default LayoutOne