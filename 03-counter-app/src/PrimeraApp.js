//FC
import React from "react";
const PrimerApp = () => {
    const saludo = 'Hola Mundo, Hello';
    const numeros = [1,2,3,4,5,6,7,8,9];
    const persona = {
        nombre: "Gerardo",
        apellido:"Lopez",
        edad: 27
    }
    return (
        <>
            <h1>{saludo}</h1>
            <h2>{numeros}</h2>
            <h3>{JSON.stringify(persona, null,3)}</h3>
            <pre>{JSON.stringify(persona, null,3)}</pre>
           <p>Hola</p>

        </>
        );
}

export { PrimerApp }