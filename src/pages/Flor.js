import SideHeadline from "../Components/SideHeadline";
import Article from "../Components/Article";
import Bowl from "../img/Schuesseln.png"
import Footer from "../Components/Footer";

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