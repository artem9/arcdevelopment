import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { makeStyles } from 'tss-react/mui';

import ButtonArrow from './ui/ButtonArrow';
import animationData from '../animations/landinganimation/data';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';

const useStyles = makeStyles()((theme) => ({
  animation: {
    maxWidth: '50em',
    minWidth: '21em',
    marginTop: '2em',
    marginLeft: '10%',
    [theme.breakpoints.down('md')]: {
      maxWidth: '30em'
    }
  },
  buttonContainer: {
    marginTop: '1em'
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    }
  },
  heroTextContainer: {
    minWidth: '21.5em',
    marginLeft: '1em',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0
    }
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    height: 45,
    width: 145
  },
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em'
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '2em'
    }
  },
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.orange
  },
  subTitle: {
    marginBottom: '1em'
  }
}));

export default function LandingPage() {
  const { classes } = useStyles();
  const theme = useTheme();
  const element = useRef(null);
  const lottieEnstance = useRef();
  const executeRef = useRef(false);

  useEffect(() => {
    if (executeRef.current) return;
    if (element.current) {
      lottieEnstance.current = lottie.loadAnimation({
        container: element.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMinYMin slice'
        }
      });
    }

    executeRef.current = true;
  }, []);

  return (
    <Grid container direction='column' className={classes.mainContainer}>
      <Grid item> {/* -----Hero Block----- */}
        <Grid container justifyContent='flex-end' alignItems='center' direction='row'>
          <Grid sm item className={classes.heroTextContainer}>
            <Typography align='center' variant='h2'>Bringing West Coast Technology<br />to the Midwest</Typography>
            <Grid container justifyContent='center' className={classes.buttonContainer}>
              <Grid item>
                <Button className={classes.estimateButton} variant='contained'>Free Estimate</Button>
              </Grid>
              <Grid item>
                <Button variant='outlined' className={classes.learnButtonHero}>
                  <span style={{ marginRight: 10 }}>
                    Learn More
                  </span>
                  <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation} >
            <div ref={element} style={{ height: '100%', width: '100%' }} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item> {/* -----Services Block----- */}
        <Grid container direction='row'>
          <Grid item>
            <Typography variant='h4'>
              Custom Software Development
            </Typography>
            <Typography variant='subtitle1' className={classes.subTitle}>
              Save energy. Save Time. Save Money.
            </Typography>
            <Typography variant='subtitle1'>
              Complete digital solutions, from investigation to{' '}
              <span className={classes.specialText}>celebration.</span>
            </Typography>
            <Button variant='outlined' className={classes.learnButton} >
              <span style={{ marginRight: 10 }}>
                Learn More
              </span>
              <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
            </Button>
          </Grid>
          <Grid item>
            <img alt='custom software icon' src={customSoftwareIcon} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
