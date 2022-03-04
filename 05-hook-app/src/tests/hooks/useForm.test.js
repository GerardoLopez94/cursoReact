import { renderHook, act } from "@testing-library/react-hooks";

import { useForm } from "../../hooks/useForm";

describe('Pruebas en useForm', () => {
    const initialForm = {
        name: 'Fernando',
        email: 'gerardoloopez@gmail.com'
    };

    test('debe de regresar un formulario por defecto', () => {
        const { result } = renderHook( () =>  useForm(initialForm) );

        //console.log(result.current);

        expect(result.current[0]).toEqual(initialForm);
        expect(typeof result.current[1]).toBe('function');
        expect(typeof result.current[2]).toBe('function');
    });

    test('debe de cambiar el valor del formulario', () => {
        const { result } = renderHook( () =>  useForm(initialForm) );

        const [ , handleInputChange, reset ] = result.current;

        act( () => {
            handleInputChange({
                target: {
                    name:'name',
                    value: 'Gerardo'
                }
            });

        });
        const [values] = result.current;
        
        expect(values).toEqual({...initialForm, name: 'Gerardo'});

    });
    test('debe de resetear al valor inicial', () => {
        const { result } = renderHook( () =>  useForm(initialForm) );

        const [ , handleInputChange, reset ] = result.current;

        act( () => {
            handleInputChange({
                target: {
                    name:'name',
                    value: 'Gerardo'
                }
            });
            reset();

        });
        const [values] = result.current;
        
        expect(values).toEqual(initialForm);

    });
});

