import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { BrowserRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Navigation from './Navigation';
import Main from './Main';

const theme = createMuiTheme({
  drawerWidth: 240,
  palette: {
    primary: blue,
  },
});

const App = () => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Mono|Roboto:300,300i,400,400i,700,700i" />
      <Navigation />
      <Main />
    </MuiThemeProvider>
  </BrowserRouter>
);

export default hot(module)(App);