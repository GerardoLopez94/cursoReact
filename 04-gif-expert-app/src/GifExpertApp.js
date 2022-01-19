import React, { useState} from 'react';

const GifExpertApp  = () =>{

    //const categories = ['One Punch', 'Samurai X','Dragom Ball'];
    const [categories, setCategories] = useState(['One Punch', 'Samurai X','Dragom Ball'])

    const handleApp = () => {
        //Una forma
        //setCategories( [ ...categories, 'Naruto' ] ); 
        // otra forma
        setCategories(  cats => [...cats, 'Naruto'] ); 
    };
    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <button onClick={handleApp}>Agregar</button>
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