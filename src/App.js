import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import Home from "./pages"
import About from "./pages/about"
import Prosjekter from "./pages/prosjekter"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/om-meg" element={<About />}></Route>
        <Route path="/prosjekter" element={<Prosjekter />}></Route>
      </Routes>
    </Router>
  )
}

export default App
