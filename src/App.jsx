import React from 'react';
import Image from './assets/bg.webp';
import './App.css';
//Material UI imports
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {
  createMuiTheme,
  MuiThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core';
//Components imports
import { SpeedConverter } from './components/SpeedConverter/SpeedConverter';
import Headline from './components/Headline/Headline';
import { LengthConverter } from './components/LengthConverter/LengthConverter';
import { TempConverter } from './components/TempConverter/TempConverter';
import { WeightConverter } from './components/WeightConverter/WeightConverter';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  paper: {
    textAlign: 'center',
    padding: theme.spacing(3),
    marginBottom: theme.spacing(6),
    // backgroundColor: theme.palette.primary.light
  },
}));

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <Box className={classes.root}>
          <Headline />
          <Grid container spacing={3}>
            <Grid item sm={2}></Grid>
            <Grid item xs={12} sm={8}>
              <Paper elevation={3} className={classes.paper}>
                <SpeedConverter />
              </Paper>
              <Paper elevation={3} className={classes.paper}>
                <LengthConverter />
              </Paper>
              <Paper elevation={3} className={classes.paper}>
                <TempConverter />
              </Paper>
              <Paper elevation={3} className={classes.paper}>
                <WeightConverter />
              </Paper>
            </Grid>
          </Grid>
          <Grid item sm={2}></Grid>
        </Box>
      </MuiThemeProvider>
    </React.Fragment>
  );
}

export default App;
