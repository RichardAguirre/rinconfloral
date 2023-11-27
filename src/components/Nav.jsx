import React from "react";
import { NavLink } from "react-router-dom";
//------- Local--------
import "./Nav.css";
import Logo from "../Assets/Logo.png";

const Nav = () => {
  return (
    <nav>
      <NavLink to="/">
        <img src={Logo} alt="" />
      </NavLink>
      <ul>
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            style={({ isActive }) => {
              return { color: isActive ? "#DAA520" : "" };
            }}
          >
            Acerca de nosostros
          </NavLink>
        </li>
        <li>
          <NavLink
            to="products"
            style={({ isActive }) => {
              return { color: isActive ? "#DAA520" : "" };
            }}
          >
            Productos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
