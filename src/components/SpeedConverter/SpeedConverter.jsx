import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import MeasurementField from '../MeasurementField/MeasurementField';
import SpeedIcon from '@material-ui/icons/Speed';

const useStyles = makeStyles((theme) => ({
  label: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(2),
    // backgroundColor: theme.palette.info.light,
    backgroundColor: '#FFE492',
    borderRadius: '6px',
    textAlign: 'center',
  },
  icon: {
    marginRight: theme.spacing(3),
  },
}));

export function SpeedConverter() {
  const classes = useStyles();

  const [kphValue, setKphValue] = useState(0);
  const [mphValue, setMphValue] = useState(0);
  const [knotValue, setKnotValue] = useState(0);

  const handleKPHSpeedChange = (e) => {
    setKphValue(e.target.value);
    setMphValue((e.target.value / 1.609344).toFixed(2));
    setKnotValue((e.target.value / 1.852).toFixed(2));
  };

  const handleMPHSpeedChange = (e) => {
    setMphValue(e.target.value);
    setKphValue((e.target.value * 1.609344).toFixed(2));
    setKnotValue((e.target.value / 1.150779).toFixed(2));
  };

  const handleKNOTSpeedChange = (e) => {
    setKnotValue(e.target.value);
    setMphValue((e.target.value * 1.150779).toFixed(2));
    setKphValue((e.target.value * 1.852).toFixed(2));
  };

  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="center"
        className={classes.label}
      >
        <Grid item>
          <SpeedIcon fontSize="large" className={classes.icon} />
        </Grid>
        <Grid item>
          <Typography variant="h6">
            Catch me if you can using <strong>Speed</strong> measurements
          </Typography>
        </Grid>
      </Grid>
      <MeasurementField
        id="kph-number"
        label="KPH"
        value={kphValue}
        onChange={handleKPHSpeedChange}
      />
      <MeasurementField
        id="mph-number"
        label="MPH"
        value={mphValue}
        onChange={handleMPHSpeedChange}
      />
      <MeasurementField
        id="knots-number"
        label="Knots"
        value={knotValue}
        onChange={handleKNOTSpeedChange}
      />
    </React.Fragment>
  );
}
