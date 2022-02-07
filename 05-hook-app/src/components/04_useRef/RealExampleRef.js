import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

import './index.css'

const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    }
    return (
        <>
            <h1>RealExampleRef</h1>
            <hr/>

            { show && <MultipleCustomHooks />}
            <button 
                className='btn btn-primary mt-5'
                onClick={ handleClick } 
            >
                Show/Hide
            </button>
        </>
    )
}

export { RealExampleRef }