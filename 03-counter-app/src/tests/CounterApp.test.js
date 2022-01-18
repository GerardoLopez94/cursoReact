import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import { CounterApp } from '../CounterApp';


describe('Pruebas en <CounterApp />', () => {

    let wrapper = shallow(<CounterApp />);

    beforeEach( () => {
        wrapper = shallow(<CounterApp />);
    })

    test('debe de mostrar <CounterApp /> correctamente (hacer match con un snapshot) y sus valores por defecto',() => {

        
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar el valor por defecto de 100', () =>{
        const valor = 100;
        const wrapper = shallow(<CounterApp value={valor} />);

        const textoValor = wrapper.find('h2').text().trim();

        expect(textoValor).toBe(''+valor)
    });

    test('debe de incrementar con el botón +1', () =>{
        wrapper.find('button').at(0).simulate('Click');

        const textoValor = wrapper.find('h2').text().trim();

        expect(textoValor).toBe('11')
    })

    test('debe de decrementar con el botón -1', () =>{
        
        wrapper.find('button').at(2).simulate('Click');

        const textoValor = wrapper.find('h2').text().trim();

        expect(textoValor).toBe('9')
    });

    test('debe de colocar el valor por defecto con el btn reset', () =>{
        const valor = 105;
        const wrapper = shallow(<CounterApp value={valor} />);
        wrapper.find('button').at(0).simulate('Click');
        wrapper.find('button').at(1).simulate('Click');
        const textoValor = wrapper.find('h2').text().trim();

        expect(textoValor).toBe(''+valor)
    });

});