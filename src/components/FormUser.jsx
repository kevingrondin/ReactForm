import React, { useState } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

const FormUser = () => {

    const [data, setData ] = useState({
        etape       : 1,
        prenom      : '',
        nom         : '',
        email       : '',
        profession  : '',
        ville       : '',
        salaire     : ''
    })

    const { etape, prenom, nom, email, profession, ville, salaire } = data
    const values = { prenom, nom, email, profession, ville, salaire }

    const suivant      = ()    => setData({...data, etape: etape + 1 })
    const precedent    = ()    => setData({...data, etape: etape - 1})
    const onChange     = e     => setData({...data, [e.target.name]: e.target.value}) 

    
    switch (etape) {
        case 1:
            return (
                <FormUserDetails
                    suivant  = { suivant }
                    onChange = { onChange }
                    values   = { values }
                />
            )   
        case 2:
            return (
                <FormPersonalDetails
                    suivant   = { suivant }
                    precedent = { precedent }
                    onChange  = { onChange }
                    values    = { values }
                />
            )    
        case 3:
            return (
                <Confirm
                    suivant   = { suivant }
                    precedent = { precedent }
                    values    = { values }
                />
            ) 
        case 4:     return <Success />
        default:    break;
    }
    return ( <div> </div>);
}

export default FormUser;