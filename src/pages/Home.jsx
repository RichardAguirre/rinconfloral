import React from "react";
import { Link } from "react-router-dom";
//------- Local--------
import "./Home.css"
import HomeImg from "../Assets/Home.png"

const Home = () => {
    document.querySelector("body").style.background = "linear-gradient(90deg, #FFFFFF 70%, #d6c290 30%)";

    return ( 
        <main className="home-side">
            <section>
            <p>Buscas <span>plantas o flores</span> para tus espacios?</p>
            <h1>Encuentra lo que buscas</h1>
            <Link to="./products"><button>Empieza a comprar</button></Link>
            </section>
            <img src={HomeImg} alt="" />
        </main>
     );
}
 
export default Home;