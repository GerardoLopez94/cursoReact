//Arreglos en JS

//Creamos un arreglo con el constructor
const arreglo = new Array(100);

//Agregamos un espacio más al array
arreglo.push(1);

console.log(arreglo);

//Creamos un arreglo de la forma normal
const arr = [];
// A modo de ejemplo agregamos con push pero esta forma no se debe utilizar
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);
console.log(arr);

// para expandir el arreglo arr no debemos usar push, entonces utilizaremos
//spread
let arre = [ ...arr, 6 ];

console.log(arre);
//Ahora utilizamos la función mao
const arreglo3 = arre.map( (numero) => (numero*2));

console.log(arreglo3);
