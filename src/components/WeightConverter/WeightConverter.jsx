import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import MeasurementField from '../MeasurementField/MeasurementField';

const useStyles = makeStyles((theme) => ({
  label: {
    padding: theme.spacing(1),
    backgroundColor: '#FFE492',
    borderRadius: '6px',
  },
}));

export function WeightConverter() {
  const classes = useStyles();

  const [gramsValue, setGramsValue] = useState(0);
  const [kilogramsValue, setKilogramsValue] = useState(0);
  const [ouncesValue, setOuncesValue] = useState(0);
  const [poundsValue, setPoundsValue] = useState(0);
  const [stonesValue, setStonesValue] = useState(0);

  const handleGramsWeightChange = (e) => {
    setGramsValue(e.target.value);
    setKilogramsValue((e.target.value / 1000).toFixed(4));
    setOuncesValue((e.target.value * 0.035274).toFixed(2));
    setPoundsValue((e.target.value * 0.0022046).toFixed(2));
    setStonesValue((e.target.value * 0.00015747).toFixed(4));
  };

  const handleKilogramsWeightChange = (e) => {
    setKilogramsValue(e.target.value);
    setGramsValue((e.target.value * 1000).toFixed(2));
    setOuncesValue((e.target.value * 35.274).toFixed(2));
    setPoundsValue((e.target.value * 2.2046).toFixed(2));
    setStonesValue((e.target.value * 0.1574).toFixed(4));
  };

  const handlePoundsWeightChange = (e) => {
    setPoundsValue(e.target.value);
    setGramsValue((e.target.value / 0.0022046).toFixed(2));
    setKilogramsValue((e.target.value / 2.2046).toFixed(2));
    setOuncesValue((e.target.value * 16).toFixed(2));
    setStonesValue((e.target.value * 0.071429).toFixed(4));
  };
  const handleOuncesWeightChange = (e) => {
    setOuncesValue(e.target.value);
    setGramsValue((e.target.value / 0.035274).toFixed(2));
    setKilogramsValue((e.target.value / 35.274).toFixed(2));
    setPoundsValue((e.target.value * 0.0625).toFixed(2));
    setStonesValue((e.target.value * 0.0044643).toFixed(4));
  };
  const handleStonesWeightChange = (e) => {
    setStonesValue(e.target.value);
    setGramsValue((e.target.value / 0.00015747).toFixed(2));
    setKilogramsValue((e.target.value / 0.15747).toFixed(2));
    setOuncesValue((e.target.value * 224).toFixed(2));
    setPoundsValue((e.target.value * 14).toFixed(2));
  };

  return (
    <React.Fragment>
      <Typography variant="h6" paragraph={true} className={classes.label}>
        Have fun with <strong>Weight</strong>
      </Typography>
      <MeasurementField
        id="grams-number"
        label="Grams"
        value={gramsValue}
        onChange={handleGramsWeightChange}
      />
      <MeasurementField
        id="kilograms-number"
        label="Kilograms"
        value={kilogramsValue}
        onChange={handleKilogramsWeightChange}
      />
      <MeasurementField
        id="ounces-number"
        label="Ounces"
        value={ouncesValue}
        onChange={handleOuncesWeightChange}
      />
      <MeasurementField
        id="pounds-number"
        label="Pounds"
        value={poundsValue}
        onChange={handlePoundsWeightChange}
      />
      <MeasurementField
        id="stones-number"
        label="Stones"
        value={stonesValue}
        onChange={handleStonesWeightChange}
      />
    </React.Fragment>
  );
}
