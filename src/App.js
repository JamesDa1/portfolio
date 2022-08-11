import "./App.css"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
// Switched from BrowserRouter to HashRouter to see if that fixed Gh-pages issue

import { useState } from "react"
import Navbar from "./components/Navbar"
import Sidebar from "./components/sidebar"
import Footer from "./components/Footer"
import Home from "./pages"
import About from "./pages/about"
import Projects from "./pages/projects"

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <main>
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
        <Footer />
      </Router>
    </main>
  )
}

export default App
