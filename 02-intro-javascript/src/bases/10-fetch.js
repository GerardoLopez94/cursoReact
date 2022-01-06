

//Buscamos la api
const baseURL = process.env.REACT_APP_API;

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${baseURL}`);

peticion
    .then( resp => resp.json())
    .then( ( { data } ) => { 
        const { url } = data.images.original 
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } )