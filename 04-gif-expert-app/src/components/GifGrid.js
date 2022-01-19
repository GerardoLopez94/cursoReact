import React, { useEffect, useState } from 'react';

import { GifGridItem } from './GifGridItem';


const GifGrid = ({ category }) =>{

    const [images, setImages] = useState([]);

    useEffect(() =>{
        getGifs();
    }, [])
    const getGifs = async() =>{
        const baseURL = process.env.REACT_APP_API;
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${baseURL}&q=conga&limit=10`;
        const resp = await fetch( url );

        const {data} = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url,
            }
        })

        setImages(gifs);
        
    }
    

    return (
        <>
        <h3> { category } </h3>
        <br />
        <div className='card-grid'>
           
            {
                images.map( (img) => 
                <GifGridItem 
                key={img.id} 
                {...img}
                />
                )
            }
           
        </div>
        </>
    )
}

export { GifGrid };