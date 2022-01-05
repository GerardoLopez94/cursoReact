
//Objetos literales

const obj = {

};

console.log(obj);

const persona ={
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55321321,
        lat: 14.3216,
        lng: 34.9212, 
    },
};

console.log(persona);

//Creamos un nuevo objeto apartir de otro

console.log({
    persona: persona
});


//Pdemos imprimir en forma de tabla

console.table(persona);

//Asignación por referencia
const persona2 = persona;
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);

// Para clonar un objeto utilizamos el operador spread

const persona3 = { ...persona };
persona3.nombre = 'Gerardo';
console.log(persona3);


