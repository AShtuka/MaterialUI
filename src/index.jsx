import React from 'react';
import ReactDOM from 'react-dom';
// import { ThemeProvider } from '@material-ui/styles';
import App from './App';
// import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}
    <App />
    {/* </ThemeProvider> */}
  </React.StrictMode>,
  document.getElementById('root'),
);
