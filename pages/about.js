import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { makeStyles } from 'tss-react/mui';

import CallToAction from '../src/ui/CallToAction';

const useStyles = makeStyles()((theme) => ({
  avatar: {
    height: '25em',
    width: '25em',
    [theme.breakpoints.down('md')]: {
      height: '20em',
      width: '20em',
      maxHeight: 300,
      maxWidth: 300,
    },
  },
  missionStatement: {
    fontStyle: 'italic',
    fontWeight: 300,
    fontSize: '1.5rem',
    maxWidth: '50em',
    lineHeight: 1.4,
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

function About({ setValue }) {
  const { classes } = useStyles();
  const theme = useTheme();
  const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Grid container direction="row">
      <Head>
        <title key="title">About Us - History & Team | Arc Development</title>
        <meta
          name="description"
          key="description"
          content="We provide the fastest, most modern, affordable, and aesthetic software design and development services in the Midwest. Get a free online estimate now!"
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the Midwest | About Us"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="arcdevelopment-artem9.vercel.app/about" />
        <link rel="canonical" key="canonical" href="arcdevelopment-artem9.vercel.app/about" />
      </Head>
      <Grid
        item
        className={classes.rowContainer}
        style={{ marginTop: matchesLG ? '1em' : '2em' }}
      >
        <Typography variant="h1" align={matchesLG ? 'center' : undefined}>
          About Us
        </Typography>
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        className={classes.rowContainer}
        style={{ marginTop: '3em' }}
      >
        <Typography
          variant="h4"
          align="center"
          className={classes.missionStatement}
        >
          Whether it be person to person, business to consumer, or an individual
          to their interests, technology is meant to bring us closer to what we
          care about in the best way possible. Arc Development will use that
          principle to provide fast, modern, inexpensive, and aesthetic software
          to the Midwest and beyond.
        </Typography>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        direction={matchesLG ? 'column' : 'row'}
        alignItems={matchesLG ? 'center' : undefined}
        style={{ marginTop: '10em', marginBottom: '10em' }}
        justifyContent="space-around"
      >
        <Grid item>
          <Grid
            item
            container
            lg
            direction="column"
            style={{ maxWidth: '35em' }}
          >
            <Grid item>
              <Typography
                variant="h4"
                align={matchesLG ? 'center' : undefined}
                gutterBottom
              >
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchesLG ? 'center' : undefined}
                paragraph
                style={{ fontWeight: 700, fontStyle: 'italic' }}
              >
                We&apos;re the new kid on the block
              </Typography>
              <Typography
                variant="body1"
                align={matchesLG ? 'center' : undefined}
                paragraph
              >
                Founded in 2019, we&apos;re ready to get our hands on the
                world&apos;s business problems.
              </Typography>
              <Typography
                variant="body1"
                align={matchesLG ? 'center' : undefined}
                paragraph
              >
                It all started with one question: Why are&apos;n all businesses
                using available technology? There are many different answers to
                that question: economic barriers, social barriers, educational
                barriers, and sometimes institutional barriers.
              </Typography>
              <Typography
                variant="body1"
                align={matchesLG ? 'center' : undefined}
                paragraph
              >
                We aim to be a powerful force in overcoming these obstacles.
                Recent developments in software engineering and computing power,
                compounded by the proliferation of smart phones, has opened up
                infinite worlds of possibility. Things that have always been
                done by hand can now be done digitally and automatically, and
                completely new methods of interaction are created daily. Taking
                full advantage of these advancements is the name of the game.
              </Typography>
              <Typography
                variant="body1"
                align={matchesLG ? 'center' : undefined}
                paragraph
              >
                All this change can be a lot to keep up with, and that&apos;s
                where we come in.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container justifyContent="center" lg>
            <img
              src="/assets/history.svg"
              alt="quill pen sitting on top of book"
              style={{ maxHeight: matchesLG ? 200 : '22em' }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginBottom: '15em' }}
      >
        <Grid item>
          <Typography variant="h4" align="center" gutterBottom>
            Team
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" paragraph align="center">
            Zachary Reece, Founder
          </Typography>
          <Typography variant="body1" paragraph align="center">
            I started coding when I was 9 years old.
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            alt="founder"
            src="/assets/founder.jpg"
            className={classes.avatar}
          />
        </Grid>
        <Grid item container justifyContent={matchesLG ? 'center' : undefined}>
          <Hidden lgUp>
            <Grid item lg style={{ maxWidth: '45em', padding: '1.25em' }}>
              <Typography variant="body1" align="center" paragraph>
                I taught myself basic coding from a library book in third grade,
                and ever since then my passion has solely been set on learning -
                learning about computers, learning mathematics and philosophy,
                studying design, always just learning.
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                Now I&apos;m ready to apply everything I&apos;ve learned, and to
                help others with the intuition I have developed.
              </Typography>
            </Grid>
          </Hidden>
          <Grid
            item
            container
            direction="column"
            lg
            alignItems={matchesLG ? 'center' : undefined}
            style={{ marginBottom: matchesLG ? '2.5em' : 0 }}
          >
            <Grid item>
              <img
                src="/assets/yearbook.svg"
                alt="yearbook page about founder"
                style={{ maxWidth: matchesLG ? 300 : undefined }}
              />
            </Grid>
            <Grid item>
              <Typography variant="caption">
                a page from my Sophomore yearbook
              </Typography>
            </Grid>
          </Grid>
          <Hidden lgDown>
            <Grid item lg style={{ maxWidth: '45em', padding: '1.25em' }}>
              <Typography variant="body1" align="center" paragraph>
                I taught myself basic coding from a library book in third grade,
                and ever since then my passion has solely been set on learning -
                learning about computers, learning mathematics and philosophy,
                studying design, always just learning.
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                Now I&apos;m ready to apply everything I&apos;ve learned, and to
                help others with the intuition I have developed.
              </Typography>
            </Grid>
          </Hidden>
          <Grid
            item
            container
            lg
            direction="column"
            alignItems={matchesLG ? 'center' : 'flex-end'}
          >
            <Grid item>
              <img
                src="/assets/puppy.svg"
                alt="grey spotted poppy"
                style={{ maxWidth: matchesLG ? 300 : undefined }}
              />
            </Grid>
            <Grid item>
              <Typography variant="caption">
                my miniature dapple dachshund, Sterling
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <CallToAction setValue={setValue} />
    </Grid>
  );
}

About.propTypes = {
  setValue: PropTypes.func.isRequired,
};

export default About;
