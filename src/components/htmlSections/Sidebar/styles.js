import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

export const SidebarWrapper = withStyles(theme => ({
  root: {
    position: 'absolute',
    left: 10,
    top: 0,
    height: '100vh',
    width: '200px',
    background: 'yellow',
    [theme.breakpoints.up(1920)]: {},
  },
}))(Box);
