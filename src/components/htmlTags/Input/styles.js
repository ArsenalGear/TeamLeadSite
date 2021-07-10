import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

export const TextFieldWrapper = withStyles(theme => ({
  root: {
    '& .MuiInputBase-root': {
      color: 'white',
    },
  },
}))(TextField);
