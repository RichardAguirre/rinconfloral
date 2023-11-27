import SideHeadline from "../Components/SideHeadline";
import Article from "../Components/Article";
import Footer from "../Components/Footer";
import Chair from "../img/Stuhl.png"

const Bonsai = () => {
    document.querySelector("body").style.background = "";
    return ( 
        <div>
            <main>
                <section className="">
                    <SideHeadline headline="Bonsai" categorie="Productos"/>
                    <Article image={Chair} description="Diferentes tipos de bonsai, puedes dar un estilo oriental a tus espacios" />
                </section>
            </main>
            <Footer />
        </div>
     );
}
 
export default Bonsai;