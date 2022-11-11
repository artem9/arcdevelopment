import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import useTheme from '@mui/material/styles/useTheme';
import { makeStyles } from 'tss-react/mui';

import Lottie from './ui/Lottie';

import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import lightbulb from '../assets/bulb.svg';
import cash from '../assets/cash.svg';
import stopwatch from '../assets/stopwatch.svg';
import roots from '../assets/root.svg';

import automationAnimation from '../animations/automationAnimation/data.json';
import documentsAnimation from '../animations/documentsAnimation/data';
import scaleAnimation from '../animations/scaleAnimation/data.json';
import uxAnimation from '../animations/uxAnimation/data';

const useStyles = makeStyles()((theme) => ({
  arrowContainer: {
    marginTop: '0.7em',
  },
  heading: {
    maxWidth: '40em',
  },
  itemContainer: {
    maxWidth: '40em',
  },
  mainContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    paddingTop: '2em',
    paddingBottom: '10em',
  },
}));

function CustomSoftware({ setSelectedIndex }) {
  const { classes } = useStyles();

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item container direction="row">
        <Grid
          item
          className={classes.arrowContainer}
          style={{ marginRight: '1em', marginLeft: '-3.5em' }}
        >
          <IconButton
            style={{ backgroundColor: 'transparent' }}
            component={Link}
            to="/services"
            onClick={() => setSelectedIndex(0)}
          >
            <img alt="Back to Services Page" src={backArrow} />
          </IconButton>
        </Grid>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2">Custom Software Development</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              Whether we&apos;re replacing old software or inventing new
              solutions, Arc Development is here to help your business tackle
              technology.
            </Typography>
            <Typography variant="body1">
              Using regular commercial software leaves you with a lot of stuff
              you don&apos;t need, without some of the stuff you do need, and
              ultimately controls the way you work. Without using any software
              at all you risk falling behind competitors and missing out on huge
              savings from increased efficiency.
            </Typography>
            <Typography variant="body1">
              Our custom solutions are designed from the ground up with your
              needs, wants, and goals at the core. This collaborative process
              produces finely tuned software that is much more effective at
              improving your workflow and reducing costs than generalized
              options.
            </Typography>
            <Typography variant="body1">
              We create exacly what you want, exacly how you want it.
            </Typography>
          </Grid>
        </Grid>
        <Grid item className={classes.arrowContainer}>
          <IconButton
            style={{ backgroundColor: 'transparent' }}
            component={Link}
            to="/mobileapps"
            onClick={() => setSelectedIndex(2)}
          >
            <img
              alt="Forward to iOS/Android App Development Page"
              src={forwardArrow}
            />
          </IconButton>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justifyContent="center"
        style={{ marginTop: '15em', marginBottom: '20em' }}
      >
        <Grid
          item
          container
          md
          direction="column"
          alignItems="center"
          style={{ maxWidth: '40em' }}
        >
          <Grid item>
            <Typography variant="h4">Save Energy</Typography>
          </Grid>
          <Grid item>
            <img alt="lightbulb" src={lightbulb} />
          </Grid>
        </Grid>
        <Grid
          item
          container
          md
          direction="column"
          alignItems="center"
          style={{ maxWidth: '40em' }}
        >
          <Grid item>
            <Typography variant="h4">Save Time</Typography>
          </Grid>
          <Grid item>
            <img alt="stopwatch" src={stopwatch} />
          </Grid>
        </Grid>
        <Grid
          item
          container
          md
          direction="column"
          alignItems="center"
          style={{ maxWidth: '40em' }}
        >
          <Grid item>
            <Typography variant="h4">Save Money</Typography>
          </Grid>
          <Grid item>
            <img alt="cash" src={cash} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction="row" justifyContent="space-around">
        <Grid item container md className={classes.itemContainer}>
          <Grid item container md direction="column">
            <Grid item>
              <Typography variant="h4">Digtal Documents & Data</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                Reduce Errors. Reduce Waste. Reduce Costs.
              </Typography>
              <Typography variant="body1" paragraph>
                Billions are spent annually on the purchasing, printing, and
                distribution of paper. On top of the massive enviromental impact
                this has, it causes harm to your bottom line as well.
              </Typography>
              <Typography variant="body1" paragraph>
                By utilizing digital forms and documents you can remove these
                obsolete expences, accelerate your communication, and help the
                Earth.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              animationData={documentsAnimation}
              style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
              autoplay
            />
          </Grid>
        </Grid>
        <Grid item container md className={classes.itemContainer}>
          <Grid item md>
            <Lottie
              animationData={scaleAnimation}
              style={{ maxHeight: 260, maxWidth: 280 }}
              autoplay
            />
          </Grid>
          <Grid item container md direction="column">
            <Grid item>
              <Typography variant="h4" align="right">
                Scale
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" align="right" paragraph>
                Whether you&apos;re a large brand, just getting started, or
                taking off right now, our application architecture ensures
                pain-free growth and reliability.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        style={{ marginTop: '20em', marginBottom: '20em' }}
      >
        <Grid item container direction="column" alignItems="center">
          <Grid item>
            <img
              alt="tree with roots extending out"
              src={roots}
              height="450em"
              width="450em"
            />
          </Grid>
          <Grid item className={classes.itemContainer}>
            <Typography variant="h4" align="center" gutterBottom>
              Root-Cause Analysis
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              Many problems are merely symptoms of larger, underlying issues.
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              We can help you throughly examine all areas of your business to
              develop a holistic plan for the most effective implementation of
              technology.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction="row" justifyContent="space-around">
        <Grid item container md className={classes.itemContainer}>
          <Grid item container md direction="column">
            <Grid item>
              <Typography variant="h4">Automation</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                Why waste time when you don&apos;t have to?
              </Typography>
              <Typography variant="body1" paragraph>
                We can help you identify processes with time or event based
                actions which can now easily be automated.
              </Typography>
              <Typography variant="body1" paragraph>
                Increasing efficiency increases profits, leaving you more time
                to focus on your business, not busywork.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              animationData={automationAnimation}
              style={{ maxHeight: 290, maxWidth: 280 }}
              autoplay
            />
          </Grid>
        </Grid>
        <Grid item container md className={classes.itemContainer}>
          <Grid item md>
            <Lottie
              animationData={uxAnimation}
              style={{ maxHeight: 310, maxWidth: 155 }}
              autoplay
            />
          </Grid>
          <Grid item container md direction="column">
            <Grid item>
              <Typography variant="h4" align="right">
                User Experience Design
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" align="right" paragraph>
                A good design that isn&apos;t usable isn&apos;t a good design.
              </Typography>
              <Typography variant="body1" align="right" paragraph>
                So why are so many pieces of software complicated, confusing,
                and frustrating?
              </Typography>
              <Typography variant="body1" align="right" paragraph>
                By prioritizing users and the real ways they interact with
                technology we&apos;re able to develop unique, personable
                experiences that solve problems rather than create new ones.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

CustomSoftware.propTypes = {
  setSelectedIndex: PropTypes.func.isRequired,
};

export default CustomSoftware;
