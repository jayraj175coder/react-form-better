// src/components/Dashboard.tsx

import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to the World of Creativity
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Unlock your potential and explore endless possibilities with creativity.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
