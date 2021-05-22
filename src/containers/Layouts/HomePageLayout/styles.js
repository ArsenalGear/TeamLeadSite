import { withStyles } from '@material-ui/core/styles';
import { Avatar, Box, Grid } from '@material-ui/core';

export const HomePageLayoutWrapper = withStyles(theme => ({
  root: {
    position: 'relative',
    width: '100%',
    maxWidth: 1170,
    margin: '0 auto',
    background: 'white',
    [theme.breakpoints.up(1920)]: {},
  },
}))(Grid);

export const AvatarBlock = withStyles(theme => ({
  root: {
    width: '10rem',
    height: '10rem',
    margin: '2rem auto',
    border: '3px solid #000',
    [theme.breakpoints.up(1920)]: {},
  },
}))(Avatar);

export const Info = withStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up(1920)]: {},
  },
}))(Box);
