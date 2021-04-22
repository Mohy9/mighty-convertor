import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import MeasurementField from '../MeasurementField/MeasurementField';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

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
    marginTop: '4px',
  },
}));

export function TempConverter() {
  const classes = useStyles();

  const [celsiusValue, setCelsiusValue] = useState(0);
  const [fahrenheitValue, setFahrenheitValue] = useState(0);
  const [kelvinValue, setKelvinValue] = useState(0);

  const handleCelsiusTempChange = (e) => {
    setCelsiusValue(e.target.value);
    setFahrenheitValue((e.target.value * 1.8 + 32).toFixed(2));
    setKelvinValue(parseInt(e.target.value) + 273.15);
  };

  const handleFahrenheitTempChange = (e) => {
    setFahrenheitValue(e.target.value);
    setCelsiusValue(((e.target.value - 32) / 1.8).toFixed(2));
    setKelvinValue(((e.target.value - 32) / 1.8 + 273.15).toFixed(2));
  };

  const handleKelvinTempChange = (e) => {
    setKelvinValue(e.target.value);
    setFahrenheitValue(((e.target.value - 273.15) * 1.8 + 32).toFixed(2));
    setCelsiusValue((e.target.value - 273.15).toFixed(2));
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
          <WbSunnyIcon fontSize="large" className={classes.icon} />
        </Grid>
        <Grid item>
          <Typography variant="h6">
            What about <strong>Temperatures</strong>?
          </Typography>
        </Grid>
      </Grid>
      <MeasurementField
        id="celsius-number"
        label="Celsius"
        value={celsiusValue}
        onChange={handleCelsiusTempChange}
        minusValueEnabled
      />
      <MeasurementField
        id="fanhrenheit-number"
        label="Fahrenheit"
        value={fahrenheitValue}
        onChange={handleFahrenheitTempChange}
        minusValueEnabled
      />
      <MeasurementField
        id="kelvin-number"
        label="Kelvin"
        value={kelvinValue}
        onChange={handleKelvinTempChange}
        minusValueEnabled
      />
    </React.Fragment>
  );
}
