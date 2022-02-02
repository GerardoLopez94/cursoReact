import React from 'react';

import { useCounter } from '../../hooks/useCounter';

import './counter.css';

const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset} = useCounter();

  return (
      <>
        <h1>Counter with Hook { state }</h1>
        <hr />
        
        <button 
            className='btn' 
            onClick={ () => increment(1)}
        > 
            +1
        </button>
        <button 
            className='btn' 
            onClick={ reset}
        > 
            reset
        </button>
        <button 
            className='btn' 
            onClick={ () => decrement(1)}
        > 
            -1
        </button>

      </>
  );
};



export {CounterWithCustomHook};
