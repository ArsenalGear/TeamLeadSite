import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

export const HomePageLayoutWrapper = withStyles(theme => ({
  root: {
    position: 'relative',
    width: '100%',
    maxWidth: '100%',
    margin: '0 auto',
    background: '#f2f4f5',
    [theme.breakpoints.down(1280)]: {
      margin: 0,
    },
  },
}))(Grid);
