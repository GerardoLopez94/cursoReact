
import React from 'react';
import { shallow } from 'enzyme';

import '@testing-library/jest-dom'
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {
    
    const title = 'google';
    const url = 'http://google.com';
    let wrapper = shallow(<GifGridItem title={title} url={url} />);
    
    beforeEach(() =>{
        wrapper = shallow(<GifGridItem title={title} url={url} />);
    });
    
    test('debe de mostrar el componente correctamente', () =>{
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de tener un párrafo con un texto', () =>{
        const textValor = wrapper.find('p').text().trim();

        expect(typeof textValor).toBe('string');
    });

    test('debe de tener una imagen igual al url y alt de los props', () =>{
        const img = wrapper.find('img');

        //console.log(img.props()); //objeto son sus propiedades
        
        expect(img.props().src).toBe(url);
        expect(img.props().alt).toBe(title);
    });

    test('debe de tener animate__bounceIn', () =>{
        //referencia al div
        const div = wrapper.find('div');

        const className = div.props().className;

        expect(className.includes('animate__bounceIn')).toBe(true);
        
    })
});

