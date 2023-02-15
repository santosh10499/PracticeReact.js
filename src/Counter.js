import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
function Inc(){
  setCount((prevCount) =>prevCount + 1)

}

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={Inc}>Increment</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;