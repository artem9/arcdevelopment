import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import useTheme from '@mui/material/styles/useTheme';

import { makeStyles } from 'tss-react/mui';

import ButtonArrow from './ui/ButtonArrow';

import background from '../assets/background.jpg';
import mobileBackground from '../assets/mobileBackground.jpg';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';
import airplane from '../assets/send.svg';

const useStyles = makeStyles()((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    paddingBottom: '10em',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`,
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: '1.5rem',
    marginRight: '5em',
    marginLeft: '2em',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: '5em',
    borderRadius: 5,
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: '1rem',
    backgroundColor: theme.palette.common.orange,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down('sm')]: {
      height: 40,
      width: 225,
    },
  },
}));

function Contact({ setValue }) {
  const { classes } = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');
  const [emailHelper, setEmailHelper] = useState('');

  const [phone, setPhone] = useState('');
  const [phoneHelper, setPhoneHelper] = useState('');

  const [message, setMessage] = useState('');

  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [alert, setAlert] = useState({
    open: false,
    message: '',
    backgroundColor: '',
  });

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

  const clearForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setOpen(false);
  };

  const onConfirm = () => {
    setLoading(true);
    axios
      .get(
        'https://us-central1-material-ui-course-b85b7.cloudfunctions.net/sendMail',
        {
          params: {
            name,
            email,
            phone,
            message,
          },
        }
      )
      .then((res) => {
        setLoading(false);
        clearForm();
        setAlert({
          open: true,
          message: 'Message sent successfully!',
          backgroundColor: '#4BB543',
        });
      })
      .catch((err) => {
        setLoading(false);
        setAlert({
          open: true,
          message: 'Something went wrong, please try again!',
          backgroundColor: '#FF3232',
        });
      });
  };

  const buttonContents = (
    <>
      Send Message
      <img src={airplane} alt="paper airplane" style={{ marginLeft: '1em' }} />
    </>
  );

  const sendDisabled = () =>
    name.length === 0 ||
    message.length === 0 ||
    emailHelper.length !== 0 ||
    phoneHelper.length !== 0;

  return (
    <Grid container direction="row">
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{
          marginBottom: matchesLG ? '5em' : 0,
          marginTop: matchesMD ? '1em' : matchesLG ? '5em' : 0,
        }}
        lg={4}
        xl={3}
      >
        <Grid item>
          <Grid item container direction="column">
            <Grid item>
              <Typography
                variant="h2"
                align={matchesLG ? 'center' : undefined}
                style={{ lineHeight: 1 }}
              >
                Contact Us
              </Typography>
              <Typography
                variant="body1"
                align={matchesLG ? 'center' : undefined}
                style={{ color: theme.palette.common.blue }}
              >
                We&apos;re waiting.
              </Typography>
            </Grid>
            <Grid item container style={{ marginTop: '2em' }}>
              <Grid item>
                <img
                  src={phoneIcon}
                  alt="phone"
                  style={{ marginRight: '0.5em', verticalAlign: 'bottom' }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: '1rem' }}
                >
                  <a
                    href="tel:5555555555"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    (555) 555-5555
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: '2em' }}>
              <Grid item>
                <img
                  src={emailIcon}
                  alt="envelope"
                  style={{ marginRight: '0.5em', verticalAlign: 'bottom' }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: '1rem' }}
                >
                  <a
                    href="mailto:zachary@gmail.com"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    zachary@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
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
            </Grid>
            <Grid item style={{ maxWidth: '20em' }}>
              <TextField
                id="message"
                InputProps={{ disableUnderline: true }}
                className={classes.message}
                value={message}
                variant="standard"
                onChange={(event) => setMessage(event.target.value)}
                rows={10}
                fullWidth
                multiline
              />
            </Grid>
            <Grid
              item
              container
              justifyContent="center"
              style={{ marginTop: '2em' }}
            >
              <Button
                disabled={sendDisabled()}
                variant="contained"
                className={classes.sendButton}
                onClick={() => setOpen(true)}
              >
                {buttonContents}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        open={open}
        fullScreen={matchesSM}
        onClose={() => setOpen(false)}
        style={{ zIndex: 1302 }}
        PaperProps={{
          style: {
            padding: matchesSM
              ? '1em 0'
              : matchesMD
              ? '2em 5em'
              : matchesLG
              ? '3em 10em'
              : '4em 15em',
          },
        }}
      >
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" align="center" gutterBottom>
                Confirm Message
              </Typography>
            </Grid>
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
                onChange={(event) => setMessage(event.target.value)}
                rows={10}
                fullWidth
                multiline
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction={matchesSM ? 'column' : 'row'}
            style={{ marginTop: '2em' }}
            alignItems="center"
          >
            <Grid item>
              <Button
                color="primary"
                onClick={() => setOpen(false)}
                style={{ fontWeight: 300 }}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                disabled={sendDisabled()}
                variant="contained"
                className={classes.sendButton}
                onClick={onConfirm}
              >
                {loading ? <CircularProgress size={30} /> : buttonContents}
              </Button>
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
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.background}
        alignItems="center"
        justifyContent={matchesMD ? 'center' : undefined}
        lg={8}
        xl={9}
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : '3em',
            textAlign: matchesMD ? 'center' : 'inherit',
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography align={matchesMD ? 'center' : undefined} variant="h2">
                Simple Software.
                <br />
                Revolutionary Results.
              </Typography>
              <Typography
                align={matchesMD ? 'center' : undefined}
                variant="subtitle2"
                style={{ fontSize: '1.5rem' }}
              >
                Take advantage of the 21st Century.
              </Typography>
              <Grid
                container
                item
                justifyContent={matchesMD ? 'center' : undefined}
              >
                <Button
                  variant="outlined"
                  className={classes.learnButton}
                  onClick={() => setValue(2)}
                  component={Link}
                  to="/revolution"
                >
                  <span style={{ marginRight: 5 }}>Learn More</span>
                  <ButtonArrow
                    width={10}
                    height={10}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            className={classes.estimateButton}
            onClick={() => setValue(5)}
            component={Link}
            to="/estimate"
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

Contact.propTypes = {
  setValue: PropTypes.func.isRequired,
};

export default Contact;
