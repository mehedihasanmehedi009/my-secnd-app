  import React, { use, useState } from 'react';
import Contry from './Contry/Contry';

function Contries({ contry }) {
   const  [ visitedcountry , setVisitedcountry] = useState([])
   const kipevisitedCountry = (contrys)=>{
    console.log("click",contrys)
    setVisitedcountry(contrys +1 )
   }
  const contries = use(contry);
  console.log(contries);

  return (
    <>
      <div className="text-2xl font-bold text-center my-4">
        Total Contries: {contries.length}

        <h1>Totle VisitedCountry :{visitedcountry.length}</h1>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {contries.map((contrys, index) => (
          <Contry key={index} contrys={contrys}
             kipevisitedCountry={kipevisitedCountry}
          />
        ))}
      </div>
    </>
  );
}

export default Contries;