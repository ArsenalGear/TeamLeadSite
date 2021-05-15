import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

export const BaseWrapper = withStyles(theme => ({
  root: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    position: 'relative',
    [theme.breakpoints.up(1920)]: {},
  },
}))(Box);
