import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    width: '100%',
  },
  nav: {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 1030,
    padding: '5px 0',
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.darkGrey,
  },
  navList: {
    display: 'flex',
  },
  logo: {
    animation: 'moving 20s infinite linear',
  },
  socialLink: {
    margin: '1rem 2rem',
    color: theme.palette.secondary.main,
    fontSize: '2.5rem',
  },
}));

export const HeaderBody = withStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: '1140px',
    textAlign: 'center',
    [theme.breakpoints.down(1280)]: {},
  },
}))(Box);

export const SocialBlock = withStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down(1280)]: {},
  },
}))(Box);
