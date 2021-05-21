import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

export const HomePageLayoutWrapper = withStyles(theme => ({
  root: {
    position: 'relative',
    minHeight: '100vh',
    width: '100%',
    maxWidth: 1140,
    background: 'grey',
    [theme.breakpoints.up(1920)]: {},
  },
}))(Box);
