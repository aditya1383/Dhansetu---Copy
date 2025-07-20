// import React, {useState} from "react";

// import BuyActionWindow from "./BuyActionWindow";

// const GeneralContext = React.createContext({
//     openBuyWindow: (uid) => {},
//     closeBuyWindow: () => {},
// });

// export const GeneralContextProvider = (props) => {
//     const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
//     const [selectedStockUID, setSelectedStockUID] = useState("");

//     const handleOpenBuyWindow = (uid) => {
//         setIsBuyWindowOpen(true);
//         setSelectedStockUID(uid);
//     };

//     const handlecloseBuyWindow = () => {
//         setIsBuyWindowOpen(false);
//         setSelectedStockUID("");
//     };

//     return (
//         <GeneralContext.Provider
//         value={{
//             openBuyWindow:handleOpenBuyWindow,
//             closeBuyWindow:handlecloseBuyWindow,
//         }}
//         >
//             {props.children}
//             {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
//         </GeneralContext.Provider>
//     )
// }

// export default GeneralContext;

// import React, { useState } from "react";

// import BuyActionWindow from './BuyActionWindow';

// const GeneralContext = React.createContext({
//   openBuyWindow: (uid) => {},
//   closeBuyWindow: () => {},
// });

// export const GeneralContextProvider = (props) => {
//   const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
//   const [selectedStockUID, setSelectedStockUID] = useState("");

//   const handleOpenBuyWindow = (uid) => {
//     setIsBuyWindowOpen(true);
//     setSelectedStockUID(uid);
//   };

//   const handleCloseBuyWindow = () => {
//     setIsBuyWindowOpen(false);
//     setSelectedStockUID("");
//   };

//   return (
//     <GeneralContext.Provider
//       value={{
//         openBuyWindow: handleOpenBuyWindow,
//         closeBuyWindow: handleCloseBuyWindow,
//       }}
//     >
//       {props.children}
//       {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
//     </GeneralContext.Provider>
//   );
// };

// export default GeneralContext;


import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid, prevPrice) => {},
  closeBuyWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState({ uid: "", prevPrice: 0 });

  const handleOpenBuyWindow = (uid, prevPrice) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID({uid, prevPrice});
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID.uid} prevPrice={selectedStockUID.prevPrice} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
