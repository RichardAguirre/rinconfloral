import { useState } from "react";
import reactLogo from "./assets/logo.png";
import plantas from "./assets/plantas.png";
import flores from "./assets/flores.png";
import bonsai from "./assets/bonsai.png";

import "./App.css";
import React from "react";

function App() {
  const [plantasCount, setPlantasCount] = useState(0);
  const [floresCount, setFloresCount] = useState(0);
  const [bonsaiCount, setBonsaiCount] = useState(0);
  const [carritoCount, setCarritoCount] = useState(0);

  const agregarAlCarrito = (categoria) => {
    if (categoria === "plantas") {
      setPlantasCount(plantasCount + 1);
    } else if (categoria === "flores") {
      setFloresCount(floresCount + 1);
    } else if (categoria === "bonsai") {
      setBonsaiCount(bonsaiCount + 1);
    }
    setCarritoCount(carritoCount + 1);
  };

  return (
    <>
      <div className="carrito">
        <span>🛒 Carrito: {carritoCount}</span>
      </div>
      <div>
        <a>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>TIENDA DE FLORES</h1>
      <h3>Todo en Flores y plantas</h3>

      <div className="categorias-container">
        <div className="categoria">
          <button onClick={() => setPlantasCount(plantasCount + 1)}>
            <img className="imagen1" src={plantas} alt="plantas" />
          </button>

          <p>
            <button
              onClick={() => setPlantasCount(plantasCount + 1)}
              className="icono-compra"
            >
              🛒
            </button>
            Plantas agregadas: {plantasCount}
          </p>
        </div>

        <div className="categoria">
          <button onClick={() => setFloresCount(floresCount + 1)}>
            <img className="imagen2" src={flores} alt="flores" />
          </button>

          <p>
            <button
              onClick={() => setFloresCount(floresCount + 1)}
              className="icono-compra"
            >
              🛒
            </button>
            Flores agregadas: {floresCount}
          </p>
        </div>

        <div className="categoria">
          <button onClick={() => setBonsaiCount(bonsaiCount + 1)}>
            <img className="imagen3" src={bonsai} alt="bonsai" />
          </button>
          <p>
            <button
              onClick={() => setBonsaiCount(bonsaiCount + 1)}
              className="icono-compra"
            >
              🛒
            </button>
            Bonsáis agregados: {bonsaiCount}
          </p>
        </div>
      </div>

      <div className="card">
        <p>
          Bienvenido a nuestro encantador rincón floral, donde la naturaleza se
          encuentra con la elegancia...
        </p>
      </div>
      <p className="read-the-docs">
        All Rights Reserved Carlos Cano & Richard Aguirre
      </p>
    </>
  );
}

export default App;
