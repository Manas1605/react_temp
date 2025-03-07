import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { VscHome, VscArchive, VscAccount, VscSettingsGear, VscSearch } from "react-icons/vsc";
import Dock from "./Dock";
import Home from "./Home";
import About from "./About";
import Model from "./Model";
import ModelViewer from "./ModelViewer"; // Keep only one import
import Contact from "./Contact";
import SplashCursor from "./SplashCursor";

function App() {
  const items = [
    { icon: <VscHome size={22} />, label: "Home", to: "/" },
    { icon: <VscAccount size={22} />, label: "About", to: "/about" },
    { icon: <VscSearch size={22} />, label: "Model", to: "/Model" },
    { icon: <VscArchive size={22} />, label: "Detection", to: "/model-viewer" }, // Updated route
    { icon: <VscSettingsGear size={22} />, label: "Contact", to: "/contact" },
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <SplashCursor />
        
        {/* Dock Navigation */}
        <Dock items={items} panelHeight={68} baseItemSize={50} magnification={70} />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Model" element={<Model />} />
          <Route path="/model-viewer" element={<ModelViewer />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
