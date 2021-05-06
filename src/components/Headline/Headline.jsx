import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  headline: {
    color: '#393939',
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(4),
      marginBottom: theme.spacing(3),
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
    },
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
