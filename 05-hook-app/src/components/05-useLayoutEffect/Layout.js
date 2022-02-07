import React, { useLayoutEffect , useRef, useState} from 'react';

import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';


import './index.css';

const Layout = () => {

    const {state:counter, increment} = useCounter(1);
   
    const {loading, data} = useFetch( `https://www.breakingbadapi.com/api/quotes/${counter}` );
    const {author, quote} = !!data && data[0]; 

    const [boxSize, setboxSize] = useState({});

    const pTag = useRef();
    useLayoutEffect(() => {
        setboxSize(pTag.current.getBoundingClientRect());
    }, [quote]);
    
    
  return (
      <>
        <h1>Layout</h1>
        <hr/>

        {
         
             (
              
             
                <blockquote className='blockquote text-end'>
                  <p ref={pTag} className='mb-0'>{quote}</p>
                  
                </blockquote>
             
              )
        }
        <pre>
            {JSON.stringify(boxSize, null, 3)}
        </pre>
                <button 
                  className='btn btn-primary mt-5'
                  onClick={() => { increment(1) }}
                >
                  siguiente
                </button>

      </>
  );
};

export { Layout }