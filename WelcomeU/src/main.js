import React from 'react';
import { Provider } from 'react-redux';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import makeStore from './store/configureStore';
import Routes from './routes/index';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#18bc9c' },
    info: { main: '#3498db' },
    success: { main: '#27ae60' },
    secondary: {main: '#ffa500'}
  }
});


const mainContainer = () => (<Provider store={makeStore()}>
<MuiThemeProvider theme={theme}>
  <Routes />
</MuiThemeProvider>
</Provider>);

export default mainContainer;