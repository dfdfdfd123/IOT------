
import { useState } from 'react';

const MAX_CAPACITY = 10;

function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const increase = () => {
    if (count < MAX_CAPACITY) {
      setCount(count + 1);
    }
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return {
    count,
    increase,
    decrease,
  };
}

export default useCounter;
