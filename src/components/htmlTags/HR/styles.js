import { withStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';

export const HRWrapper = withStyles(theme => ({
  root: {
    height: 3,
    marginBottom: '1rem',
    background: 'black',
  },
}))(Divider);
