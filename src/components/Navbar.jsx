import React from 'react';
import {
  AppBar, makeStyles, Toolbar, Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  logoLg: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  logoSm: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" className={classes.logoLg}>
          Shtuka Dev
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          Dev
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
