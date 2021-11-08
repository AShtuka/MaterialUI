import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
// import Stopwatch from './Stopwatch';
import Post from './Post';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const Feed = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      {/* <Stopwatch /> */}
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  );
};

export default Feed;
