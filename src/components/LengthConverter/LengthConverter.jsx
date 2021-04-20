import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import MeasurementField from '../MeasurementField/MeasurementField';
import SquareFootIcon from '@material-ui/icons/SquareFoot';

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

export function LengthConverter() {
  const classes = useStyles();

  const [metersValue, setMetersValue] = useState(0);
  const [centimetersValue, setCentimetersValue] = useState(0);
  const [kilometersValue, setKilometersValue] = useState(0);
  const [feetsValue, setFeetsValue] = useState(0);
  const [inchesValue, setInchesValue] = useState(0);
  const [yardsValue, setYardsValue] = useState(0);
  const [milesValue, setMilesValue] = useState(0);

  const handleMeterLengthChange = (e) => {
    setMetersValue(e.target.value);
    setCentimetersValue((e.target.value / 0.01).toFixed(2));
    setKilometersValue((e.target.value / 1000).toFixed(4));
    setInchesValue((e.target.value * 39.37).toFixed(2));
    setFeetsValue((e.target.value * 3.2808).toFixed(2));
    setYardsValue((e.target.value * 1.0936).toFixed(2));
    setMilesValue((e.target.value * 0.00062137).toFixed(4));
  };

  const handleCentimeterLengthChange = (e) => {
    setCentimetersValue(e.target.value);
    setInchesValue((e.target.value * 0.3937).toFixed(2));
    setFeetsValue((e.target.value * 0.032808).toFixed(2));
    setYardsValue((e.target.value * 0.010936).toFixed(2));
    setMilesValue((e.target.value * 0.0000062137).toFixed(4));
    setMetersValue((e.target.value / 100).toFixed(2));
    setKilometersValue((e.target.value / 100000).toFixed(4));
  };

  const handleKilometerLengthChange = (e) => {
    setKilometersValue(e.target.value);
    setInchesValue((e.target.value * 39370).toFixed(2));
    setFeetsValue((e.target.value * 3280.8).toFixed(2));
    setYardsValue((e.target.value * 1093.6).toFixed(2));
    setMilesValue((e.target.value * 0.62137).toFixed(4));
    setCentimetersValue((e.target.value * 100000).toFixed(2));
    setMetersValue((e.target.value * 1000).toFixed(2));
  };

  const handleFeetLengthChange = (e) => {
    setFeetsValue(e.target.value);
    setInchesValue((e.target.value * 12).toFixed(2));
    setYardsValue((e.target.value * 0.33333).toFixed(2));
    setMilesValue((e.target.value * 0.00018939).toFixed(4));
    setCentimetersValue((e.target.value / 0.032808).toFixed(2));
    setMetersValue((e.target.value / 3.2808).toFixed(2));
    setKilometersValue((e.target.value / 3280.8).toFixed(4));
  };

  const handleInchesLengthChange = (e) => {
    setInchesValue(e.target.value);
    setFeetsValue((e.target.value * 0.083333).toFixed(2));
    setYardsValue((e.target.value * 0.027778).toFixed(2));
    setMilesValue((e.target.value * 0.000015783).toFixed(4));
    setCentimetersValue((e.target.value / 0.3937).toFixed(2));
    setMetersValue((e.target.value / 39.37).toFixed(2));
    setKilometersValue((e.target.value / 39370).toFixed(4));
  };

  const handleYardsLengthChange = (e) => {
    setYardsValue(e.target.value);
    setInchesValue((e.target.value * 36).toFixed(2));
    setFeetsValue((e.target.value * 3).toFixed(2));
    setMilesValue((e.target.value * 0.00056818).toFixed(4));
    setCentimetersValue((e.target.value / 0.010936).toFixed(2));
    setMetersValue((e.target.value / 1.0936).toFixed(2));
    setKilometersValue((e.target.value / 1093.6).toFixed(4));
  };

  const handleMilesLengthChange = (e) => {
    setMilesValue(e.target.value);
    setInchesValue((e.target.value * 63360).toFixed(2));
    setFeetsValue((e.target.value * 5280).toFixed(2));
    setYardsValue((e.target.value * 1760).toFixed(2));
    setCentimetersValue((e.target.value / 0.0000062137).toFixed(2));
    setMetersValue((e.target.value / 0.00062137).toFixed(2));
    setKilometersValue((e.target.value / 0.62137).toFixed(4));
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
          <SquareFootIcon fontSize="large" className={classes.icon} />
        </Grid>
        <Grid item>
          <Typography variant="h6">
            Any <strong>Length</strong> can be converted here
          </Typography>
        </Grid>
      </Grid>
      <MeasurementField
        id="centimeters-number"
        label="Centimeters"
        value={centimetersValue}
        onChange={handleCentimeterLengthChange}
      />
      <MeasurementField
        id="meters-number"
        label="Meters"
        value={metersValue}
        onChange={handleMeterLengthChange}
      />
      <MeasurementField
        id="kilometers-number"
        label="Kilometers"
        value={kilometersValue}
        onChange={handleKilometerLengthChange}
      />
      <MeasurementField
        id="feets-number"
        label="Feets"
        value={feetsValue}
        onChange={handleFeetLengthChange}
      />
      <MeasurementField
        id="inches-number"
        label="Inches"
        value={inchesValue}
        onChange={handleInchesLengthChange}
      />
      <MeasurementField
        id="yards-number"
        label="Yards"
        value={yardsValue}
        onChange={handleYardsLengthChange}
      />
      <MeasurementField
        id="miles-number"
        label="Miles"
        value={milesValue}
        onChange={handleMilesLengthChange}
      />
    </React.Fragment>
  );
}
