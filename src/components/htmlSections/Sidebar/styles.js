import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

export const SidebarWrapper = withStyles(theme => ({
  root: {
    position: 'absolute',
    left: 10,
    top: 0,
    width: '20rem',
    height: '100%',
    background: theme.palette.secondary.main,
    [theme.breakpoints.down(1280)]: {
      position: 'relative',
      left: 0,
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'start',
      width: '100%',
      height: 'inherit',
    },
  },
}))(Box);
