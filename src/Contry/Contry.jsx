 import React from 'react';

export const Contry = ({ contrys }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col justify-between">
      
      <div>
        {/* পতাকার অংশ */}
        <div className="h-40 w-full mb-4 overflow-hidden rounded-xl bg-gray-100">
          <img 
            src={contrys.flags?.png || contrys.flags?.flags?.png} 
            alt={contrys.flags?.alt || "Country Flag"} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* দেশের নাম */}
        <h2 className="text-xl font-bold text-gray-800">
          {contrys.name?.common}
        </h2>
        <p className="text-sm text-gray-500 mb-4">{contrys.name?.official}</p>
      </div>

      {/* অন্যান্য তথ্য */}
      <div className="text-sm text-gray-600 space-y-1.5 border-t border-gray-100 pt-3">
        <p>
          <strong>Capital:</strong> {
            Array.isArray(contrys.capital) 
              ? contrys.capital[0] 
              : contrys.capital?.capital?.[0] || "N/A"
          }
        </p>
        <p>
          <strong>Region:</strong> {
            typeof contrys.region === 'object' 
              ? contrys.region.region 
              : contrys.region || "N/A"
          }
        </p>
        <p>
          <strong>Population:</strong> {
            typeof contrys.population === 'object' 
              ? contrys.population.population?.toLocaleString() 
              : contrys.population?.toLocaleString() || "N/A"
          }
        </p>
      </div>
      
    </div>
  );
};

export default Contry;