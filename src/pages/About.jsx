import React from "react";
import Footer from "../components/Footer";
import SideHeadline from "../components/SideHeadline";
import AboutImg from "../assets/About.png";
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
                </div>
            </section>
        </main>
        <Footer/>
        </div>
     );
}
 
export default About;