import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'

const FormUserDetails = ({ suivant, onChange, values }) => {

    const continuer = (e) => { 
        e.preventDefault(); 
        suivant(); 
    }
    
    const { prenom, nom, email } = values

    return (
        <MuiThemeProvider>
            <>
                <AppBar title="Formulaire Emploie" />
                <TextField 
                    name                = 'prenom'
                    floatingLabelText   = 'Prenom'
                    onChange            = { onChange }
                    defaultValue        = { prenom}
                />
                <br/>
                <TextField 
                    name                = 'nom'
                    floatingLabelText   = 'Nom'
                    onChange            = { onChange }
                    defaultValue        = { nom }
                />
                <br/>
                <TextField 
                    name                = 'email'
                    floatingLabelText   = 'Email'
                    onChange            = { onChange }
                    defaultValue        = { email }
                />
                <br/>
                <RaisedButton
                    label               = 'Continuer'
                    primary             = { true }
                    style               = { styles.button }
                    onClick             = { continuer }
                />                    
            </>
        </MuiThemeProvider>
    )
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormUserDetails;