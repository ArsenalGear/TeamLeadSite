import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

export const HeaderWrapper = withStyles(theme => ({
  root: {
    fontFamily: props => (props.fontType === 'PermanentMarker' ? 'PermanentMarker' : 'Roboto'),
    color: theme.palette.secondary.main,
  },
}))(Typography);
