import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  headline: {
    marginBottom: theme.spacing(6),
    color: '#393939',
  },
}));

const Headline = () => {
  const greeting = 'Mighty Convertor';
  const classes = useStyles();
  return (
    <Typography variant="h1" align="center" className={classes.headline}>
      {greeting}
    </Typography>
  );
};

export default Headline;
