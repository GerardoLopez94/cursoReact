

 const getGifs = async(category) =>{
    const baseURL = process.env.REACT_APP_API;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${baseURL}&q=${encodeURI(category)}&limit=10`;
    const resp = await fetch( url );

    const {data} = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
        }

    });

    return gifs;
}
    export { getGifs };