import React from "react";
//------- Local--------
import SideHeadline from "../Components/SideHeadline";
import Article from "../Components/Article";
import Footer from "../Components/Footer";
import Table from "../Assets/Planta.png"

const Plantas = () => {
    document.querySelector("body").style.background = "";
    return ( 
        <div>
            <main>
                <section className="">
                    <SideHeadline headline="Plantas" categorie="Productos"/>
                    <Article image={Table} description="Tenemos diferentes tipos de plantas decorativas para que mejores y des vida a tus espacios" />
                </section>
            </main>
            <Footer />
        </div>
     );
}
 
export default Plantas;