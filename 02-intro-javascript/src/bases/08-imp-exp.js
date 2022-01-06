//importamos los archivos
import { heroes } from '../data/heroes';

const getHeroeById = (id) => ( heroes.find( (heroe) => heroe.id === id  )  );

const getHeroeByOwner = (owner) => ( heroes.filter( (heroe) => heroe.owner === owner  )  );

//console.log(getHeroeById(3));

//console.log(getHeroeByOwner('DC'));

export {
    getHeroeById,
    getHeroeByOwner,
}
