import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { makeStyles } from 'tss-react/mui';

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
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMinYMin slice'
        }
      });
    }

    executeRef.current = true;
  }, []);

  return <div ref={element} style={{ height: '100%', width: '100%' }}></div>;
}
