import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import DigitalFlyer from "./components/DigitalFlyer"
import QRCodeGenerator from "./components/QRCodeGenerator"

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/flyer" element={<DigitalFlyer />} />
          <Route path="/qr-generator" element={<QRCodeGenerator />} />
        </Routes>
      </div>
    </Router>
  )
}

function HomePage() {
  return (
    <div className="home-page">
      <div className="home-header">
        <h1>Meryl's Kitchen Digital Marketing</h1>
        <p>Create and manage your digital flyer experience</p>
      </div>

      <div className="home-actions">
        <Link to="/flyer" className="home-btn primary">
          View Digital Flyer
        </Link>
        <Link to="/qr-generator" className="home-btn secondary">
          Generate QR Code
        </Link>
      </div>

      <div className="home-preview">
        <h3>How it works:</h3>
        <ol className="steps-list">
          <li>Generate a QR code for your digital flyer</li>
          <li>Print and place QR codes on tables, menus, or promotional materials</li>
          <li>Guests scan the code to view your interactive digital flyer</li>
          <li>They can call, get directions, and share with friends</li>
        </ol>
      </div>
    </div>
  )
}

export default App
