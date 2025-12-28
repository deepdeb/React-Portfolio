import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Hero from "./pages/Hero"
import About from "./pages/About"
import Services from "./pages/Services"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"

const App = () => {
  return (
    <Suspense fallback={<div className="p-40">Loading... </div>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Hero />} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/contact" element={<Contact/>} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App