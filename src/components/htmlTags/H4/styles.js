import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

export const HeaderWrapper = withStyles(theme => ({
  root: {
    '&.skills': {
      marginRight: '1rem',
    },
  },
}))(Typography);
