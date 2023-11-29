import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [imageUrl, setImageUrl] = useState("");

  const fetchImage = async () => {
    try {
      const headers = {
        Authorization:
          "bnFOLidBsVoyzi1orRTpWVRV1Zjf3yu5zIwynwmvku1O6NSwSN3TUzgk",
      };
      const response = await axios.get(
        "https://api.pexels.com/v1/search?query=plants",
        { headers }
      );
      if (response.data && response.data.photos.length > 0) {
        const randomIndex = Math.floor(
          Math.random() * response.data.photos.length
        );
        setImageUrl(response.data.photos[randomIndex].src.medium);
      }
    } catch (error) {
      console.error("Error fetching image", error);
    }
  };

  document.querySelector("body").style.background =
    "linear-gradient(90deg, #FFFFFF 70%, #d6c290 30%)";

  return (
    <main className="home-side">
      <button className="load-image-button" onClick={fetchImage}>
        ver fotos de plantas
      </button>
      <section className="content-section">
        <div className="text-content">
          <p>
            Buscas <span>plantas o flores</span> para tus espacios?
          </p>
          <h1>Encuentra lo que buscas</h1>
          <Link to="./products">
            <button>Empieza a comprar</button>
          </Link>
        </div>
        {imageUrl && (
          <div className="image-container">
            <img src={imageUrl} alt="Plants" />
            <p className="image-caption">Imagen extraída del API de Pexels</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default Home;
