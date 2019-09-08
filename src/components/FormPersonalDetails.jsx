import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'

const FormPersonalDetails = ({ suivant, precedent, onChange, values }) => {

    const continuer = e => {
        e.preventDefault();
        suivant();
    }

    const retour = e => {
        e.preventDefault();
        precedent();
    }

    const { profession, ville, salaire } = values

    return (
        <MuiThemeProvider>
            <>
                <AppBar title="Enter vos informations" />
                <TextField 
                    name                = 'profession'
                    floatingLabelText   = 'Profession'
                    onChange            = { onChange }
                    defaultValue        = { profession }
                />
                <br/>
                <TextField
                    name                = 'ville'
                    floatingLabelText   = 'Ville'
                    onChange            = { onChange }
                    defaultValue        = { ville }
                />
                <br/>
                <TextField 
                    name                = 'salaire'
                    hinText             = 'Salaire souhaité' 
                    floatingLabelText   = 'Salaire'
                    onChange            = { onChange }
                    defaultValue        = { salaire }
                />
                <br/>
                <RaisedButton
                    label   = 'Continue'
                    primary = { true }
                    style   = { styles.button }
                    onClick = { continuer }
                />  
                <RaisedButton
                    label   = 'Retour'
                    primary = { false }
                    style   = { styles.button }
                    onClick = { retour }
                />                   
            </>
        </MuiThemeProvider>
    );
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormPersonalDetails;