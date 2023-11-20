import "./SideHeadline.css"
import Flower from "../assets/Flower.png"
import React from "react";

const SideHeadline = (props) => {
    return ( 
        <section className="side-headline">
            <div className="side-headline-wrapper">
                <img src={Flower} alt="" />
                <h3>{props.headline}</h3>
            </div>
            <hr />
            <h2>{props.categorie}</h2>
        </section>
     );
}
 
export default SideHeadline;