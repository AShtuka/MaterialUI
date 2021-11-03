import React from 'react';
import {
  Button,
  Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(5),
  },
  media: {
    paddingTop: theme.spacing(10),
    height: 150,
    [theme.breakpoints.up('sm')]: {
      height: 360,
    },
  },
}));

const Post = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=360&w=500"
          title="My Post"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">My First Post</Typography>
          <Typography variant="body2">
            Разнообразный и богатый опыт консультация с широким активом способствует
            подготовки и реализации соответствующий условий активизации.
            Таким образом дальнейшее развитие различных форм деятельности представляет
            собой интересный эксперимент проверки существенных финансовых и административных
            условий. С другой стороны реализация намеченных плановых заданий требуют от нас
            анализа новых предложений. Значимость этих проблем настолько очевидна,
            что постоянный количественный рост и сфера нашей активности представляет
            собой интересный эксперимент проверки соответствующий условий активизации.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">Share</Button>
        <Button size="small" color="primary">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default Post;
