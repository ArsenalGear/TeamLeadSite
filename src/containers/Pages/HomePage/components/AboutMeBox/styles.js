import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

export const AboutMeWrapper = withStyles(theme => ({
  root: {
    marginBottom: '1rem',
    [theme.breakpoints.up(1920)]: {},
  },
}))(Box);
