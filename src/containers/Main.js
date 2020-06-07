import React, { Suspense } from 'react';
import usePromise from 'react-promise-suspense';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import Skeleton from '@material-ui/lab/Skeleton';

import {
  fade,
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import { yellow, green } from '@material-ui/core/colors';

export default function Main() {
  // MF Module can manipulte global and can be maniplated by other MF Modules
  const theme = createMuiTheme({
    palette: {
      primary: green,
    },
  });
  const getClasses = makeStyles((theme) => ({
    yellow: {
      color: 'yellow',
      backgroundColor: yellow,
    },
    appbar: {
      marginBottom: theme.spacing(2),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    menuTitle: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    // SEARCH
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '-webkit-fill-available !important',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  const classes = getClasses();

  const Things = () => {
    const data = usePromise(
      () =>
        fetch(
          'http://slowwly.robertomurray.co.uk/delay/6000/url/http://dq3kw.mocklab.io/json/1'
        ).then((res) => res.json()),
      []
    );
    return (
      <Typography variant="h6" style={{ margin: '1rem' }}>
        {data.value}
      </Typography>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        classes={{
          colorPrimary: classes.yellow,
        }}
        position="static"
        className={classes.appbar}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          {
            //   <Suspense
            //   fallback={
            //     <Skeleton width="50px" height="25px" style={{ margin: '1rem' }} />
            //   }
            // >
            //   <LazyNews />
            // </Suspense>
          }
          <Suspense
            fallback={
              <Skeleton width="50px" height="25px" style={{ margin: '1rem' }} />
            }
          >
            <Things />
          </Suspense>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
