import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import useTheme from '@mui/material/styles/useTheme';

import { makeStyles } from 'tss-react/mui';

import Lottie from './ui/Lottie';
import CallToAction from './ui/CallToAction';

import ButtonArrow from './ui/ButtonArrow';
import animationData from '../animations/landinganimation/data';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import infoBackground from '../assets/infoBackground.svg';
import revolutionBackground from '../assets/repeatingBackground.svg';
import websitesIcon from '../assets/websiteIcon.svg';

const useStyles = makeStyles()((theme) => ({
  animation: {
    maxWidth: '50em',
    minWidth: '21em',
    marginTop: '2em',
    marginLeft: '10%',
    [theme.breakpoints.down('md')]: {
      maxWidth: '30em',
    },
  },
  buttonContainer: {
    marginTop: '1em',
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
  heroTextContainer: {
    minWidth: '21.5em',
    marginLeft: '1em',
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
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    height: 45,
    width: 145,
  },
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '2em',
    },
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
  revolutionCard: {
    position: 'absolute',
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '10em',
    [theme.breakpoints.down('md')]: {
      paddingTop: '8em',
      paddingBottom: '8em',
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: '100%',
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

function LandingPage({ setValue, setSelectedIndex }) {
  const { classes } = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item>
        {/* -----Hero Block----- */}
        <Grid
          container
          justifyContent="flex-end"
          alignItems="center"
          direction="row"
        >
          <Grid sm item className={classes.heroTextContainer}>
            <Typography align="center" variant="h2">
              Bringing West Coast Technology
              <br />
              to the Midwest
            </Typography>
            <Grid
              container
              justifyContent="center"
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button
                  className={classes.estimateButton}
                  variant="contained"
                  onClick={() => setValue(5)}
                  component={Link}
                  to="/estimate"
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  className={classes.learnButtonHero}
                  onClick={() => setValue(2)}
                  component={Link}
                  to="/revolution"
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie
              animationData={animationData}
              style={{ height: '100%', width: '100%' }}
              autoplay
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
        {/* -----Websites Block----- */}
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
          <Grid item>
            <img
              className={classes.icon}
              alt="website icon"
              src={websitesIcon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/* -----The Revolution Block----- */}
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          style={{ height: '100em', marginTop: '12em' }}
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                container
                direction="column"
                style={{ textAlign: 'center' }}
              >
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Visionary insights coupled with cutting-edge technology is a
                    recipe for revolution.
                  </Typography>
                  <Button
                    variant="outlined"
                    className={classes.learnButtonHero}
                    onClick={() => setValue(2)}
                    component={Link}
                    to="/revolution"
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>
      <Grid item>
        {/* -----Information Block----- */}
        <Grid
          container
          direction="row"
          style={{ height: '90em' }}
          alignItems="center"
          className={classes.infoBackground}
        >
          <Grid
            item
            container
            style={{
              textAlign: matchesSM ? 'center' : 'inherit',
            }}
            direction={matchesSM ? 'column' : 'row'}
          >
            <Grid
              item
              sm
              style={{ marginLeft: matchesSM ? 0 : matchesMD ? '2em' : '5em' }}
            >
              <Grid
                container
                direction="column"
                style={{ marginBottom: matchesSM ? '10em' : 0 }}
              >
                <Typography variant="h2" style={{ color: 'white' }}>
                  About Us
                </Typography>
                <Typography variant="subtitle2">
                  Let&apos;s get personal.
                </Typography>
                <Grid item>
                  <Button
                    variant="outlined"
                    style={{ color: 'white', borderColor: 'white' }}
                    className={classes.learnButtonHero}
                    onClick={() => setValue(3)}
                    component={Link}
                    to="/about"
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={15} height={15} fill="white" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sm
              style={{
                marginRight: matchesSM ? 0 : matchesMD ? '2em' : '5em',
                textAlign: matchesSM ? 'center' : 'right',
              }}
            >
              <Grid container direction="column">
                <Typography variant="h2" style={{ color: 'white' }}>
                  Contact Us
                </Typography>
                <Typography variant="subtitle2">
                  Say Hello!{' '}
                  <span role="img" aria-label="waving hand">
                    👋
                  </span>
                </Typography>
                <Grid item>
                  <Button
                    variant="outlined"
                    style={{ color: 'white', borderColor: 'white' }}
                    className={classes.learnButtonHero}
                    onClick={() => setValue(4)}
                    component={Link}
                    to="/contact"
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={15} height={15} fill="white" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/* -----Call to Action Block----- */}
        <CallToAction setValue={setValue} />
      </Grid>
    </Grid>
  );
}

LandingPage.propTypes = {
  setValue: PropTypes.func.isRequired,
  setSelectedIndex: PropTypes.func.isRequired,
};

export default LandingPage;
