import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const buttonStyle = {
  // backgroundColor: '#8B4513',        // Warm brown (SaddleBrown)
   backgroundColor: '#555',
  border: 'none',
  borderRadius: '6px',
  color: '#ffffff',                  // White text/icon
  padding: '10px 14px',
  fontSize: '16px',
  cursor: 'pointer',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.15)',
  transition: 'background-color 0.3s ease, transform 0.2s ease',
};

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [orderSignal, setAllOrderSignal] = useState(false) // to refresh the page

  useEffect(() => {
    axios.get("https://dhansetu-backend.onrender.com/allOrders", { withCredentials: true }).then((res) => {
      console.log(res.data);
      setAllOrders(res.data);
    })
  },[orderSignal])
  return (
    (allOrders.length === 0) ? (
      <div className="orders">
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    </div>
    ) : (
      <>
        <div style={{display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "1rem"}}>
          <h3 className="title">Orders ({allOrders.length})</h3>
        <button onClick={() => setAllOrderSignal(prev => !prev)} style={buttonStyle}><i class="fa fa-refresh" aria-hidden="true"></i></button>
        </div>

      <div className="order-table">
        <table>
          <thead>
          <tr>
            <th>Name</th>
            <th>Qty.</th>
            <th>Price per stock</th>
            <th>Total Price </th>
            <th>Mode</th>
          </tr>
          </thead>

          <tbody>
          {allOrders.map((stock, index) => {
            const currvalue = stock.price * stock.qty;
            // har ek ko return karo
               return (
                 <tr key={index} >
                   <td>{stock.name}</td>
                   <td>{stock.qty}</td>
                   <td>{stock.price.toFixed(2)}</td>
                   <td>{currvalue.toFixed(2)}</td>
                   <td>{stock.mode}</td>
                 </tr>
               )
          })    
      }
      </tbody>
        </table>

      </div>
      </>
    )
    
  );
};

export default Orders;
