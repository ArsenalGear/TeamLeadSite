import { withStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';

export const HomePageLayoutWrapper = withStyles(theme => ({
  root: {
    position: 'relative',
    width: '100%',
    maxWidth: 1170,
    margin: '0 auto',
    background: '#f2f4f5',
    [theme.breakpoints.down(1280)]: {
      margin: 0,
    },
  },
}))(Grid);

export const Info = withStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '0.75rem',
    [theme.breakpoints.down(1280)]: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  },
}))(Box);
