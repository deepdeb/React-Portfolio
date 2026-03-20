import { Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import { Toaster } from "sonner"

import ThemeContextProvider from "./context/ThemeContextProvider"
import Navbar from "./layouts/Navbar"
import Footer from "./layouts/Footer"

import Hero from "./pages/Hero"
import About from "./pages/About"
import Services from "./pages/Services"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </>
  )
}

const App = () => {
  return (
    <ThemeContextProvider>
      <Suspense fallback={<div className="p-40">Loading...</div>}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
        <Toaster position="top-right" richColors />
      </Suspense>
    </ThemeContextProvider>
  )
}

export default App
