
// const saludar =  function (nombre) {
//     return 'Hola Mundo';
// }
const saludar2 =  (nombre) =>{
    return 'Hola Mundo';
}

const saludar3 = (nombre)=> `Hola, ${nombre}`;
const saludar4 = ()=> ("Hola Mundo");

console.log(saludar2("Vegeta"));
console.log(saludar3("Goku"));
console.log(saludar4());

const getUser = ()=>({
    uid: "ABC123",
    username: "El_Papi1502",
});

const user = getUser();
console.log(user);

const getUsuarioActivo = (nombre) => (
    {
        uid: 'ABC567',
        username: nombre,
    }
)
    


const usuarioActivo = getUsuarioActivo('Alejandro');

console.log(usuarioActivo);