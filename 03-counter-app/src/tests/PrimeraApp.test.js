
import React from "react";
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { PrimerApp } from '../PrimeraApp';

describe('Pruebas en <PrimerApp />',() =>{
    test('debe mostrar <PrimerApp /> correctamente', () =>{
        
        const saludo = "Hola, Soy Goku";
        const wrapper = shallow(<PrimerApp prueba = { saludo }/>);

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar el subtitulo enviado por props', () =>{

        const saludo = "Hola, Soy Goku";
        const sub = 'Soy un subtitulo'
        const wrapper = shallow(
            <PrimerApp 
                prueba = { saludo }
                subtitulo={ sub }
            />);

        const textoParrafo = wrapper.find('p').text();
        
        expect( textoParrafo ).toBe( sub );
         

    });
})