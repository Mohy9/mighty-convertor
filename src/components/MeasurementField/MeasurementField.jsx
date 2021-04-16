import React from 'react';
import TextField from '@material-ui/core/TextField';
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  input: { margin: theme.spacing(2) },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#474554',
    },
  },
});

export default function MeasurementField(props) {
  const classes = useStyles();

  const { id, label, value, onChange } = props;
  return (
    <ThemeProvider theme={theme}>
      <TextField
        id={id}
        label={label}
        value={value}
        onChange={onChange}
        type="number"
        className={classes.input}
        InputProps={{ inputProps: { min: 0 } }}
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        color="primary"
      />
    </ThemeProvider>
  );
}
