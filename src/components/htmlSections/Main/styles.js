import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

export const MainWrapper = withStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    // background: 'red',
    [theme.breakpoints.up(1920)]: {},
  },
}))(Box);
