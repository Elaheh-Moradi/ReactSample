import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import '../../../style/main.css';

const NavBar = () => {
  return (
      <div className="tabs-wrapper">
        <ul className="tabs">
          <li>
            <NavLink to="/" className={"tab"}>
              خانه
            </NavLink>
          </li>
          <li>
            <NavLink to="/posts" className={"tab"}>
              پست ها
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className={"tab"}>
              پروفایل
            </NavLink>
          </li>
        </ul>
      </div>
    
  );
};

export default NavBar;
