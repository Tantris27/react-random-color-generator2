import { useState } from 'react';

const randomColor = require('randomcolor');

export function ColorForm(props) {
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  const onClick1 = (e) => {
    e.preventDefault();
    props.setColor(randomColor());
  };
  const handleChange = (e) => {
    setInput2(e.currentTarget.value);
  };
  const handleChange2 = (e) => {
    setInput3(e.currentTarget.value);
  };
  const onClick2 = (e) => {
    e.preventDefault();
    props.setColor(
      randomColor({
        hue: input2,
        luminosity: input3,
      }),
    );
  };

  return (
    <form>
      <button onClick={onClick1}>Random Color</button>
      <label
        style={{
          display: 'block',
        }}
      >
        Hue:
        <input
          type="text"
          value={input2}
          onChange={handleChange}
          style={{ display: 'block' }}
        />
      </label>
      <label
        style={{
          display: 'block',
        }}
      >
        Light:
        <input
          type="text"
          value={input3}
          onChange={handleChange2}
          style={{ display: 'block' }}
        />
        <button onClick={onClick2}>Choose Color</button>
      </label>
    </form>
  );
}
