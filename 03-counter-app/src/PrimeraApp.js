//FC
import React from "react";
import PropTypes from 'prop-types'
const PrimerApp = ( { prueba  }) => {
    
    console.log(prueba);

    return (
        <>
            <h1>{prueba}</h1>
           <p>Hola</p>

        </>
        );
}

PrimerApp.propTypes = {
    prueba: PropTypes.string.isRequired,

}
export { PrimerApp }