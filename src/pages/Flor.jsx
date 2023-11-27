import React from "react";
//------- Local--------
import SideHeadline from "../Components/SideHeadline";
import Article from "../Components/Article";
import Footer from "../Components/Footer";
import Bowl from "../Assets/Flor.png"

const Flor = () => {
    document.querySelector("body").style.background = "";
    return ( 
        <div>
            <main>
                <section className="">            
                    <SideHeadline headline="Flores" categorie="Products"/>
                    <Article image={Bowl} description="Flores para decorar o regalar en una fecha especial" />
                </section>
            </main>
            <Footer />
        </div>
     );
}
 
export default Flor;