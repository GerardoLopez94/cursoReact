import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas en 05-funciones.js', () =>{
    test('Debe de retornar un objeto', () =>{
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();

        expect(user).toEqual(userTest);

    })

    //getUsuarioActivo debe de retornar un objeto
    test('getUsuarioActivo debe de retornar un objeto',() =>{

        const nombre = "nombre";

        const userTest = {
                uid: 'ABC567',
                username: nombre
        }

        expect(getUsuarioActivo(nombre)).toEqual(userTest);
    })
});

