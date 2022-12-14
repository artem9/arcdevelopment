import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { makeStyles } from 'tss-react/mui';

import CallToAction from '../src/ui/CallToAction';
import Link from '../src/Link';

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
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
          Stunning Custom Website Design | Arc Development
        </title>
        <meta
          name="description"
          key="description"
          content="Completely custom designed and built from scratch to be blazing fast. Optimized code, server-side rendering, and perfect responsive design | 99% PageSpeed Score"
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the Midwest | Websites"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="arcdevelopment-artem9.vercel.app/websites" />
        <link rel="canonical" key="canonical" href="arcdevelopment-artem9.vercel.app/websites" />
      </Head>
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
              href="/mobileapps"
              onClick={() => setSelectedIndex(2)}
            >
              <img
                alt="Back to iOS/Android App Development Page"
                src="/assets/backArrow.svg"
              />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesLG ? 'center' : undefined} variant="h1">
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
              href="/services"
              onClick={() => setSelectedIndex(0)}
            >
              <img
                alt="Forward to Services Page"
                src="/assets/forwardArrow.svg"
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: '15em' }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="h4"
                align={matchesMD ? 'center' : undefined}
                gutterBottom
              >
                Analytics
              </Typography>
            </Grid>
            <Grid item>
              <img
                src="/assets/analytics.svg"
                style={{ marginLeft: '-2.75em' }}
                alt="graph with magnifying glass revealing 1's and 0's"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.paragraphContainer}>
          <Typography variant="body1" align={matchesMD ? 'center' : undefined}>
            Knowledge is power, and data is 21st Century gold. Analyzing this
            data can reveal hidden patterns and trends in your business,
            empowering you to make smarter decisions with measurable effects.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        alignItems="center"
        justifyContent="flex-end"
        className={classes.rowContainer}
        style={{ marginTop: '15em', marginBottom: '15em' }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" align="center" gutterBottom>
                E-Commerce
              </Typography>
            </Grid>
            <Grid item>
              <img
                src="/assets/ecommerce.svg"
                alt="world outline made of dollar signs"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesMD ? 0 : '1em' }}
          className={classes.paragraphContainer}
        >
          <Typography
            variant="body1"
            align={matchesMD ? 'center' : undefined}
            paragraph
          >
            It&apos;s no secret that people like to shop online.
          </Typography>
          <Typography
            variant="body1"
            align={matchesMD ? 'center' : undefined}
            paragraph
          >
            In 2017 over $2.3 trillion was spent in e-coomerce, and it&apos;s
            time for your slice of that pie.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        alignItems="center"
        className={classes.rowContainer}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="h4"
                align={matchesMD ? 'center' : undefined}
                gutterBottom
              >
                Outreach
              </Typography>
            </Grid>
            <Grid item>
              <img src="/assets/outreach.svg" alt="megaphone" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesMD ? 0 : '1em' }}
          className={classes.paragraphContainer}
        >
          <Typography variant="body1" align={matchesMD ? 'center' : undefined}>
            Draw people in with a dazzling website. Showing off your products
            online is a great way to help customers decide what&apos;s right for
            them before visiting in person.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        alignItems="center"
        justifyContent="flex-end"
        className={classes.rowContainer}
        style={{ marginTop: '15em', marginBottom: '15em' }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" align="center" gutterBottom>
                Search Engine
                <br />
                Optimization
              </Typography>
            </Grid>
            <Grid item>
              <img
                src="/assets/seo.svg"
                alt="website standing on winner's podium"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesMD ? 0 : '1em' }}
          className={classes.paragraphContainer}
        >
          <Typography
            variant="body1"
            align={matchesMD ? 'center' : undefined}
            paragraph
          >
            How often have you ever been to the second page of Google results?
          </Typography>
          <Typography
            variant="body1"
            align={matchesMD ? 'center' : undefined}
            paragraph
          >
            If you&apos;re like us, probably never.
          </Typography>
          <Typography
            variant="body1"
            align={matchesMD ? 'center' : undefined}
            paragraph
          >
            Customers don&apos;t go there either, so we make sure your website
            is designed to end up on top.
          </Typography>
        </Grid>
      </Grid>
      <CallToAction setValue={setValue} />
    </Grid>
  );
}

Websites.propTypes = {
  setSelectedIndex: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default Websites;
