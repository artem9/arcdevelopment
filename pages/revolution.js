import React from 'react';
import Head from 'next/head';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { makeStyles } from 'tss-react/mui';

import Lottie from '../src/ui/Lottie';

import technologyAnimation from '../src/animations/technologyAnimation/data.json';

const useStyles = makeStyles()((theme) => ({
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('md')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
  },
}));

export default function Revolution() {
  const { classes } = useStyles();
  const theme = useTheme();
  const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
          The Revolution - Cutting-Edge Software | Arc Development
        </title>
        <meta
          name="description"
          key="description"
          content="Visionary insights, coupled with cutting-edge technology, is a recipe for revolution. Get a free online estimate instantly!"
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the Midwest | The Revolution"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="arc.com/revolution" />
        <link rel="canonical" key="canonical" href="arc.com/revolution" />
      </Head>
      <Grid item className={classes.rowContainer} style={{ marginTop: '2em' }}>
        <Typography
          variant="h1"
          align={matchesLG ? 'center' : undefined}
          style={{ fontFamily: 'Pacifico' }}
        >
          The Revolution
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction={matchesLG ? 'column' : 'row'}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: '5em' }}
      >
        <Grid item lg>
          <img
            src="/assets/vision.svg"
            alt="mountain through binoculars"
            style={{
              maxWidth: matchesMD ? 300 : '40em',
              marginRight: matchesLG ? 0 : '5em',
              marginBottom: matchesLG ? '5em' : 0,
            }}
          />
        </Grid>
        <Grid item container direction="column" style={{ maxWidth: '40em' }} lg>
          <Grid item>
            <Typography
              variant="h4"
              align={matchesLG ? 'center' : 'right'}
              gutterBottom
            >
              Vision
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesLG ? 'center' : 'right'}
              paragraph
            >
              The rise of computers, and subsequently the Internet, has
              completely altered every aspect of human life. This has increased
              our comfort, broadened our connections, and reshaped how we view
              the world.
            </Typography>
            <Typography
              variant="body1"
              align={matchesLG ? 'center' : 'right'}
              paragraph
            >
              What once was confined to huge rooms and teams of engineers now
              resides in every single one of our hands. Harnessing this
              unlimited potential by using it to solve problems and better lives
              is at the heart of everything we do.
            </Typography>
            <Typography
              variant="body1"
              align={matchesLG ? 'center' : 'right'}
              paragraph
            >
              We want to help businesses capitalize on the latest and greatest
              technology. The best way to predict the future is to be the one
              building it, and we want to help guide the world into this next
              chapter of technological expansion, exploration, and innovation.
            </Typography>
            <Typography
              variant="body1"
              align={matchesLG ? 'center' : 'right'}
              paragraph
            >
              By holding ourselves to rigorous standards and pristine quality,
              we can ensure you have the absolute best tools necessary to thrive
              in this new frontier.
            </Typography>
            <Typography
              variant="body1"
              align={matchesLG ? 'center' : 'right'}
              paragraph
            >
              We see a future where every individual has personalized software
              custom tailored to their lifestyle, culrture, and interests,
              helping them overcome life&apos;s obstacles. Each is a step
              towards that goal.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesLG ? 'column' : 'row'}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: '10em', marginBottom: '10em' }}
      >
        <Grid item container direction="column" style={{ maxWidth: '40em' }} lg>
          <Grid item>
            <Typography
              variant="h4"
              align={matchesLG ? 'center' : undefined}
              gutterBottom
            >
              Technology
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesLG ? 'center' : undefined}
              paragraph
            >
              In 2013, Facebook invented a new way of building websites. This
              new system, React.js, completely revolutionized the process and
              practice of website development.
            </Typography>
            <Typography
              variant="body1"
              align={matchesLG ? 'center' : undefined}
              paragraph
            >
              Instead of chaining together long individuals pages, like
              traditional websites, React websites are built with little chunks
              of code called components. These components are faster, easier to
              maintain, and are easily reused and customized, each serving a
              singular purpose.
            </Typography>
            <Typography
              variant="body1"
              align={matchesLG ? 'center' : undefined}
              paragraph
            >
              Two years later they shocked the world by releasing a similar
              system, React Native, for producing iOS and Android apps. Instead
              of having to master two completely separate development platforms,
              you can leverage the knowledge you already possessed from building
              websites and reapply it directly! This was a huge leap forward.
            </Typography>
            <Typography
              variant="body1"
              align={matchesLG ? 'center' : undefined}
              paragraph
            >
              This technology is now being used by companies like AirBnB,
              Microsoft, Netflix, Pinterest, Skype, Tesla, UberEats, and when
              Facebook purchased Instagram large portions of it were even
              rebuilt using React.
            </Typography>
            <Typography
              variant="body1"
              align={matchesLG ? 'center' : undefined}
              paragraph
            >
              Developers have since built on top of these systems by automating
              project setup and deployment, allowing creators to focus as much
              as possible on their work itself.
            </Typography>
            <Typography
              variant="body1"
              align={matchesLG ? 'center' : undefined}
              paragraph
            >
              These technical advancements translate into savings by
              significantly reducing the workload and streamlining the workflow
              for developing new pieces of software, while also lowering the
              barrier to entry for mobile app development.
            </Typography>
            <Typography
              variant="body1"
              align={matchesLG ? 'center' : undefined}
              paragraph
            >
              This puts personalization in your pocket - faster, better, and
              more affordable than ever before.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent={matchesLG ? 'center' : 'flex-end'}
          lg
        >
          <Lottie
            animationData={technologyAnimation}
            style={{ maxWidth: '40em', margin: 0 }}
            autoplay
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        justifyContent="center"
      >
        <Grid item>
          <Typography variant="h4" gutterBottom>
            Process
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesLG ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#B3B3B3', height: '90em' }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesLG ? 'center' : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              align={matchesLG ? 'center' : undefined}
              style={{ color: '#000', marginTop: '5em' }}
              gutterBottom
            >
              Consultation
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesLG ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Our process begins the moment you realize you need a piece of
              technology for your business. Whether you already have an idea for
              where to start and what to do, or if you just know you want to
              step things up, our initial consultation will help you examine
              your business holistically to find the best solutions.
            </Typography>
            <Typography
              variant="body1"
              align={matchesLG ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Detailed notes will be taken on your requirements and constraints,
              while taking care to identify other potential areas for
              consideration.
            </Typography>
            <Typography
              variant="body1"
              align={matchesLG ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Cutting-edge advancements in machine learning like object
              detection and natural language processing allow computers to do
              things previously unimaginable, and our expertise and intuition
              will help usher you into this new future of possibilities.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            src="/assets/consultationIcon.svg"
            alt="handshake"
            width="100%"
            style={{ maxWidth: 700 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesLG ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#FF7373', height: '90em' }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesLG ? 'center' : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesLG ? 'center' : undefined}
              style={{ color: '#000', marginTop: '5em' }}
            >
              Mockup
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesLG ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              After we settle on the best path forward and decide on a solution
              to pursue, details like the cost and timeline will be finalized.
            </Typography>
            <Typography
              variant="body1"
              align={matchesLG ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Then it&apos;s time for us to start on your minimum viable
              priduct. That&apos;s just a fancy term for a mockup, which
              doen&apos;t include colors, images, or any other polished design
              elements, but captures the essential layout structure and
              functionality.
            </Typography>
            <Typography
              variant="body1"
              align={matchesLG ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              This helps us understand and refine the solution itself before
              getting distracted by specifics and looks.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            src="/assets/mockupIcon.svg"
            alt="basic website design outline"
            width="100%"
            style={{ maxWidth: 1000 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesLG ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#39B54A', height: '90em' }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesLG ? 'center' : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesLG ? 'center' : undefined}
              style={{ color: '#000', marginTop: '5em' }}
            >
              Review
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesLG ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Before moving any farther we come back to you with our progress.
              This gives you the freedom to discuss any chnages you may want or
              any ideas you may have come up with before any heavy lifting has
              been done.
            </Typography>
            <Typography
              variant="body1"
              align={matchesLG ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              We give you an interactive demonstration of the mockups, throughly
              explaining the thought precess that went into each screen and
              every anticipated feature.
            </Typography>
            <Typography
              variant="body1"
              align={matchesLG ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Once you&apos;re completely satisfied with the vision for our
              solution we get down to the gritty, fine-details of design.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            src="/assets/reviewIcon.svg"
            alt="magnifying glass"
            width="100%"
            style={{ maxWidth: '40em' }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesLG ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#A67C52', height: '90em' }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesLG ? 'center' : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesLG ? 'center' : undefined}
              style={{ color: '#000', marginTop: '5em' }}
            >
              Design
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesLG ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Using the mockups and notes taken during the consultations as
              guides, we will start ironing out what the final product will look
              like. This also involves using any brand material like fonts,
              colors, and logos to extend the experience you&apos;re already
              familiar with.
            </Typography>
            <Typography
              variant="body1"
              align={matchesLG ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              No aspect is superfluous, and care will be taken with every
              decision.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            src="/assets/designIcon.svg"
            alt="paintbrush leaving stroke of paint"
            width="100%"
            style={{ maxWidth: 1000 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesLG ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#39B54A', height: '90em' }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesLG ? 'center' : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesLG ? 'center' : undefined}
              style={{ color: '#000', marginTop: '5em' }}
            >
              Review
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesLG ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              A second round of review is essential to our goal of creating
              exacly what you want, exacly how you want it.
            </Typography>
            <Typography
              variant="body1"
              align={matchesLG ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              This time we&apos;ll be going over the finalized designs in
              another fully interactive demonstration. Again this gives you an
              opportunity to tweak things and make sure we get everything right
              the first time.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            src="/assets/reviewIcon.svg"
            alt="magnifying glass"
            width="100%"
            style={{ maxWidth: '40em' }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesLG ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#FBB03B', height: '90em' }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesLG ? 'center' : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesLG ? 'center' : undefined}
              style={{ color: '#000', marginTop: '5em' }}
            >
              Build
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesLG ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Here&apos;s where we get down to business.
            </Typography>
            <Typography
              variant="body1"
              align={matchesLG ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Engineering begins after your approval on the final designs. We
              start by scaffolding out the project on a high level, prioritizing
              some areas over others.
            </Typography>
            <Typography
              variant="body1"
              align={matchesLG ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Each area is then developed in order of importance until ready to
              be connected to the next piece.
            </Typography>
            <Typography
              variant="body1"
              align={matchesLG ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Typically the backend, behind the scenes operations are completed
              first. Once all the services are in place we can then create the
              front end, user side of things.
            </Typography>
            <Typography
              variant="body1"
              align={matchesLG ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Finishing the application doesn&apos;t mean we&apos;re done
              though, because we use extensive testing to guarantee
              compatibility with all intended devices.
            </Typography>
            <Typography
              variant="body1"
              align={matchesLG ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Only after our rigorous examinations will be accept a product as
              finished, then pushing it through the production pipeline. This
              produces an optimized, compressed, consumer version of the code
              and assets ready for deployment.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            src="/assets/buildIcon.svg"
            alt="building construction site"
            width="100%"
            style={{ maxWidth: matchesLG ? 700 : 1000 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesLG ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#C1272D', height: '90em' }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesLG ? 'center' : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesLG ? 'center' : undefined}
              style={{ color: '#000', marginTop: '5em' }}
            >
              Launch
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesLG ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              The moment we&apos;ve all been waiting for.
            </Typography>
            <Typography
              variant="body1"
              align={matchesLG ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              When construction comes to a close you&apos;re the first one to
              know. We&apos;ll give our final demonstration to show off your
              shiny new software in the wild so you know exacly how it will look
              to your users.
            </Typography>
            <Typography
              variant="body1"
              align={matchesLG ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              When you say the word, we press the button and launch your project
              out the public. We&apos;re there to ensure everything goes to plan
              so you can start reaping the rewards of your technological
              investment immediately.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            src="/assets/launchIcon.svg"
            alt="rocket"
            width="100%"
            style={{ maxWidth: 200 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesLG ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#8E45CE', height: '90em' }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesLG ? 'center' : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesLG ? 'center' : undefined}
              style={{ color: '#000', marginTop: '5em' }}
            >
              Maintain
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesLG ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Our work doesn&apos;t end there.
            </Typography>
            <Typography
              variant="body1"
              align={matchesLG ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              After a successfull launch we keep in close contact to listen to
              feedback and hear how the project is being received.
            </Typography>
            <Typography
              variant="body1"
              align={matchesLG ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              From there on out we make sure your application is kept up to date
              and taking advantage of the best features and practices available.
              When new developments arise or new techniques are discovered in
              future projects, we will implement those advancements in your
              project as part of our routine maintenance.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            src="/assets/maintainIcon.svg"
            alt="wrench tightening bolts"
            width="100%"
            style={{ maxWidth: 500 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesLG ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#29ABE2', height: '90em' }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesLG ? 'center' : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesLG ? 'center' : undefined}
              style={{ color: '#000', marginTop: '5em' }}
            >
              Iterate
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesLG ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              The cycle repeats whenever you come up with a new idea for
              extending your current project, or come up with a brand new system
              entirely.
            </Typography>
            <Typography
              variant="body1"
              align={matchesLG ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              By planning for future features and changes we can build and
              evolve your application over time. As new use cases and customer
              needs develop we can respond with continuous integration of new
              content.
            </Typography>
            <Typography
              variant="body1"
              align={matchesLG ? 'center' : undefined}
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Our iterative precess will keep you current and competitive,
              allowing you to quickly implement chnages instead of waiting
              months for a single update.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            src="/assets/iterateIcon.svg"
            alt="falling dominoes"
            width="100%"
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
