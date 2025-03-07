import React, { useState } from "react";
import axios from "axios";

const ModelViewer = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [prediction, setPrediction] = useState(null);

    // Handle Image Upload
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
                setSelectedImage(reader.result.split(",")[1]); // Extract Base64
            };
            reader.readAsDataURL(file);
        }
    };

    // Send Image to Flask API for Prediction
    const handlePredict = async () => {
        if (!selectedImage) {
            alert("Please upload an image first!");
            return;
        }

        try {
            const response = await axios.post("http://127.0.0.1:5000/predict", { image: selectedImage });
            setPrediction(response.data);
        } catch (error) {
            console.error("Error predicting:", error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-lg w-[420px] text-center">
                <h1 className="text-3xl font-bold mb-4 text-gray-700">🍃 Medicinal Plant Identification</h1>
            
                <input type="file" accept="image/*" onChange={handleImageChange} className="mb-4" />

                {previewImage && (
                <img src={previewImage} alt="Uploaded" className="w-48 h-48 object-cover rounded-lg mb-4" />
                )}

                <button 
                onClick={handlePredict} 
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                Predict
                </button>

                {prediction && (
                    <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                        <h3 className="text-lg font-semibold">Prediction:</h3>
                        <p>Class: <strong>{prediction.class}</strong></p>
                        <p>Confidence: <strong>{(prediction.confidence * 100).toFixed(2)}%</strong></p>
                    </div>
                    )   
                }
            </div>
        </div>
    );
};

export default ModelViewer;
