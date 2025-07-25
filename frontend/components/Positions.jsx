import React,{useEffect, useState} from "react";
import axios 
from "axios";

// import {positions} from './data/data'
const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    axios.get("https://dhansetu-backend.onrender.com/allPositions").then((res) => {
      setAllPositions(res.data);
    })
  }, [])
  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>


          {allPositions.map((stock, index) => {
                      const currvalue = stock.price * stock.qty;
                      const isProfit = currvalue - stock.avg * stock.qty >= 0.0;
                      const profClass = isProfit ? "profit" : "loss";
                      const dayClass = stock.isLoss ? "Loss" : "profit";
          
                      // har ek ko return karo
                         return (
                           <tr key={index} >
                             <td>{stock.product}</td>
                             <td>{stock.name}</td>
                             <td>{stock.qty}</td>
                             <td>{stock.avg.toFixed(2)}</td>
                             <td>{stock.price.toFixed(2)}</td>
                             <td className={profClass}>{(currvalue - stock.avg * stock.qty).toFixed(2)}</td>
                             <td className={dayClass}>{stock.day}</td>
                           </tr>
                         )
                    })    
                }
        </table>
      </div>
    </>
  );
};

export default Positions;
