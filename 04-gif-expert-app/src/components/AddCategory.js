import React, {useState} from 'react';
import PropTypes    from 'prop-types';

const AddCategory = ({ setCategories }) =>{

    const [inputValue, setInutValue] = useState('');

    const handleInputChange = (e) =>{
        setInutValue(e.target.value)
    }

    const handleSubmit = (e) =>{
        //Prevenimos que el navegador se refresque
        e.preventDefault();

        if (inputValue.trim().length > 2){
            setCategories( cats => [ inputValue, ...cats] );
            setInutValue('');
        }


        
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

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}

export { AddCategory };