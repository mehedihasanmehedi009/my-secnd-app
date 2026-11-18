 import React, { useState } from 'react';
 
export const Contry = ({ contrys, kipevisitedCountry }) => {
  const  [visited, setVisited] = useState(false)

   const clickviisited  = () =>{
    //  setVisited(visited ? false : true)
     setVisited(!visited)
     kipevisitedCountry(contrys)
   }
  return (
  <div 
  className={`rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col justify-between ${
    visited 
      ? "bg-blue-50/30 border-2 border-blue-500 text-blue-900" 
      : "bg-white border border-gray-200 text-gray-800"
  }`}
>     
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
 <button  onClick={clickviisited} className="custom-btn btn-primary">
        
        { visited ? "Visited" : "Not visited"}
      </button>
    </div>
  );
};

export default Contry;