import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'

const FormUserDetails = ({nextStep, values, handleChange}) => {

    const continuer = (e) => { 
        e.preventDefault(); 
        nextStep(); 
    }
    
    return (
        <MuiThemeProvider>
            <>
                <AppBar title="Formulaire Emploie" />
                <TextField 
                    name='prenom'
                    hinText = "Enter votre Prenom" 
                    floatingLabelText = "Prenom"
                    onChange = { handleChange }
                    defaultValue = {values.prenom}
                />
                <br/>
                <TextField 
                    name = 'nom'
                    hinText = "Entrer votre Nom" 
                    floatingLabelText = "Nom"
                    onChange = { handleChange }
                    defaultValue = {values.nom}
                />
                <br/>
                <TextField 
                    name='email'
                    hinText = "Enter votre email" 
                    floatingLabelText = "Email"
                    onChange = { handleChange }
                    defaultValue = {values.email}
                />
                <br/>
                <RaisedButton
                    label="Continuer"
                    primary={true}
                    style={styles.button}
                    onClick={continuer}
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