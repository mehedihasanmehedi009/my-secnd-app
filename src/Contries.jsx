  import React, { use } from 'react';
import Contry from './Contry/Contry';

function Contries({ contry }) {
  const contries = use(contry);
  console.log(contries);

  return (
    <>
      <div className="text-2xl font-bold text-center my-4">
        Total Contries: {contries.length}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {contries.map((contrys, index) => (
          <Contry key={index} contrys={contrys} />
        ))}
      </div>
    </>
  );
}

export default Contries;