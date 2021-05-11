import { useState } from 'react';

export function SizeForm(props) {
  const [input1, setInput1] = useState('');

  const handleChange = (e) => {
    setInput1(e.currentTarget.value);
  };
  const handleClick1 = (e) => {
    e.preventDefault();
    props.setSize(input1);
  };
  return (
    <form>
      <label
        style={{
          display: 'block',
        }}
      >
        Size in px:
        <input
          type="number"
          value={input1}
          onChange={handleChange}
          style={{ display: 'block' }}
        />
        <button onClick={handleClick1}>Submit</button>
      </label>
    </form>
  );
}
