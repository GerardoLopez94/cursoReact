import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import { heroes } from "../../data/heroes";

describe('Pruebas en 08-imp-exp', () =>{

    test('debe de retornar un héroe por id', () =>{
        const id = 1;
        const heroe = getHeroeById(id);
        
        

        const heroesData = heroes.find( h => h.id === id);

        expect(heroe).toEqual(heroesData);
        

    });

    test('debe de retornar undefined si heroe no existe', () =>{
        const id = 10;
        const heroe = getHeroeById(id);
        
        expect(heroe).toBe(undefined);
        

    });

    //debe de retornar un arreglo con los heroes de DC
    //toEqual al arreglo filtrado

    test('debe de retornar un arreglo con los heroes de DC', () =>{
        const owner = 'DC';
        const arrHeroes = getHeroesByOwner(owner);

        const arrData = heroes.filter( h => h.owner === owner);

        expect(arrHeroes).toEqual(arrData);
    })

    //debe de retornar un arreglo con los heroes de Marvel 
    //length = 2

    test('debe de retornar un arreglo con los heroes de Marvel ', () =>{
        const owner = 'Marvel';

        const arrHeroes = getHeroesByOwner(owner);

        const arrData = heroes.filter( h => h.owner === owner);

        expect(arrHeroes.length).toBe(arrData.length);
    })
});