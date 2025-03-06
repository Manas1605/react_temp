import React, { useState } from "react";

function PlantDiseaseDetection() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(false);

  // Handle image selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setPredictions([]); // Reset previous predictions
    }
  };

  // Handle image upload & prediction
  const handleUpload = async () => {
    if (!image) {
      alert("Please select an image first!");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("file", image);

    try {
      const response = await fetch("http://127.0.0.1:5000/predict_medicinal", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("API Response:", data); // Debugging

      if (data.predictions) {
        setPredictions(data.predictions);
      } else {
        setPredictions([{ name: "Unknown", confidence: 0 }]);
      }
    } catch (error) {
      console.error("Error:", error);
      setPredictions([{ name: "Failed to get prediction", confidence: 0 }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[420px] text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-700">🍃 Medicinal Plant Classification</h1>

        {/* File Input */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full border p-2 rounded-lg cursor-pointer"
        />

        {/* Image Preview */}
        {preview && (
          <div className="mt-4">
            <p className="text-lg font-semibold text-gray-600">Selected Image:</p>
            <img
              src={preview}
              alt="Uploaded Preview"
              className="mt-3 w-full max-h-60 object-contain rounded-lg border shadow-md"
            />
          </div>
        )}

        {/* Upload & Predict Button */}
        <button
          onClick={handleUpload}
          className="mt-5 bg-green-600 text-white px-5 py-2.5 rounded-lg shadow-md transition hover:bg-green-700 disabled:bg-gray-400"
          disabled={loading}
        >
          {loading ? "🔍 Analyzing..." : "🚀 Upload & Classify"}
        </button>

        {/* Prediction Results */}
        {predictions.length > 0 && (
          <div className="mt-5 text-lg font-semibold text-gray-800 text-left">
            <h2 className="text-xl mb-2">🌱 Species Identification</h2>
            {predictions.map((prediction, index) => (
              <div key={index} className="mb-3 p-2 border rounded-lg shadow-sm bg-gray-50">
                <p className="text-lg font-medium">
                  {prediction.name} <span className="text-green-600">({prediction.confidence}%)</span>
                </p>
                <a
                  href={`https://www.google.com/search?q=${prediction.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  🔎 Google
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default PlantDiseaseDetection;
