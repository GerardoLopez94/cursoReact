//Functiones en JS
//El problema cuando declaramos de esta manera es que se puede pisar nuestar funcion
function saludar(nombre){
    return `Hola ${ nombre }`;
};

//saludar = 30;

console.log(saludar("Gerardo"));

//Mejor sería declara de la siguiente manera
const saludo = function (nombre){
    return `Hola ${ nombre }`;
};
console.log(saludar("Alexis"));

//Funcion de flecha

const saludar2 = (nombre)=>{
    return `Hola ${ nombre }`;
}

console.log(saludar2("Ruperto"));

//Otra forma
const saludar3 = (nombre) => (`Hola ${ nombre }`);


console.log(saludar3("Ruperto"));

//Ejemplo

const getUser = () =>{
    return{
        uid: 'ABCD123',
        username: 'El_papi504',
    }
};

console.log(getUser());

// o

const getUser2 = () =>
    ({
        uid: 'ABCD123',
        username: 'El_papi504',
    })
;

console.log(getUser2());

//Tarea
// 1. Transformar a una función de flecha
// 2. Tiene que retornar un objeto implícito
// 3. Prueba
/*function getUsuarioActivo(nombre){
    return {
        uid: 'ABC555',
        username: nombre
    }
};

const usuatioActivo = getUsuarioActivo('Gerardo');
console.log(usuatioActivo);*/

const getUsuarioActivo = (nombre) => ({ 
    uid: 'ABC555', 
    username: nombre 
});

const usuarioActivo = getUsuarioActivo('Gerardo');
console.log(usuarioActivo);

