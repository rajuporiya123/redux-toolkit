import React from 'react';
import useCounter from './useCounter';

const QuizApp = () => {
  const [count, incrementCount, decrementCount] = useCounter();

  return (
    <div>
      <div>{count}</div>
      <button onClick={incrementCount} disabled={count == 10}>Increment</button>
      <button onClick={decrementCount} disabled={count == 0}>Decrement</button>
    </div>
  );
};

export default QuizApp;
