import {getHeroes,getHeroesByOwner} from './bases/08-imp-exp'

// const promesa = new Promise((resolv, reject)=>{
//     setTimeout(()=>{
//         //console.log('2 segundos despues');
//         // resolv();
//         const heroe = getHeroes(2);
//         console.log(heroe);
//         resolv(heroe);
//         // reject('no se encontro');
//     }, 2000)
// });

// promesa.then((heroe)=>{
//     console.log('Then de la promesa', heroe);
// })
// .catch( err => console.warn(err));


const getHeroeByIdAsync = (id)=>{
    return new Promise((resolv, reject)=>{
        setTimeout(()=>{
            //console.log('2 segundos despues');
            // resolv();
            const heroe = getHeroes(id);
            // console.log(heroe);

            if(heroe){
                resolv(heroe);
            }else{
                reject('no se encontro');
            }

        }, 2000)
    });
}

getHeroeByIdAsync(2)
    // .then( heroe => console.log('Heroe', heroe))
    .then( console.log)
    // .catch( console.warn ) // equivalente
    .catch( err => console.warn(err))