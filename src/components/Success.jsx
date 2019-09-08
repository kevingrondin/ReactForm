import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

const Success = () => {
    return (
        <MuiThemeProvider>
            <>
                <AppBar title="Fin" />
                <h1>Merci un mail vous seras envoyé</h1>                   
            </>
        </MuiThemeProvider>
    );
}

export default Success;