import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import ThemeContextProvider from "../context/ThemeContextProvider"


const MainLayout = () => {
  return (
    <ThemeContextProvider>
      <div>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeContextProvider>
  )
}

export default MainLayout