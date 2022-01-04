//Variables y constantes
// solo const y let

const NOMBRE = 'Gerardo';
const APELLIDO  = 'Lopez';
let valorDado = 5;
 valorDado = 4;

 console.log(NOMBRE, APELLIDO, valorDado);      
 //scope
 if ( true ){
     let valorDado = 6;
     console.log(valorDado);
 }

 console.log(valorDado);
