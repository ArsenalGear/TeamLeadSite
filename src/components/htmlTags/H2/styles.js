import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

export const HeaderWrapper = withStyles(theme => ({
  root: {
    '&.user-experience': {
      color: theme.palette.secondary.main,
    },
  },
}))(Typography);
