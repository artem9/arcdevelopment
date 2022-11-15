import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import useTheme from '@mui/material/styles/useTheme';

import { makeStyles } from 'tss-react/mui';

import Lottie from './ui/Lottie';

import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import integrationAnimation from '../animations/integrationAnimation/data.json';

const useStyles = makeStyles()((theme) => ({
  arrowContainer: {
    marginTop: '0.7em',
  },
  heading: {
    maxWidth: '40em',
  },
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('md')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
  },
}));

function MobileApps({ setSelectedIndex }) {
  const { classes } = useStyles();
  const theme = useTheme();
  const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container direction="column">
      <Grid
        item
        container
        className={classes.rowContainer}
        direction="row"
        justifyContent={matchesLG ? 'center' : undefined}
        style={{ marginTop: matchesSM ? '1em' : '2em' }}
      >
        <Hidden lgDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: '1em', marginLeft: '-3.5em' }}
          >
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={Link}
              to="/customsoftware"
              onClick={() => setSelectedIndex(1)}
            >
              <img
                alt="Back to Custom Software Development Page"
                src={backArrow}
              />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesLG ? 'center' : undefined} variant="h2">
              iOS/Android App Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesLG ? 'center' : undefined}
              variant="body1"
            >
              Mobile apps allow you to take your tools on the go.
            </Typography>
            <Typography
              align={matchesLG ? 'center' : undefined}
              variant="body1"
            >
              Whether you want an app for your customers, employees, or
              yourself, we can build cross-platform native solutions for any
              part of your business process. This opens you up to a whole new
              world of possibilities by taking advantage of phone features like
              the camera, GPS, push notifications, and more.
            </Typography>
            <Typography
              align={matchesLG ? 'center' : undefined}
              variant="body1"
            >
              Convenience. Connection.
            </Typography>
          </Grid>
        </Grid>
        <Hidden lgDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={Link}
              to="/websites"
              onClick={() => setSelectedIndex(3)}
            >
              <img
                alt="Forward to Website Development Page"
                src={forwardArrow}
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid item container direction="row" className={classes.rowContainer}>
        <Grid item container direction="column" md>
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Integration
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Our technology enables an innate interconnection between web and
              mobile applications, putting everything you need right in one
              convenient place.
            </Typography>
            <Typography variant="body1" paragraph>
              This allows you to extend your reach, reinvent interactions, and
              develop a stronger relationship with your users than ever before.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md>
          <Lottie animationData={integrationAnimation} autoplay />
        </Grid>
        <Grid item container direction="column" md>
          <Grid item>
            <Typography variant="h4" align="right" gutterBottom>
              Simultaneous Platform Support
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" align="right" paragraph>
              Our cutting-edge development process allows us to create apps for
              iPhone, Android, and tablets - all at the same time.
            </Typography>
            <Typography variant="body1" align="right" paragraph>
              This significantly reduces costs and creates a more unified brand
              experience across all devices.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

MobileApps.propTypes = {
  setSelectedIndex: PropTypes.func.isRequired,
};

export default MobileApps;
