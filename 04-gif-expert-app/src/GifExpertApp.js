import React, { useState} from 'react';
import { AddCategory } from './components/AddCategory';

const GifExpertApp  = () =>{

    
    const [categories, setCategories] = useState(['One Punch', 'Samurai X','Dragom Ball'])

   /* const handleApp = () => {
        //Una forma
        //setCategories( [ ...categories, 'Naruto' ] ); 
        // otra forma
        setCategories(  cats => [...cats, 'Naruto'] ); 
    };*/
    

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory />
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