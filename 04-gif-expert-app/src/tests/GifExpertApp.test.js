import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import { GifExpertApp } from '../GifExpertApp';

describe('pruebas en <GifExpertApp />', () =>{

    test('debe de mostrar correctamente', () =>{

        const wrapper = shallow( <GifExpertApp /> );
        
        expect(wrapper).toMatchSnapshot();
    });

    test('debe demostrar una lista de categorias', () =>{
        const categories = ['One Punch', 'Dragom Ball'];
        const wrapper = shallow( <GifExpertApp defaultCategories={ categories } /> );
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })

});