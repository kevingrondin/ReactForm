import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'

const FormPersonalDetails = ({nextStep, prevStep, values, handleChange}) => {

    const continuer = e => {
        e.preventDefault();
        nextStep();
    }

    const retour = e => {
        e.preventDefault();
        prevStep();
    }

    return (
        <MuiThemeProvider>
            <>
                <AppBar title="Enter vos informations" />
                <TextField 
                    name='profession'
                    hinText = "Enter votre profession" 
                    floatingLabelText = "Profession"
                    onChange = {handleChange}
                    defaultValue = {values.profession}
                />
                <br/>
                <TextField
                    name='ville'
                    hinText = "Enter your ville" 
                    floatingLabelText = "Ville"
                    onChange = { handleChange }
                    defaultValue = {values.ville}
                />
                <br/>
                <TextField 
                    name='salaire'
                    hinText = "Salaire souhaité" 
                    floatingLabelText = "Salaire"
                    onChange = { handleChange }
                    defaultValue = {values.salaire}
                />
                <br/>
                <RaisedButton
                    label="Continue"
                    primary={true}
                    style={styles.button}
                    onClick={continuer}
                />  
                <RaisedButton
                    label="Retour"
                    primary={false}
                    style={styles.button}
                    onClick={retour}
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