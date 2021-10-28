import { createTheme } from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
  },
  myButton: {
    background: 'red',
    color: 'white',
    border: '1px solid blue',
  },
});

export default theme;
