import "./App.css";
import { useState } from "react";

function App() {
  const background = document.querySelector("body");

  const [color, setColor] = useState("white");

  background.style.backgroundColor = color;

  return (
    <>
      <div>
        <button onClick={() => setColor("black")}>Black</button>
        <button onClick={() => setColor("white")}>White</button>
      </div>
    </>
  );
}

export default App;
