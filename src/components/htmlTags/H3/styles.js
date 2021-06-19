import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

export const HeaderWrapper = withStyles(theme => ({
  root: {
    color: theme.palette.secondary.main,
    '&.noWrap': { whiteSpace: 'nowrap' },
    [theme.breakpoints.down(1280)]: {
      fontSize: '18px',
    },
  },
}))(Typography);
