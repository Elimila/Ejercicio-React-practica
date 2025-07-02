import React, { useState } from 'react';

const Counter = ({ initialValue = 0, step = 1 }) => {
   const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter(counter + step);
  };

  const decrement = () => {
    setCounter(counter - step);
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span style={{ margin: '0 10px' }}>{counter}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
