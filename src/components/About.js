import React from 'react';
import PropTypes from 'prop-types';

import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import useTheme from '@mui/material/styles/useTheme';

import { makeStyles } from 'tss-react/mui';

import CallToAction from './ui/CallToAction';

import history from '../assets/history.svg';
import profile from '../assets/founder.jpg';
import yearbook from '../assets/yearbook.svg';
import puppy from '../assets/puppy.svg';

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
      <Grid
        item
        className={classes.rowContainer}
        style={{ marginTop: matchesLG ? '1em' : '2em' }}
      >
        <Typography variant="h2" align={matchesLG ? 'center' : undefined}>About Us</Typography>
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
              src={history}
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
          <Avatar alt="founder" src={profile} className={classes.avatar} />
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
                src={yearbook}
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
                src={puppy}
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
