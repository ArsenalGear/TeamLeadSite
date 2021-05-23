import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

export const HeaderWrapper = withStyles(theme => ({
  root: {
    '&.user-name': {
      color: theme.palette.secondary.main,
    },
  },
}))(Typography);
