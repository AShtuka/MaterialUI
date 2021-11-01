import React from 'react';
import {
  Card, CardActionArea, CardMedia, makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  media: {
    paddingTop: theme.spacing(10),
  },
}));

const Post = () => {
  const classes = useStyles();

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          title="My Post"
        />
      </CardActionArea>
    </Card>
  );
};

export default Post;
