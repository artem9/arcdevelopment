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

import analytics from '../assets/analytics.svg';
import backArrow from '../assets/backArrow.svg';
import ecommerce from '../assets/ecommerce.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import outreach from '../assets/outreach.svg';
import seo from '../assets/seo.svg';

const useStyles = makeStyles()((theme) => ({
  arrowContainer: {
    marginTop: '0.7em',
  },
  heading: {
    maxWidth: '40em',
  },
  paragraphContainer: {
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

function Websites({ setSelectedIndex, setValue }) {
  const { classes } = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));

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
              to="/mobileapps"
              onClick={() => setSelectedIndex(2)}
            >
              <img
                alt="Back to iOS/Android App Development Page"
                src={backArrow}
              />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesLG ? 'center' : undefined} variant="h2">
              Website Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesLG ? 'center' : undefined}
              variant="body1"
              paragraph
            >
              Having a website is a necessity in today&apos;s business world.
              They give you one central, public location to let people know who
              you are, what you do, and why you&apos;re the best at it.
            </Typography>
            <Typography
              align={matchesLG ? 'center' : undefined}
              variant="body1"
              paragraph
            >
              From simply having your hours posted to having a full fledged
              online store, making yourself as accessible as possible to users
              online drives growth and enables you to reach new customers.
            </Typography>
          </Grid>
        </Grid>
        <Hidden lgDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={Link}
              to="/services"
              onClick={() => setSelectedIndex(0)}
            >
              <img alt="Forward to Services Page" src={forwardArrow} />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction="row"
        alignItems="center"
        className={classes.rowContainer}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" gutterBottom>
                Analytics
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={analytics}
                style={{ marginLeft: '-2.75em' }}
                alt="graph with magnifying glass revealing 1's and 0's"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="body1" className={classes.paragraphContainer}>
            Knowledge is power, and data is 21st Century gold. Analyzing this
            data can reveal hidden patterns and trends in your business,
            empowering you to make smarter decisions with measurable effects.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

Websites.propTypes = {
  setSelectedIndex: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default Websites;
