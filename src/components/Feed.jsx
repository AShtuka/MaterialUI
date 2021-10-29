import React from 'react';
import { Button, Container, makeStyles } from '@material-ui/core';
import { Person } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const Feed = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Button
        variant="contained"
        startIcon={<Person />}
        className={classes.button}
      >
        MaterialUi
      </Button>
    </Container>
  );
};

export default Feed;
