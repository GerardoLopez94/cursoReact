import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';


import './memo.css';
import { Small } from './Small';

const Memorize = () => {

     const {state: counter, increment } = useCounter(10);
    const [show, setshow] = useState(true);

    const handleClick = ()=>{
        setshow(!show);
    }
  return (
      <div>
          <h1>Counter:<Small value = {counter} /> </h1>
          <hr/>
          <button 
            className='btn btn-primary' 
            onClick={ () =>  increment(1) }>
              +1
          </button>

          <button 
            className='btn btn-outline-primary ml-3'
            onClick={handleClick}
          >
              show/hide { JSON.stringify(show ) }
          </button>
      </div>
  );
};

export { Memorize };
