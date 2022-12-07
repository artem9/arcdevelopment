import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import useTheme from '@mui/material/styles/useTheme';

import { makeStyles } from 'tss-react/mui';

import background from '../assets/background.jpg';

const useStyles = makeStyles()((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '60em',
  },
}));

function Contact({ setValue }) {
  const { classes } = useStyles();
  const theme = useTheme();

  return (
    <Grid container direction="row">
      <Grid item container direction="column" lg={3}>
        <Grid item>
          <Typography variant="h2" style={{ lineHeight: 1 }}>
            Contact Us
          </Typography>
          <Typography
            variant="body1"
            style={{ color: theme.palette.common.blue }}
          >
            We&apos;re waiting.
          </Typography>
        </Grid>
      </Grid>
      <Grid item container className={classes.background} lg={9}/>
    </Grid>
  );
}

Contact.propTypes = {
  setValue: PropTypes.func.isRequired,
};

export default Contact;
