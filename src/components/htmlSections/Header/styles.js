import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

export const HeaderWrapper = withStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '15rem',
    paddingBottom: '2rem',
    background: '#343638',
    [theme.breakpoints.down(1280)]: {
      paddingLeft: '1rem',
    },
  },
}))(Box);
