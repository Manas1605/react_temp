import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { VscHome, VscArchive, VscAccount, VscSettingsGear, VscSearch } from "react-icons/vsc";
import Dock from "./Dock";
import Home from "./Home";
import About from "./About";
import ModelViewer from "./ModelViewer";
import PlantDiseaseDetection from "./PlantDiseaseDetection";
import Contact from "./Contact";
import SplashCursor from "./SplashCursor";

function App() {
  const items = [
    { icon: <VscHome size={22} />, label: "Home", to: "/" },
    { icon: <VscAccount size={22} />, label: "About", to: "/about" },
    { icon: <VscSearch size={22} />, label: "Model", to: "/model-viewer" },
    { icon: <VscArchive size={22} />, label: "Detection", to: "/plant-disease-detection" },
    { icon: <VscSettingsGear size={22} />, label: "Contact", to: "/contact" },
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
      <SplashCursor />
        {/* Dock Navigation */}
        <Dock items={items} panelHeight={68} baseItemSize={50} magnification={70}  />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/model-viewer" element={<ModelViewer />} />
          <Route path="/plant-disease-detection" element={<PlantDiseaseDetection />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
