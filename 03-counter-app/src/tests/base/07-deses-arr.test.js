import { retornaArreglo } from "../../base/07-deses-arr"


describe('Pruebas en 07-deses-arr.js', () => {
    test('debe de retornar un String y un numero', () =>{
        const [letras, numeros] = retornaArreglo();
        expect(typeof letras).toBe('string');
        expect(typeof numeros).toBe('number');

    })
})