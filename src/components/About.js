import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useTheme from '@mui/material/styles/useTheme';

import { makeStyles } from 'tss-react/mui';

import history from '../assets/history.svg';

const useStyles = makeStyles()((theme) => ({
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

export default function About() {
  const { classes } = useStyles();
  const theme = useTheme();

  return (
    <Grid container direction="row">
      <Grid item className={classes.rowContainer} style={{ marginTop: '2em' }}>
        <Typography variant="h2">About Us</Typography>
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        className={classes.rowContainer}
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
              <Typography variant="h4" gutterBottom>
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                style={{ fontWeight: 700, fontStyle: 'italic' }}
              >
                We&apos;re the new kid on the block
              </Typography>
              <Typography variant="body1" paragraph>
                Founded in 2019, we&apos;re ready to get our hands on the
                world&apos;s business problems.
              </Typography>
              <Typography variant="body1" paragraph>
                It all started with one question: Why are&apos;n all businesses
                using available technology? There are many different answers to
                that question: economic barriers, social barriers, educational
                barriers, and sometimes institutional barriers.
              </Typography>
              <Typography variant="body1" paragraph>
                We aim to be a powerful force in overcoming these obstacles.
                Recent developments in software engineering and computing power,
                compounded by the proliferation of smart phones, has opened up
                infinite worlds of possibility. Things that have always been
                done by hand can now be done digitally and automatically, and
                completely new methods of interaction are created daily. Taking
                full advantage of these advancements is the name of the game.
              </Typography>
              <Typography variant="body1" paragraph>
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
              style={{ maxHeight: '22em' }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
