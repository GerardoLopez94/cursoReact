import React from 'react';
import PropTypes    from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';

import { GifGridItem } from './GifGridItem';






const GifGrid = ({ category }) =>{

    //const [images, setImages] = useState([]);
    const {loading, data: images} = useFetchGifs(category);

    return (
        <>
        <h3 className='animate__bounceIn'> { category } </h3>
        <br />
        { loading && <p>Loading</p> }
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

GifGrid.propTypes = {
    category: PropTypes.string.isRequired

};

export { GifGrid };