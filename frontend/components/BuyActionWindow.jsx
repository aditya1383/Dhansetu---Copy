// import React, { useContext, useState } from "react";
// import {Link} from 'react-router-dom';
// import axios from "axios";


// import GeneralContext from './GeneralContext';

// import "./BuyActionWindow.css";

// const BuyActionWindow = ({uid}) => {
//     const [stockQuantity, setStockQuantity] = useState(1);
//     const [stockPrice, setStockPrice] = useState(0.0);
//     const {closeBuyWindow} = useContext(GeneralContext);

//     const handleBuyClick = () => {
//         axios.post("http://localhost:3002/newOrder", {
//             name: uid,
//             qty: stockQuantity,
//             price: stockPrice,
//             mode: "BUY",
//         });

//          closeBuyWindow();
//     }

//     const handleClick = () => {
//        closeBuyWindow();
//     };


//     return (
//         <div className="container" id="buy-window" draggable="true">
//             <div className="regular-order">
//                 <div className="inputs">
//                     <fieldset>
//                         <legend>Qty.</legend>
//                         <input type="number" name="qty" id="qty" onChange={(e) => setStockQuantity(e.target.value)} value={stockQuantity}/>
//                     </fieldset>

//                     <fieldset>
//                         <legend>Price</legend>
//                         <input type="number" name="price" id="0.05" onChange={(e) => setStockPrice(e.target.value)} value={stockPrice}/>
//                     </fieldset>
//                 </div>
//             </div>

//             <div  className="buttons">
//                 <span>Margin required ₹140.65</span>
//             </div>

//             <Link className="btn btn-blue" onClick={handleBuyClick}>Buy</Link>
//             <Link to="" className="btn btn-grey" onClick={handleClick}>Cancel</Link>
//         </div>
//     )
// }

// export default BuyActionWindow;

// import React, { useState, useContext } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// import GeneralContext from "./GeneralContext";
// import "./BuyActionWindow.css";

// const BuyActionWindow = ({ uid }) => {
//   const [stockQuantity, setStockQuantity] = useState(1);
//   const [stockPrice, setStockPrice] = useState(0.0);

//   const { closeBuyWindow } = useContext(GeneralContext); // ✅ Access context method

//   const handleBuyClick = () => {
//     axios.post("http://localhost:3002/newOrder", {
//       name: uid,
//       qty: stockQuantity,
//       price: stockPrice,
//       mode: "BUY",
//     });

//     closeBuyWindow(); // ✅ Use context method
//   };

//   const handleCancelClick = () => {
//     closeBuyWindow(); // ✅ Use context method
//   };

//   return (
//     <div className="container" id="buy-window" draggable="true">
//       <div className="regular-order">
//         <div className="inputs">
//           <fieldset>
//             <legend>Qty.</legend>
//             <input
//               type="number"
//               name="qty"
//               id="qty"
//               onChange={(e) => setStockQuantity(e.target.value)}
//               value={stockQuantity}
//             />
//           </fieldset>
//           <fieldset>
//             <legend>Price</legend>
//             <input
//               type="number"
//               name="price"
//               id="price"
//               step="0.05"
//               onChange={(e) => setStockPrice(e.target.value)}
//               value={stockPrice}
//             />
//           </fieldset>
//         </div>
//       </div>

//       <div className="buttons">
//         <span>Margin required ₹140.65</span>
//         <div>
//           <Link className="btn btn-blue" onClick={handleBuyClick}>
//             Buy
//           </Link>
//           <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
//             Cancel
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BuyActionWindow;




import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid,prevPrice }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const { closeBuyWindow } = useContext(GeneralContext);

  const handleBuyClick = async () => {
   const response = await axios.post("http://localhost:3002/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
      prevPrice:prevPrice
    }, {
  withCredentials: true,
});

console.log("Order success", response.data)
    closeBuyWindow();
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="buy-window" id="buy-window" draggable="true">
      <div className="buy-window-order">
        <div className="buy-window-inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buy-window-buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="buy-window-btn buy-window-btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="buy-window-btn buy-window-btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
