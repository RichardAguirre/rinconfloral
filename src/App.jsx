import { useState } from 'react'
import reactLogo from './assets/logo.png'
import plantas from './assets/plantas.png'
import flores from './assets/flores.png'
import bonsai from './assets/bonsai.png'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      
        <a>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>TIENDA DE FLORES</h1>
      <h3>Todo en Flores y plantas</h3>

         <button ><img className='imagen1' src={plantas} alt="plantas.png" /></button>
         <button><img className='imagen2'src={flores} alt="flores.png" /></button>
         <button><img className='imagen3'src={bonsai} alt="bonsai.png" /></button>
         
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          INICIO {count}
        </button>
        <p>
        Bienvenido a nuestro encantador rincón floral, donde la naturaleza se encuentra con la elegancia. En nuestra página, descubrirás un exquisito catálogo de flores y arreglos que capturan la belleza efímera de la flora.Desde cautivadores ramos hasta arreglos florales personalizados, cada pétalo cuenta una historia única. 
        </p>
      </div>
      <p className="read-the-docs">
        All Rights Reserved Carlos Cano & Richard Aguirre
      </p>
    </>
  )
}

export default App
