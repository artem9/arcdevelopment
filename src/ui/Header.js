import React, { useState, useEffect, useMemo } from 'react';
import { PropTypes } from 'prop-types';
import { event as gaEvent } from 'nextjs-google-analytics';

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Toolbar from '@mui/material/Toolbar';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import useMediaQuery from '@mui/material/useMediaQuery';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';

import Link from '../Link';

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles()((theme) => ({
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px',
    height: '45px',
    width: '140px',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerIcon: {
    height: '50px',
    width: '50px',
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.7,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItemSelected: {
    '& .MuiListItemText-root': {
      opacity: 1,
    },
  },
  logo: {
    height: '7em',
    textTransform: 'none',
    [theme.breakpoints.down('md')]: {
      height: '6em',
    },
    [theme.breakpoints.down('sm')]: {
      height: '5.5em',
    },
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: 'white',
    borderRadius: '0px',
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '2em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '1.5em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.25em',
    },
  },
}));

function Header(props) {
  const { value, selectedIndex, setValue, setSelectedIndex } = props;
  const { classes } = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const iOS =
    typeof navigator !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (e, index) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const menuOptions = useMemo(
    () => [
      { name: 'Services', link: '/services', activeIndex: 1, selectedIndex: 0 },
      {
        name: 'Custom Software Development',
        link: '/customsoftware',
        activeIndex: 1,
        selectedIndex: 1,
      },
      {
        name: 'iOS/Android App Development',
        link: '/mobileapps',
        activeIndex: 1,
        selectedIndex: 2,
      },
      {
        name: 'Website Development',
        link: '/websites',
        activeIndex: 1,
        selectedIndex: 3,
      },
    ],
    []
  );

  const routes = useMemo(
    () => [
      { name: 'Home', link: '/', activeIndex: 0 },
      {
        name: 'Services',
        link: '/services',
        activeIndex: 1,
        ariaOwns: anchorEl ? 'simple-menu' : undefined,
        ariaPopup: anchorEl ? 'true' : undefined,
        mouseOver: (event) => handleClick(event),
      },
      { name: 'The Revolution', link: '/revolution', activeIndex: 2 },
      { name: 'About Us', link: '/about', activeIndex: 3 },
      { name: 'Contact Us', link: '/contact', activeIndex: 4 },
    ],
    [anchorEl]
  );

  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        case '/estimate':
          if (value !== 5) {
            setValue(5);
          }
          break;
        default:
          break;
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, selectedIndex, menuOptions, routes, props]);

  const tabs = (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
        textColor="inherit"
      >
        {routes.map((route) => (
          <Tab
            aria-owns={route.ariaOwns}
            aris-haspopup={route.ariaPopup}
            key={route.name}
            className={classes.tab}
            label={route.name}
            onMouseOver={route.mouseOver}
            component={Link}
            href={route.link}
          />
        ))}
      </Tabs>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        component={Link}
        href="/estimate"
        onClick={() => {
          setValue(5);
          gaEvent('open_estimate', {
            browser_type: matchesSM ? 'mobile' : 'desktop',
            category: 'estimate',
            from_page: window.location.pathname,
          });
        }}
      >
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        classes={{ paper: classes.menu }}
        style={{ zIndex: 1302 }}
        elevation={0}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        keepMounted
      >
        {menuOptions.map((option, index) => (
          <MenuItem
            key={option.name}
            component={Link}
            href={option.link}
            classes={{ root: classes.menuItem }}
            onClick={(event) => {
              handleMenuItemClick(event, index);
              setValue(1);
              handleClose();
            }}
            selected={index === selectedIndex && value === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route) => (
            <ListItemButton
              divider
              key={route.name}
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
              }}
              selected={value === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
              component={Link}
              href={route.link}
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                {route.name}
              </ListItemText>
            </ListItemButton>
          ))}
          <ListItemButton
            divider
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
              gaEvent('open_estimate', {
                browser_type: 'mobile',
                category: 'estimate',
                from_page: window.location.pathname,
              });
            }}
            selected={value === 5}
            classes={{
              root: classes.drawerItemEstimate,
              selected: classes.drawerItemSelected,
            }}
            component={Link}
            href="/estimate"
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Free Estimate
            </ListItemText>
          </ListItemButton>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar disableGutters>
            <Button
              component={Link}
              href="/"
              className={classes.logoContainer}
              onClick={() => setValue(0)}
              disableRipple
            >
              <svg
                className={classes.logo}
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 480 139"
              >
                <style>{`.st0{fill:none}.st1{fill:#fff}.st2{font-family:Raleway;font-weight:100;}.st6{fill:none;stroke:#000;stroke-width:3;stroke-miterlimit:10}`}</style>
                <path d="M448.07-1l-9.62 17.24-8.36 14.96L369.93 139H-1V-1z" />
                <path className="st0" d="M-1 139h479.92v.01H-1z" />
                <text
                  transform="translate(261.994 65.233)"
                  className="st1 st2"
                  fontSize="57"
                >
                  Arc
                </text>
                <text
                  transform="translate(17.692 112.015)"
                  className="st1 st2"
                  fontSize="54"
                >
                  Development
                </text>
                <path
                  className="st0"
                  d="M382.44 116.43l47.65-85.23 8.36-14.96M369.83 139l-.01.01L362 153"
                />
                <path
                  d="M438.76 15.76l-56.42 100.91c-12.52-10.83-20.45-26.82-20.45-44.67 0-32.58 26.42-59 59-59 6.23 0 12.24.97 17.87 2.76z"
                  fill="#0b72b9"
                />
                <path d="M479.89 72c0 32.58-26.42 59-59 59-14.73 0-28.21-5.4-38.55-14.33l56.42-100.91c23.85 7.57 41.13 29.89 41.13 56.24z" />
                <g id="Group_186" transform="translate(30.153 11.413)">
                  <g id="Group_185">
                    <g id="Words">
                      <path
                        id="Path_59"
                        className="st1"
                        d="M405.05 14.4l-.09 80.38-7.67-.01.06-52.25-29.4 52.21-7.94-.01 45.04-80.32z"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st0"
                  d="M457-17l-8.93 16-9.62 17.24-8.36 14.96L369.93 139l-.01.01L361 155"
                />
              </svg>
            </Button>
            <Hidden lgDown>{tabs}</Hidden>
            <Hidden lgUp>{drawer}</Hidden>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}

Header.propTypes = {
  selectedIndex: PropTypes.number.isRequired,
  setSelectedIndex: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default Header;
