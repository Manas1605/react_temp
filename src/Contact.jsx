import React from "react";
import { FaEnvelope, FaUser } from "react-icons/fa";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[500px] text-center">
        <h1 className="text-3xl font-bold text-green-700 mb-6">📞 Contact Us</h1>
        
        <div className="text-left space-y-5">
          {[
            { name: "Priyanshu Bokde", email: "Pbokde150@gmail.com" },
            { name: "Nachiket Jat", email: "NachiketJat@gmail.com" },
            { name: "Manas Bhajgawre", email: "manasbhajgawre@gmail.com" },
            { name: "Nishad Palsapure", email: "palsapurenishad@gmail.com" },
          ].map((contact, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-sm bg-gray-50">
              <p className="text-lg font-semibold flex items-center">
                <FaUser className="text-green-600 mr-2" /> {contact.name}
              </p>
              <p className="text-gray-700 flex items-center">
                <FaEnvelope className="text-blue-500 mr-2" />
                <a href={`mailto:${contact.email}`} className="hover:underline">
                  {contact.email}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
