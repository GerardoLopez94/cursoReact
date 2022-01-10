import React from 'react';
import  PropTypes  from "prop-types";

const CounterApp = ({ value }) =>{
    //handleApp
    const handleApp = (e) =>{
        console.log(e);
    }
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ value }</h2>
            <button onClick={handleApp}>+1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number,
}

export { CounterApp };