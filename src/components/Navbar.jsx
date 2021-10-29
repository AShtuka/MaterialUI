import React, { useState } from 'react';
import {
  AppBar, Avatar, Badge, InputBase, makeStyles, Toolbar, Typography,
} from '@material-ui/core';
import {
  Cancel, Mail, Notifications, Search,
} from '@material-ui/icons';
import { alpha } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
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
  search: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.down('xs')]: {
      display: (props) => (props.open ? 'flex' : 'none'),
    },
  },
  input: {
    width: '280px',
    color: 'white',
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      width: '180px',
    },
  },
  cancel: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  icons: {
    alignItems: 'center',
    display: (props) => (props.open ? 'none' : 'flex'),
  },
  badge: {
    marginRight: theme.spacing(2),
  },
  searchBtn: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          Shtuka Dev
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          Dev
        </Typography>
        <div className={classes.search}>
          <Search />
          <InputBase placeholder="Search..." className={classes.input} />
          <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
        </div>
        <div className={classes.icons}>
          <Search className={classes.searchBtn} onClick={() => setOpen(true)} />
          <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="secondary" className={classes.badge}>
            <Notifications />
          </Badge>
          <Avatar alt="Avatar" src="https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280" />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
