import React, { useState, useEffect, useRef } from "react";
import ModelCard from "./ModelCard";
import plantsData from "./plantsData"; // Import JSON data

const ModelViewer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPart, setSelectedPart] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedUse, setSelectedUse] = useState("");
  const [visiblePlants, setVisiblePlants] = useState(6); // Start with 6 plants
  const observerRef = useRef(null);

  // Extract dynamic filter options from data
  const categories = [...new Set(plantsData.map((plant) => plant.category))];
  const partsUsed = [...new Set(plantsData.map((plant) => plant.partUsed))];
  const regions = [...new Set(plantsData.map((plant) => plant.region))];
  const medicinalUses = [...new Set(plantsData.flatMap((plant) => plant.medicinalProperties))];

  // Filter plants based on search and selected criteria
  const filteredPlants = plantsData.filter((plant) => {
    const matchesSearch = plant.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || plant.category === selectedCategory;
    const matchesPart = !selectedPart || plant.partUsed === selectedPart;
    const matchesRegion = !selectedRegion || plant.region === selectedRegion;
    const matchesUse = !selectedUse || plant.medicinalProperties.includes(selectedUse);

    return matchesSearch && matchesCategory && matchesPart && matchesRegion && matchesUse;
  });

  // Infinite Scroll Observer
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisiblePlants((prev) => prev + 6); // Load 6 more items
        }
      },
      { threshold: 1.0 }
    );

    const observerTarget = document.getElementById("load-more-trigger");
    if (observerTarget) observerRef.current.observe(observerTarget);

    return () => observerRef.current.disconnect();
  }, [filteredPlants]);

  return (
    <div className="min-h-screen bg-white text-black p-6">
      <h1 className="text-3xl font-bold text-center mb-4">Medicinal Plants 3D Viewer</h1>

      {/* Advanced Search Section */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl font-semibold text-center mb-3 text-green-600">Advanced Search</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}
            className="p-2 border border-gray-300 rounded">
            <option value="">Category</option>
            {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
          </select>

          <select value={selectedPart} onChange={(e) => setSelectedPart(e.target.value)}
            className="p-2 border border-gray-300 rounded">
            <option value="">Part Used</option>
            {partsUsed.map((part) => <option key={part} value={part}>{part}</option>)}
          </select>

          <select value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)}
            className="p-2 border border-gray-300 rounded">
            <option value="">Region</option>
            {regions.map((region) => <option key={region} value={region}>{region}</option>)}
          </select>

          <select value={selectedUse} onChange={(e) => setSelectedUse(e.target.value)}
            className="p-2 border border-gray-300 rounded">
            <option value="">Medicinal Use</option>
            {medicinalUses.map((use) => <option key={use} value={use}>{use}</option>)}
          </select>
        </div>

        {/* Search Button */}
        <div className="text-center mt-3">
          <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            onClick={() => setVisiblePlants(6)}>Search</button>
        </div>
      </div>

      {/* Display Filtered Plants (Infinite Scroll) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredPlants.length > 0 ? (
          filteredPlants.slice(0, visiblePlants).map((plant) => <ModelCard key={plant.id} model={plant} />)
        ) : (
          <p className="text-center col-span-3 text-gray-600">No plants found.</p>
        )}
      </div>

      {/* Scroll Trigger for Infinite Scrolling */}
      <div id="load-more-trigger" className="h-10"></div>
    </div>
  );
};

export default ModelViewer;
