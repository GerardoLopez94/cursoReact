import { getHeroeById, getHeroeByOwner} from "./bases/08-imp-exp";

const getHeroeByIdAsyn = (id) =>

    ( new Promise( (resolve, reject) =>{
        setTimeout(() => {
            const heroe = getHeroeById(id);
            (heroe?resolve(heroe):reject('No existe el heroe') )
        }, 5000);
    
    }));

    

//Promesa


getHeroeByIdAsyn(2)
    .then( console.log )
    .catch( console.warn );