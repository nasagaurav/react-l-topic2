import React from 'react';
import './style.css';

export default function App() {
  const [topic, settopic] = React.useState('html');
  const [a, seta] = React.useState([]);

  const handleChange = (e) => {
    settopic(e.target.value);
  };
  const addTopic = () => {};
  return (
    <div>
      <input value={topic} onChange={handleChange} />
      <button onClick={addTopic}>add topic </button>
      <ol>
        {a.map((item) => (
          <li>topic name is {item}</li>
        ))}
      </ol>
    </div>
  );
}
