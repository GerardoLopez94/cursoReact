import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks';

import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('pruebas en el Hook useFetchGifs', () => {

    test('debe de retornar el estado incial', async() => {
        const { result, waitForNextUpdate } = renderHook( () => {
            return useFetchGifs('One Punch'); 
        });

        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);

    });

    test('debe de retornar un arreglo de imágenes y el loading en false', async() => {
        const { result, waitForNextUpdate } = renderHook( () => {
            return useFetchGifs('One Punch'); 
        });

        await waitForNextUpdate();

        console.log(waitForNextUpdate);
        const { data, loading } = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });
});

