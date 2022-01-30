import { useState } from 'react';


export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = (newFormState = initialState) => {
        setValues(newFormState);
    }

    const handleInputChange = ({ target }) => {
        if (target.type === 'checkbox'){
            setValues({
                ...values,
                [ target.name ]: target.checked
            });
            return;
        }

        setValues({
            ...values,
            [ target.name ]: target.value
        });
    }

    return [ values, handleInputChange, reset ];

}