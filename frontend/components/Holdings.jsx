import React, {useState, useEffect} from "react";
// import {holdings} from './data/data';

import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const buttonStyle = {
  backgroundColor: '#555',
  border: 'none',
  borderRadius: '6px',
  color: '#ffffff',
  padding: '10px 14px',
  fontSize: '16px',
  cursor: 'pointer',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.15)',
  transition: 'background-color 0.3s ease, transform 0.2s ease',
};


const Holdings = () => {

  const [allHoldings, setAllHoldings] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3002/allHoldings", { withCredentials: true }).then((res) => {
      console.log(res.data);
      setAllHoldings(res.data);
    })
  },[refresh]);

 
  const labels = allHoldings.map((subArray) => subArray["name"]);

   const data = {
    labels,
    datasets: [
    {
      label: 'Stock Price',
      data: allHoldings.map((stock) => stock.price),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
   
  ],
  }

  return (
    <>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "1rem"
      }}>
        <h3 className="title">Holdings ({allHoldings.length})</h3>
        <button onClick={() => setRefresh(prev => !prev)} style={buttonStyle}><i class="fa fa-refresh" aria-hidden="true"></i></button>
      </div>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>


          {allHoldings.map((stock, index) => {
            const currvalue = stock.price * stock.qty;
            const isProfit = currvalue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "Loss" : "profit";

            // har ek ko return karo
               return (
                 <tr key={index} >
                   <td>{stock.name}</td>
                   <td>{stock.qty}</td>
                   <td>{stock.avg.toFixed(2)}</td>
                   <td>{stock.price.toFixed(2)}</td>
                   <td>{currvalue.toFixed(2)}</td>
                   <td className={profClass}>{(currvalue - stock.avg * stock.qty).toFixed(2)}</td>
                   <td className={profClass}>{stock.net}</td>
                   <td className={dayClass}>{stock.day}</td>
                 </tr>
               )
          })    
      }
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;