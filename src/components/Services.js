import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import useTheme from '@mui/material/styles/useTheme';

import { makeStyles } from 'tss-react/mui';

import ButtonArrow from './ui/ButtonArrow';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websitesIcon from '../assets/websiteIcon.svg';

const useStyles = makeStyles()((theme) => ({
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
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
  serviceContainer: {
    marginTop: '12em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
    },
  },
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.orange,
  },
  subTitle: {
    marginBottom: '1em',
  },
}));

function Services({ setValue, setSelectedIndex }) {
  const { classes } = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid container direction="column">
      <Grid item>
        {/* -----iOS/Android Block----- */}
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justifyContent={matchesMD ? 'center' : 'flex-end'}
        >
          <Grid
            item
            style={{
              textAlign: matchesMD ? 'center' : undefined,
            }}
          >
            <Typography variant="h4">iOS/Android App Development</Typography>
            <Typography variant="subtitle1" className={classes.subTitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app
              {matchesMD ? null : <br />} with either mobile platform.
            </Typography>
            <Button
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
              }}
              component={Link}
              to="/mobileapps"
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid
            item
            style={{
              marginRight: matchesMD ? 0 : '5em',
            }}
          >
            <img
              className={classes.icon}
              alt="mobile phone icon"
              src={mobileAppsIcon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/* -----Custom Software Block----- */}
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justifyContent={matchesMD ? 'center' : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: matchesMD ? 0 : '5em',
              textAlign: matchesMD ? 'center' : undefined,
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subTitle}>
              Save energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{' '}
              <span className={classes.specialText}>celebration.</span>
            </Typography>
            <Button
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                setValue(1);
                setSelectedIndex(1);
              }}
              component={Link}
              to="/customsoftware"
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              alt="custom software icon"
              src={customSoftwareIcon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/* -----Websites Block----- */}
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justifyContent={matchesMD ? 'center' : 'flex-end'}
        >
          <Grid
            item
            style={{
              textAlign: matchesMD ? 'center' : undefined,
            }}
          >
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" className={classes.subTitle}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Optimized for Search Engines, built for speed.
            </Typography>
            <Button
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                setValue(1);
                setSelectedIndex(3);
              }}
              component={Link}
              to="/websites"
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesMD ? 0 : '5em' }}>
            <img
              className={classes.icon}
              alt="website icon"
              src={websitesIcon}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

Services.propTypes = {
  setValue: PropTypes.func.isRequired,
  setSelectedIndex: PropTypes.func.isRequired,
};

export default Services;
