import { useState } from "react";
import { CON_URL } from "../utils/contants";

const Header = () => {
  const[btnNameReact,setBtnNameReact]=useState("login");
  console.log("Hello Header");
    return (
      <div className="header">
        <div className="logo-container">
          <img
            src={CON_URL}
            className="logo"
            alt=""
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="login" onClick={()=>{
              btnNameReact==="login"?setBtnNameReact("logout"):setBtnNameReact("login");;
            }}>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };

export default Header;