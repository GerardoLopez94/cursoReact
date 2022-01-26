
import React from 'react';
import { shallow } from 'enzyme';

import '@testing-library/jest-dom'
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {
    let wrapper = shallow(<GifGridItem img={[]} />);

    beforeEach( () =>{
        wrapper = shallow(<GifGridItem img={[]} />);
    })

    test('debe de mostrar el componente correctamente', () =>{

        expect(wrapper).toMatchSnapshot();
    })
});

