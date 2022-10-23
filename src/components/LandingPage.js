import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { makeStyles } from 'tss-react/mui';

import ButtonArrow from './ui/ButtonArrow';
import animationData from '../animations/landingAnimation/data';

const useStyles = makeStyles()((theme) => ({}));

export default function LandingPage() {
  const { classes } = useStyles();
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
    <Grid container direction='column'>
      <Grid item>
        <Grid container direction='row'>
          <Grid item>
            <div>Bringing West Coast Technology<br />to the Midwest</div>
            <Grid container>
              <Grid item>
                <Button variant='contained'>Free Estimate</Button>
              </Grid>
              <Grid item>
                <Button variant='outlined'>
                  Learn More
                  <ButtonArrow width={15} height={15} fill='red' />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid>
            <div ref={element} style={{ height: '100%', width: '100%' }} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
