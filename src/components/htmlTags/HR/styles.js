import { withStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';

export const HRWrapper = withStyles(theme => ({
  root: {
    margin: '2rem auto 3rem auto',
    border: '.1rem solid',
    borderColor: theme.palette.primary.blue,
    backgroundColor: theme.palette.primary.blue,
  },
}))(Divider);
