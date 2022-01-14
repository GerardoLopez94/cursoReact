

const baseURL = process.env.REACT_APP_API;


const getImagen = async() => {

    try {

        const apiKey = baseURL;
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        return 'No existe';
    }
    
    
    
}

export { getImagen }