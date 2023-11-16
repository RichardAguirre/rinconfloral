import "./Nav.css";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
import React from "react";

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
