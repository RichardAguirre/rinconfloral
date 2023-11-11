import { useState } from 'react'
import reactLogo from './assets/logo.png'

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
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
           
        </p>
      </div>
      <p className="read-the-docs">
        All Rights Reserved Carlos Cano & Richard Aguirre
      </p>
    </>
  )
}

export default App
