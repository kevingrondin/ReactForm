import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton'

const Confirm = ({nextStep, prevStep, values}) => {

    const continuer = e => {
        e.preventDefault();
        nextStep();
    }

    const retour = e => {
        e.preventDefault();
        prevStep();
    }

    const {prenom, nom, email, profession, ville, salaire} = values
    
    return (
        <MuiThemeProvider>
            <>
                <AppBar title="Confirm" />
                <List>
                    <ListItem
                        primaryText="Prenom"
                        secondaryText={prenom}
                    />
                    <ListItem
                        primaryText="Nom"
                        secondaryText={nom}
                    />
                    <ListItem
                        primaryText="Email"
                        secondaryText={email}
                    />
                    <ListItem
                        primaryText="Profession"
                        secondaryText={profession}
                    />
                    <ListItem
                        primaryText="Ville"
                        secondaryText={ville}
                    />
                    <ListItem
                        primaryText="Salaire"
                        secondaryText={salaire}
                    />
                </List>
                <br/>
                <RaisedButton
                    label="Confirmer"
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

export default Confirm;