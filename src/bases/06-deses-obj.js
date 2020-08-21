// Desestructuracion
// asignacion desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

// const {nombre:nombre2} = persona;
// console.log(nombre2);

const {nombre, edad, clave} = persona;

console.log(nombre);
console.log(edad);
console.log(clave);

const retornaPersona = ({clave,nombre,edad, rango = 'Capitan'})=>{
    // console.log(nombre, edad, rango);

    return{
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 14.1212,
            lng: -12.3215
        }
    }
}

const {nombreClave, anios, latlng:{lat,lng}} = retornaPersona(persona);

console.log(nombreClave, anios);
console.log(lat,lng);
