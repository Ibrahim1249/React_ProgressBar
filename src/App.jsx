import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Loading");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          setStatus("Complete");
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="progress-container">
        <h1>Progress Bar</h1>
        <div className="progress">
          <div className="bar" style={{width : `${progress}%`}}></div>
        </div>
        <p>{progress} %   {status}</p>
      </div>
    </>
  );
}

export default App;
