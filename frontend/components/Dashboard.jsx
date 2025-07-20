// import React from "react";
// import { Route, Routes } from "react-router-dom";

// // import Apps from "./Apps";
// import Funds from "./Funds";
// import Holdings from "./Holdings";

// import Orders from "./Orders";
// import Positions from "./Positions";
// import Summary from "./Summary";
// import WatchList from "./WatchList";

// const Dashboard = () => {
//   return (
//     <div className="dashboard-container">
//       {/* <GeneralContextProvider> */}
//         <WatchList />
//       {/* </GeneralContextProvider> */}
//       <div className="content">
//         <Routes>
//           <Route exact path="/" element={<Summary />} />
//           <Route path="/orders" element={<Orders />} />
//           <Route path="/holdings" element={<Holdings />} />
//           <Route path="/positions" element={<Positions />} />
//           <Route path="/funds" element={<Funds />} />
//           {/* <Route path="/apps" element={<Apps />} /> */}
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Outlet } from "react-router-dom";
 import WatchList from "./WatchList";
 import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import TopBar from './TopBar';
import { Password } from "@mui/icons-material";
import { GeneralContextProvider } from "./GeneralContext";
const DashBoard = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        console.warn("No token found, skipping verification.");
        return;
      }
      try {
      const { data } = await axios.post("https://dhansetu-backend.onrender.com", {}, { withCredentials: true });
      const { status, user } = data;

      if (status) {
        setUsername(user);
        toast(`Hello ${user}`, { position: "top-right" });
      } else {
        removeCookie("token");
        navigate("/login");
      }
    } catch (error) {
      console.error("Verification failed", error);
      navigate("/login");
    }
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>

      <div className="content">
        <Outlet />
      </div>
      <ToastContainer/>
    </div>
  )
}

export default DashBoard;


