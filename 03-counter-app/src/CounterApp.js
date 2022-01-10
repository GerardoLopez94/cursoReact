import React, { useState } from 'react';
import  PropTypes  from "prop-types";

const CounterApp = ({ value=10 }) =>{

    const [counter, setCounter] = useState(value);

    //handleApp
    const handleApp = () =>{
        setCounter( (counter + 1) );
        //setCounter( (c) => c + 1)
    }

    const handleReset = () => ( setCounter( (counter) => (counter = value) )  );
        
    

    const handleMenosUno = () =>{
        setCounter( (counter - 1) );
        //setCounter( (c) => c + 1)
    }
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button onClick={handleApp}>+1</button>
            <button onClick={handleReset}>reset</button>
            <button onClick={handleMenosUno}>-1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number,
}

export { CounterApp };