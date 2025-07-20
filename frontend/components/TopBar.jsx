import React from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Menu from "./Menu";
import axios from "axios";

const TopBar = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const Logout = async () => {
    try {
      await axios.post("http://localhost:3002/logout", {}, { withCredentials: true });
      removeCookie("token");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{100.2} </p>
          <p className="percent"> </p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
      </div>

      <Menu onLogout={Logout}/>
    </div>
  );
};

export default TopBar;