
// const apiKey = '9zOYGCLiRb0GEZ64oN4WtIrvOZpjN4uv';
// const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion
//     .then(resp=>resp.json())
//     .then( ({data}) => {
//         // console.log(data.images.original.url)
//         const url = (data.images.original.url)
//         console.log(url);

//         const img = document.createElement('img');
//         img.src = url;

//         document.body.append(img);
//     }
//     )
//     .catch(console.warn);


const getImagen = async ()=>{
    try {
        const apiKey = '9zOYGCLiRb0GEZ64oN4WtIrvOZpjN4uv';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        const url = data.images.original.url;
        console.log(url);

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img)
    } catch (error) {
        // manejo del error
        console.error(error);
    }
}

getImagen();