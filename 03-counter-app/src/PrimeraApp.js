//FC
import React from "react";
import PropTypes from 'prop-types'
const PrimerApp = ( { prueba , subtitulo }) => {
    
    console.log(prueba);

    return (
        <>
            <h1> {prueba} </h1>
            <p> {subtitulo} </p>
        </>
        );
}

PrimerApp.propTypes = {
    prueba: PropTypes.string.isRequired,

};

PrimerApp.defaultProps ={
    subtitulo: 'Soy un subtitulo',
}
export { PrimerApp }