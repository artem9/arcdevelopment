import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { makeStyles } from 'tss-react/mui';

import ButtonArrow from '../src/ui/ButtonArrow';
import Link from '../src/Link';

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
    marginTop: '10em',
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
      <Head>
        <title key="title">
          Top Custom Software Development Services | Arc Development
        </title>
        <meta
          name="description"
          key="description"
          content="Cutting-edge software, mobile app, and website development services with sleek custom designs - get a free online estimate instantly!"
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the Midwest | Services"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="arcdevelopment-artem9.vercel.app/services" />
        <link rel="canonical" key="canonical" href="arcdevelopment-artem9.vercel.app/services" />
      </Head>
      <Grid
        item
        style={{
          marginLeft: matchesMD ? 0 : '5em',
          marginTop: matchesMD ? '1em' : '2em',
        }}
      >
        <Typography
          variant="h1"
          align={matchesMD ? 'center' : undefined}
          gutterBottom
        >
          Services
        </Typography>
      </Grid>
      <Grid item>
        {/* -----iOS/Android Block----- */}
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justifyContent={matchesMD ? 'center' : 'flex-end'}
          style={{ marginTop: matchesMD ? '1em' : '5em' }}
        >
          <Grid
            item
            style={{
              textAlign: matchesMD ? 'center' : undefined,
              width: matchesMD ? undefined : '35em',
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
              href="/mobileapps"
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
              src="/assets/mobileIcon.svg"
              width="250em"
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
              href="/customsoftware"
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
              src="/assets/customSoftware.svg"
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
          style={{ marginBottom: '10em' }}
          justifyContent={matchesMD ? 'center' : 'flex-end'}
        >
          <Grid
            item
            style={{
              textAlign: matchesMD ? 'center' : undefined,
              width: matchesMD ? undefined : '35em',
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
              href="/websites"
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
              src="/assets/websiteIcon.svg"
              width="250em"
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
