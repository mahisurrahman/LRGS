import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'

function HomeLayouts() {
  return (
    <div className='font-lato'>
      <Navbar/>
      <Outlet></Outlet> 
      <Footer/> 
    </div>
  )
}

export default HomeLayouts