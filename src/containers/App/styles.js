import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

export const SiteLayout = withStyles(theme => ({
  root: {
    background: 'black',
    [theme.breakpoints.down(1280)]: {
      padding: '0 1rem',
    },
  },
}))(Box);
