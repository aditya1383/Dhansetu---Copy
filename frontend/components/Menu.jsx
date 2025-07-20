import React, {useState} from "react";
import {Link} from 'react-router-dom';
import axios from "axios";


const Menu = ({ onLogout }) => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  }

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  }
  const menuClass = "menu";
  const activeClass = "menu selected";
  return (
    <div className="menu-container">
      <img src="media\images\dashboardLogo.png" style={{ width: "50px" }} />
      <div className="menus top">
        <ul>
          <li>
            <Link style={{textDecoration:"none"}} to="/dashboard" onClick={() => handleMenuClick(0)}>
            <p className={selectedMenu===0 ? activeClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/dashboard/orders" onClick={() => handleMenuClick(1)}>
            <p className={selectedMenu===1 ? activeClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/dashboard/holdings" onClick={() => handleMenuClick(2)}>
            <p className={selectedMenu===2 ? activeClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/dashboard/positions" onClick={() => handleMenuClick(3)}>
            <p className={selectedMenu===3 ? activeClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/dashboard/funds" onClick={() => handleMenuClick(4)}>
            <p className={selectedMenu===4 ? activeClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/" onClick={() => handleMenuClick(5)}>
            <p className={selectedMenu===5 ? activeClass : menuClass}>Apps</p>
            </Link>
          </li>
           <li>
            <button onClick={onLogout}>
            <p className={selectedMenu===5 ? activeClass : menuClass}>Logout</p></button>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;