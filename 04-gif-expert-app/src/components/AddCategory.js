import React, {useState} from 'react';

const AddCategory = () =>{

    const [inputValue, setInutValue] = useState('Hola Mundo');

    const handleInputChange = (e) =>{
        setInutValue(e.target.value)
    }

    const handleSubmit = (e) =>{
        //Prevenimos que el navegador se refresque
        e.preventDefault();

        console.log('Submit Hecho')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

export { AddCategory };