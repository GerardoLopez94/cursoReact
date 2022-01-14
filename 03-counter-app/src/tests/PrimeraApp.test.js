import { render } from '@testing-library/react';
import { PrimerApp } from '../PrimeraApp';
import React from "react";

describe('Pruebas en <PrimerApp />',() =>{
    test('debe mostrar el mensaje "Hola, Soy Goku"', () =>{
        const saludo = 'Hola, Soy Goku';
        
        const { getByText} = render(<PrimerApp prueba = {saludo} />);

        expect(getByText(saludo + '!!')).toBeInTheDocument();

    })
})