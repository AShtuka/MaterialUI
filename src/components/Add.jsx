import React, { useState } from 'react';
import {
  Button,
  Container, Fab, FormControlLabel, FormLabel, makeStyles,
  MenuItem, Modal, Radio, RadioGroup, Snackbar, TextField, Tooltip,
} from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import MuiAlert from '@material-ui/lab/Alert';
import theme from '../theme';

const useStyles = makeStyles(() => ({
  fab: {
    position: 'fixed',
    bottom: 20,
    right: 20,
  },
  container: {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
      width: 500,
      height: 550,
    },
  },
  form: {
    padding: theme.spacing(2),
  },
  item: {
    marginBottom: theme.spacing(3),
  },
  input: {
    width: '100%',
  },
  createBtn: {
    marginRight: theme.spacing(2),
  },
}));

function Alert(props) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Add = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openAlert, setAlertOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setAlertOpen(false);
  };

  return (
    <>
      <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.container}>
          <form className={classes.form} autoComplete="off">
            <div className={classes.item}>
              <TextField id="standard-basic" label="Title" size="small" className={classes.input} />
            </div>
            <div className={classes.item}>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                defaultValue="Tell your story..."
                variant="outlined"
                label="Description"
                size="small"
                className={classes.input}
              />
            </div>
            <div className={classes.item}>
              <TextField select label="Visibility" value="Public">
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Unlisted">Unlisted</MenuItem>
              </TextField>
            </div>
            <div className={classes.item}>
              <FormLabel component="legend">Who can comment?</FormLabel>
              <RadioGroup>
                <FormControlLabel
                  value="Everybody"
                  label="Everybody"
                  control={<Radio size="small" />}
                />
                <FormControlLabel
                  value="My friends"
                  label="My friends"
                  control={<Radio size="small" />}
                />
                <FormControlLabel
                  value="Nobody"
                  label="Nobody"
                  control={<Radio size="small" />}
                />
                <FormControlLabel
                  value="Custom"
                  label="Custom (Premium)"
                  disabled
                  control={<Radio size="small" />}
                />
              </RadioGroup>
            </div>
            <div className={classes.item}>
              <Button
                onClick={() => {
                  setAlertOpen(true);
                  setOpen(false);
                }}
                className={classes.createBtn}
                variant="outlined"
                color="primary"
              >
                Create
              </Button>
              <Button
                onClick={() => setOpen(false)}
                variant="outlined"
                color="secondary"
              >
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar
        open={openAlert}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Add;
