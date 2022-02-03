import React, { useRef } from 'react';


import './index.css';
const FocusScreen = () =>{

    const inputRef = useRef();

    const handleClick = () => {
       inputRef.current.select();
    }

    return (
        <>
            <h1>FocusScreen</h1>
            <hr/>
            <input 
                ref={ inputRef }
                type="text"
                className='form-control'
                placeholder='Su nombre'
            />
            <button 
                className='btn btn-outline-primary mt-5' 
                aria-pressed='true'
                onClick={ handleClick }
            >
                Focus
            </button>
        </>
    )
}

export { FocusScreen }