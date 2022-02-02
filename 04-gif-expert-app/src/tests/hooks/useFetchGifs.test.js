import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks';

import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('pruebas en el Hook useFetchGifs', () => {

    test('debe de retornar el estado incial', () => {
        const { result } = renderHook( () => {
            return useFetchGifs('One Punch'); 
        });

        const { data, loading } = result.current;

        expect(data).toEqual([]);
        expect(loading).toBe(true);

    });
});

