import { Link } from "react-router-dom";
import React from "react";
//------- Local--------
import "./Categories.css"
import Desk from "../Assets/Planta.png"
import Chair from "../Assets/Bonsai.png"
import Bowl from "../Assets/Flor.png"
import SideHeadline from "../Components/SideHeadline";
import Footer from "../Components/Footer";

const Categories = () => {
    document.querySelector("body").style.background = "";
    return ( 
        <div>
            <main>
                <SideHeadline headline="Tipos de plantas" categorie="Productos"/>
                <section className="products-side">
                    <article>
                        <h3>plantas</h3>
                        <img src={Desk} alt="" />
                        <Link to="./plantas"><button>Comprar</button></Link>
                    </article>
                    <article>
                        <h3>Bonsai</h3>
                        <img src={Chair} alt="" />
                        <Link to="./bonsai"><button>Comprar</button></Link>
                    </article>
                    <article>
                        <h3>Flores</h3>
                        <img src={Bowl} alt="" />
                        <Link to="./flor"><button>Comprar</button></Link>
                    </article>
                </section>
            </main>
            <Footer />
        </div>
     );
}
 
export default Categories;