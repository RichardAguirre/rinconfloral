import { useState } from 'react'
import reactLogo from './assets/logo.png'
import plantas from './assets/plantas.png'
import flores from './assets/flores.png'
import bonsai from './assets/bonsai.png'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [plantasCount, setPlantasCount] = useState(0)
  const [floresCount, setFloresCount] = useState(0)
  const [bonsaiCount, setBonsaiCount] = useState(0)

  return (
    <>
      <div>
        <a>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>TIENDA DE FLORES</h1>
      <h3>Todo en Flores y plantas</h3>

      <div>
         <button onClick={() => setPlantasCount(plantasCount + 1)}>
           <img className='imagen1' src={plantas} alt="plantas.png" />
         </button>
         <p>Plantas Agregados: {plantasCount}</p>
      </div>

      <div>
         <button onClick={() => setFloresCount(floresCount + 1)}>
           <img className='imagen2' src={flores} alt="flores.png" />
         </button>
         <p>Flores Agregados: {floresCount}</p>
      </div>

      <div>
         <button onClick={() => setBonsaiCount(bonsaiCount + 1)}>
           <img className='imagen3' src={bonsai} alt="bonsai.png" />
         </button>
         <p>Bonsáis Agregados: {bonsaiCount}</p>
      </div>
      
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          INICIO {count}
        </button>
        <p>
        Bienvenido a nuestro encantador rincón floral, donde la naturaleza se encuentra con la elegancia...
        </p>
      </div>
      <p className="read-the-docs">
        All Rights Reserved Carlos Cano & Richard Aguirre
      </p>
    </>
  )
}

export default App
