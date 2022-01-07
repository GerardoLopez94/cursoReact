// Operador condicional ternario

const activo = true;

let mensaje ='';

/*if (activo){
    mensaje = 'Activo';
}else {
    mensaje = 'Inactivo';
}*/

//operador ternario
mensaje = ( activo ) ? 'Activo' : 'Inactivo';

console.log(mensaje);

mensaje = !activo && 'Activo';

console.log(mensaje);