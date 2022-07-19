import React from "react";
import "./style.css";

export default function App() {
  const [x,setx]=React.useState(0)
  const [y,sety]=React.useState(0)

  const p1=()=>{}

  return (
    <div>
      <h1>counter {x} </h1>
      <h2>changes made are {y} </h2>
      <button onClick={p1}>+</button>
    </div>
  );
}
