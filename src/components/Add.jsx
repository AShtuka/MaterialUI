import React, { useState } from 'react';
import {
  Container,
  Fab, makeStyles, MenuItem, Modal, TextField, Tooltip,
} from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
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
      height: 500,
    },
  },
  form: {},
  item: {},
  input: {
    width: '100%',
  },
}));

const Add = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

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
              <TextField select label="Visibility">
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Unlisted">Unlisted</MenuItem>
              </TextField>
            </div>
          </form>
        </Container>
      </Modal>
    </>

  );
};

export default Add;
