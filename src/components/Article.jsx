import "./Article.css"
import React from "react";

const Article = (props) => {
    return ( 
        <section className="single-product">
            <img src={props.image} alt="" />
            <p>{props.description}</p>
        </section>
     );
}
 
export default Article;