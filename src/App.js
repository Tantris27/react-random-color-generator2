import { useState } from 'react';
import { ColorForm } from './ColorForm';
import { SizeForm } from './SizeForm';

const randomColor = require('randomcolor');

function App() {
  const [color, setColor] = useState(randomColor());
  const [size, setSize] = useState('150');
  const styleblock = {
    display: 'block',
    width: size + 'px',
    height: size + 'px',
    background: color,
    margin: 30,
  };
  const stylediv = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={stylediv}>
      <h1 style={{ color: color }}>Random Color Generator</h1>
      <div style={styleblock} />
      <h2 style={{ color: color }}>{color}</h2>
      <ColorForm color={color} setColor={setColor} />
      <SizeForm size={size} setSize={setSize} />
    </div>
  );
}

export default App;
