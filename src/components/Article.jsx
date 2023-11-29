import "./Article.css"
import { render } from '@testing-library/react';
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