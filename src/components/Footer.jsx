import React from "react";
//------- Local--------
import Logo from "../assets/Logo.png"
import "./Footer.css"

const Footer = () => {
    return ( 
        <footer>
            <hr />
            <div>
                <img src={Logo} alt="" />
                <p>Medellin, Colombia</p>
            </div>
            <p className="copyright">© 2023 Rincon Floral</p>
        </footer>
     );
}
 
export default Footer;