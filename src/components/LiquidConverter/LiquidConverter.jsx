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

export function LiquidConverter() {
  const classes = useStyles();

  const [deciValue, setDeciValue] = useState(0);
  const [litersValue, setLitersValue] = useState(0);
  const [pintsValue, setPintsValue] = useState(0);
  const [gallonsValue, setGallonsValue] = useState(0);

  const handleDeciLiquidChange = (e) => {
    setDeciValue(e.target.value);
    setPintsValue((e.target.value * 0.1759753986).toFixed(2));
    setLitersValue((e.target.value * 0.1).toFixed(2));
    setGallonsValue((e.target.value * 0.021997).toFixed(3));
  };

  const handleLitersLiquidChange = (e) => {
    setLitersValue(e.target.value);
    setDeciValue((e.target.value * 10).toFixed(2));
    setPintsValue((e.target.value * 1.7598).toFixed(2));
    setGallonsValue((e.target.value * 0.21997).toFixed(2));
  };

  const handlePintsLiquidChange = (e) => {
    setPintsValue(e.target.value);
    setDeciValue((e.target.value * 5.6826125).toFixed(2));
    setLitersValue(e.target.value / 1.7598);
    setGallonsValue(e.target.value * 0.125);
  };

  const handleGallonsLiquidChange = (e) => {
    setGallonsValue(e.target.value);
    setDeciValue((e.target.value / 0.021997).toFixed(2));
    setPintsValue(e.target.value / 0.125);
    setLitersValue(e.target.value / 0.21997);
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
            Don't drown in <strong>Liquids</strong>
          </Typography>
        </Grid>
      </Grid>
      <MeasurementField
        id="deciliter-number"
        label="Decilitres"
        value={deciValue}
        onChange={handleDeciLiquidChange}
      />
      <MeasurementField
        id="liter-number"
        label="Litres"
        value={litersValue}
        onChange={handleLitersLiquidChange}
      />
      <MeasurementField
        id="pints-number"
        label="Pints"
        value={pintsValue}
        onChange={handlePintsLiquidChange}
      />
      <MeasurementField
        id="gallons-number"
        label="Gallons"
        value={gallonsValue}
        onChange={handleGallonsLiquidChange}
      />
    </React.Fragment>
  );
}
