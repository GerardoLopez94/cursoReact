import React from 'react';

const GifExpertApp  = () =>{

    const categories = ['One Punch', 'Samurai X','Dragom Ball'];

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <ol>
                {
                    categories.map( category=> {
                        return <li key= {category}>{category}</li>
                    })
                }
            </ol>
        </>
    )
}

export { GifExpertApp };