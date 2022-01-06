//Desestructuración de arreglo

const personajes = ['Goku', 'Vegeta', 'Trunks'];

console.log( personajes[0] );
console.log( personajes[1] );
console.log( personajes[2] );

const [ p1, p2, p3 ] = personajes;

console.log( p1 );
console.log( p2 );
console.log( p3 );

const [ , perso ] = personajes;

console.log(perso);


const [ , ,perso3 ] = personajes;

console.log(perso3);

const retornaArreglo = () =>{
    return ['ABC', 123];
}

const [letras, numero] = retornaArreglo();

console.log(letras, numero); 

//Tarea
const userEstado = (valor) =>{
    return [valor, ()=>{console.log('Hola Mundo')}];
}

const arr = userEstado('Goku');

console.log(arr);

/*
    1. El primer valor del arr se llamará nombre
    2. Se llamará setNombre
*/

const [nombre, setNombre] = arr;
console.log(nombre);
setNombre();