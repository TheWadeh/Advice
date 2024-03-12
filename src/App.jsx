import React from "react";
import { useEffect, useState } from "react";

function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((count) => count + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);
  return (
    <div>
      <div className="advice-container">
        <h1>"{advice}"</h1>
      </div>
      <div className="btn-container">
        <button onClick={getAdvice}>Get Advice</button>
      </div>
      <p>
        🌲 you have got <strong>{count}</strong> advices
      </p>
      <p>Copyright &copy; 2024</p>
    </div>
  );
}

export default App;