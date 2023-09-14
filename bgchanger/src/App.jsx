<<<<<<< HEAD
import "./App.css";
import { useState } from "react";

function App() {
  const background = document.querySelector("body");

  const [color, setColor] = useState("white");

  background.style.backgroundColor = color;
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
>>>>>>> 10874efee155b18d4d4debe1b1c7817eaf707545

  return (
    <>
      <div>
<<<<<<< HEAD
        <button onClick={() => setColor("black")}>Black</button>
        <button onClick={() => setColor("white")}>White</button>
      </div>
    </>
  );
}

export default App;
=======
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
>>>>>>> 10874efee155b18d4d4debe1b1c7817eaf707545
