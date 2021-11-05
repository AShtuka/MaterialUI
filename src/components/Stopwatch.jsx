import React, { useEffect, useState } from 'react';
import { Button, Container, makeStyles } from '@material-ui/core';
import { Pause, PlayCircleFilled, Refresh } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    margin: '0 auto',
    maxWidth: 280,
  },
  clockFace: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 50,
    fontWeight: 700,
  },
  controlPanel: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const Stopwatch = () => {
  const classes = useStyles();

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);

  const timeSetter = () => {
    let min;
    let second;
    let hour;
    second = Math.floor((milliseconds / 1000) % 60);
    min = Math.floor((milliseconds / 1000 / 60) % 60);
    hour = Math.floor((milliseconds / 1000 / 60 / 60) % 60);

    second = second % 60 < 10 ? `0${second}` : second;
    min = min % 60 < 10 ? +'0' + min : min;
    hour = hour % 60 < 10 ? +'0' + hour : hour;
    setHours(hour);
    setMinutes(min);
    setSeconds(second);
  };

  useEffect(() => {
    setMilliseconds(Date.now());
    timeSetter();
  });

  return (
    <Container className={classes.container}>
      <div className={classes.clockFace}>
        <div>{hours}</div>
        <div>:</div>
        <div>{minutes}</div>
        <div>:</div>
        <div>{seconds}</div>
      </div>
      <div className={classes.controlPanel}>
        <Button size="small" variant="outlined" color="primary"><PlayCircleFilled /></Button>
        <Button size="small" variant="outlined" color="primary"><Pause /></Button>
        <Button size="small" variant="outlined" color="primary"><Refresh /></Button>
      </div>
    </Container>
  );
};

export default Stopwatch;
