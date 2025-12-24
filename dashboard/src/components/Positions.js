import React,{useState,useEffect} from 'react';
//  import { positions } from "../data/data";

 import axios from 'axios';


const Positions = () => {

const [allPositions,setAllPositions]=useState([]);

useEffect(()=>{
  axios.get("http://localhost:3000/allPositions").then((res)=>{
    console.log(res.data);
    setAllPositions(res.data);
  })
},[])

  return (
    <>
      <h3 className="title">Holding ({allPositions.length})</h3>
      <div className='order-table'>
        <table>
          <thead >
            <tr>
              <th>Instrument</th>
              <th>Qty</th>
              <th>Avg.cost</th>
              <th>LTP</th>
              <th>CUR.VAL</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allPositions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
