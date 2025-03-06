import React from "react";

const ModelCard = ({ model }) => {
  return (
    <div className="border rounded-lg p-4 transition-shadow hover:shadow-lg">
      <h2 className="text-xl font-semibold mb-2">{model.title}</h2>
      <p className="text-gray-600 mb-3">{model.description}</p>
      
      <iframe
        title={model.title}
        src={model.embedUrl}
        className="w-full h-64 rounded"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <div className="mt-3 flex flex-wrap gap-2">
        {model.medicinalProperties.map((property) => (
          <span key={property} className="px-2 py-1 bg-green-100 text-green-800 text-sm rounded">
            {property}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ModelCard;
