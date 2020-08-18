const nombre = "Alejandro";
const apellido = "Mancillaa";

// const nombreCompleto = nombre + " " + apellido;
const nombreCompleto = ` 
${nombre} 
${apellido}
${ 1+ 1}
`;

console.log(nombreCompleto);

function saludo() {
    return 'Hola Mundo';
}

console.log( `Este es un saludo ${saludo()}` );