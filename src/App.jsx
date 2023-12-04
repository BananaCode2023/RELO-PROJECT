import './App.css'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Index from './pages/Index'
import Collections from './pages/Collections'
import About from './pages/About'
import Contact from './pages/Contact'
import FirstSeries from './pages/First_Series'
import PhDiver from './pages/PhDiver'

function ScrollToTop() {
  window.scrollTo(0, 0);
  return null;
}

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/first_series" element={<FirstSeries />} />
          <Route path="/philippine-diver" element={<PhDiver />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

