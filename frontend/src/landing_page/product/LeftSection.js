import React from 'react';

function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
  return ( 
    <div className="container mt-5">
      <div className="row ">
        <div className="col-6 ">
          <img src={imageURL} />
        </div>
         <div className="col-6 p-5 mt-3">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div><a href={tryDemo} style={{textDecoration:"none"}}>TryDemo 
            <i class="fa fa-long-arrow-right" aria-hidden="true" style={{marginLeft:"15px"}}></i></a>
          <a href={learnMore} style={{marginLeft:"50px",textDecoration:"none"}}>Learn More
          <i class="fa fa-long-arrow-right" aria-hidden="true" style={{marginLeft:"15px"}}></i></a></div>
          <div className='mt-4'>
          <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt="google"/></a>
          <a href={appStore} style={{marginLeft:"50px"}} ><img src="media/images/appstore.svg" alt="app"/> </a>
          </div>
         </div>
      </div>
    </div>
   );
}

export default LeftSection;