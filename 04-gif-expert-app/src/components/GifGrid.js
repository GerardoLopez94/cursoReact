import React, { useEffect, useState } from 'react';

import { GifGridItem } from './GifGridItem';

import { getGifs } from '../helpers/getGifs';


const GifGrid = ({ category }) =>{

    const [images, setImages] = useState([]);

    useEffect(() =>{
        getGifs(category)
            .then( imgs => setImages(imgs))
    }, [category])
    
    

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