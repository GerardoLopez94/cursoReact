//Desestructuración
//Asignación desestructurante

const persona ={
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
};

const {nombre:nombre2, edad, clave} = persona;

console.log(nombre2);
console.log(edad);
console.log(clave);

const retornaPersona = ({nombre, edad, Rango = 'Capitán'}) => {
    console.log(nombre, edad, Rango);
}

retornaPersona(persona);

const retorna = ({clave,nombre, edad, Rango = 'Capitán'}) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        },
    }
};

const avenger = retorna(persona);
console.log(avenger);
///  extraer de useContext el nombreClavey la edad

const {nombreClave, anios:edad2, latlng:{lat, lng}} = retorna(persona);

console.log(nombreClave, edad2, lat, lng);