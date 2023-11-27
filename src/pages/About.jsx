import React from "react";
//------- Local--------
import Footer from "../Components/Footer";
import SideHeadline from "../Components/SideHeadline";
import AboutImg from "../Assets/About.png";
import "./About.css"

const About = () => {
    document.querySelector("body").style.background = "";
    return ( 
        <div>
        <main>
            <SideHeadline headline="Quienes somos" categorie="Acerca de nosotros"/>
            <section className="about-side">
                <img src={AboutImg} alt="" />
                <div>
                    <h2>Rincon Floral <span>es</span> una tienda de floristeria</h2>
                    <p>en donde puedes encontrar lo que necesites, a excelente costo. </p>                    
                    <p>Carlos Cano. </p>
                    <p>Richard Aguirre. </p>
                </div>
            </section>
        </main>
        <Footer/>
        </div>
     );
}
 
export default About;