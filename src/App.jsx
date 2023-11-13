import { useState } from "react";
import reactLogo from "./assets/logo.png";
import plantas from "./assets/plantas.png";
import flores from "./assets/flores.png";
import bonsai from "./assets/bonsai.png";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [plantasCount, setPlantasCount] = useState(0);
  const [floresCount, setFloresCount] = useState(0);
  const [bonsaiCount, setBonsaiCount] = useState(0);

  return (
    <>
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
          <p>Plantas vistas: {plantasCount}</p>
          <button className="icono-compra">🛒</button>
        </div>

        <div className="categoria">
          <button onClick={() => setFloresCount(floresCount + 1)}>
            <img className="imagen2" src={flores} alt="flores" />
          </button>
          <p>Flores vistas: {floresCount}</p>
          <button className="icono-compra">🛒</button>
        </div>

        <div className="categoria">
          <button onClick={() => setBonsaiCount(bonsaiCount + 1)}>
            <img className="imagen3" src={bonsai} alt="bonsai" />
          </button>
          <p>Bonsáis vistos: {bonsaiCount}</p>
          <button className="icono-compra">🛒</button>
        </div>
      </div>

      <div className="card">
        <button onClick={() => setCount(count + 1)}>INICIO {count}</button>
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
