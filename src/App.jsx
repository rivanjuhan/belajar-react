import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MasaDepan from "./assets/MasaDepan.jpg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={MasaDepan} className="logo" alt="Vite logo" style={{
            width: "200px", height: "200px"
          }}/>
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Mari belajar React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Nilai {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
      Mari belajar vite + react 
      </p>
    </>
  )
}

export default App
