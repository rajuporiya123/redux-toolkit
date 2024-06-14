import { useState } from 'react';

const useCounter = () => {
  const [count, setCount] = useState<number>(0); 

  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };

  return [count, incrementCount, decrementCount] as const;
};

export default useCounter;
