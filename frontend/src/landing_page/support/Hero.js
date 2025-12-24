// import React from 'react';
// import { Link } from 'react-router-dom';

// function Hero() {
//   return ( 
//     <section className="container-fluid" id="supportHero">
//       <div className='p-5 ' id="supportWrapper">
//         <h4>Support Portal</h4>
//         <Link>Track Tickets</Link>
//       </div>
//        <div className='row p-5 mx-5'>
//         <div className='col-6 p-5 '>
//           <h1 className='fs-3'>Search for an answer or browser help topic to create a ticket</h1>
//           <input placeholder="Eg. how do I activate F&O why is my order getting rejected.."/>
//           <br/>
//           <Link >Track account opening</Link>
//           <Link >Track segment activation</Link>
//           <Link >Intraday margins</Link>
//           <Link href="">Kite user manual</Link>
//         </div>
//         <div className='col-6 p-5 '>
//         <h1 className='fs-3'>Featured</h1>
//         <ol>
//           <li><Link >Current Takeovers and Delisting - january 2024</Link></li>
//           <li className='mt-3'> <Link href="">Latest Intraday leverages -MIS & CO</Link></li>
//         </ol>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;


import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return ( 
    <section className="container-fluid" id="supportHero">
      <div className='p-5' id="supportWrapper">
        <h4>Support Portal</h4>
        <Link to="/support">Track Tickets</Link>
      </div>

      <div className='row p-5 mx-5'>
        <div className='col-6 p-5'>
          <h1 className='fs-3'>
            Search for an answer or browse help topics to create a ticket
          </h1>

          <input
            className="form-control mt-3"
            placeholder="Eg. how do I activate F&O, why is my order getting rejected..."
          />

          <br/>
          <Link to="/support">Track account opening</Link><br/>
          <Link to="/support">Track segment activation</Link><br/>
          <Link to="/support">Intraday margins</Link><br/>
          <Link to="/support">Kite user manual</Link>
        </div>

        <div className='col-6 p-5'>
          <h1 className='fs-3'>Featured</h1>
          <ol>
            <li>
              <Link to="/support">
                Current Takeovers and Delisting - January 2024
              </Link>
            </li>
            <li className='mt-3'>
              <Link to="/support">
                Latest Intraday leverages - MIS & CO
              </Link>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
