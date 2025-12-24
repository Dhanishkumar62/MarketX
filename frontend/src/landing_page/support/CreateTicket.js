import React from 'react';
import {Link} from 'react-router-dom'
function CreateTicket() {
  return ( 
  <div className='container'>
  <div className='row p-5 mt-5 mb-5'>
    <h1 className='fs-2 ' style={{marginLeft:"2%"}}>To create a ticket,select a relevant topic</h1>
   <div className='col-4 p-5 mt-2 mb-2'>
    <h5 className=''><i class="fa fa-plus-circle" aria-hidden="true"></i>Account Opening</h5>
    <Link  style={{textDecoration:"none",lineHeight:"2.5"}}>Resident individual</Link> <br/>
    <Link   style={{textDecoration:"none",lineHeight:"2.5"}}>Minor</Link><br/>
    <Link   style={{textDecoration:"none",lineHeight:"2.5"}}>Non Resident Indian (NRI)</Link><br/>
    <Link style={{textDecoration:"none",lineHeight:"2.5"}}>Company,Partnership,HUF and LLP</Link><br/>
    <Link  style={{textDecoration:"none",lineHeight:"2.5"}}>Glossary</Link><br/>

     </div>
     <div className='col-4 p-5 mt-2 mb-2'>
    <h5 className=''><i class="fa fa-plus-circle" aria-hidden="true"></i>Your Zerodha Account</h5>
    <Link   style={{textDecoration:"none",lineHeight:"2.5"}}>Your Profile</Link> <br/>
    <Link  style={{textDecoration:"none",lineHeight:"2.5"}}>Account modification</Link><br/>
    <Link   style={{textDecoration:"none",lineHeight:"2.5"}}>Client Master Report (CMR) and Depositry Participant (DP)</Link><br/>
    <Link   style={{textDecoration:"none",lineHeight:"2.5"}}>Nomination</Link><br/>
    <Link   style={{textDecoration:"none",lineHeight:"2.5"}}>Transfer and conversion of securities</Link><br/>
    
     </div>

     <div className='col-4 p-5 mt-2 mb-2'>
    <h5 className=''><i class="fa fa-plus-circle" aria-hidden="true"></i>Kite</h5>
    <Link   style={{textDecoration:"none",lineHeight:"2.5"}}>IPO</Link> <br/>
    <Link   style={{textDecoration:"none",lineHeight:"2.5"}}>Trading FAQs</Link><br/>
    <Link   style={{textDecoration:"none",lineHeight:"2.5"}}>Margin Trading Facility (MFT) and Margins</Link><br/>
    <Link   style={{textDecoration:"none",lineHeight:"2.5"}}>Charts and orders</Link><br/>
    <Link   style={{textDecoration:"none",lineHeight:"2.5"}}>Alerts and Nudges</Link><br/>
    <Link   style={{textDecoration:"none",lineHeight:"2.5"}}>General</Link><br/>
    
     </div>

     <div className='col-4 p-5 mt-2 mb-2'>
    <h5 className=''><i class="fa fa-plus-circle" aria-hidden="true"></i>Funds</h5>
    <Link   style={{textDecoration:"none",lineHeight:"2.5"}}>Add Money</Link> <br/>
    <Link   style={{textDecoration:"none",lineHeight:"2.5"}}>Withdraw money</Link><br/>
    <Link   style={{textDecoration:"none",lineHeight:"2.5"}}>Add bank accounts</Link><br/>
    <Link   style={{textDecoration:"none",lineHeight:"2.5"}}>eMandate</Link><br/>
     </div>

     <div className='col-4 p-5 mt-2 mb-2'>
    <h5 className=''><i class="fa fa-plus-circle" aria-hidden="true"></i>Console</h5>
    <Link   style={{textDecoration:"none",lineHeight:"2.5"}}>Portfolio</Link> <br/>
    <Link   style={{textDecoration:"none",lineHeight:"2.5"}}>Corporate actions</Link><br/>
    <Link   style={{textDecoration:"none",lineHeight:"2.5"}}>Funds statement</Link><br/>
    <Link   style={{textDecoration:"none",lineHeight:"2.5"}}>Reports</Link><br/>
    <Link   style={{textDecoration:"none",lineHeight:"2.5"}}>Profile</Link><br/>
    <Link   style={{textDecoration:"none",lineHeight:"2.5"}}>Segments</Link><br/>
  
     </div>

     <div className='col-4 p-5 mt-2 mb-2'>
    <h5 className=''><i class="fa fa-plus-circle" aria-hidden="true"></i>Coin</h5>
    <Link  style={{textDecoration:"none",lineHeight:"2.5"}}>Mutual funds</Link> <br/>
    <Link   style={{textDecoration:"none",lineHeight:"2.5"}}>National Pension Scheme (NPS)</Link><br/>
    <Link   style={{textDecoration:"none",lineHeight:"2.5"}}>Features on Coin</Link><br/>
    <Link   style={{textDecoration:"none",lineHeight:"2.5"}}>Payments and Orders</Link><br/>
    <Link   style={{textDecoration:"none",lineHeight:"2.5"}}>General</Link><br/>
     </div>
    </div>
   </div>
   );
}

export default CreateTicket;