import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { Person } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  button: {
    ...theme.myButton,
  },
}));

const Leftbar = () => {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        startIcon={<Person />}
        className={classes.button}
      >
        MaterialUi
      </Button>
    </div>
  );
};

export default Leftbar;
