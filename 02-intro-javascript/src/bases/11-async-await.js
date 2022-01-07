
/*const getImagenPromesa = () => ( new Promise( (resolve ) => resolve('Hola mundo 1')))
    
getImagenPromesa()
    .then(console.log )

//Usando async

const getImage = async() =>{
    return 'Hola mundo';
}
getImage()
    .then(console.log);*/
//Buscamos la api
const baseURL = process.env.REACT_APP_API;
    

const getImagen = async() => {
    try {
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${baseURL}`);
        const {data} = await resp.json();
        const img = document.createElement('img');
        img.src =  data.images.original.url;
        document.body.append(img);
        
    } catch (error) {
        //manejo del error
    }
}

getImagen();
