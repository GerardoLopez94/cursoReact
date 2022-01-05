
//Template String

const NOMBRE = 'Gerardo';
const APELLIDO  = 'Lopez';

const nombreCompleto = `
${NOMBRE} 
${APELLIDO}
${ 1 + 1}`;

console.log(nombreCompleto);

function getSaludo(){
    return 'Hola mundo';
};

console.log(`Este es un texto: ${ getSaludo() }`);

function getSaludo2(nombreCompleto){
    return `Hola ${nombreCompleto}` ;
};

console.log(`Este es un texto: ${ getSaludo2(nombreCompleto) }`);