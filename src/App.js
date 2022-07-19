import React from 'react';
import './style.css';

export default function App() {
  const [topic, settopic] = React.useState('html');

  const handleChange = (e) => {
    settopic(e.target.value);
  };
  return (
    <div>
      <input value={topic} onChange={handleChange} />
      <button>add topic </button>
      <ol>
        <li>topic name is </li>
      </ol>
    </div>
  );
}
