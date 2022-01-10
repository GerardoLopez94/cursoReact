import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template-string', () =>{
    test("Prueba en el método getSaludo", () =>{
        //Inicializamos
        const nombre = 'Gerardo';

        //Estímulo
        const saludo = getSaludo(nombre);

        // 3. Observar el comportamiento
        expect(saludo).toBe('Hola ' + nombre);
    })

    test("getSaludo debe de retornar Hola Carlos si no hay argumentos", () =>{
    

        //Estímulo
        const saludo = getSaludo();

        // 3. Observar el comportamiento
        expect(saludo).toBe('Hola ' + 'Carlos');
    })
});