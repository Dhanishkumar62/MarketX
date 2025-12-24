import React from 'react';

function Hero() {
  return ( 
    <diV className='container  border-bottom mb-5'>
      <div className='row text-center mt-5 p-3'>
      <h1>Zerodha Products</h1>
      <h2 className='text-muted mt-3 fs-4'>Sleek, modern, and intuitive trading platforms</h2>
      <p className='mt-3 mb-5'>Check out our <a href='' style={{textDecoration:"none"}}>investment offerings 
         <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a> 
     </p>
      </div>
    </diV>
   );
}

export default Hero;