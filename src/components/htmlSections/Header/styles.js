import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

export const HeaderWrapper = withStyles(theme => ({
  root: {
    height: '200px',
    width: '100%',
    background: 'green',
    [theme.breakpoints.up(1920)]: {},
  },
}))(Box);
