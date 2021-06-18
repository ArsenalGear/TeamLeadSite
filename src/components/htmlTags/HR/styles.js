import { withStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';

export const HRWrapper = withStyles(theme => ({
  root: {
    margin: '2rem auto',
    border: '.1rem solid #61dbfb',
    backgroundColor: '#61dbfb',
  },
}))(Divider);
