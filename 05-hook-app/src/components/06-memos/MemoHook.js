import React, { useMemo, useState } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter';


import './memo.css';


const MemoHook = () => {

    const {state: counter, increment } = useCounter(5000);
    const [show, setshow] = useState(true);

 

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    const handleClick = ()=>{
        setshow(!show);
    }
  return (
      <div>
          <h1>MemoHook</h1>
          <h3>Counter: <small>{counter}</small>   </h3>
          <p>{memoProcesoPesado}</p>
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

export { MemoHook };
