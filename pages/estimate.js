/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { event as gaEvent } from 'nextjs-google-analytics';
import Head from 'next/head';
import { cloneDeep } from 'lodash';
import axios from 'axios';

import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { makeStyles } from 'tss-react/mui';

import Lottie from '../src/ui/Lottie';
import estimateAnimation from '../src/animations/estimateAnimation/data.json';

const useStyles = makeStyles()((theme) => ({
  icon: {
    width: '12em',
    height: '10em',
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    backgroundColor: theme.palette.common.orange,
    height: 50,
    width: 225,
    fontSize: '1.25rem',
    marginTop: '5em',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: '3em',
    marginBottom: '2em',
    borderRadius: 5,
  },
  specialText: {
    fontFamily: 'Raleway',
    fontWeight: 700,
    fontSize: '1.75rem',
    color: theme.palette.common.orange,
  },
}));

const defaultQuestions = [
  {
    id: 1,
    title: 'Which service are you interested in?',
    active: true,
    options: [
      {
        id: 1,
        title: 'Custom Software Development',
        subtitle: null,
        icon: '/assets/software.svg',
        iconAlt: 'three floating screens',
        selected: false,
        cost: 0,
      },
      {
        id: 2,
        title: 'iOS/Android App Development',
        subtitle: null,
        icon: '/assets/mobile.svg',
        iconAlt: 'phones and tablet outline',
        selected: false,
        cost: 0,
      },
      {
        id: 3,
        title: 'Website Development',
        subtitle: null,
        icon: '/assets/website.svg',
        iconAlt: 'computer outline',
        selected: false,
        cost: 0,
      },
    ],
  },
];

const softwareQuestions = [
  { ...defaultQuestions[0], active: false },
  {
    id: 2,
    title: 'Which platforms do you need supported?',
    subtitle: 'Select all that apply.',
    options: [
      {
        id: 1,
        title: 'Web Application',
        subtitle: null,
        icon: '/assets/website.svg',
        iconAlt: 'computer outline',
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: 'iOS Application',
        subtitle: null,
        icon: '/assets/iphone.svg',
        iconAlt: 'outline of iphone',
        selected: false,
        cost: 100,
      },
      {
        id: 3,
        title: 'Android Application',
        subtitle: null,
        icon: '/assets/android.svg',
        iconAlt: 'outlines of android phone',
        selected: false,
        cost: 100,
      },
    ],
    active: true,
  },
  {
    id: 3,
    title: 'Which features do you expect to use?',
    subtitle: 'Select all that apply.',
    options: [
      {
        id: 1,
        title: 'Photo/Video',
        subtitle: null,
        icon: '/assets/camera.svg',
        iconAlt: 'camera outline',
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: 'GPS',
        subtitle: null,
        icon: '/assets/gps.svg',
        iconAlt: 'gps pin',
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: 'File Transfer',
        subtitle: null,
        icon: '/assets/upload.svg',
        iconAlt: 'outline of cloud with arrow pointing up',
        selected: false,
        cost: 25,
      },
    ],
    active: false,
  },
  {
    id: 4,
    title: 'Which features do you expect to use?',
    subtitle: 'Select all that apply.',
    options: [
      {
        id: 1,
        title: 'Users/Authentication',
        subtitle: null,
        icon: '/assets/users.svg',
        iconAlt: 'outline of a person with a plus sign',
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: 'Biometrics',
        subtitle: null,
        icon: '/assets/biometrics.svg',
        iconAlt: 'fingerprint',
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: 'Push Notifications',
        subtitle: null,
        icon: '/assets/bell.svg',
        iconAlt: 'outline of a bell',
        selected: false,
        cost: 25,
      },
    ],
    active: false,
  },
  {
    id: 5,
    title: 'What type of custom features do you expect to need?',
    subtitle: 'Select one.',
    options: [
      {
        id: 1,
        title: 'Low Complexity',
        subtitle: '(Informational)',
        icon: '/assets/info.svg',
        iconAlt: "'i' inside a circle",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: 'Medium Complexity',
        subtitle: '(Interactive, Customizable, Realtime)',
        icon: '/assets/customized.svg',
        iconAlt: 'two toggle switches',
        selected: false,
        cost: 50,
      },
      {
        id: 3,
        title: 'High Complexity',
        subtitle: '(Data Modeling and Computation)',
        icon: '/assets/data.svg',
        iconAlt: 'outline of line graph',
        selected: false,
        cost: 100,
      },
    ],
    active: false,
  },
  {
    id: 6,
    title: 'How many users do you expect?',
    subtitle: 'Select one.',
    options: [
      {
        id: 1,
        title: '0-10',
        subtitle: null,
        icon: '/assets/person.svg',
        iconAlt: 'person outline',
        selected: false,
        cost: 1,
      },
      {
        id: 2,
        title: '10-100',
        subtitle: null,
        icon: '/assets/persons.svg',
        iconAlt: 'outline of two people',
        selected: false,
        cost: 1.25,
      },
      {
        id: 3,
        title: '100+',
        subtitle: null,
        icon: '/assets/people.svg',
        iconAlt: 'outline of three people',
        selected: false,
        cost: 1.5,
      },
    ],
    active: false,
  },
];

const websiteQuestions = [
  { ...defaultQuestions[0], active: false },
  {
    id: 2,
    title: 'Which type of website are you wanting?',
    subtitle: 'Select one.',
    options: [
      {
        id: 1,
        title: 'Basic',
        subtitle: '(Informational)',
        icon: '/assets/info.svg',
        iconAlt: 'person outline',
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: 'Interactive',
        subtitle: "(Users, API's, Messaging)",
        icon: '/assets/customized.svg',
        iconAlt: 'outline of two people',
        selected: false,
        cost: 200,
      },
      {
        id: 3,
        title: 'E-Commerce',
        subtitle: '(Sales)',
        icon: '/assets/globe.svg',
        iconAlt: 'outline of three people',
        selected: false,
        cost: 250,
      },
    ],
    active: true,
  },
];

export default function Estimate() {
  const { classes } = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));

  const [questions, setQuestions] = useState(defaultQuestions);
  const [dialogOpen, setDialogOpen] = useState(false);

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');
  const [emailHelper, setEmailHelper] = useState('');

  const [phone, setPhone] = useState('');
  const [phoneHelper, setPhoneHelper] = useState('');

  const [message, setMessage] = useState('');

  const [total, setTotal] = useState(0);

  const [service, setService] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [features, setFeatures] = useState([]);
  const [customFeatures, setCustomFeatures] = useState('');
  const [category, setCategory] = useState('');
  const [usersNumber, setUsersNumber] = useState('');

  const [loading, setLoading] = useState(false);

  const [alert, setAlert] = useState({
    open: false,
    message: '',
    backgroundColor: '',
  });

  const nextQuestion = () => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex + 1;

    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

    setQuestions(newQuestions);
  };

  const previousQuestion = () => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex - 1;

    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

    setQuestions(newQuestions);
  };

  const navigationPreviousDisabled = () => {
    const currentlyActive = questions.filter((question) => question.active);
    if (currentlyActive[0].id === 1) {
      return true;
    }
    return false;
  };
  const navigationNextDisabled = () => {
    const currentlyActive = questions.filter((question) => question.active);
    if (currentlyActive[0].id === questions[questions.length - 1].id) {
      return true;
    }
    return false;
  };

  const clearSelection = () => {
    setPlatforms([]);
    setFeatures([]);
    setCustomFeatures('');
    setCategory('');
    setUsersNumber('');
  };

  const handleSelect = (id) => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;

    const newSelected = newQuestions[activeIndex].options[id - 1];
    const previousSelected = currentlyActive[0].options.filter(
      (option) => option.selected
    );

    switch (currentlyActive[0].subtitle) {
      case 'Select one.':
        if (previousSelected[0]) {
          previousSelected[0].selected = !previousSelected[0].selected;
        }
        newSelected.selected = !newSelected.selected;
        break;
      default:
        newSelected.selected = !newSelected.selected;
        break;
    }

    switch (newSelected.title) {
      case 'Custom Software Development':
        setQuestions(softwareQuestions);
        setService(newSelected.title);
        clearSelection();
        break;
      case 'iOS/Android App Development':
        setQuestions(softwareQuestions);
        setService(newSelected.title);
        clearSelection();
        break;
      case 'Website Development':
        setQuestions(websiteQuestions);
        setService(newSelected.title);
        clearSelection();
        break;
      default:
        setQuestions(newQuestions);
        break;
    }
  };

  const onChange = (event) => {
    let valid;

    switch (event.target.id) {
      case 'email':
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );
        setEmailHelper(!valid ? 'Invalid email' : '');
        break;
      case 'phone':
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );
        setPhoneHelper(!valid ? 'Invalid phone' : '');
        break;
      default:
        break;
    }
  };

  const getTotal = () => {
    let cost = 0;

    const selections = questions
      .map((question) => question.options.filter((option) => option.selected))
      .filter((question) => question.length > 0);

    selections.forEach((options) =>
      options.forEach((option) => {
        cost += option.cost;
      })
    );

    if (questions.length > 2) {
      const userCost = questions
        .filter(
          (question) => question.title === 'How many users do you expect?'
        )
        .map((question) =>
          question.options.filter((option) => option.selected)
        )[0][0];

      setUsersNumber(userCost.title);

      cost -= userCost.cost;
      cost *= userCost.cost;
    }

    setTotal(cost);
  };

  const getPlatforms = () => {
    const newPlatforms = [];

    if (questions.length > 2) {
      questions
        .filter(
          (question) =>
            question.title === 'Which platforms do you need supported?'
        )
        .map((question) =>
          question.options.filter((option) => option.selected)
        )[0]
        .forEach((option) => {
          newPlatforms.push(option.title);
        });

      setPlatforms(newPlatforms);
    }
  };

  const getFeatures = () => {
    const newFeatures = [];

    if (questions.length > 2) {
      questions
        .filter(
          (question) =>
            question.title === 'Which features do you expect to use?'
        )
        .map((question) => question.options.filter((option) => option.selected))
        .map((option) =>
          option.forEach((newFeature) => {
            newFeatures.push(newFeature.title);
          })
        );

      setFeatures(newFeatures);
    }
  };

  const getCustomFeatures = () => {
    if (questions.length > 2) {
      const newCustomFratures = questions
        .filter(
          (question) =>
            question.title ===
            'What type of custom features do you expect to need?'
        )
        .map((question) =>
          question.options.filter((option) => option.selected)
        )[0][0].title;

      setCustomFeatures(newCustomFratures);
    }
  };

  const getCategory = () => {
    if (questions.length === 2) {
      const newCategory = questions
        .filter(
          (question) =>
            question.title === 'Which type of website are you wanting?'
        )[0]
        .options.filter((option) => option.selected)[0].title;

      setCategory(newCategory);
    }
  };

  const clearForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setDialogOpen(false);
  };

  const sendEstimate = () => {
    setLoading(true);
    gaEvent('estimate_sent', {
      browser_type: matchesSM ? 'mobile' : 'desktop',
      category: 'estimate',
    });
    axios
      .get(
        'https://us-central1-material-ui-course-b85b7.cloudfunctions.net/sendMail',
        {
          params: {
            name,
            email,
            phone,
            message,
            total,
            category,
            service,
            platforms,
            features,
            customFeatures,
            users: usersNumber,
          },
        }
      )
      .then((res) => {
        setLoading(false);
        clearForm();
        setAlert({
          open: true,
          message: 'Estimate placed successfully!',
          backgroundColor: '#4BB543',
        });
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
        setLoading(false);
        setAlert({
          open: true,
          message: 'Something went wrong, please try again!',
          backgroundColor: '#FF3232',
        });
      });
  };

  const estimateDisabled = () => {
    let disabled = true;

    const emptySelections = questions
      .map((question) => question.options.filter((option) => option.selected))
      .filter((question) => question.length === 0);

    if (questions.length === 2) {
      if (emptySelections.length === 1) {
        disabled = false;
      }
    } else if (questions.length === 1) {
      disabled = true;
    } else if (
      emptySelections.length < 3 &&
      questions[questions.length - 1].options.filter(
        (option) => option.selected
      ).length > 0
    ) {
      disabled = false;
    }

    return disabled;
  };

  const placeRequestDisabled = () =>
    name.length === 0 ||
    message.length === 0 ||
    emailHelper.length !== 0 ||
    phoneHelper.length !== 0;

  const softwareSelection = (
    <Grid container direction="column">
      <Grid
        item
        container
        alignItems="center"
        style={{ marginBottom: '1.25em' }}
      >
        <Grid item xs={2}>
          <img src="/assets/check.svg" alt="checkmark" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">
            You want {service}
            {platforms.length > 0
              ? ` for ${
                  // if only web application is selected...
                  platforms.indexOf('Web Application') > -1 &&
                  platforms.length === 1
                    ? // then finish sentence here
                      'a Web Application.'
                    : // otherwise, if web application and another platform is selected...
                    platforms.indexOf('Web Application') > -1 &&
                      platforms.length === 2
                    ? // then finish the sentence here
                      `a Web Application and an ${platforms[1]}.`
                    : // otherwise, if only one platform is selected which isn't web application...
                    platforms.length === 1
                    ? // then finish the sentence here
                      `an ${platforms[0]}`
                    : // otherwise, if other two options are selected...
                    platforms.length === 2
                    ? // then finish the sentence here
                      'an iOS Application and an Android Application.'
                    : // otherwise if all three are selected...
                    platforms.length === 3
                    ? // then finish the sentence here
                      'a Web Application, an iOS Application, and an Android Application.'
                    : null
                }`
              : null}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        style={{ marginBottom: '1.25em' }}
      >
        <Grid item xs={2}>
          <img src="/assets/check.svg" alt="checkmark" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">
            {'with '}
            {/* if we have features... */}
            {features.length > 0
              ? // ...and there's only 1...
                features.length === 1
                ? // then end the sentence here
                  `${features[0]}.`
                : // otherwise, if there are two features...
                features.length === 2
                ? // ...then end the sentence here
                  `${features[0]} and ${features[1]}.`
                : // otherwise, if there are three or more features...
                  features
                    // filter out the very last feature...
                    .filter((feature, index) => index !== features.length - 1)
                    // and for those features return their name...
                    .map((feature) => (
                      <span key={feature}>{`${feature}, `}</span>
                    ))
              : null}
            {features.length > 2
              ? // ...and then finally add the last feature with 'and' in front of it
                ` and ${features[features.length - 1]}.`
              : null}
          </Typography>
        </Grid>
      </Grid>
      <Grid item container alignItems="center">
        <Grid item xs={2}>
          <img src="/assets/check.svg" alt="checkmark" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">
            The custom features will be of {customFeatures.toLowerCase()}
            {`, and the project will be used by about ${usersNumber} users.`}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );

  const websiteSelection = (
    <Grid container direction="column" style={{ marginTop: '14em' }}>
      <Grid item container alignItems="center">
        <Grid item xs={2}>
          <img src="/assets/check.svg" alt="checkmark" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">
            You want{' '}
            {category === 'Basic'
              ? ' a Basic Website.'
              : ` an ${category} Website.`}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <Grid container direction="row">
      <Head>
        <title key="title">
          Free Custom Software Estimate | Arc Development
        </title>
        <meta
          name="description"
          key="description"
          content="Use our free online estimate calculator to instantly check the cost of your custom software, mobile app, or website design and development project! "
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the Midwest | Free Estimate"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="arcdevelopment-artem9.vercel.app/estimate"
        />
        <link
          rel="canonical"
          key="canonical"
          href="arcdevelopment-artem9.vercel.app/estimate"
        />
      </Head>
      <Grid
        item
        container
        direction="column"
        lg
        alignItems={matchesLG ? 'center' : undefined}
      >
        <Grid
          item
          style={{ marginTop: '2em', marginLeft: matchesLG ? 0 : '5em' }}
        >
          <Typography variant="h1" align={matchesLG ? 'center' : undefined}>
            Estimate
          </Typography>
        </Grid>
        <Grid
          item
          style={{
            marginRight: matchesLG ? 0 : '10em',
            maxWidth: '50em',
            marginTop: '7.5em',
          }}
        >
          <Lottie
            animationData={estimateAnimation}
            style={{ height: '100%', width: '100%' }}
            autoplay
            loop
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        direction="column"
        style={{ marginRight: matchesLG ? 0 : '2em', marginBottom: '25em' }}
        lg
      >
        {questions
          .filter((question) => question.active)
          .map((question) => (
            <React.Fragment key={question.title}>
              <Grid item>
                <Typography
                  variant="h1"
                  align="center"
                  style={{
                    fontWeight: 500,
                    fontSize: '2.25rem',
                    marginTop: '5em',
                    lineHeight: 1.25,
                    marginLeft: matchesMD ? '1em' : 0,
                    marginRight: matchesMD ? '1em' : 0,
                  }}
                >
                  {question.title}
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  style={{ marginBottom: '2.5em' }}
                  gutterBottom
                >
                  {question.subtitle}
                </Typography>
              </Grid>
              <Grid item container>
                {question.options.map((option) => (
                  <Grid
                    key={option.title}
                    item
                    container
                    direction="column"
                    md
                    component={Button}
                    onClick={() => handleSelect(option.id)}
                    style={{
                      display: 'grid',
                      textTransform: 'none',
                      borderRadius: 0,
                      backgroundColor: option.selected
                        ? theme.palette.common.orange
                        : null,
                      marginBottom: matchesMD ? '1.5em' : 0,
                    }}
                  >
                    <Grid item style={{ maxWidth: '14em' }}>
                      <Typography
                        variant="h6"
                        align="center"
                        style={{ marginBottom: '1em' }}
                      >
                        {option.title}
                      </Typography>
                      <Typography variant="caption" align="center">
                        {option.subtitle}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <img
                        src={option.icon}
                        alt={option.iconAlt}
                        className={classes.icon}
                      />
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </React.Fragment>
          ))}
        <Grid
          item
          container
          justifyContent="space-between"
          style={{ width: '18em', marginTop: '3em' }}
        >
          <Grid item>
            <IconButton
              disabled={navigationPreviousDisabled()}
              onClick={previousQuestion}
            >
              <img
                src={
                  navigationPreviousDisabled()
                    ? '/assets/backArrowDisabled.svg'
                    : '/assets/backArrow.svg'
                }
                alt="Previous question"
              />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              disabled={navigationNextDisabled()}
              onClick={nextQuestion}
            >
              <img
                src={
                  navigationNextDisabled()
                    ? '/assets/forwardArrowDisabled.svg'
                    : '/assets/forwardArrow.svg'
                }
                alt="Next question"
              />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            className={classes.estimateButton}
            disabled={estimateDisabled()}
            onClick={() => {
              setDialogOpen(true);
              getTotal();
              getPlatforms();
              getFeatures();
              getCustomFeatures();
              getCategory();
              gaEvent('get_estimate', {
                browser_type: matchesSM ? 'mobile' : 'desktop',
                category: 'estimate',
              });
            }}
          >
            Get Estimate
          </Button>
        </Grid>
      </Grid>
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        style={{ zIndex: 1302 }}
        fullWidth
        maxWidth="lg"
        fullScreen={matchesMD}
      >
        <Grid container justifyContent="center">
          <Grid item style={{ marginTop: '1em', marginBottom: '1em' }}>
            <Typography variant="h1" align="center">
              Estimate
            </Typography>
          </Grid>
        </Grid>
        <DialogContent>
          <Grid
            container
            justifyContent="space-around"
            direction={matchesMD ? 'column' : 'row'}
            alignItems={matchesMD ? 'center' : undefined}
          >
            <Grid
              item
              container
              direction="column"
              md={7}
              style={{ maxWidth: '20em' }}
            >
              <Grid item style={{ marginBottom: '0.5em' }}>
                <TextField
                  label="Name"
                  id="name"
                  value={name}
                  variant="standard"
                  onChange={(event) => setName(event.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item style={{ marginBottom: '0.5em' }}>
                <TextField
                  label="Email"
                  id="email"
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  value={email}
                  variant="standard"
                  onChange={onChange}
                  fullWidth
                />
              </Grid>
              <Grid item style={{ marginBottom: '0.5em' }}>
                <TextField
                  label="Phone"
                  id="phone"
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                  value={phone}
                  variant="standard"
                  onChange={onChange}
                  fullWidth
                />
              </Grid>
              <Grid item style={{ maxWidth: matchesSM ? '100%' : '20em' }}>
                <TextField
                  id="message"
                  InputProps={{ disableUnderline: true }}
                  className={classes.message}
                  value={message}
                  variant="standard"
                  placeholder="Tell us more about your project"
                  onChange={(event) => setMessage(event.target.value)}
                  rows={10}
                  fullWidth
                  multiline
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  align={matchesMD ? 'center' : undefined}
                  style={{ lineHeight: 1.25 }}
                  paragraph
                >
                  We can create this digital solution for an estimated{' '}
                  <span className={classes.specialText}>
                    ${total.toFixed(2)}
                  </span>
                </Typography>
                <Typography
                  variant="body1"
                  align={matchesMD ? 'center' : undefined}
                  paragraph
                >
                  Fill out your name, phone number, and email, place your
                  request, and we&apos;ll get back to you with details moving
                  forward and a final price.
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              alignItems={matchesMD ? 'center' : undefined}
              md={5}
              style={{ maxWidth: '30em' }}
            >
              <Hidden mdDown>
                <Grid item>
                  {questions.length > 2 ? softwareSelection : websiteSelection}
                </Grid>
              </Hidden>
              <Grid item>
                <Button
                  variant="contained"
                  className={classes.estimateButton}
                  onClick={sendEstimate}
                  disabled={placeRequestDisabled()}
                >
                  {loading ? (
                    <CircularProgress />
                  ) : (
                    <>
                      Place Request
                      <img
                        src="/assets/send.svg"
                        alt="paper airplane"
                        style={{ marginLeft: '0.5em' }}
                      />
                    </>
                  )}
                </Button>
              </Grid>
              <Hidden mdUp>
                <Grid item style={{ marginBottom: matchesMD ? '5em' : 0 }}>
                  <Button
                    style={{ fontWeight: 300 }}
                    color="primary"
                    onClick={() => setDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                </Grid>
              </Hidden>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={4000}
        onClose={() => setAlert({ ...alert, open: false })}
        open={alert.open}
        message={alert.message}
        ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
      />
    </Grid>
  );
}
