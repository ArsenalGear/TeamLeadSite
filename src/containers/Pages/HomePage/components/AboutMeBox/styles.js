import { withStyles } from '@material-ui/core/styles';
import { Avatar, Box, Grid } from '@material-ui/core';

export const AboutMeWrapper = withStyles(theme => ({
  root: {
    marginBottom: '1rem',
    [theme.breakpoints.up(1920)]: {},
  },
}))(Grid);

export const ArrowBox = withStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    margin: '4rem 0 0 0',
    [theme.breakpoints.up(1920)]: {},
  },
}))(Box);

export const AvatarWrapper = withStyles(theme => ({
  root: {
    width: '18rem',
    height: '18rem',
    [theme.breakpoints.down(1280)]: {
      margin: '2rem auto',
    },
  },
}))(Avatar);

export const IconDown = withStyles(theme => ({
  root: {
    margin: '1rem 2rem',
    fontSize: '2.5rem',
    cursor: 'pointer',
    color: theme.palette.primary.blue,
  },
}))(Box);
