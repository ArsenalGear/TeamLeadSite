import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

export const MainWrapper = withStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down(1280)]: {
      paddingLeft: '1rem'
    },
  },
}))(Box);
