import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

export const ButtonWrapper = withStyles(theme => ({
  root: {
    '&.description': {},
  },
}))(Button);
