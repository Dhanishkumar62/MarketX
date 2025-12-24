import React from 'react';

function RightSection({productName,productDescription,learMore,ImageURL}) {
  return ( 
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-6  p-5 mt-5 ' >
          <h1 className='mt-3'>{productName}</h1>
          <p >{productDescription}</p>
          <a href={learMore}>LearMore</a>
        </div>
          <div className='col-6'>
            <img src={ImageURL}/>
          </div>
      </div>
    </div>
   );
}

export default RightSection;