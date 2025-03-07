import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[600px] text-center">
        <h1 className="text-3xl font-bold text-green-700 mb-4">🌿 About Our Virtual Herbal Garden</h1>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to our **Interactive Virtual Herbal Garden**, a platform designed to explore and learn about medicinal plants using modern technology.
        </p>

        {/* Features Section */}
        <div className="text-left space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">🌱 What You Can Do Here?</h2>
          <ul className="list-disc pl-5 text-lg text-gray-700">
            <li>
              <strong>Explore Medicinal Plants:</strong> Learn about the healing properties of various plants.
            </li>
            <li>
              <strong>3D Plant Viewing:</strong> Interact with high-quality 3D models of selected medicinal plants.
            </li>
            <li>
              <strong>AI-Powered Plant Disease Detection:</strong> Upload an image of a plant and check if it's healthy or infected.
            </li>
            <li>
              <strong>Plant Identification:</strong> Use our ai model to recognize plants instantly.
            </li>
          </ul>
        </div>

        {/* Mission Section */}
        <div className="mt-6 text-left">
          <h2 className="text-2xl font-semibold text-gray-800">💡 Our Mission</h2>
          <p className="text-lg text-gray-700">
            We aim to blend **technology with nature** to create an engaging, educational, and interactive space for plant lovers. 
            By integrating **AI-powered plant recognition, 3D visualization, and plant disease detection**, we make plant learning fun and accessible!
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-6">
          <p className="text-lg font-semibold text-green-700">
            🌿 Step into the world of medicinal plants and start your journey today! 🌿
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
