import React from "react";
import "./style.css";

export default function App() {

  const p1=()=>{
    document.title="lalit"
  }
  const p2=()=>{
    document.title="amit"
  }
  const p3=()=>{
    document.title="sumit"
  }
  const p4=()=>{
    document.title="punit"
  }
  const p5=()=>{
    document.title="kumit"
  }
  const p6=()=>{
    document.title="jumit"
  }

  return (
    <div>
      <button onClick={p1}>click to change title 1</button>
      <button onClick={p2}>click to change title 2</button>
      <button onClick={p3}>click to change title 3</button>
      <button onClick={p4}>click to change title 4</button>
      <button onClick={p5}>click to change title 5</button>
      <button onClick={p6}>click to change title 6</button>
    </div>
  );
}
