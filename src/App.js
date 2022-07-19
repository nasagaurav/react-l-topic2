import React from 'react';
import './style.css';

export default function App() {
  const [x, setx] = React.useState(0);
  const [y, sety] = React.useState(0);

  const p1 = () => {
    setx(x + 1);
  };
  const p2 = () => {
    setx(x - 1);
  };

  const p3 = () => {
    sety(y + 1);
  };

  return (
    <div>
      <h1>counter {x} </h1>
      <h2>changes made are {y} </h2>
      <button onClick={p1}>+</button>
      <button onClick={p2}>-</button>
    </div>
  );
}
