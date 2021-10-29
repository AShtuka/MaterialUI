import React from 'react';
import { Grid } from '@material-ui/core';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Leftbar from './components/Leftbar';

const App = () => (
  <div>
    <Navbar />
    <Grid container>
      <Grid item sm={2}>
        <Leftbar />
      </Grid>
      <Grid item sm={7}>
        <Feed />
      </Grid>
      <Grid item sm={3}>
        <Rightbar />
      </Grid>
    </Grid>
  </div>
);

export default App;
