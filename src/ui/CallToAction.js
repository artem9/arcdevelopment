import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { makeStyles } from 'tss-react/mui';

import ButtonArrow from './ButtonArrow';
import Link from '../Link';

const useStyles = makeStyles()((theme) => ({
  background: {
    backgroundAttachment: 'fixed',
    backgroundImage: `url("/assets/background.jpg")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url("/assets/mobileBackground.jpg")`,
      backgroundAttachment: 'inherit',
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: '1.5rem',
    marginRight: '5em',
    marginLeft: '2em',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
  },
}));

function CallToAction({ setValue }) {
  const { classes } = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid
      container
      alignItems="center"
      justifyContent={matchesMD ? 'center' : 'space-between'}
      className={classes.background}
      direction={matchesMD ? 'column' : 'row'}
    >
      <Grid
        item
        style={{
          marginLeft: matchesMD ? 0 : '5em',
          textAlign: matchesMD ? 'center' : 'inherit',
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h1">
              Simple Software.
              <br />
              Revolutionary Results.
            </Typography>
            <Typography variant="subtitle2" style={{ fontSize: '1.5rem' }}>
              Take advantage of the 21st Century.
            </Typography>
            <Grid
              container
              item
              justifyContent={matchesMD ? 'center' : undefined}
            >
              <Button
                variant="outlined"
                className={classes.learnButton}
                onClick={() => setValue(2)}
                component={Link}
                href="/revolution"
              >
                <span style={{ marginRight: 5 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          className={classes.estimateButton}
          onClick={() => setValue(5)}
          component={Link}
          href="/estimate"
        >
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
}

CallToAction.propTypes = {
  setValue: PropTypes.func.isRequired,
};

export default CallToAction;
