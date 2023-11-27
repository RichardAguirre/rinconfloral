import SideHeadline from "../Components/SideHeadline";
import Article from "../Components/Article";
import Table from "../assets/Planta.png"
import Footer from "../Components/Footer";

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