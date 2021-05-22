import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

export const InfoBlockWrapper = withStyles(theme => ({
  root: {
    marginBottom: '1.5rem',
    paddingLeft: '1.5rem',
    [theme.breakpoints.up(1920)]: {},
  },
}))(Box);

export const InfoCardBlock = withStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'nowrap',
    marginBottom: '1rem',
    paddingRight: '0.5rem',
    [theme.breakpoints.up(1920)]: {},
  },
}))(Box);

export const InfoIconBlock = withStyles(theme => ({
  root: {
    display: 'flex',
    width: '3rem',
    height: '3rem',
    [theme.breakpoints.up(1920)]: {},
  },
}))(Box);

export const InfoDataBlock = withStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up(1920)]: {},
  },
}))(Box);
