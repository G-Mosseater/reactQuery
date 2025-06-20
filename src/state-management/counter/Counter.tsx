import { useReducer, useState } from 'react';
import useCounterStore from './store';
// import counterReducer from './counterReducer';
const Counter = () => {
  // const [value, setValue] = useState(0);

  // const [value, dispatch] = useReducer(counterReducer, 0)

  const {counter, increment, reset} = useCounterStore()

  return (
    <div>
      Counter ({counter})
      <button
        onClick={() => increment()}
        className="btn btn-primary mx-1"
      >
        Increment
      </button>
      <button
        onClick={() => reset()}
        className="btn btn-primary mx-1"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
