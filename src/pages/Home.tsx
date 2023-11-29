import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const headers = {
          Authorization: 'bnFOLidBsVoyzi1orRTpWVRV1Zjf3yu5zIwynwmvku1O6NSwSN3TUzgk'
        };
        const response = await axios.get("https://api.pexels.com/v1/search?query=plants", { headers });
        if (response.data && response.data.photos.length > 0) {
          setImageUrl(response.data.photos[0].src.medium);
        }
      } catch (error) {
        console.error("Error fetching image", error);
      }
    };

    fetchImage();
  }, []);

  document.querySelector("body").style.background = "linear-gradient(90deg, #FFFFFF 70%, #d6c290 30%)";

  return (
    <main className="home-side">
      <section className="content-section">
        <div className="text-content">
          <p>Buscas <span>plantas o flores</span> para tus espacios?</p>
          <h1>Encuentra lo que buscas</h1>
          <Link to="./products"><button>Empieza a comprar</button></Link>
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
